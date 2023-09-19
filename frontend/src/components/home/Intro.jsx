import React from 'react'

export default function Intro(props) {
  return (
    <div className='lg:flex border border-trasnparent border-b shadow-sm  lg:flex-row-reverse  justify-between'>
          <img src={props.item.image} className='lg:w-[50%] bg-center h-[380px] lg:h-[580px] w-full object-cover '/>
        <div className='lg:w-[50%] w-full pl-24 block m-auto '>
            <p className=''>Now in Stores</p>
            <p className=''>New SS19 Collection</p>
            <p className=''>Discover the new Coats, Shirt, Pants, Shorts and Accessories MODULAR has to offer.</p>
            <button>See Collection</button>
        </div>
    </div>
  )
}
