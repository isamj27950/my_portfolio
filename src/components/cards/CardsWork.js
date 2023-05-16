import Link from 'next/link';
import React from 'react'

export default function CardsWork({img, title, date}) {
    return (
        
        <div className="drop-shadow-2xl">
            <div className="mx-2 p-4 bg-slate-800 rounded-xl  ">
                <img src={img} alt={title} className="w-4/5 h-64 m-6 rounded-xl " />
                <p className="text-[#f9004d] py-2">{date}</p>
                <p className="font-bold text-white uppercase pb-8">{title}</p>
            </div>
        </div>
    );
}
