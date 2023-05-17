import React from "react";
import SectionHeroHome from "../components/SectionHeroHome";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/navigation/Sidebar";
import CardBlog from "@/components/cards/CardBlog";
import Link from "next/link";
import { createClient } from "contentful";

export default function blog({ posts }) {
  console.log(posts);
  return (
    <div>
      <SectionHeroHome />
      <Navbar />
     <div className="containera">
        <Sidebar />
        {/*<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2  bg-gray-800 py-4 xl:ml-20 rounded-xl">
          {posts.map((post) => (
            <Link href={`post/${post.fields.slug}`}>
              <CardBlog
                img={post.fields.image2.fields.file.url} 
                title={post.fields.title}
                text={post.fields.text}
              />
            </Link>
          ))}
          </div>*/}
        <div> <h2 className="text-pink-600 text-center">En TravauX....</h2>
          <img src="https://tse1.mm.bing.net/th?id=OIP.rymj8d61pO6xKD1qR2bkqwHaEK&pid=Api&rs=1&c=1&qlt=95&w=184&h=103" alt="" className="w-20 h-20" />
        </div>
      <Footer />
      </div>
      </div>
  );
}
export async function getStaticProps() {
  //1 connect to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID2,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN2,
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

