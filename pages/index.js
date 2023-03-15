import React from 'react';
import {FooterBanner} from "../components"
import {HeroBanner}  from '../components';
import {Product} from '../components'
import {createClient} from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'


const client=createClient({
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
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        {console.log(bannerData)}

        <div>
            <h2>Best selling products</h2>
            <p>Speakers of many variations</p>
        </div>

        <div>
            {products.map((product)=>{return <Product key={product._id} product={product}/>})}
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