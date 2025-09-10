import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Productlist from '../Productlist/Productlist'
import products from '../Productlist/Productlist'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'

const Products = () => {

const Categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood']
const [activeTab, setActiveTab] = useState('All');

let filteredItems = activeTab=== 'All'
? Productlist : Productlist.filter(item => item.Category=== activeTab)


const renderCards = filteredItems.slice(0, 8).map((products, index) => (
    <Cards key={index}
    image={products.image} name={products.name} price={products.price}/>
));
    

  return (
   <section>
    <div className='max-w-[1400px] mx-auto px-10'>
        <Heading highlight='Our' heading='Products'/>

        {/* Tabs */}
        <div className='flex flex-wrap gap-3 justify-center mt-10 cursor-pointer'> 
            {Categories.map(category => {
                return(
                    <button key={category} className={` rounded-lg px-5 py-2 text-lg font-medium 
                    ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' :'bg-zinc-100' }`}
                    onClick={() => setActiveTab(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
{/* Product listing */}

<div className='grid grid-cols-1 gap-9 md:grid-cols-4 mt-20'>
    {renderCards}
</div>
    </div>
    <div className='mt-15 mx-auto w-fit'>
        <Link to="/Allproducts" className='bg-gradient-to-b from-orange-400 to-orange-500 text-white cursor-pointer
      px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300'>View All</Link>
    </div>
   
   </section>
  )
}

export default Products



