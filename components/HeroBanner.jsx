import React from 'react'
import Image from "next/image"
import Link from "next/link"

const HeroBanner = () => {
  return (
    <div className="bg-gray-300">
        <div>
            <h1>HEADING</h1>
            <p>INTRO</p>
            <Image src="/" alt="headphones" width={250} height={250} />
        </div>

        <div>
            <Link href="#">
                <button type="button">BUTTON TEXT</button>
            </Link>
        </div>

        <div>
            <h2>DESC TITLE</h2>
            <p>DESC</p>
        </div>
    </div>
  )
}

export default HeroBanner