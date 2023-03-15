import React from 'react'
import Link from 'next/link'
import {urlFor} from '../pages/index'

const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div>
        <Link href={`/product/${slug.current}`}>
            <div>
                <img 
                    src={urlFor(image && image[0])} 
                    width={250} 
                    height={250} alt="headphones pic" />
                    <p>{name}</p>
                    <p>${price}</p>
            </div>
        </Link>
    </div>
  )
}

export default Product