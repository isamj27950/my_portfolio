import React from 'react'
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import CardsIconHero from './CardsIconHero';

export default function CardHero() {
  return (
    <div className="bg-gray-700 mx-20 rounded-2xl xl:flex ">
      <div className=" text-center w-1/2 mx-auto xl:flex">
        
        <img
          src="images/LOGO initiales.jpg"
          className="w-36 h-40  rounded-lg  mx-auto -mt-12"
          alt=" logo du devellopeur" />
          <div> 
            <h1 className="text-white font-semibold text-3xl py-2 pt-8 mr-2">
              Mademoiselle Maître-Jean
            </h1>
            <h2 className="text-gray-500 text-xl py-2 ">I am a dev'woman </h2>
            <div className=" ">
            <CardsIconHero />
          </div>  
        </div>
      </div>
      <div className="block justify-center text-start w-1/2 mx-auto px-2 pb-4 border-black my-3 border-t-2 md:flex md:space-x-8   xl:border-l-2 xl:border-t-0  py-8  ">
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
