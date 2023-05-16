import React from 'react'
import { FiArrowRight } from "react-icons/fi";



export default function Form() {

  

  return (
    <div className="bg-gray-800 rounded-2xl block  justify-center items-center ">
      <div className="border-solid p-4">
        {/*la div avec le nom et le phone*/}
        <div className='md:flex  xl:flex xl:space-x-8'> 
          {/* Case: Your name */}
          <div className="form-control w-full max-w-xs flex flex-col">
            <label className="label">
              <span className="label-text text-gray-500 text-lg font-light uppercase mx-4">
                Your name
              </span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered drop-shadow-2xl  max-w-xs bg-black mx-4 "
            />
          </div>
          {/* Case: Phone number */}
          <div className="form-control w-full max-w-xs flex,flex-col">
            <label className="label">
              <span className="label-text text-gray-500 text-lg font-light uppercase mx-4 xl:-ml-6">
                Phone number
              </span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered drop-shadow-2xl mx-4 max-w-xs bg-black xl:-ml-8"
            />
          </div>
        </div>  
        {/* Case: Email */}
        <div className="form-control w-full max-w-xs flex flex-col">
          <label className="label">
            <span className="label-text text-gray-500 text-lg font-light uppercase mx-4">
              Email
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered drop-shadow-2xl mx-4 max-w-xs bg-black md:-mr-12"
          />
        </div>
        {/* Case: Subject */}
        <div className="form-control w-full max-w-xs flex flex-col">
          <label className="label">
            <span className="label-text text-gray-500 text-lg font-light uppercase mx-4">
              Subject
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered drop-shadow-2xl max-w-xs bg-black mx-4"
          />
        </div>
        {/* Case: Your message */}
        <div className="form-control w-full max-w-xs flex flex-col">
          <label className="label">
            <span className="label-text text-gray-500 text-lg font-light uppercase mx-4">
              Your message
            </span>
          </label>
          <textarea
            className="textarea drop-shadow-2xl bg-black mx-4"
            placeholder=""
          ></textarea>
        </div>
      </div>
      {/* Buttons */}
      <div className="p-6 block">
        <div className="pb-2 drop-shadow-2xl">
          <button
            className="btn btn-wide text-[#f9004d]"
            /*onClick={ handleSendMessage }*/
          >
            Send Message <FiArrowRight />
          </button>
        </div>
        
          <div className="py-6 drop-shadow-2xl">
            <button className="btn btn-wide text-[#f9004d] bg-red-800">
              *Name cannot be empty!
            </button>
          </div>
    
      </div>
         
    </div>
  );
}
