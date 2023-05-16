import React from 'react'

export default function CardsResumeEduc() {
  return (
    <>
      <div className="bg-gray-800 rounded-xl drop-shadow-2xl text-start mr-4 ">
        <div className="m-3  ">
          <div className='md:flex'>
            <div>
              <h3 className="text-white font-medium text-2xl pt-4">
               Formation à la Wild Code School
              </h3>
              <h4 className="text-[#7c838e] text-sm font-normal py-2">
                Paris(2021-2022)
              </h4>
            </div>
            <div className="py-3 ">
              <button className="btn text-[#ff014f] drop-shadow-2xl bg-gray-800 border-none ">
                full-stack
              </button>
            </div>
          </div>
          <p className="text-[#878e99] font-normal text-lg pt-4  border-t-2 border-gray-900 ">
            Pendant 5mois j'ai étudié  àla wild code school de septembre 2021 à février 2022. J'ai fait messpremers pas dans le code, en front et en back.
          </p>
        </div>
      </div>
      <div className="bg-gray-800  rounded-xl drop-shadow-2xl text-start py-10">
        <div className='md:flex'> 
          <div> 
            <h3 className="text-white font-medium text-2xl pt-4">
               Formation à l'ESCCI
            </h3>
            <h4 className="text-[#7c838e] text-sm font-normal py-2">
              Vernon(2022-2023)
            </h4>
          </div>  
          <button className="btn text-[#ff014f] border-none drop-shadow-2xl bg-gray-800 pb-2">DISII</button>
        </div>
        <p className="text-[#878e99] font-normal text-lg pt-4 border-t-2 border-gray-900">
          J'ai commencé une formation de développeuse de solution intranet et internet , ou j'ai pu abborder le developpement en front et en back mais aussi le design d'un site ou d'une application.
        </p>
      </div>
    </>
  );
}
