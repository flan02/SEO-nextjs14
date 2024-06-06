import Link from "next/link";
import yo from "@/assets/yo.jpg";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
}

// ? It has priority over the metadata in the layout.tsx file
/*
export const metadata: Metadata = {
  title: {
    absolute: "About"
  }
}
*/

export default function AboutPage() {
  return (
    <div className="min-h-[73vh] max-w-prose m-auto space-y-3">
      <h1 className="text-3xl text-center font-bold ">About this Blog</h1>
      <p>
        Welcome to the blog where words sometimes cooperate and form
        sentences... sometimes. I&apos;m your guide through the jungle of
        jumbled thoughts, the maestro of misplaced commas, the captain of
        creative chaos. If you&apos;re looking for perfectly crafted prose,
        well, you might want to keep looking. But if you&apos;re up for a
        rollercoaster ride through the realm of semi-organized randomness,
        buckle up and join me on this linguistic adventure! Disclaimer: Expect
        puns, occasional wit (or attempted wit), and a whole lot of trial and
        error. Stick around, and together, we&apos;ll navigate this whirlwind of
        words!
      </p>
      <br />
      <div className="text-center flex justify-center">
        <p className="mt-4">Author: &nbsp;&nbsp;&nbsp;</p>
        <Image src={yo} alt="logo" width={60} height={60} className="rounded-full" priority />
      </div>
      <br /><br />
      <div className="text-center">
        <Link href="/" className="text-slate-900 underline hover:text-slate-600">
          return home
        </Link>
      </div>
    </div>
  );
}