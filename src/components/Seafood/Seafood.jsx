import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import BgSeafood from '../../assets/seafood-banner.jpg'
const Seafood = () => {
  return (
    <div>
<Categorypage title=" Meat & Seafood" bgImages={BgSeafood} categories={['Meat','Seafood' ]}/>
    </div>
  )
}

export default Seafood
