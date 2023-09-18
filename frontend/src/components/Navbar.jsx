import React, { useState } from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BiMenuAltRight} from "react-icons/bi"
export default function Navbar() {
    const [menu,setMenu]=useState(false)
    const handleMenu=()=>{
        setMenu(!menu)
    }
  return (
    <>
    <div className='flex p-3 px-8 border border-transparent border-b shadow justify-between'>
        <div className='flex gap-4'>
            <p className='text-black text-[30px]'>MDLR</p>
            <p className='text-black mt-2'>Online Store</p>
        </div>
        <div className='flex mt-1 gap-10'>
            <ul className='md:flex mt-2 hidden gap-12'>
                <li>Home</li>
                <li>Tops</li>
                <li>Bottoms</li>
                <li>Accessories</li>
                <li>Contact</li>
            </ul>
            <div className='flex cursor-pointer mt-2 gap-1'>
                <AiOutlineShoppingCart size={24} className=''/>
                <p className='bg-black text-white h-[23px] mt-[1px] text-[14px] w-[20px] pl-[6px]  rounded-full'>0</p>
            </div>
            <BiMenuAltRight onClick={handleMenu} size={"37"} className='md:hidden block'/>
        </div>
    </div>
        <div className={` transition-all duration-500 ${menu===false?"h-0":"h-[350px]"} `}>
            <div>
        <ul className='flex flex-col-reverse mt-2   '>
                <li className='border pl-8 pb-6 mt-6  border-transparent border-b shadow'> <p className='cursor-pointer w-fit' >Contact</p> </li>
                <li className='border pl-8 pb-6 mt-6   border-transparent border-b shadow'> <p className='cursor-pointer w-fit' >Accessories</p> </li>
                <li className='border pl-8 pb-6 mt-6   border-transparent border-b shadow'> <p className='cursor-pointer w-fit' >Bottoms</p> </li>
                <li className='border pl-8 pb-6 mt-6   border-transparent border-b shadow'> <p className='cursor-pointer w-fit' >Tops</p> </li>
                <li className='border pl-8 pb-6 mt-6   border-transparent border-b shadow'> <p className='cursor-pointer w-fit' >Home</p> </li>
            </ul>
            </div>
        </div>
    </>
  )
}
