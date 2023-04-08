import React from 'react';
import {useRef} from 'react'
import {AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineShopping} from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext';
import Link from 'next/link'
import {urlFor} from '../pages/index'



const Cart = () => {

    const {totalPrice,totalQuantities, cartItems, setShowCart,toggleCartItemQuantity,removeItem}=useStateContext()

    // useRef: It can be used to store a mutable value that does not cause a re-render when updated.
    const cartRef=useRef()

    return (
        <div ref={cartRef} className='flex flex-row w-screen justify-center items-center translate-y-20 border'>
            <div >
                <button onClick={()=>setShowCart(false)}>
                    
                    <span className='text-5xl'>Your cart</span>
                    <span>({totalQuantities} items)</span>
                </button>

                {cartItems.length<1 && (
                    <div>
                        <AiOutlineShopping size={100}/>
                        <h3>Your shopping bag is empty</h3>
                        <Link href='/'>
                            <button onClick={()=>setShowCart(false)}>
                                Continue shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div>
                    {cartItems.length >= 1 && cartItems.map((item,index)=>(
                        <div key={index}>
                            <img src={urlFor(item.image[0])} className='h-36'></img>
                            <div>
                                <div>
                                    <h5>{item.name}</h5>
                                    <h5>${item.price}</h5>
                                </div>

                                <div>
                                    
                                    <p className='flex'>
                                        <span className="w-10 h-10 border flex justify-center items-center" onClick={()=>toggleCartItemQuantity(item._id,"decrement")}><AiOutlineMinus/></span>
                                        <span className="w-10 h-10 border flex justify-center align-middle">{item.quantity}</span>
                                        <span className="w-10 h-10 border flex justify-center align-middle items-center" onClick={()=>toggleCartItemQuantity(item._id,"increment")}><AiOutlinePlus/>
                                        </span>
                                    </p>
                                </div>

                                
                                <div></div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length>=1 && (
                    <div>
                        <div>
                            <h6>Subtotal:</h6>
                            <h6>{totalPrice}</h6>
                        </div>
                        <div>
                            <button onClick=''>Checkout</button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Cart