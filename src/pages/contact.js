import React from 'react'
import SectionHeroHome from './SectionHeroHome';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Form from '@/components/form/Form';
import Layout from '@/components/layout/Layout';
import Sidebar from '@/components/navigation/Sidebar';

export default function contact() {
  return (
    <Layout>
      <div className='container'> 
          <Sidebar/>
          <div>
              <Form/>
          </div>
      </div>
    </Layout>
  );
}
