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
            <div>
                <div>
                    <div>
                        <img src={urlFor(image[index])} />
                    </div>

                    <div>
                        {image?.map((item,i)=>{
                            return (
                            <><img 
                            src={urlFor(item)} 
                            onMouseEnter={()=>setIndex(i)} 
                            key="name" alt='image'/></>
                            )})}
                    </div>

                    <div>
                        <h1>{name}</h1>
                        <div>
                            <div>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                            </div>
                            <p>
                                (20)
                            </p>
                        </div>
                        <h3>Details:</h3>
                        <p>Great looking and sounding headphones!</p>
                        <p>${price}</p>
                        <div>
                            <h3>Quantity:</h3>
                            <p>
                                <span onClick={decreaseQuantity}><AiOutlineMinus/></span>
                                <span>{quantity}</span>
                                <span onClick={increaseQuantity}><AiOutlinePlus/>
                                </span>
                            </p>
                        </div>

                        <div>
                            <button onClick={()=>addToCart(product,quantity)}>
                            Add to cart
                            </button>
                            <button>
                            Buy now
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div>
                <h2>You may also like</h2>
                <div>
                    <div>
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