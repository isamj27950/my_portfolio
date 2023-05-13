import React from 'react'
import SectionHeroHome from './SectionHeroHome';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Sidebar from '@/components/navigation/Sidebar';

export default function blog() {
  return (
    <div>
      <SectionHeroHome />
      <Navbar />
      <div className='container'> 
        <Sidebar/>
        <h1 className="bg-gray-800 text-white">BLOG</h1>
      </div>  
        <Footer />
        
    </div>
  );
}
