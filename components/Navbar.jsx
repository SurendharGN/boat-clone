import React from 'react'
import Link from "next/link"
import {AiOutlineShopping} from "react-icons/ai"
const Navbar = () => {
  return (
    <div>
        <p>
            <Link href="/">
                Boat Clone
            </Link>
        </p>

        <button onClick="">
            <AiOutlineShopping/>
            <span>1</span>
        </button>
    </div>
  )
}

export default Navbar