import React from 'react';
import Link from 'next/link';




export default function Navbar() {
  return (
    <div className="   text-white text-xl font-normal w-full h-10   ">
      <ul className="flex justify-center w-full my-4 rounded-2xl fixed bottom-0 z-10 md:relative xl:hidden">
        <Link href="/about">
          <li className="hover:bg-[#ff014f] rounded-2xl py-1 px-4 ">About</li>
        </Link>
        <Link href="/resume">
          <li className="hover:bg-[#ff014f] rounded-2xl py-1 px-4">Resume</li>
        </Link>
        <Link href="/work">
          <li className="hover:bg-[#ff014f] rounded-2xl py-1 px-4">Work</li>
        </Link>
        <Link href="/blog">
          <li className="hover:bg-[#ff014f] rounded-2xl py-1 px-4">Blog</li>
        </Link>
        <Link href="/contact">
          <li className="hover:bg-[#ff014f] rounded-2xl py-1 px-4">Contact</li>
        </Link>
      </ul>
    </div>
  );
}

