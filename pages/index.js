import React from 'react';
import {FooterBanner} from "../components"
import {HeroBanner}  from '../components';
import {client} from "../lib/client"

const Home = ({products, Banner}) => {
  return (
    <>
        <HeroBanner />

        <div>
            <h2>Best selling products</h2>
            <p>Speakers of many variations</p>
        </div>

        <div>
            {products?.map((product)=>product.name)}
        </div>

        <FooterBanner />
    </>
  )
};
export const getServerSideProps=async()=>{
    const query='*[_type=="product"]';
    const products= await client.fetch(query);
    const BannerQuery='*[_type=="product"]';
    const Banner= await client.fetch(BannerQuery)

    return {
        props:{products, Banner}
    }
}

export default Home