import { Link } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homepage from '../homepage/Homepage'
import Register from '../Register/Register'
import Login from '../Register/Login'
import SinglePage from '../SinglePage'
import Facecare from '../Productpage/Facecare'
import Sidebar from '../Sidebar/Sidebar'
import Bodycare from '../Productpage/Bodycare'
import SingleBodycare from '../SingleBodycare'
import { Soaps } from '../Productpage/Soaps'
import { Singlesoaps } from '../Singlesoaps'
import { Products } from '../Productpage/Products'
import { SingleProduct } from '../SingleProduct'
import { Cartpage } from '../Productpage/Cartpage'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/face' element={<Facecare/>}/>
            <Route path='/face/:id' element={<SinglePage/>}/>
            <Route path='/oils' element={<Bodycare/>}/>
            <Route path='/oils/:id' element={<SingleBodycare/>}/>
            <Route path='/soaps' element={<Soaps/>}/>
            <Route path='/soaps/:id' element={<Singlesoaps/>}/>
            <Route path='/home' element={<Products/>}/>
            <Route path='/home/:id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cartpage/>}/>

        </Routes>
        
    </div>
  )
}

export default Allroutes