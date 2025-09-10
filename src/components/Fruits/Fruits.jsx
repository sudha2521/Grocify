import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import Bgfruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <Categorypage title="Fruits & Veggies" bgImages={Bgfruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits
