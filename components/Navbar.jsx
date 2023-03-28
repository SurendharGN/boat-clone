import React from 'react'
import Link from "next/link"
import { useStateContext } from '../context/StateContext' 
import {Cart} from './'
import {AiOutlineShopping} from "react-icons/ai"
const Navbar = () => {
    const {showCart, setShowCart, totalQuantities}=useStateContext()
  return (
    <div>
        <p>
            <Link href="/">
                Boat Clone
            </Link>
        </p>

        <button onClick={()=>setShowCart(true)}>
            <AiOutlineShopping/>
            <span>{totalQuantities}</span>
        </button>
        {showCart && <Cart/>}
    </div>
  )
}

export default Navbar