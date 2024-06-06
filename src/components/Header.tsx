import logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="shadow p-3">
      <Link
        href="/"
        className="flex items-center gap-3 justify-center w-max m-auto"
      >
        <Image src={logo} alt="logo" width={60} height={60} priority />
        <div className="flex flex-col text-3xl text-slate-700 font-semibold">
          <span>
            Bullet
          </span>
          <span>
            Blog
          </span>
        </div>
      </Link>
    </div>
  );
}