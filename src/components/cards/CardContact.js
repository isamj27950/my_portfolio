import React from 'react'
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function CardContact() {
    return (
      <div className="">
        <div className="bg-gray-800 rounded-xl drop-shadow-2xl text-start  px-8 xl:h-1/2">
          <img
            src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
            alt=""
            className="rounded-xl w-full py-8 "
          />
          <h3 className="text-white text-xl uppercase py-4 ">
            Nevine Acotanza
          </h3>
          <p className="text-[#878e99] font-normal py-4">
            Chief Operating Officer
          </p>
          <p className="text-[#878e99] font-normal mr-12 pb-4">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>
          <p className="text-[#878e99] font-normal">Phone:+01234567890</p>
          <p className="text-[#878e99] font-normal">Email:admin#example.com</p>
          <p className="text-[#878e99] font-normal pt-4">Find with me</p>
          <div className=" space-x-2 flex justify-center py-6">
            <button class="btn bg-gray-900 drop-shadow-2xl border-none gap-2">
              <FiFacebook />
            </button>
            <button class="btn bg-gray-900 drop-shadow-2xl border-none gap-2">
              <FiInstagram />
            </button>
            <button class="btn bg-gray-900 drop-shadow-2xl border-none gap-2">
              <FiLinkedin />
            </button>
          </div>
        </div>
      </div>
    );
}
