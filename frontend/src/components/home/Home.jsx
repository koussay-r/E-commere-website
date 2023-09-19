import React, { useEffect, useState } from 'react'
import axios from "axios"
import Intro from "./Intro"
export default function Home() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const handleHomeProducts=async()=>{
            try{
                const res=await axios.get("http://localhost:9000/products")
                setProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        handleHomeProducts()
    },[])
  return (
   <>
   <Intro item={products[0]} />
   </>
  )
}
