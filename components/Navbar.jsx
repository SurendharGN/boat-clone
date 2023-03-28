import React from 'react'
import Link from "next/link"
import { useStateContext } from '../context/StateContext' 
import {Cart} from './'
import {AiOutlineShopping} from "react-icons/ai"
const Navbar = () => {
    const {showCart, setShowCart, totalQuantities}=useStateContext()
  return (
    <div className="flex justify-between">
        <p>
            <Link href="/" className="text-lg font-medium m-5 relative top-2">
                Boat-Clone
            </Link>
        </p>

        <button onClick={()=>setShowCart(true)}>
            <AiOutlineShopping className="relative right-4 top-2 w-6 h-6"/>
            <span className="absolute top-1 right-0 w-6 h-6 bg-sky-400 rounded-full flex justify-center align-middle">{totalQuantities}</span>
        </button>
        {showCart && <Cart/>}
    </div>
  )
}

export default Navbar