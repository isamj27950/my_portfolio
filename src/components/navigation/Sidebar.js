import Link from 'next/link';
import React from 'react'


export default function Sidebar() {
  return (
    <div className=" hidden xl:block xl:sticky top:0 left:0  ">
      <div className="drawer-side">
        <ul className="menu p-6 w-40 h-100%  bg-gray-800 rounded-2xl text-white text-xl">
          <li className="hover:bg-[#ff014f] rounded-2xl ">
            <a  href="/about">About</a>
          </li>
          <li className="hover:bg-[#ff014f] rounded-2xl ">
            <a href="/resume">Resume</a>
          </li>
          <li className="hover:bg-[#ff014f] rounded-2xl">
            <a href="/work">Work</a>
          </li>
          <li className="hover:bg-[#ff014f] rounded-2xl">
            <a href="/blog">Blog</a>
          </li>
          <li className="hover:bg-[#ff014f] rounded-2xl">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
