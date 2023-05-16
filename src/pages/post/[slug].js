import React from 'react'
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID2,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN2,
});


//2.generere ou recupperrer ts les slug de mes articles

export  async function getStaticPaths() {
  //a-recupere les posts ds le contentful
  const res = await client.getEntries({
    content_type: "portfolio",
  });

  //b- recuperes les slug des posts
  const slugs = res.items.map((slug) => {
    return {
      params: { slug: slug.fields.slug },
    };
  });

  //c-renvoie tous les slugs ds path (chemin //route)
  return {
    paths: slugs,
    fallback: false, // tous les slug qui ne st pas ds mon path => page 404
  };
}
// 3- recuperre data du post en fonction du slug
export async function getStaticProps({ params }) {
  console.log("params:", params);
  //A.Recupere la data lié au slug

  const res = await client.getEntries({
    content_type: "portfolio",
    "fields.slug": params.slug
  });

  // b-je stock la data du post ds une variables
  const post = res.items;

  return {
    props: {
      post: post[0],
    }
  }
}

export default function work({ post }) {
  /*console.log("post:", post);*/
  const { title, date,subtitle, text, image2, multiImages } = post.fields;
  return (
    <div className="bg-gray-800 min-h-screen pt-10">
      <div className=" ">
        <div className=" bg-gray-800 rounded-xl drop-shadow-2xl mx-4 pb-2 overflow-hidden md:flex">
          {/*c'est l'image du projet*/}
          <div className="mx-2 rounded-3xl">
            <img
              src={image2.fields.file.url}
              alt={title}
              className="w-[50%] rounded-xl drop-shadow-2xl mx-auto pt-8"
            />
          </div>
          {/*le titre et le text du projet*/}
          <div className="m-x">
            <p className='text-white'>{date}</p>
            <p className="font-semibold  text-2xl text-white pt-4">{title}</p>
            <p className="text-red-300 my-2">{subtitle}</p>
            <div className=" text-[#878e99] text-lg pb-8">
              <p>{text}</p>
            </div>
          </div>
          {/*list d'images du projet*/ }
            <div className=' mt-10 '>
              {multiImages.map((file) => (
                <div key={file.sys.id}>
                  <img src={file.fields.file.url} alt={file.fields.title} />
                </div>
              ))}
            </div>
          
        </div>
      </div>
    </div>
  );
}

    
