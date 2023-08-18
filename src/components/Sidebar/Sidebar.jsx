import React from 'react'
import Picture from './Picture'
import Categories from './Categories'
import Filter from './Filter'
import Discount from './Discount'
import Facecare from '../Productpage/Facecare'

const Sidebar = () => {
  return (
    <div>
        <Picture/>
        <Filter/>
        <Categories/>
        <Discount/>
        {/* <Facecare/> */}
    </div>
  )
}

export default Sidebar