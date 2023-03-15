import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {urlFor} from "../pages/index"

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="bg-gray-300">
        <div>
            <h1>{heroBanner.midText}</h1>
            <p>{heroBanner.smallText}</p>
            <img src={urlFor(heroBanner.image)} alt="headphones" width="300px" height="300px" />
        </div>

        <div>
            <Link href= {`/product/${heroBanner.product}`} >
                <button type="button">{heroBanner.button} </button>
            </Link>
        </div>

        <div>
            <h2>Description</h2>
            <p>{heroBanner.desc}</p>
        </div>
    </div>
  )
}

export default HeroBanner