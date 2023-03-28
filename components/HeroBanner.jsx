import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {urlFor} from "../pages/index"

// 1. buttonBlue: #409cff 2.matteBlack: #28282B 3.matteWhite: #FDFBF9 skyBlue: #8bdef7



const HeroBanner = ({heroBanner}) => {
  return (
    <div className=" rounded-xl bg-slate-100 flex w-11/12 justify-between m-auto h-[30rem] bg-gradient-to-r from-sky-300 to-sky-400">
        <div className=" flex flex-col gap-5 mb-40 m-10">
            <h1 className='text-7xl font-bold'>Introducing the all new {heroBanner.smallText}</h1>
            <h2 className=' text-white font-bold text-7xl'>Summer sale</h2>
            <Link href= {`/product/${heroBanner.product}`} className="bg-black w-32 h-32 justify-center  align-middle flex items-center mt-5 rounded-lg " >
                <button type="button" className="my-3 text-white text-lg font-medium">{heroBanner.buttonText} </button>
            </Link>
        </div>

        <div>
            <img src={urlFor(heroBanner.image)} alt="headphones"  className="h-128"/>
        </div>
    
        
            
        
        
        
          
        
        
    </div>
  )
}

export default HeroBanner