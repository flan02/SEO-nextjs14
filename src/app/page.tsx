import { delay } from "@/lib/utils";
import { BlogPostsResponse } from "@/models/BlogPost";
import Link from "next/link";

// TODO - Server-side rendering
export default async function BlogPage() {
  const response = await fetch("https://dummyjson.com/posts?limit=50"); // * Fetching posts from a dummy API
  const { posts }: BlogPostsResponse = await response.json();

  //await delay(1000); // * Simulate network delay

  return (
    <div className="min-h-[73vh] max-w-prose m-auto space-y-5">
      <h1 className="text-3xl text-center mb-3 font-bold">Posts</h1>
      {posts.map(({ id, title }) => (
        <article key={title}>
          <h2>
            <Link href={`/posts/${id}`} className="text-lg font-bold">
              {title}
            </Link>
          </h2>
        </article>
      ))}
    </div>
  );
}
