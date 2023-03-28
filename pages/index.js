import React from 'react';
import {FooterBanner, TestSVG} from "../components"
import {HeroBanner}  from '../components';
import {Product} from '../components'
import {createClient} from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';


export const client=createClient({
    projectId:"cw3u5qk9",
    dataset:"production",
    apiVersion:"2023-03-15",
    useCdn:false,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder=imageUrlBuilder(client)
export const urlFor =(source)=>builder.image(source)



const Home = ({products,bannerData}) => {
  return (
    <>
        
            <HeroBanner heroBanner={bannerData.length && bannerData[0] }/>
        
        <div className="text-center text-zinc-800">
            <h2 className="text-[2rem] font-bold">Best Selling Products</h2>
            <p>Speakers of many variations</p>
        </div>

        <div className="flex justify-center flex-wrap ">
            {products?.map((product)=>{return <Product key={product._id} product={product}/>})}
            
        </div>

        <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
};

export const getServerSideProps=async()=>{
    const query='*[_type=="product"]'
    const products=await client.fetch(query)

    const bannerQuery='*[_type=="banner"]'
    const bannerData=await client.fetch(bannerQuery)

    return {
        props:{
            products,bannerData
        }
    }
}

export default Home