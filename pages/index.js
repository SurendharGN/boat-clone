import React from 'react'

const Home = () => {
  return (
    <>
        HeroBanner

        <div>
            <h2>Best selling products</h2>
            <p>Speakers of many variations</p>
        </div>

        <div>
            {['product1','product2'].map((product)=>product)}
        </div>

        Footer
    </>
  )
}

export default Home