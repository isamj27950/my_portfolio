import Navbar from '@/components/navigation/Navbar'
import React from 'react'
import SectionHeroHome from './SectionHeroHome'
import Footer from '@/components/footer/Footer'

export default function work() {
  return (
      <div>
          <SectionHeroHome/>
          <Navbar />
          <h1 className='bg-gray-800 text-white'>WORK</h1>
          <Footer/>
    </div>
  )
}
