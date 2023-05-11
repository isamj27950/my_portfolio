import Link from 'next/link';
import React from 'react'


export default function Sidebar() {
  return (
    <div className="">
      <div className="drawer-side">
        <ul className="menu p-6 w-40   bg-gray-800 text-white">
          <li className="hover:bg-[#ff014f] ">
            <a>About</a>
          </li>
          <li className="hover:bg-[#ff014f] ">
            <a>Resume</a>
          </li>
          <li className="hover:bg-[#ff014f]">
            <a>Work</a>
          </li>
          <li className="hover:bg-[#ff014f]">
            <a>Blog</a>
          </li>
          <li className="hover:bg-[#ff014f]">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
