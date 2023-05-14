import Link from 'next/link';
import React from 'react'


export default function CardBlog({ img, title, content }) {
  return (
    <div>
   
        <img src={img} alt={title} className="w-4/5 h-64 m-6 rounded-xl " />
        <h2> {title }</h2>
        <p className="text-[#f9004d] py-2">{content}</p>
     
      </div>
      
     
  );
}
