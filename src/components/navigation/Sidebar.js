import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="hidden xl:block xl:sticky top-0 left-0">
      <div className="drawer-side">
        <ul className="menu p-6 w-40 h-100% bg-gray-800 rounded-2xl text-white text-xl">
          <SidebarItem href="/about" text="About" />
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
      className={`hover:bg-[#ff014f] rounded-2xl ${
        isActive ? "bg-[#ff014f]" : ""
      }`}
    >
      <Link href={href}>
        <p>{text}</p>
      </Link>
    </li>
  );
}
