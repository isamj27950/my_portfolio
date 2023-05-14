import React from 'react'
import { FiArrowRight } from "react-icons/fi";

export default function Form() {
  return (
    <div className="bg-gray-800  rounded-2xl block  ">
      <div className="border-solid  p-4 ">
        {/*case nom*/ }
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white text-lg font-light uppercase">
              Your name
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered drop-shadow-2xl m-4 max-w-xs bg-black mx-4"
          />
        </div>
        {/*case phone*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text  text-white text-lg font-light uppercase">
              Phone number
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered drop-shadow-2xl m-4 max-w-xs bg-black mx-4"
          />
        </div>
        {/*case email*/}
        <div className="form-control w-full max-w-xs ">
          <label className="label ">
            <span className="label-text  text-white text-lg font-light uppercase">
              Email
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered drop-shadow-2xl mx-4 max-w-xs bg-black "
          />
        </div>
        {/*case subject*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text  text-white text-lg font-light uppercase ">
              Subject
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered drop-shadow-2xl  max-w-xs bg-black mx-4"
          />
        </div>
        {/*case message*/ }
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text  text-white text-lg font-light uppercase">
              Your message
            </span>
          </label>
          <textarea
            className="textarea drop-shadow-2xl bg-black mx-4 "
            placeholder=""
          ></textarea>
        </div>
      </div>
      {/*les 2 boutons*/ }
      <div className=" p-6  block ">
        <div className='pb-2 drop-shadow-2xl'>      
            <button className="btn btn-wide text-[#f9004d]  ">
                Send Message <FiArrowRight />
            </button>
        </div>
        <div className='py-6 drop-shadow-2xl'>    
            <button className="btn btn-wide text-[#f9004d] bg-red-800   ">
            *Name can not be empty!
            </button>
        </div>
    </div>          
    </div>
  );
}
