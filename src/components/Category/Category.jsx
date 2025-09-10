import React from 'react'
import Heading from '../Heading/Heading';
import fruitsCat from '../../assets/fruits-and-veggies.png'
import SeafoodCat from '../../assets/meat-and-seafood.png'
import dairyCat from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


function Category() {

const renderCards = category.map(card =>{
    return(

        // card
        <div key={card.id}  className='flex-1 basis-[100px]'>
            {/* card image */}
            <div className='w-full min-h-[30vh] relative -mb-10'>
                <img src={card.image} className='absolute bottom-0'/>
            </div>

            {/* card content */}

            <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>

<Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-white cursor-pointer
      px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300'>See All</Link>
            </div>
        </div>
    )
})

  return (
    <section>
        <div className='py-20 max-w-[1400px] mx-auto px-10'>
          <Heading highlight="Shop" heading= "by Category"/>

          {/* Category cards */}
          <div className='flex gap-10 md:mt-15 flex-wrap'>
            {renderCards}
          </div>
        </div>
    </section>
  )
}

export default Category;


const category = [
{
    id: 1,
    title:'fruits & veggies',
    description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
    image: fruitsCat,
    path: "/Fruits"
},
{
    id: 2,
    title:'Meat & Seafood',
    description: 'High-quaility, responsibly sourced meat and seafoods.Choose from fresh cuts, marinated options, and more.',
    image: SeafoodCat,
     path: "/Seafood"
},
{
    id: 3,
    title:'Dairy & eggs',
    description: 'Wholesome dairy products and free range eggs.Fresh creamy milk and yogut to obtained all types of cheeses.',
    image: dairyCat,
    path: "/Dairy"
},

]