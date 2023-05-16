import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();

  useEffect(() => {
    setActiveTab(getActiveTabFromURL());
  }, []);

  const getActiveTabFromURL = () => {
    const path = router.pathname;
    // Modifier les valeurs ci-dessous pour correspondre à vos URL
    if (path === "/about") return "about";
    if (path === "/resume") return "resume";
    if (path === "/work") return "work";
    if (path === "/blog") return "blog";
    if (path === "/contact") return "contact";
    return "";
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-white text-xl font-normal w-full h-16">
      <ul className="flex justify-center w-full my-4 rounded-2xl fixed bottom-0 z-10 bg-gray-800 md:relative xl:hidden">
        <Link href="/about">
          <li
            className={`rounded-2xl py-2 px-4 ${
              activeTab === "about" ? "bg-[#ff014f]" : ""
            }`}
            onClick={() => handleTabClick("about")}
          >
            About
          </li>
        </Link>
        <Link href="/resume">
          <li
            className={`rounded-2xl py-2 px-4 ${
              activeTab === "resume" ? "bg-[#ff014f]" : ""
            }`}
            onClick={() => handleTabClick("resume")}
          >
            Resume
          </li>
        </Link>
        <Link href="/work">
          <li
            className={`rounded-2xl py-2 px-4 ${
              activeTab === "work" ? "bg-[#ff014f]" : ""
            }`}
            onClick={() => handleTabClick("work")}
          >
            Work
          </li>
        </Link>
        <Link href="/blog">
          <li
            className={`rounded-2xl py-2 px-4 ${
              activeTab === "blog" ? "bg-[#ff014f]" : ""
            }`}
            onClick={() => handleTabClick("blog")}
          >
            Blog
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={`rounded-2xl py-2 px-4 ${
              activeTab === "contact" ? "bg-[#ff014f]" : ""
            }`}
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
}
