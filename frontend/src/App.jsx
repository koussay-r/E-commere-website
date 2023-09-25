import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/home/Home'
import Subscribe from './components/Subscribe'
import Policy from './components/Policy'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Products_details from './components/Product_details/Products_details'
import Tops from "./components/Navbar_components/Tops"
import Bottoms from "./components/Navbar_components/Bottoms"
import Accessories from "./components/Navbar_components/Accessories"
import Chart from './components/Navbar_components/Chart'
export const AuthenticatedContext=createContext()
export default function App() {
  const [OpenClose,setOpenClose]=useState(false)
  return (
    <>
    <AuthenticatedContext.Provider value={[OpenClose,setOpenClose]}>
    <BrowserRouter>
    <Navbar/>
    <Chart/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Tops' element={<Tops/>}/>
      <Route path='/Bottoms' element={<Bottoms/>}/>
      <Route path='/Accessories' element={<Accessories/>}/>
      <Route path='/product' element={<Products_details/>}/>
    </Routes>
    </BrowserRouter>
    </AuthenticatedContext.Provider>
    <Subscribe/>
    <Policy/>
    </>
  )
}
