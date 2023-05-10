import React from 'react'
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import CardsIconHero from './CardsIconHero';

export default function CardHero() {
  return (
    <div className="bg-gray-700 rounded-lg mx-1 px-5 text-center  xl:flex ">
      <div className=" text-center w-1/2 ">
        <img
          src="images/LOGO initiales.jpg"
          className="w-20 h-20  rounded-lg  mx-auto -mt-8"
          alt=""
        />
        <h1 className="text-white font-semibold text-3xl py-2 pt-24">
          Mademoiselle Maître-Jean
        </h1>
        <h2 className="text-gray-500 py-2">I am a devellopeuse </h2>
        <div className=" ">
          <CardsIconHero />
        </div>
      
      </div>
      <div className="block justify-center text-start w-1/2 px-2 border-gray-300 border-t-2 xl:border-l-2 xl:border-t-0  xl:flex   ">
        <div className="py-2 ">
          <h3 className="uppercase text-gray-500 font-light">Email</h3>
          <p className="text-white">example@gmail.com</p>
          <h3 className="uppercase text-gray-500 font-light">Phone</h3>
          <p className="text-white">+880123456789</p>
        </div>
        <div className="py-2 ">
          <h3 className="uppercase text-gray-500 font-light">Birthday</h3>
          <p className="text-white">22 juily</p>
          <h3 className="uppercase text-gray-500 font-light">Location</h3>
          <p className="text-white">Vernon,France</p>
        </div>
      </div>
    </div>
  );
}
