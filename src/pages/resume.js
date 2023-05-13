import CardsResumeEduc from '@/components/cards/CardsResumeEduc'
import CardsResumeJob from '@/components/cards/CardsResumeJob'
import CardsResumeSkill from '@/components/cards/CardsResumeSkill'
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navigation/Navbar';
import React from 'react'
import SectionHeroHome from './SectionHeroHome';
import Layout from '@/components/layout/Layout';
import Sidebar from '@/components/navigation/Sidebar';

export default function resume() {
  return (
    <Layout>
      <div className="container">
        <Sidebar />
        <div className="bg-gray-800 mx-20 rounded-xl drop-shadow-xl ">
          <div className='xl:flex'> 
            <div className=" pl-6">
              <p className="text-[#f9004d] text-base font-medium pt-4">2007-2010</p>
              <h2 className="text-[#c4cfde] font-bold text-2xl pt-4">
                Education Quality
              </h2>
              <div className="">
                <CardsResumeEduc />
              </div>
            </div>
            <div>
              <div className='pl-6'> 
                <p className="text-[#f9004d] text-base font-medium pt-4">2007-2010</p>
                <h2 className="text-[#c4cfde] font-bold text-2xl pt-4">
                  Job Experience
                </h2>
                <div>
                  <CardsResumeJob />
                </div>
              </div>  
            </div>
          </div>  
          <div className=''>
            <CardsResumeSkill />
          </div>
        </div>
      </div>
    </Layout>
  );
}
