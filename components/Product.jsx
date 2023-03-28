import React from 'react'
import Link from 'next/link'
import {urlFor} from '../pages/index'

const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div className="bg-zinc-100 w-fit m-10 text-center transform transition ease-in-out delay-250 duration-300 hover:scale-110 ">
        <Link href={`/product/${slug.current}`}>
            <div className="flex flex-col justify-center ">
                <p className='font-bold text-lg pt-3'>{name}</p>
                <img 
                    src={urlFor(image && image[0])} 
                    alt="headphones pic" className='h-52 w-52   ' />
                    <p className="text-xl font-bold m-5 pt-2 border-t-2 " >${price} Onwards</p>
                    <p className="  bg-sky-300 w-100% h-12 text-xl pt-2 font-medium ">Shop now</p>
                    
            </div>
        </Link>
    </div>
  )
}

export default Product