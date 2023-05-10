import CardsResumeEduc from '@/components/cards/CardsResumeEduc'
import CardsResumeJob from '@/components/cards/CardsResumeJob'
import CardsResumeSkill from '@/components/cards/CardsResumeSkill'
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navigation/Navbar';
import React from 'react'
import SectionHeroHome from './SectionHeroHome';

export default function resume() {
  return (
    <div>
      <SectionHeroHome/>
      <Navbar />
        <div className='bg-gray-600 mx-20'> 
        <div className=''>
          <p className="text-[#f9004d] text-base font-medium">2007-2010</p>
          <h2 className="text-[#c4cfde] font-bold text-2xl">Education Quality</h2>
          <div>
            <CardsResumeEduc />
          </div>
        </div>
        <div>
          <p className="text-[#f9004d] text-base font-medium">2007-2010</p>
          <h2 className="text-[#c4cfde] font-bold text-2xl">Job Experience</h2>
          <div>
            <CardsResumeJob />
          </div>
        </div>
        <div>
          <CardsResumeSkill />
        </div>
        </div>
      <Footer/>
    </div>
  );
}
