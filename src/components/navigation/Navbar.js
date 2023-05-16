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
    <div className="text-white text-xl  font-normal ">
      <div className="md:mx-[10%] md:py-8 ">
        <ul className="flex space-x-2 md:justify-start   md:p-2 w-full   drop-shadow-xl rounded-xl fixed bottom-0 z-10 bg-gray-800 md:relative xl:hidden">
          <Link href="/about">
            <li
              className={`rounded-2xl py-4 px-2 md:px-9 text-lg md:text-xl text-center ${
                activeTab === "about" ? "bg-[#ff014f]" : ""
              }`}
              onClick={() => handleTabClick("about")}
            >
              About
            </li>
          </Link>
          <Link href="/resume">
            <li
              className={`rounded-2xl py-4 px-2 md:px-9 text-lg md:text-xl text-center ${
                activeTab === "resume" ? "bg-[#ff014f]" : ""
              }`}
              onClick={() => handleTabClick("resume")}
            >
              Resume
            </li>
          </Link>
          <Link href="/work">
            <li
              className={`rounded-2xl py-4 px-2 md:px-9 text-lg md:text-xl text-center${
                activeTab === "work" ? "bg-[#ff014f]" : ""
              }`}
              onClick={() => handleTabClick("work")}
            >
              Work
            </li>
          </Link>
          <Link href="/blog">
            <li
              className={`rounded-2xl py-4 px-2 md:px-9 text-lg md:text-xl text-center ${
                activeTab === "blog" ? "bg-[#ff014f]" : ""
              }`}
              onClick={() => handleTabClick("blog")}
            >
              Blog
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`rounded-2xl py-4 px-4 md:px-1 text-lg md:text-xl text-center ${
                activeTab === "contact" ? "bg-[#ff014f]" : ""
              }`}
              onClick={() => handleTabClick("contact")}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
