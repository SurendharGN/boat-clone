import React from 'react';
import {FooterBanner, TestSVG} from "../components"
import {HeroBanner}  from '../components';
import {Product} from '../components'
import {createClient} from "next-sanity";
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';
import {useState,useEffect} from 'react'


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

    const[url,setUrl]=useState('');
    useEffect(()=>
        setUrl('https://youtu.be/4mOkFXyxfsU'),[]
    )
  return (
    <div className="">
        
        <p className="m-6 text-center">*Note: this is a clone application of a youtube tutorial, we do not intend to sell any of the products. </p>

        <div className="flex justify-center">
            <Link target="_blank" href={url}className="text-center font-medium text-lg mb-5 underline">Tutorial Link</Link>
        </div>
        
            
        <HeroBanner heroBanner={bannerData.length && bannerData[0] }/>
        
        
        <div className="text-center text-zinc-700 mt-16">
            <h2 className="text-[3rem] font-bold ">Best Selling Products</h2>
            <div className="mt-5 h-0.5 bg-gray-300 flex w-80 m-auto justify-center align-middle"></div>
            
        </div>

        <div className="flex justify-center flex-wrap ">
            {products?.map((product)=>{return <Product key={product._id} product={product}/>})}
            
        </div>

        <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
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