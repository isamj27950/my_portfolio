import React from 'react'
import SectionHeroHome from './SectionHeroHome';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Form from '@/components/form/Form';
import Layout from '@/components/layout/Layout';
import Sidebar from '@/components/navigation/Sidebar';
import CardsIconHero from '@/components/cards/CardsIconHero';
import CardContact from '@/components/cards/CardContact';

export default function contact() {
  return (
    <Layout>
      <div className="containera">
        <Sidebar />
        <div className='block space-y-2 xl:flex justify-items-center gap-0 xl:ml-20 w-full'>
          <div className='drop-shadow-2xl rounded-2xl '>
            <CardContact />
          </div>
          <div className=''>
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  );
}
