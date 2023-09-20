import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Category() {
  const [productsFound,setProductsFound]=useState([])
  const [productRequested,setProductsRequested]=useState(JSON.parse(localStorage.getItem("type")))
  useEffect(()=>{
    const handleFindRightProducts=async()=>{
      try{
        const res=await axios.post("http://localhost:9000/requestProducts",{type:productRequested})
        console.log(res)
      }
      catch(err){
        console.log(err)
      }
    }
    handleFindRightProducts()
  },[])
  return (
    <div>
      <p>

      </p>
      <div className='mt-10 grid sm:grid-cols-2 md:grid-cols-4 '>

      </div>
    </div>
  )
}
