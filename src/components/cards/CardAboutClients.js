import React from 'react'

export default function CardAboutClients() {
    return (
      <div className="xl:flex">
        <div className="md:flex md:justify-center">
          {/*card1*/}
          <div className="bg-gray-800 rounded-xl drop-shadow-2xl items-center text-center p-6 m-8 ">
            <div className="pb-4 ">
              <img
                src="https://rainbowit.net/html/inbio/assets/images/client/png/client1.png"
                alt=""
                className='m-auto'
              />
            </div>
            <div>
              <h3 className="text-[#878e99] pt-4  border-t-2 border-gray-900 ">
                Mark Smiths
              </h3>
            </div>
          </div>
          {/*card2*/}
          <div className="bg-gray-800 rounded-xl drop-shadow-2xl text-center p-6 m-8 ">
            <div className="pb-4">
              <img
                src="https://rainbowit.net/html/inbio/assets/images/client/png/client1.png"
                alt=""
                className='m-auto'
              />
            </div>
            <div>
              <h3 className="text-[#878e99] pt-4  border-t-2 border-gray-900 ">
                Mark Smiths
              </h3>
            </div>
          </div>
        </div>
        {/*card3*/}
        <div className="md:flex md:justify-center">
          <div className="bg-gray-800 rounded-xl drop-shadow-2xl text-center p-6 m-8 ">
            <div className="pb-4">
              <img
                src="https://rainbowit.net/html/inbio/assets/images/client/png/client1.png"
                alt=""
                className='m-auto'
              />
            </div>
            <div>
              <h3 className="text-[#878e99] pt-4  border-t-2 border-gray-900">
                Mark Smiths
              </h3>
            </div>
          </div>
          {/*card4*/}
          <div className="bg-gray-800 rounded-xl drop-shadow-2xl text-center p-6 m-8 ">
            <div className="pb-4">
              <img
                src="https://rainbowit.net/html/inbio/assets/images/client/png/client1.png"
                alt=""
                className='m-auto'
              />
            </div>
            <div>
              <h3 className="text-[#878e99] pt-4  border-t-2 border-gray-900">
                Mark Smiths
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
}
