import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {urlFor} from "../pages/index"

// 1. buttonBlue: #409cff 2.matteBlack: #28282B 3.matteWhite: #FDFBF9 skyBlue: #8bdef7



const HeroBanner = ({heroBanner}) => {
  return (
    <div className=" lg:rounded-sm bg-slate-100 flex lg:w-11/12 justify-between m-auto lg:h-[30rem] bg-gradient-to-r from-[#a8ff78]  to-[#78ffd6] md:h-[20rem] sm:rounded-sm sm:flex-col sm:w-screen sm:translate-x-5">
        <div className=" flex flex-col gap-5 mb-40 m-10 sm:mb-0">
            <h1 className='md:text-4xl lg:text-7xl z-10 font-bold lg:w-3/4 sm:text-3xl'>Introducing the all new {heroBanner.smallText}</h1>
            <h2 className=' text-white font-bold text-7xl  sm:text-left'>Summer sale</h2>
            
        </div>

        <div className=' sm:flex sm:justify-between sm:items-center sm:-translate-y-16 '>
            <Link href= {`/product/headphones`} className="bg-black lg:w-32 lg:h-16 justify-center  align-middle flex items-center mt-5 rounded-sm sm:h-10 sm:px-5 sm:ml-10 lg:-translate-y-20 " >
                <button type="button" className="my-3 text-white text-lg font-medium">Shop </button>
            </Link>
            <img src={urlFor(heroBanner.image)} alt="headphones"  className="lg:h-[32rem]  lg:-translate-x-30 lg:-translate-y-56 sm:h-64"/>
        </div>
    
        
            
        
        
        
          
        
        
    </div>
  )
}

export default HeroBanner