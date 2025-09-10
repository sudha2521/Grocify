import React, {useEffect, useState} from 'react'
import { GiHearts } from "react-icons/gi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';


function Navbar() {

    const[ShowMenu, setShowMenu]= useState(false);
    const[isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!ShowMenu);
    }

useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll)
}, [])

  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
        <nav className=' max-w-[1400px] px-10 max-auto md:h-[14vh] h-[12vh]
        flex justify-between items-center' >

            {/* Logo*/}
 <Link to='/'
  className='text-3xl font-bold'
 >Gr<span className='text-orange-500 uppercase'>O</span>cify</Link>

 {/* Desktop menu */}

 <ul className='md:flex items-center gap-x-15 hidden'>
    <li>
        <a href='#' className='font-semibold tracking-wider  text-orange-500'>Home</a>
    </li>
     <li>
        <a href='#' className='font-semibold tracking-wider  text-zinc-500 hover:text-orange-500'>About Us</a>
    </li>
     <li>
        <a href='#' className='font-semibold tracking-wider  text-zinc-500 hover:text-orange-500'>Process</a>
    </li>
     <li>
        <a href='#' className='font-semibold tracking-wider  text-zinc-500 hover:text-orange-500'>Contact Us</a>
    </li>
 </ul>

 {/*nav action*/}

 <div className='flex items-center gap-x-5'>

    {/* input field */}

    <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
        <input type='text' name='text' id='text'placeholder='Search.. ' autoComplete='off'
        className='flex-1 h-[5vh] px-3 focus:outline-none'/>

        <button className='bg-graident-to-b from-orange-400 to-orange-500 text-white w-10 h-10
         flex justify-center items-center rounded-full text-xl '>
            <IoSearch />
        </button>
    </div>
    <a href='#' className='text-2xl text-zinc-500 hover:text-amber-600'>
<GiHearts />
    </a>

      <a href='#' className='text-2xl text-zinc-500 hover:text-amber-600'>
<HiMiniShoppingBag />
    </a>
{/* hamburger */}
    <a href='#' className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
        <TbMenu3/>
    </a>
      
 
 </div>

 {/* mobile menu */}

  <ul className={`flex flex-col gap-y-12 bg-orange-500/15 p-10 backdrop-blur-xl  shadow-xl rounded-xl 
   items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${ShowMenu ? 'left-1/2' : ""}`}>
    <li>
        <a href='#' className='font-semibold tracking-wider text-orange-500'>Home</a>
    </li>
     <li>
        <a href='#' className='font-semibold tracking-wider  text-zinc-500 hover:text-orange-500'>About Us</a>
    </li>
     <li>
        <a href='#' className='font-semibold tracking-wider  text-zinc-500 hover:text-orange-500'>Process</a>
    </li>
     <li>
        <a href='#' className='font-semibold tracking-wider  text-zinc-500 hover:text-orange-500'>Contact Us</a>
    </li>

     <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
        <input type='text' name='text' id='text'placeholder='Search.. ' autoComplete='off'
        className='flex-1 h-[5vh] px-3 focus:outline-none'/>

        <button className='bg-graident-to-b from-orange-400 to-orange-500 text-white w-10 h-10
         flex justify-center items-center rounded-full text-xl '>
            <IoSearch />
        </button>
    </li>
 </ul>
        </nav>
    </header>
  )
}

export default Navbar
