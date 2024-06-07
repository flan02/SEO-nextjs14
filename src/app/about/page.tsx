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
      <h1 className="text-center font-bold text-lg">About Bullet Blog created by Dan Chanivet</h1>
      <p className="underline">
        Welcome to Bullet Blog, where in bite a bullet times this blog gives you calm.
      </p>
      <p>
        Bullet Blog was created with the mission to provide a sanctuary of peace and tranquility in an increasingly fast-paced and stressful world. Our blog aims to offer readers insightful content, practical advice, and uplifting stories that help navigate through tough times with a sense of calm and resilience.
      </p>
      <p>
        Whether you are looking for tips on stress management, inspiring personal stories, or simply a moment of peace in your busy day, Bullet Blog is here to support you. We believe that even in the most challenging moments, finding calm and clarity can help us persevere and thrive.
      </p>
      <p>
        Thank you for visiting Bullet Blog. We hope you find our content soothing and valuable as you navigate through life’s challenges. Stay calm and carry on!
      </p>

      <br />
      <div className="text-center flex justify-center">
        <p className="mt-4">Author: &nbsp;&nbsp;&nbsp;</p>
        <Image src={yo} alt="logo" width={60} height={60} className="rounded-full" priority />
      </div>
      <p className="text-center text-slate-800 font-bold"> &ldquo; In bite a bullet times this blog gives you calm &rdquo;</p>
      <br /><br />
      <div className="text-center">
        <Link href="/" className="text-slate-900 underline hover:text-slate-600">
          return home
        </Link>
      </div>
    </div>
  );
}