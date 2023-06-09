import React from 'react'
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import CardsIconHero from './CardsIconHero';

export default function CardHero() {
  return (
    <div className="bg-gray-800 w-full rounded-2xl xl:flex md:-mt-24 xl:-mt-48">
      <div className="  mx-auto   ">
        {/*imagelogo et presentation*/}
        <img
          src="images/LOGO_initiale-1.png"
          className="w-48 h-48 bg-pink-200 rounded-xl border-gray-800 border-8 drop-shadow-2xl -mt-28 absolute mx-[20%]  md:mx-[40%] xl:-mx-[1%] "
          alt=" logo du devellopeur"
        />
        <div className='text-center m-2 xl:ml-44' >
          <h1 className="text-white font-semibold text-3xl py-1 pt-24 xl:pt-2 xl:ml-4">
            Mademoiselle Maître-Jean
          </h1>
          <h2 className="text-gray-500 text-xl py-2 ">I am a dev'woman </h2>
          <div className=" ">
            <CardsIconHero />
          </div>
        </div>
      </div>
      {/*infos sur le dev email, phone, location, birtday*/}
      <div className="block justify-center text-start w-1/2 mx-auto px-2 pb-4 border-black my-3 border-t-2 md:flex md:space-x-8   xl:border-l-2 xl:border-t-0  py-8  ">
        <div className="py-2 ">
          <h3 className="uppercase text-gray-500 font-light">Email</h3>
          <p className="text-white">isamj27950@gmail.com</p>
          <h3 className="text-[#878e99] font-normal">Phone</h3>
          <p className="text-white">+0682004416</p>
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
