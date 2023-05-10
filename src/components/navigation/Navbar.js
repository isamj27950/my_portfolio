import React from 'react';
import Link from 'next/link';




export default function Navbar() {
  return (
    <div className="bg-black sticky botton-0 left-0  text-white text-lg font-normal ">
      

      <ul className="flex space-x-3 ">
        <Link href="/about">
          <li className="">About</li>
        </Link>
        <Link href="/resume">
          <li className="">Resume</li>
        </Link>
        <Link href="/work">
          <li>Work</li>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

