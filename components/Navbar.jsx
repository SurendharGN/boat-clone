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
            
            <span className="absolute top-1 right-0 w-6 h-6 bg-gradient-to-r from-[#a8ff78]   to-[#78ffd6] rounded-full flex justify-center align-middle">{totalQuantities}</span>
        </button>
        {showCart && <Cart/>}
    </div>
  )
}

export default Navbar