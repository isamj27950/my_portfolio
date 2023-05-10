import React from 'react'
import SectionHeroHome from './SectionHeroHome';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';

export default function blog() {
  return (
    <div>
      <SectionHeroHome />
      <Navbar/>
      <h1 className="bg-gray-800 text-white">BLOG</h1>
      <Footer />
    </div>
  );
}
