import React, { useState } from 'react'
import axios from "axios"
export default function Subscribe() {
    const [form,setForm]=useState({
        name:"",
        lastName:"",
        email:""
    })
    const [subscriber,setSubscriber]=useState(false)
    const [loading,setLoading]=useState(false)
    const handleName=(e)=>{
        setForm({...form,name:e.target.value})
    }
    const handleLastName=(e)=>{
        setForm({...form,lastName:e.target.value})
    }
    const handleEmail=(e)=>{
        setForm({...form,email:e.target.value})
    }
    const handleSubscribe=async()=>{
        try{
            setLoading(true)
            await axios.post("http://localhost:9000/subscribe",form)
            setLoading(false)
            setSubscriber(true)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='mt-10 pb-10'>
        <p className='text-center text-[40px] font-bold'>
            Subscribe
        </p>
        <div className={`flex md:flex-row flex-col ${subscriber?"hidden":"block"} mt-10 justify-around`}>
            <input onChange={handleName} type='text' className='border h-[40px] pl-3 md:pl-0 w-full md:w-[350px] border-transparent border-b-gray-300 focus:border-b-gray-900 border-b-2 outline-none' placeholder='First Name' />
            <input onChange={handleLastName} type='text' className='border mt-5 md:mt-0 h-[40px] pl-3 md:pl-0 w-full md:w-[350px] border-transparent border-b-gray-300 focus:border-b-gray-900 border-b-2 outline-none' placeholder='Last Name' />
            <input onChange={handleEmail} type='text' className='border mt-5 md:mt-0 h-[40px] pl-3 md:pl-0 w-full md:w-[350px] border-transparent border-b-gray-300 focus:border-b-gray-900 border-b-2 outline-none' placeholder='E-Mail' />
           { loading? <button className='text-white bg-black/80 py-3 px-5'>Please wait</button>:
            <button onClick={handleSubscribe} className='text-white mt-5 md:mt-0 bg-black/80 py-3 px-5'>Subscribe</button>}
        </div>
        <div className={`w-[95%]  ${subscriber?"block":"hidden"}  bg-[#dddddd] p-4 mt-3  mx-auto`}>
            <p className='text-center'>Thank you! Your submission has been received!</p>
        </div>
    </div>
  )
}
