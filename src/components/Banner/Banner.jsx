import React from 'react'

const Banner = ({title, bgImages}) => {
  return (
    <div style={{backgroundImage: `url(${bgImages})`}}
     className='flex justify-center items-center h-[50vh] mt-25 bg-center bg-cover relative'>
      <h2 className='text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10'>{title}</h2>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner
