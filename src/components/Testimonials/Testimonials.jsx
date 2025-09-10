import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from  '../../assets/customer1.jpg'
import Customer2 from  '../../assets/customer2.jpg'
import Customer3 from  '../../assets/customer3.jpg'
import Customer4 from  '../../assets/customer4.jpg'
import Customer5 from  '../../assets/customer5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Testimonials = () => {

    
  return (
    <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20 '>
      <Heading highlight = "Customers" heading = "Saying"/>

      <div className='py-5 mt-5 flex justify-end gap-x-3'> 
<button className='custom-prev text-2xl text-zinc-800 hover:bg-gradient-to-b hover:cursor-pointer
 hover:from-orange-400 hover:to-orange-500 rounded-lg hover:text-white w-11 h-11 bg-zinc-100 flex justify-center items-center'>
    <IoIosArrowBack />

</button>

<button className='custom-next text-2xl text-zinc-800 hover:bg-gradient-to-b hover:cursor-pointer
 hover:from-orange-400 hover:to-orange-500 rounded-lg w-11 h-11 hover:text-white  bg-zinc-100 flex justify-center items-center'>
<IoIosArrowForward />
</button>

      </div>

      <Swiper navigation={{
        nextEl:".custom-next",
        prevEl:".custom.prev"
      }} 
      loop={true}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 20},
          764: {slidesPerView: 2, spaceBetween: 20},
          1024: {slidesPerView: 3, spaceBetween: 20 },
      }}
      modules={[Navigation]} className="mySwiper">
       {
        review.map(item => {
            return(
                 <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>
        <div className=''>
             <div className='flex gap-5 items-center'>
            <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                 <img src={item.image} className='w-16 h-16 rounded-full object-cover'/>
            </div>
           
                   </div>
        </div>

                <h5 className='text-xl font-bold'>{item.name}</h5>
                <p className='text-zinc-600'>{item.profession}</p>
                <span className='flex mt-2 text-xl'>
                  {Array.from({length: item.rating}, (_, index) => (
                    <span className='flex text-yellow-300' key={index}> <FaStar/> </span>
                  ))}
                </span>
         
<div className='mt-10 min-h-[15vh]'>
<p className='text-zinc-600'>{item.para}</p>
</div>
      </SwiperSlide>
            )
        })
       }
      </Swiper>


    </div>
    </section>

  )
}

export default Testimonials



const review = [
    {
        id: 1,
        name:"Natcha Thomas",
        profession:"Nutritionlist",
        rating:4 ,
        para:"FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
        image:Customer5,
    },

      {
        id: 2,
        name:"Emily Johnson",
        profession:"Food Blogger",
        rating:3 ,
        para:"FreshBasket is my go-to store for all grocery needs. Their product is always best and delivery is super fast. I love the user-friendly interface and verity of organic options!",
        image:Customer1,
    },

      {
        id: 3,
        name:"Gravid Smith",
        profession:"Chef",
        rating:4 ,
        para:"As a chef quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples, Highly recommended!",
        image:Customer2,
    },

      {
        id: 4,
        name:"Alya Zahra",
        profession:"Model",
        rating:4 ,
        para:"Shopping online with FreshBasket has saved so much time. I trust them for my family's weekly grocery always fresh, affortable, and realiable.",
        image:Customer3
    },

      {
        id: 5,
        name:"Carles Mondes",
        profession:"Fitness Coch",
        rating:5 ,
        para:"I appericiate the selection of healthy food and clean-lable products. FreshBasket has been a great partner in my willness journey.",
        image:Customer4,
    },
]
