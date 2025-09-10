import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import BgAll from '../../assets/all-banner.jpg'

const Allproducts = () => {
  return (
    <div>
     <Categorypage title="All Products" bgImages={BgAll} categories={['All']}/>
    </div>
  )
}

export default Allproducts
