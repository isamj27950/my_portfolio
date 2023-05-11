import React from 'react'
import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";
import SectionHeroHome from '@/pages/SectionHeroHome';
import Sidebar from '../navigation/Sidebar';


export default function Layout({ children }) {
  return (
      <div>
    < SectionHeroHome/>
          <Navbar />
          
      <main>{children}</main>
      <Footer />
    </div>
  );
}
