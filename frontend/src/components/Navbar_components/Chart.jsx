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
          console.log(res.data[0])
          setCartProducts(res.data)
        }catch(Err){
          console.log(Err);
        }
      }
      handleFetchingCartProducts()
    },[])
  return (
    <>
    <div className={`w-full transition-all duration-150  top-0 h-[100vh] ${isVisible?"fixed" : "hidden"} opacity-70 bg-gray-200`}>

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
         <ChartProducts _id={CartProducts[0]._id} productId={CartProducts[0].productId} name={CartProducts[0].name} price={CartProducts[0].price} size={CartProducts[0].size} picture={CartProducts[0].picture} numberOfThisItem={CartProducts[0].numberOfThisItem} />
        </div>
        }
    </motion.div>
    </>
  )
}
