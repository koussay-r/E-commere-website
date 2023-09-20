import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Products_details() {
    const [productPicked,setProductPicked]=useState(JSON.parse(localStorage.getItem("productPicked")))
    const [ProductData,setProductData]=useState({})
    useEffect(()=>{
        console.log(productPicked)
        const handleGetDataForProductPicked=async()=>{
            try{
                const res=await axios.post("http://localhost:9000/ProductDetails",{_id:productPicked})
                setProductData(res.data[0])
            }catch(err){
                console.log(err)
            }
        }
        handleGetDataForProductPicked()
        },[])
  return (
    <div>
        <img src={ProductData.image}/>
    </div>
  )
}
