import React from 'react'
import Link from "next/link";
import {urlFor} from "../pages/index"

const FooterBanner = ({footerBanner:{discount,largeText1,largeText2,saleTime,image,smallText,midText,product,buttonText,desc}}) => {
  return (
    <div className=" w-11/12 m-auto bg-sky-300 rounded-xl relative h-96 ">
        <div className="">
            <div className="p-10 top-16 absolute">
                <p>{discount}</p>
                <h3 className="font-bold text-5xl">{largeText1}</h3>
                <h3 className="font-bold text-5xl">{largeText2}</h3>
                <p>{saleTime}</p>
            </div>

            <div className=" ">
                <img src={urlFor(image)} className="h-112 absolute -top-24 m-auto
                w-112 " />
            </div>
            

            <div className="absolute w-128 m-auto h-auto top-20 right-10 flex flex-col gap-3">
                <p className="text-xl">{smallText}</p>
                <h3 className="font-bold text-7xl">Summer sale</h3>
                <p className="text-xl pb-4">{desc}</p>
            
                <Link href={`/product/${product}`} className="  ">
                    <button className="bg-white rounded-lg w-32 h-10 justify-center align-middle flex items-center text-lg font-bold">{buttonText}</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FooterBanner