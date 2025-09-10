import React from 'react'


function Button(props) {
  return (
    <div>
      <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white cursor-pointer
      px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300'>
      {props.content}
      </button>
    </div>
  )
}

export default Button
