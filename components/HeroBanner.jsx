import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {urlFor} from "../pages/index"

// 1. buttonBlue: #409cff 2.matteBlack: #28282B 3.matteWhite: #FDFBF9 skyBlue: #8bdef7



const HeroBanner = ({heroBanner}) => {
  return (
    <div className="bg-slate-100 h-[25rem] relative">
        <div className="relative mb-40 m-10">
            <h1 className='text-2xl'>{heroBanner.smallText}</h1>
            <h2 className='text-5xl text-white'>Summer sale</h2>
            <h3 className='text-6xl'>FINE</h3>
            <img src={urlFor(heroBanner.image)} alt="headphones" width="300px" height="300px" className=" absolute right-20 top-0"/>
        </div>
    
        <div className="bg-sky-300 w-32 h-16 justify-center  align-middle flex items-center m-10  ">
            <Link href= {`/product/${heroBanner.product}`} className="" >
                <button type="button" className="">{heroBanner.buttonText} </button>
            </Link>
        
        
            <div className="absolute flex flex-col text-right right-10">
                <h2 className=" ">Description</h2>
                <p className=" ">{heroBanner.desc}</p>
            </div>
        </div>
        
    </div>
  )
}

export default HeroBanner