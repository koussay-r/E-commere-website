import React, { useEffect, useState } from 'react'
import axios from "axios"
import loader from "./../../assests/1494.gif"
export default function Products_details() {
    const [productPicked,setProductPicked]=useState(JSON.parse(localStorage.getItem("productPicked")))
    const [ProductData,setProductData]=useState({})
    const [sendPic,ssetSendPic]=useState({
        name:"",
    product:"",
    price:"",
    type:"",
    discription:"",
    picture:""
    })
    useEffect(()=>{
        const handleGetDataForProductPicked=async()=>{
            try{
                const res=await axios.post("http://localhost:9000/ProductDetails",{_id:productPicked})
                setProductData(res.data[0])
                console.log(res.data[0]);
            }catch(err){
                console.log(err)
            }
        }
        handleGetDataForProductPicked()
        },[])
  return (
    <>
    {  ProductData.length!==0?        <div className='flex border border-transparent border-b shadow  flex-row '>
        <img src={ProductData.image} className='md:h-[650px] h-[400px]  w-full  object-cover  md:w-[35%]'/>
        <div className=' w-[55%] ml-20 mt-28'>
            <p className='text-[60px]'>{ProductData.name}</p>
            <p className='text-[30px]'>${ProductData.price}.00</p>
            <p className='mt-10'>{ProductData.discription}</p>
            <div className='block w-full m-auto'>
                <p className='text-[20px] mt-10 font-semibold'>Size</p>
                <select className='w-full bg-gradient-to-b from-white to-gray-200 mt-5 pl-4 py-2 '>
                    <option selected>Select size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XLL</option>
                </select>
                <p className='mt-4'>Quantity</p>
                <input type={"number"} min={"1"} max={"100"} className='outline-none border border-gray-400 mt-2 w-[60px] py-1 px-2' placeholder='1' />
            </div> 
            <button  className='mt-4 bg-black/80 text-white px-5 py-3'>Add to chart</button>
        </div>
    </div>:
    <img src={loader} className='block m-auto pb-[200px] mt-[30%] md:mt-[20%]' />}
    </>
  )
}
