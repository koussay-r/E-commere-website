import React, { useContext, useEffect } from 'react'
import {IoCloseSharp} from "react-icons/io5"
import {motion} from "framer-motion"
import { AuthenticatedContext } from '../../App'
export default function Chart() {
    const [OpenClose,setOpenClose]=useContext(AuthenticatedContext)
    const hanldeCloseOpen=()=>{
        setOpenClose(!OpenClose)
    }
  return (
    <>
    <motion.div 
    initial={"hidden"}
    whileInView={OpenClose===false?"visible":"hidden"}
    viewport={{once:true,amount:0.5}}
    transition={{delay:0.4,duration:0.4}} 
    variants={{
        hidden:{opacity:0,x:0},
        visible:{opacity:1,x:0}
    }}className={`w-full  top-0 h-[100vh] ${OpenClose?"fixed" : "hidden"} bg-white/80`}>

    </motion.div>
    <motion.div 
    initial={"hidden"}
    whileInView={OpenClose===false?"visible":"hidden"}
    viewport={{once:true,amount:0.5}}
    transition={{delay:0.4,duration:0.4}}
    variants={{
        hidden:{opacity:0,x:20},
        visible:{opacity:1,x:0}
    }} className={`fixed border top-0 h-[100hv] ${OpenClose?"fixed":"hidden"} bg-white bottom-0 right-0 w-[450px]`}>
        <div className='flex font-bold p-4 justify-between border border-transparent border-b shadow'>
            <p>
                YOUR CHART
            </p>
            <IoCloseSharp onClick={hanldeCloseOpen}  size={"26"} className='cursor-pointer'/>
        </div>
        <p className='text-center text-slate-700 mt-[60%]'>
            No items found.
        </p>
    </motion.div>
    </>
  )
}
