import React from 'react'
import Link from "next/link";
import {urlFor} from "../pages/index"

const FooterBanner = ({footerBanner:{discount,largeText1,largeText2,saleTime,image,smallText,midText,product,buttonText,desc}}) => {
  return (
    <div>
        <div>
            <div>
                <p>{discount}</p>
                <h3>{largeText1}</h3>
                <h3>{largeText2}</h3>
                <p>{saleTime}</p>
            </div>

            <div>
                <p>{smallText}</p>
                <h3>{midText}</h3>
                <p>{desc}</p>
                <Link href={`/product/${product}`} >
                    <button>{buttonText}</button>
                </Link>
            </div>

            <img src={urlFor(image)} width={250} height={250} />
        </div>
    </div>
  )
}

export default FooterBanner