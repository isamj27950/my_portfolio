import React from 'react'
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function CardsIconHero() {
  return (
    <div>
      <div className=" space-x-2 flex justify-center py-4">
            <button class="btn bg-gray-900 drop-shadow-2xl border-none gap-2">
            <FiFacebook />
            </button>
            <button class="btn bg-gray-900 drop-shadow-2xl border-none gap-2">
            <FiInstagram />
            </button>
            <button class="btn bg-gray-900 drop-shadow-2xl border-none gap-2">
            <FiLinkedin />
            </button>
       </div>
    </div>
  );
}
