import CardHero from '@/components/cards/CardHero'
import React from 'react'

export default function SectionHeroHome() {
  return (
    <div className='' >
      <img src="images/ordi_rose.jpeg" alt="image d'un bureau de dev rose" className=" w-full h-68"
      />

      <div className='mx-[10%] relative'>
        <CardHero />
      </div>
    </div>
  );
}

