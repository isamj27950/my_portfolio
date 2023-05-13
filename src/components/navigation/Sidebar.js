import Link from 'next/link';
import React from 'react'


export default function Sidebar() {
  return (
    <div className=" hidden fixed top:0 left:0  xl:block ">
      <div className="drawer-side">
        <ul className="menu p-6 w-40   bg-red-800 text-white">
            <Link href="/about">
                <li className="hover:bg-[#ff014f] ">
                <a>About</a>
                </li>
            </Link>
            <Link href="/resume"> 
                <li className="hover:bg-[#ff014f] ">
                <a>Resume</a>
                </li>
            </Link>
            <Link href="/work"> 
                <li className="hover:bg-[#ff014f]">
                    <a>Work</a>
                        </li>
            </Link>
            <Link href="/blog"> 
                <li className="hover:bg-[#ff014f]">
                <a>Blog</a>
                </li>
            </Link>
            <Link href="/contact"> 
                <li className="hover:bg-[#ff014f]">
                    <a>Contact</a>
                </li>
            </Link>
        </ul>
      </div>
    </div>
  );
}
