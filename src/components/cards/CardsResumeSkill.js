import React from 'react'

export default function CardsResumeSkill() {
    return (
      <div className=' xl:flex xl:justify-center xl:space-x-28 '>
        {/*card design*/ }
        <div className='py-4 m-3'>
          <h4 className="text-[#878e99] text-sm font-normal">Features</h4>
          <h3 className="text-white font-medium text-2xl">Design Skill</h3>
          <div className=''>
            <p className="text-[#c4cfde] text-xs font-normal">Photoshot</p>
            <input
              type="range"
              min="0"
              max="100"
              value="70"
              className="range range-secondary range-xs  mx-2 "
            />
          </div>
          <div>
            <p className="text-[#c4cfde] text-xs font-normal">Canva</p>
            <input
              type="range"
              min="0"
              max="100"
              value="80"
              className="range range-secondary range-xs mx-2 "
            />
          </div>
          <div>
            <p className="text-[#c4cfde] text-xs font-normal">
              Adobe illustrator
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value="40"
              className="range range-secondary range-xs mx-2"
            />
          </div>
          <div>
            <p className="text-[#c4cfde] text-xs font-normal">Adobe xd</p>
            <input
              type="range"
              min="0"
              max="100"
              value="50"
              className="range range-secondary range-xs mx-2"
            />
          </div>
        </div>
        {/*Card dev skill*/}
        <div className='py-4 m-3'>
          <h4 className="text-[#878e99] text-sm font-normal">Features</h4>
          <h3 className="text-white font-medium text-2xl">Development Skill</h3>
          <div>
            <p className="text-[#c4cfde] text-xs font-normal">HTML</p>
            <input
              type="range"
              min="0"
              max="100"
              value="70"
              className="range range-secondary range-xs mx-2"
            />
          </div>
          <div>
            <p className="text-[#c4cfde] text-xs font-normal">CSS</p>
            <input
              type="range"
              min="0"
              max="100"
              value="80"
              className="range range-secondary range-xs mx-2"
            />
          </div>
          <div>
            <p className="text-[#c4cfde] text-xs font-normal">PHP</p>
            <input
              type="range"
              min="0"
              max="100"
              value="70"
              className="range range-secondary range-xs mx-2 "
            />
          </div>
          <div>
            <p className="text-[#c4cfde] text-xs font-normal">JAVASCRIPT</p>
            <input
              type="range"
              min="0"
              max="100"
              value="70"
              className="range range-secondary range-xs mx-2"
            />
          </div>
        </div>
      </div>
    );
}
