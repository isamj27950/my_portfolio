import React from 'react'
import { FiArrowRight } from "react-icons/fi";

export default function Form() {
  return (
    <div className="bg-gray-700 mx-20 rounded-2xl block ">
      <div className="border-solid border-gray-600 rounded-l ">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white font-light uppercase">
              Your name
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered input-error m-4 max-w-xs bg-black mx-4"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text  text-white font-light uppercase">
              Phone number
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered input-error m-4 max-w-xs bg-black mx-4"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text  text-white font-light uppercase">
              Email
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered input-error mx-4 max-w-xs bg-black "
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text  text-white font-light uppercase ">
              Subject
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered input-error  max-w-xs bg-black mx-4"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text  text-white font-light uppercase">
              Your message
            </span>
          </label>
          <textarea
            className="textarea textarea-error bg-black mx-4"
            placeholder=""
          ></textarea>
        </div>
      </div>
      <div className="py-8   block ">
        <div className='pb-2'>      
            <button className="btn btn-wide text-[#f9004d] drop-shadow-2xl  ">
                Send Message <FiArrowRight />
            </button>
        </div>
        <div className='py-4 '>    
            <button className="btn btn-wide text-[#f9004d] bg-red-800 drop-shadow-2xl  ">
            *Name can not be empty!
            </button>
        </div>
    </div>          
    </div>
  );
}
