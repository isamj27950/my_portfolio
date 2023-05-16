import React from 'react'
import { RiCopyrightLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="text-center pt-24  mx-20">
      <div class="avatar">
        <div class="w-12 rounded-full ring ring-black ring-offset-base-100 ring-offset-2 ">
          <img src="images/LOGO initiales.jpg" />
        </div>
      </div>
      <div className="pb-8 pt-8">
        <p className="flex justify-center text-gray-500 ">
          <RiCopyrightLine /> 2023.All rights reserved by Rainbow-Themes.
        </p>
      </div>
    </div>
  );
} 
