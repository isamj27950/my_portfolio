import React from 'react'
import SectionHeroHome from './SectionHeroHome';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Sidebar from '@/components/navigation/Sidebar';
import CardBlog from '@/components/cards/CardBlog';

export default function blog() {
  return (
    <div>
      <SectionHeroHome />
      <Navbar />
      <div className='containera'> 
        <Sidebar/>
        <h1 className="bg-gray-800 text-white">BLOG</h1>
        <CardBlog/>
      </div>  
        <Footer />
        
    </div>
  );
}
