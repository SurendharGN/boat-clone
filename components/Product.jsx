import React from 'react'
import Link from 'next/link'
import {urlFor} from '../pages/index'

const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div className="border border-black my-10 text-center transition ease-in-out delay-250 duration-300 hover:scale-110 mx-10  h-94 w-48">
        <Link href={`/product/${slug.current}`}>
            <div className="flex flex-col justify-center ">
                <p className='font-bold text-lg pt-3'>{name}</p>
                <img 
                    src={urlFor(image && image[0])} 
                    alt="headphones pic" className='h-52' />
                    <p className="text-xl font-bold m-5 pt-2 border-t-2 " >${price} Onwards</p>
                    <p className=" bg-gradient-to-r from-[#96fbc4] to-[#f9f586] w-100% h-12 text-xl pt-2 font-medium border-t border-t-black">Shop now</p>
                    
            </div>
        </Link>
    </div>
  )
}

export default Product