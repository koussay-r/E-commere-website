import React, { useEffect, useState } from 'react'
import axios from "axios"
import Intro from "./Intro"
import loader from "./../../assests/1494.gif"
import About from './About'
export default function Home() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const handleHomeProducts=async()=>{
            try{
                const res=await axios.get("http://localhost:9000/products")
                console.log(res)
                setProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        handleHomeProducts()
    },[])
  return (
   <>
   {
    products.length!==0?
    <div>
        <Intro item={products[0]} />
        <About item={products} />
    </div>
    :
    <img src={loader} className='block m-auto mt-[30%] md:mt-[20%]' />
   }
   </>
  )
}
