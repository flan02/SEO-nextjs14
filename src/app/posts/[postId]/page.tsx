import { delay } from "@/lib/utils";
import { BlogPost } from "@/models/BlogPost";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface BlogPostPageProps {
  params: { postId: string };
}

// TODO This server function allows you to generate static pages at build time instead dinamic pages at runtime
// $ (SSG) prerendered as static HTML (uses getStaticProps)
export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: { posts: BlogPost[] } = await response.json();

  return posts.map(({ id }) => id); // * Return an array of post IDs that will be cached and used to generate static pages (shorthand)
  //return posts.map(id => ({ params: { id: id.toString() } })); // * Return an array of post IDs that will be cached and used to generate static pages
  //return posts.map(({ id }) => id).slice(0, 10); // ? slice(0, 10) will only generate static pages for the first 10 posts (In case you have hundreds/thousands of posts)
}

// * cache is a function that caches the result of the function it wraps. Manually deduplicate if not using FETCH
// const getPost = cache(async (postId: string) => {
// Try to imagine that you are using mongodb with mongoose schema
//const response = await Post.findOne({ postId })
//return response.json();
// });

export async function generateMetadata({ params: { postId } }: BlogPostPageProps): Promise<Metadata> { // * Server generate metadata
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const { title, body, imageUrl }: BlogPost = await response.json();

  return {
    title: {
      default: title,
      template: "%s | Bullet Blog",
    },
    description: body,
    openGraph: {
      images: [{
        url: imageUrl // ** Replace with your image URL here (post thumbnail)
        // this opengraph will override by the one in the layout.tsx
      }]
    },
    twitter: {
      site: "@bulletblog",
      card: "summary_large_image",
    },
  };
}


export default async function BlogPostPage({ params: { postId } }: BlogPostPageProps) {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  //console.log(response);
  const { title, body }: BlogPost = await response.json();
  if (response.status === 404) {
    notFound();
  }
  //await delay(1000); // ** Simulate network delay

  return (
    <article className="min-h-[70vh] max-w-prose m-auto space-y-5">
      <h1 className="text-3xl text-center font-bold">{title}</h1>
      <p className="text-lg">{body}</p>
    </article>
  );
}