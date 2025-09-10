import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import BgDairy from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
     <Categorypage title="Dairy & Eggs" bgImages={BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy
