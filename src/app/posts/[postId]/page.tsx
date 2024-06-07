import ClapButton from "@/components/ClapButton";
import { delay } from "@/lib/utils";
import { BlogPost } from "@/models/BlogPost";
import { bookImages } from "@/models/image";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

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
  let { title, body, imageUrl, reactions }: BlogPost = await response.json();
  if (response.status === 404) {
    notFound();
  }
  //await delay(1000); // ** Simulate network delay
  let index = parseInt(postId) - 1
  imageUrl = bookImages[index]; // * Replace imageUrl with a random image from bookImages array
  return (
    <article className="min-h-[70vh] max-w-prose m-auto space-y-4 bg-emerald-50">
      <h1 className="text-3xl text-center font-bold bg-white">{title}</h1>

      <div className="h-[300px] relative  ">
        <Image src={imageUrl} alt={title} fill className="absolute" sizes={"100vw"} style={{
          objectFit: 'cover'
        }} />
      </div>
      <h6 className="">created at: {
        new Date().toLocaleString()
      }</h6>
      <p className="text-md md:text-lg px-2 ">{body}</p>
      {/* <ClapButton />  button rendered in client-side */}

      <div className="flex justify-center">
        <h3 className="font-bold">{reactions.likes}</h3> &nbsp;
        <FaRegThumbsUp size={20} className="mb-1" /> &nbsp; &nbsp; &nbsp; &nbsp;
        <FaRegThumbsDown size={20} className="mt-1" /> &nbsp;
        <h3 className="font-bold">{reactions.dislikes}</h3>
      </div>



    </article>
  );
}