import React, { useContext } from 'react'
import {IoCloseSharp} from "react-icons/io5"
import {motion} from "framer-motion"
import { AuthenticatedContext } from '../../App'
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
    console.log("hey");
  return (
    <>
    <div className={`w-full transition-all duration-150  top-0 h-[100vh] ${isVisible?"fixed" : "hidden"} bg-white/50`}>

    </div>
    <motion.div  animate={isVisible ? show : hide} className={`fixed  border top-0 h-[100hv] bg-white bottom-0 right-0 w-[450px]`}>
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
