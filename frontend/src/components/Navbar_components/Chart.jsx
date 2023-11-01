import React, { useContext, useEffect, useState } from 'react'
import {IoCloseSharp} from "react-icons/io5"
import {motion} from "framer-motion"
import { AuthenticatedContext } from '../../App'
import ChartProducts from './../Product_details/ChartProducts'
import axios from 'axios';
const show = {
    opacity: 1,
    display: "block"
  };
  
  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  };
export default function Chart() {
    const [isVisible, setIsVisible]=useContext(AuthenticatedContext)
    const hanldeCloseOpen=()=>{
        setIsVisible(!isVisible)
    }
    const [CartProducts,setCartProducts]=useState([])
    useEffect(()=>{
      const handleFetchingCartProducts=async()=>{
        try{
          const res=await axios.get("http://localhost:9000/fetchCartProducts")
          setCartProducts(res.data)
          console.log(res.data)
        }catch(Err){
          console.log(Err);
        }
      }
      handleFetchingCartProducts()
    },[])
  return (
    <>
    <div onClick={hanldeCloseOpen} className={`w-full transition-all duration-150  top-0 h-[100vh] ${isVisible?"fixed" : "hidden"} opacity-70 bg-gray-200`}>

    </div>
    <motion.div  animate={isVisible ? show : hide} className={`fixed  border top-0 h-[100hv] bg-white bottom-0 right-0 w-[500px]`}>
        <div className='flex font-bold p-4 justify-between border border-transparent border-b shadow'>
            <p>
                YOUR CHART
            </p>
            <IoCloseSharp onClick={hanldeCloseOpen}  size={"26"} className='cursor-pointer'/>
        </div>
        {
          CartProducts.length===0?
        <p className='text-center text-slate-700 mt-[60%]'>
            No items found.
        </p>:
        <div>
          {
            CartProducts.map(item=>{
              return <ChartProducts key={item._id} _id={item._id} productId={item.productId} name={item.name} price={item.price} size={item.size} picture={item.picture} numberOfThisItem={item.numberOfThisItem} />
            })
          }
        </div>
        }
    </motion.div>
    </>
  )
}
