import CardHero from '@/components/cards/CardHero'
import React from 'react'

export default function SectionHeroHome() {
  return (
    <div className='relative' >
      <img src="images/ordi_rose.jpeg" alt="image d'un bureau de dev rose" className=" w-full h-74 "
      />

      <div className=''>
        <CardHero />
      </div>
    </div>
  );
}

