
import { delay } from "@/lib/utils";
import { BlogPostsResponse } from "@/models/BlogPost";
import { bookImages } from "@/models/image";

import Image from "next/image";
import Link from "next/link";


interface BlogPost {
  id: number;
  title: string;
  imageUrl: string;
}




// TODO - Server-side rendering
export default async function BlogPage() {

  const response = await fetch(`https://dummyjson.com/posts?limit=14`); // * Fetching posts from a dummy API
  const { posts }: BlogPostsResponse = await response.json();

  //await delay(1000); // * Simulate network delay


  posts.forEach((post, index) => {
    post.imageUrl = bookImages[index];
  }
  );



  return (
    <div className="min-h-[73vh] max-w-[80ch] m-auto space-y-1">
      <h1 className="text-3xl text-left mb-8 font-bold">Last bullets...  🖋</h1>
      <section className="grid-cols-1 sm:grid-cols-2 grid xl:grid-cols-3 ">
        {posts.map(({ id, title, imageUrl }) => (
          <article key={title} className=" bg-emerald-50 mr-2 mb-1">
            <div className="h-[200px] relative ">
              <Image src={imageUrl} alt={title} fill className="absolute object-cover" sizes="100vw" />
            </div>
            <h2 className="pt-2  hover:text-slate-600 ">
              <Link href={`/posts/${id}`} className="text-sm ">
                {
                  title.length > 20 ? title.slice(0, 33) + "..." : title // * Truncate title if it's too long
                }
              </Link>
            </h2>
            <h6 className="text-xs pt-2 pb-4 pl-2">created at: {
              new Date().toLocaleString()
            } </h6>
          </article>
        ))}
      </section>
    </div>
  );
}

// * NOT SUPPORTED IN APP/
/*
export async function getServerSideProps(context: any) {
  const { page = 1 } = context.query;
  const limit = 10;

  // Realiza una solicitud a tu API para obtener los posts
  const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${limit}`);
  const data = await res.json();

  return {
    props: {
      posts: data.posts,
      currentPage: parseInt(page, 10),
      totalPages: data.totalPages,
    },
  };
}
  */