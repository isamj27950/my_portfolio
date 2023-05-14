import React from 'react';
import Link from 'next/link';




export default function Navbar() {
  return (
    <div className="   text-white text-lg font-normal w-full h-10   ">
      <ul className="flex justify-center space-x-6 w-full fixed bottom-0 z-10 md:relative xl:hidden">
        <Link href="/about">
          <li className="hover:bg-[#ff014f] ">About</li>
        </Link>
        <Link href="/resume">
          <li className="hover:bg-[#ff014f]">Resume</li>
        </Link>
        <Link href="/work">
          <li className="hover:bg-[#ff014f]">Work</li>
        </Link>
        <Link href="/blog">
          <li className="hover:bg-[#ff014f]">Blog</li>
        </Link>
        <Link href="/contact">
          <li className="hover:bg-[#ff014f]">Contact</li>
        </Link>
      </ul>
    </div>
  );
}

