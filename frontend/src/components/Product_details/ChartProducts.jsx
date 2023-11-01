import React, { useState } from 'react'
import axios from "axios"
import {LuArrowBigDownDash,LuArrowBigUpDash} from "react-icons/lu"
export default function ChartProducts(props) {
  const [numberOfThisItems,setNumberOfThisItems] = useState(props.numberOfThisItem)
  const handleAddMoreOfThisItem=async()=>{
    setNumberOfThisItems(numberOfThisItems+1)
    try{
      await axios.post("http://localhost:9000/addOrRemoveToCartTheSameProduct",{_id:props.productId,encreaseOrDecrease:true})
    }catch(Err){
      console.log(Err);
    }

  }
const handleRemoveOfThisItem=async()=>{
  setNumberOfThisItems(numberOfThisItems-1)
  try{
    await axios.post("http://localhost:9000/addOrRemoveToCartTheSameProduct",{_id:props.productId,encreaseOrDecrease:false})
  }catch(Err){
    console.log(Err);
  }
}
  return (
    <div className='flex border justify-between'>
      <div className='border border-t-transparent border-b-transparent border-l-transparent'>
        <img laoding="lazy" src={props.picture} className='w-[100px] h-[150px]'/>
      </div>
      <div className=' w-[280px] pt-5 '>
          <p>{props.name}</p>
          <p>{props.price}</p>
          <p>Size : {props.size}</p>
          <button className=''>Remove</button>
      </div>
      <div className='flex justify-center pt-14 w-[70px] border border-t-transparent border-b-transparent border-r-transparent'>
      <p className='text-[24px] pr-1'>{numberOfThisItems}</p>
      <div className=''>
        <LuArrowBigUpDash onClick={handleAddMoreOfThisItem}  className='cursor-pointer'/>
        <LuArrowBigDownDash onClick={handleRemoveOfThisItem}  className='cursor-pointer mt-2'/>
      </div>
      </div>
    </div>
  )
}
