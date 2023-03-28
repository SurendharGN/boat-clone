import React from 'react'
import Link from "next/link";
import {urlFor} from "../pages/index"

const FooterBanner = ({footerBanner:{discount,largeText1,largeText2,saleTime,image,smallText,product,buttonText,desc}}) => {
  return (
    <div className=" bg-gradient-to-r from-sky-300 to-sky-400 w-11/12 m-auto bg-sky-300 rounded-xl relative h-96 ">
        <div className="flex ">
            <div className="p-10 mt-4 flex  flex-col gap-3">
                <p className="font-bold text-7xl pb-5 text-white">{discount}</p>
                <h3 className="font-bold text-5xl">{largeText1}</h3>
                <h3 className="font-bold text-5xl">{largeText2}</h3>
                <p className="text-xl font-bold text-white">{saleTime}</p>
            </div>

            <div className="">
                <img src={urlFor(image)} className="h-96 
                w-96 p-5" />
            </div>
            

            <div className=" w-128  flex flex-col gap-3 mt-16">
                <p className="text-xl">{smallText}</p>
                <h3 className="font-bold text-7xl">Summer sale</h3>
                <p className="text-xl pb-4">{desc}</p>
            
                <Link href={`/product/${product}`} className="  ">
                    <button className="bg-white rounded-lg w-32 h-10 justify-center align-middle flex items-center text-lg font-medium">{buttonText}</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FooterBanner