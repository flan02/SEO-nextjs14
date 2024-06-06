import { BlogPostsResponse } from "@/models/BlogPost";
import { MetadataRoute } from "next";

//? http://localhost:3000/sitemap.xml
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`https://dummyjson.com/posts`);
  const { posts }: BlogPostsResponse = await response.json();

  const postEntries: MetadataRoute.Sitemap = posts.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
    lastModified: new Date().toISOString(), // new Date(post.updatedAt).toISOString(),
    changeFrequency: "daily",
    priority: 0.7
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`
    },
    ...postEntries
  ]
}
