import React from 'react'

export default function CardsResumeEduc() {
  return (
    <>
      <div className="bg-gray-800 rounded-xl drop-shadow-2xl text-start mr-4 ">
        <div className="m-3  ">
          <div className='md:flex'>
            <div>
              <h3 className="text-white font-medium text-2xl pt-4">
                Responsable de salle de sport
              </h3>
              <h4 className="text-[#7c838e] text-sm font-normal py-2">
                Evreux,Pacy, Saint-Marcel(2016-2022)
              </h4>
            </div>
            <div className="py-3 ">
              <button className="btn text-[#ff014f] drop-shadow-2xl bg-gray-800 border-none ">
                4,5/5
              </button>
            </div>
          </div>
          <p className="text-[#878e99] font-normal text-lg pt-4  border-t-2 border-gray-900 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            nesciunt! Fuga perspiciatis blanditiis quia deserunt ex iusto eaque
            reprehenderit possimus!
          </p>
        </div>
      </div>
      <div className="bg-gray-800  rounded-xl drop-shadow-2xl text-start py-10">
        <div className='md:flex'> 
          <div> 
            <h3 className="text-white font-medium text-2xl pt-4">
              Responsable de salle de sport,commerciale et coach sportif
            </h3>
            <h4 className="text-[#7c838e] text-sm font-normal py-2">
              Saint-Ouen,Evreux(2008-2015)
            </h4>
          </div>  
          <button className="btn text-[#ff014f] border-none drop-shadow-2xl bg-gray-800 pb-2">4,5/5</button>
        </div>
        <p className="text-[#878e99] font-normal text-lg pt-4 border-t-2 border-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          nesciunt! Fuga perspiciatis blanditiis quia deserunt ex iusto eaque
          reprehenderit possimus!
        </p>
      </div>
    </>
  );
}
