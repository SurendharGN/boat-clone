import React from 'react'
import Link from "next/link";
import {urlFor} from "../pages/index"

const FooterBanner = ({footerBanner:{discount,largeText1,largeText2,saleTime,image,smallText,product,buttonText,desc}}) => {
  return (
    <div className=" bg-gradient-to-r from-[#CEF576] to-[#84FB95] w-11/12 m-auto bg-sky-300 rounded-sm relative lg:h-96 sm:h-72">
        <div className="flex lg:scale-x-100 ">
            <div className="lg:p-10 lg:flex  lg:flex-col lg:gap-3 sm:hidden">
                <p className="font-bold text-7xl pb-5 text-white">{discount}</p>
                <h3 className="font-bold text-5xl">{largeText1}</h3>
                <h3 className="font-bold text-5xl">{largeText2}</h3>
                <p className="text-xl font-bold text-white">{saleTime}</p>
            </div>

            <div className='sm:hidden lg:block'>
                <img src={urlFor(image)} className="lg:h-96 md:scale-x-125 md:scale-y-125

                lg:scale-x-100 lg:scale-y-100
                w-96 p-5 md:translate-y-20 lg:translate-y-0" />
            </div>
            

            <div className=" lg:w-128  flex flex-col gap-3 lg:mt-16 sm:flex sm:text-center sm:items-center sm:mt-5">
                <p className="text-xl">{smallText}</p>
                <h3 className="font-bold text-7xl">Summer sale</h3>
                <p className="text-xl pb-4">{desc}</p>
            
                <Link href={`/product/headphones`} className="  ">
                    <button className="bg-white rounded-lg w-32 h-10 justify-center align-middle flex items-center text-lg font-medium">{buttonText}</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FooterBanner