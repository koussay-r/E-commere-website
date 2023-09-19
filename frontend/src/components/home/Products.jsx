import React from 'react'

export default function Products(props) {
  return (
    <div  className='border cursor-pointer hover:shadow-2xl hover:z-10 float-left  '>
      <img src={props.item.image} className=''/>
      <div className='py-9 border border-transparent border-t'>
        <p className='pl-4 pb-3 text-[20px]'>{props.item.name}</p>
        <p className='pl-4 text-[14px]'>${props.item.price}.00</p>
      </div>
    </div>
  )
}
