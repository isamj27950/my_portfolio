import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="hidden xl:block xl:sticky top-0 left-0">
      <div className="drawer-side">
        <ul className="menu p-2  w-44 bg-gray-800 rounded-2xl items-center text-white text-xl text-center">
          <SidebarItem href="/about"  text="About"  />
          <SidebarItem href="/resume" text="Resume" />
          <SidebarItem href="/work" text="Work" />
          <SidebarItem href="/blog" text="Blog" />
          <SidebarItem href="/contact" text="Contact" />
        </ul>
      </div>
    </div>
  );
}

function SidebarItem({ href, text }) {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <li
      className={`w-full rounded-2xl p-5 ${
        isActive ? "bg-[#ff014f]" : ""
      }`}
    >
      <Link href={href}>
        <p>{text}</p>
      </Link>
    </li>
  );
}
