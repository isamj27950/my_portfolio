import React from 'react'
import { BiCheck } from "react-icons/bi";
import SectionHeroHome from './SectionHeroHome';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import CardAboutMe from '@/components/cards/CardAboutMe';

export default function about() {
  return (
      <div className=' '> 
        <SectionHeroHome />
        <Navbar />
        <div className='bg-gray-400 py-4 mx-20 rounded-xl'>
          <div className="bg-gray-600 rounded-lg mx-1 px-5">
            <img src="images/img_bureau.jpeg" className="bg-cover m-2" alt="" />
            <h3 className="text-[#f9004d] text-lg">
              Visit my portfolio & hire me
            </h3>
            <h2 className="text-[#878e99]">About Me</h2>
            <p className="text-[#878e99]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque voluptatibus earum maxime adipisci sapiente ex expedita at?
              Recusandae modi quae et nihil ullam sapiente vel tempore sed cum
              alias.
            </p>
            <div className="">
              <p className="flex text-[#878e99]">
                <BiCheck />
                Dévellopeuse de solutions
              </p>
              <p className="flex text-[#878e99]">
                <BiCheck /> Dévellopeuse de solutions
              </p>
              <p className="flex text-[#878e99]">
                <BiCheck />
                Dévellopeuse de solutions
              </p>
            </div>
          </div>
          <button className="btn text-[#ff014f] m-auto">Download my CV</button>
          <div>
          <h2 className="text-[#878e99] text-center font-bold text-xl">What I am Doing</h2>
              <div className=''>
                <CardAboutMe />
              </div>
          </div>
        </div>  
        <Footer/>
      </div> 
  );
}
