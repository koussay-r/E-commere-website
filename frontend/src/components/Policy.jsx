import React from 'react'
import {BiLogoFacebook,BiLogoTwitter,BiLogoInstagram} from "react-icons/bi"
export default function Policy() {
  return (
    <div className='flex justify-between p-5 mt-10 border border-transparent border-t-gray-300'>
        <p >
        MODULAR
        </p>
        <ul className='flex  gap-5'>
            <li>Privacy Policy</li>
            <li>TErms & Conditions</li>
            <li>Shipping</li>
            <li>Returns</li>
        </ul>
        <div className='flex gap-5'>
            <BiLogoFacebook/>
            <BiLogoTwitter/>
            <BiLogoInstagram/>
        </div>
    </div>
  )
}
