import CardHero from '@/components/cards/CardHero'
import React from 'react'

export default function SectionHeroHome() {
  return (
    <div className='' >
      <img src="images/ordi_rose.jpeg"
        alt=""
        className=" w-screen "
      />

      <div className='absolute'>
        <CardHero />
      </div>
    </div>
  );
}

