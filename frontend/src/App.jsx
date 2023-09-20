import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/home/Home'
import Subscribe from './components/Subscribe'
import Policy from './components/Policy'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Products_details from './components/Product_details/Products_details'
import Category from "./components/Navbar_components/Category"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Category' element={<Category/>}/>
      <Route path='/product' element={<Products_details/>}/>
    </Routes>
    </BrowserRouter>
    <Subscribe/>
    <Policy/>
    </>
  )
}
