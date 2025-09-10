import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${FreshFruits})`}}>
<div className='md:bg-transparent max-w-[1400px] bg-zinc-100  md:flex-row mx-auto px-10 flex-col flex py-10'>
      <span className='md:text-9xl text-orange-500 text-6xl font-bold transform md:-rotate-90 md:self-center h-fit'>20%</span>
      <div className='max-w-[700px] '>
        <h3 className=' text-4xl md:text-7xl text-zinc-800 font-bold'>First Order Discount!</h3>
        <p className=' text-zinc-600 my-6'>
 Enjoy an exclusive first order discount on our grocery website! Shop from Grocify fresh essentials and save big on your first purchase. Fast delivery and quality guranteed.
        </p>
        <Button content = "Get a Discount"/>
      </div>
    </div>
    </section>
    
  )
}

export default Discount
