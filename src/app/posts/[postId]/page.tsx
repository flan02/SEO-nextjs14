import { delay } from "@/lib/utils";
import { BlogPost } from "@/models/BlogPost";
import { Metadata } from "next";
import { cache } from "react";

interface BlogPostPageProps {
  params: { postId: string };
}

// * cache is a function that caches the result of the function it wraps. Manually deduplicate if not using FETCH
// const getPost = cache(async (postId: string) => {
// Try to imagine that you are using mongodb with mongoose schema
//const response = await Post.findOne({ postId })
//return response.json();
// });

export async function generateMetadata({ params: { postId } }: BlogPostPageProps): Promise<Metadata> {
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

export default async function BlogPostPage({
  params: { postId },
}: BlogPostPageProps) {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  console.log(response);
  const { title, body }: BlogPost = await response.json();

  await delay(1000); // ** Simulate network delay

  return (
    <article className="max-w-prose m-auto space-y-5">
      <h1 className="text-3xl text-center font-bold">{title}</h1>
      <p className="text-lg">{body}</p>
    </article>
  );
}