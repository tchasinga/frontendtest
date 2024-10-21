import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className=' h-[236px] bgFooter flex flex-col py-[2%] items-center justify-center'>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-5 w-full">

          <div className="">
            <h1 className='text-slate-950 font-medium py-3'>Bel of mail ons</h1>   
            <p>012 - 345 67 89 <br/>
            klantenservice@knuswonen.nu</p>
          </div>

          <div className="flex-1">
            <h1 className='text-slate-950 font-medium py-3'>Openingstijden</h1>   
            <p>Maandag t/m donderdag van <br/>  8:30  tot 16:30 uur.
            Vrijdag van 8:30  tot 12:00 uur</p>
          </div>
          
          <div className="">
            <h1 className='text-slate-950 font-medium py-3'>Bel of mail ons</h1>   
            <p>Straatweglaan 123 <br/>
            1234 AB Dorpstad</p>
          </div>

          <div className="">
            <h1 className='text-slate-950 font-medium py-3'>Volg ons op onze sociale kanalen</h1>   
            <div className="flex justify-center items-center gap-3 text-orange-500 text-2xl">
                <FaFacebookF />
                <FaLinkedinIn />
            </div>
          </div>
      </div>
    </div>
  )
}
