import React from 'react'
import {client,urlFor} from "../index"
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {Product} from "../../components";
import { useState } from 'react';
import {useStateContext} from '../../context/StateContext'

const ProductDetails = ({product,products}) => {

    const {image,name,details,price}=product;

    const [index,setIndex]= useState(0);

    const {increaseQuantity,decreaseQuantity,quantity,addToCart}=useStateContext()

    return (
        <div>
            <div >
                <div className="flex md:flex-row sm:flex-col sm:gap-10 sm:items-center lg:gap-20 sm:flex ">
                    <div className="flex flex-col">
                        <div className="h-[16rem] w-[23rem] bg-white border flex  align-middle justify-center mb-5 ml-10 mt-20 ">
                            <img src={urlFor(image[index])} className="h-64 w-64 "/>
                        </div>

                        <div className="w-20 h-20 flex gap-4 hover: cursor-pointer ml-10">
                        {image?.map((item,i)=>{
                            return (
                            <><img 
                            src={urlFor(item)} 
                            onClick={()=>setIndex(i)} 
                            key="name" alt='image' className="border"/></>
                            )})}
                        </div>

                    </div>
                                
                    <div className="flex flex-col mt-[5rem] gap-4 mb-10">
                        <h1 className="font-bold text-4xl">{name}</h1>
                        <div>
                            <div className="flex gap-2">
                                <AiFillStar className=""/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <span>
                                    (20)
                                </span>
                            </div>
                            
                        </div>
                        
                        <p>Great looking and sounding headphones!</p>
                        <p className="font-bold text-4xl">${price}</p>
                        <div>
                            
                            <p className="flex ">
                                <span onClick={decreaseQuantity}className="w-10 h-10 border flex justify-center align-middle"><AiOutlineMinus className="mt-3"/></span>
                                <p className="w-10 h-10 border flex justify-center align-middle">
                                        {quantity}
                                </p>
                                <span onClick={increaseQuantity}className="w-10 h-10 border flex justify-center align-middle"><AiOutlinePlus className="mt-3 "/>
                                </span>
                            </p>
                        </div>

                        <div className="flex gap-5">
                            <button onClick={()=>addToCart(product,quantity)} className="h-10 w-32 transition ease-in-out delay-150 duration-300 border font-medium text-black hover:bg-black hover:text-white hover:scale-110 hover:border-none ">
                            Add to Cart
                            </button>
                            <button className="h-10 w-32 transition ease-in-out delay-150 duration-300 border font-medium text-black hover:bg-black hover:text-white hover:scale-110 hover:border-none " >
                            Buy now
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <h2 className="flex justify-center font-bold text-4xl">You may also like</h2>
                <div>
                    <div className="flex lg:flex-row justify-center sm:flex-col sm:items-center"> 
                        {products.map((item=>(
                            <Product key={item._id} product={item} />
                        )))}
                    </div>
                </div>
            </div>
        </div>
  )
}

export const getStaticPaths=async()=>{
    const query=`*[_type=="product"]{
        slug{
            current
        }
    }`;
    const products= await client.fetch(query);

    const paths=products.map((product)=>({
        params:{slug:product.slug.current}
    }));

    return{
        paths,
        fallback:"blocking"
    }
}

export const getStaticProps=async ({params:{slug}})=>{
    const query=`*[_type=="product" && slug.current == '${slug}'][0]`;
    const productQuery=`*[_type=="product"]`;

    const product=await client.fetch(query);
    const products=await client.fetch(productQuery)
    console.log(product)
    return {
        props:{
            product,products
        }
    }
}

export default ProductDetails