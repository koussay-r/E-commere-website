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
    <div className='flex p-2 px-6 border border-transparent border-b shadow justify-between'>
        <div className='flex gap-4'>
            <p className='text-black text-[26px]'>MDLR</p>
            <p className='text-black lg:block hidden mt-2'>Online Store</p>
        </div>
        <div className='flex mt-[1px] gap-10'>
            <ul className='md:flex mt-1 hidden gap-12'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Tops</li>
                <li className='cursor-pointer'>Bottoms</li>
                <li className='cursor-pointer'>Accessories</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className='flex cursor-pointer mt-2 gap-1'>
                <AiOutlineShoppingCart size={"20"} className=''/>
                <p className='bg-black text-white h-[20px] mt-[1px] text-[12px] w-[18px] pl-[6px]  rounded-full'>0</p>
            </div>
            <BiMenuAltRight onClick={handleMenu} size={"30"} className='md:hidden mt-[2px] block'/>
        </div>
    </div>
        <div className={` transition-all hidden duration-500 ${menu===false?"h-0":"h-[350px]"} `}>
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
