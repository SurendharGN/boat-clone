import React from 'react'
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='flex flex-col text-center justify-center items-center mt-5'>
        
        <p>2023 Boat Clone All rights reserved</p>
        <p className='flex gap-5 mt-2'>
            <AiFillInstagram className='h-6 w-6'/>
            <AiOutlineTwitter className='h-6 w-6'/>
        </p>
    </div>
  )
}

export default Footer