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
  console.log("post:", post);
  const { title, subtitle, text, image2 } = post.fields;
  return (
    
      <div className=''>
        <div className='w-full pt-6'> 
            <img
            src={image2.fields.file.url}
            alt={title}
            />
        </div>
      <p className='font-semibold pt-4 text-2xl text-white'>{title}</p>
      <p>{subtitle }</p>
      <div
        className='pt-4 text-white'><p>{text}</p> </div>
      </div>
  
  );
}

    
