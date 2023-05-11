import Navbar from '@/components/navigation/Navbar'
import React from 'react'
import SectionHeroHome from './SectionHeroHome'
import Footer from '@/components/footer/Footer'
import { createClient } from "contentful";
import Link from 'next/link';
import CardsWork from '@/components/cards/CardsWork';
import Layout from '@/components/layout/Layout';

export default function work({posts}) {
  console.log(posts);
  return (
          <Layout>   
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2  bg-gray-800 py-4 mx-20 rounded-xl">
              {posts.map((post) => (
                <Link href={`post/${post.fields.slug}`}>
                  <CardsWork
                    img={post.fields.image2.fields.file.url}
                    title={post.fields.title}
                    subtitle={post.fields.subtitle}
                  />
                </Link>
              ))}
            </div>
         </Layout>
      
  );
}
export async function getStaticProps() {
  //1 connect to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  //2 recuperer data en cas de success pour le content_type => portfolio
  
  const data = await client.getEntries({
    content_type: "portfolio",
    order: "sys.createdAt",
    limit: 6,
  });

  console.log(data);
  //3.on envoie la data ds le props de ma page
  return {
    props: {
      posts: data.items,
    },
  };
}         

