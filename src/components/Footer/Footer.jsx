import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
   <footer className='bg-zinc-100 py-20'>
  <div className='max-w-[1400px] gap-y-10 flex-1 px-10 mx-auto flex flex-wrap'>
      <div className='flex-1 basis-[300px]'>

<a href='#'
  className='text-3xl font-bold'
 >Gr<span className='text-orange-500 uppercase'>O</span>cify</a>


 <p className='text-zinc-600 mt-6 max-w-[350px]'>
Bred for a high content of beneficial substances. Our product are all fresh and healthy.
 </p>

 <p className='text-zinc-800'>
    2025 &copy; all Rights Reserved
 </p>

    </div>

    <ul className='flex-1'>
<li className='mt-6'>
    <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
</li>
<li className='mt-6'>
    <a href='#' className=' text-zinc-800 mt-6 hover:text-orange-500'>About</a>
</li>

<li>
    <a href='#' className='text-zinc-800 mt-6 hover:text-orange-500'>FAQ's</a>
</li>
    </ul>


    <ul className='flex-1'>
<li className='mt-6'>
    <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
</li>
<li className='mt-6'>
    <a href='#' className=' text-zinc-800 mt-6 hover:text-orange-500'>Support Centre</a>
</li>

<li>
    <a href='#' className='text-zinc-800 mt-6 hover:text-orange-500'>Feedback</a>
</li>

<li>
    <a href='#' className='text-zinc-800 mt-6 hover:text-orange-500'>Contact Us</a>
</li>
    </ul>

    <div>
        <h5 className='text-zinc-800 text-2xl flex-1 font-bold'>
            Stay Connected
        </h5>
        <p className='mt-6 text-zinc-600'>
            Questions or feedbacks? <br/>
            We'd love to hear from you.
        </p>
        <div className='p-1 flex rounded-lg mt-6 '>
            <input className= 'h-[5vh] pl-4 flex-1' type='email' name='email' id='email' autoComplete='off' placeholder='Email Address'/>
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg
             bg-white hover:to-orange-600 cursor-pointer text-white text-2xl'>
                <IoIosArrowForward />
            </button>
        </div>
    </div>

  </div>

   </footer>
  )
}

export default Footer
