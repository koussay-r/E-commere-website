import React, { useEffect, useState } from 'react'
import axios from "axios"
import Products from '../home/Products'
import loader from "./../../assests/1494.gif"
export default function Category() {
  const [productsFound,setProductsFound]=useState([])
  const [productRequested,setProductsRequested]=useState(JSON.parse(localStorage.getItem("type")))
  useEffect(()=>{
    const handleFindRightProducts=async()=>{
      try{
        const res=await axios.post("http://localhost:9000/requestProducts",{type:productRequested})
        setProductsFound(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    handleFindRightProducts()
  },[])
  return (
    <div>
      <p className='text-[70px] text-center font-bold '>
        {productRequested}
      </p>
      {
        productsFound.length===0? 
        <img src={loader} className='block m-auto pb-[200px] mt-[30%] md:mt-[20%]' />
        :

      <div className='mt-20 grid border border-transparent border-t-gray-200 border-b shadow sm:grid-cols-2 md:grid-cols-4 '>
      {
                productsFound.map(item=>{
                    return(
                            <Products key={item._id} item={item} />  
                    )
                })
            }
      </div>
      }
    </div>
  )
}
