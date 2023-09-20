import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(props) {
  const handlePickProduct=()=>{
    localStorage.setItem("productPicked",JSON.stringify(props.item._id))
  }
  return (
    <Link to={"/product"}>
    <div onClick={handlePickProduct}  className='border cursor-pointer sm:hover:shadow-2xl sm:hover:z-10  '>
      <img src={props.item.image} className=''/>
      <div className='py-9 border border-transparent border-t'>
        <p className='pl-4 pb-3 text-[20px]'>{props.item.name}</p>
        <p className='pl-4 text-[14px]'>${props.item.price}.00</p>
      </div>
    </div>
    </Link> 
  )
}
