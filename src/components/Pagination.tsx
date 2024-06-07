import { BlogPost } from '@/models/BlogPost';
import Link from 'next/link'
import React from 'react'

interface ServerProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
}

export default function PaginationPage({ posts, currentPage, totalPages }: ServerProps) {

  return (
    <div className="text-center">
      <Link href={`/posts?limit=6&skip=${currentPage - 1}`} className="bg-black hover:bg-slate-800 text-white px-4 py-2 rounded-md mr-2">PREV </Link>
      <Link href={`/posts?limit=6&skip=6`} className="bg-black hover:bg-slate-800 text-white px-4 py-2 rounded-md mr-2"> NEXT</Link>
    </div>
  )
}


