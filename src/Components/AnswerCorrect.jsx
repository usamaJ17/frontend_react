import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Corrct = ({correctanswer , onNextQuestion}) => {
  const langState = useSelector(state => state.user.lang)
  return (
    <div>
    <div className="flex items-center justify-center mt-16">

   <div className="relative w-656 h-340 bg-white rounded-xl shadow p-8">
   <svg xmlns="http://www.w3.org/2000/svg" width="96" height="86" viewBox="0 0 96 86" fill="none" style={{ opacity: '0.5', flexShrink: 0, position: 'absolute', top: "10%", left: '50%', transform: 'translateX(-50%)' }}>
          <g clipPath="url(#clip0_4_297)">
            <path d="M66.6667 0H29.3333C24.9167 0 21.3167 3.66172 21.4833 8.09609C21.5167 8.98633 21.55 9.87656 21.6 10.75H4C1.78333 10.75 0 12.5473 0 14.7812C0 30.3352 5.58333 41.1523 13.0833 48.4926C20.4667 55.732 29.4667 59.377 36.1 61.2246C40 62.3164 42.6667 65.5918 42.6667 68.884C42.6667 72.3945 39.8333 75.25 36.35 75.25H32C29.05 75.25 26.6667 77.652 26.6667 80.625C26.6667 83.598 29.05 86 32 86H64C66.95 86 69.3333 83.598 69.3333 80.625C69.3333 77.652 66.95 75.25 64 75.25H59.65C56.1667 75.25 53.3333 72.3945 53.3333 68.884C53.3333 65.5918 55.9833 62.2996 59.9 61.2246C66.55 59.377 75.55 55.732 82.9333 48.4926C90.4167 41.1523 96 30.3352 96 14.7812C96 12.5473 94.2167 10.75 92 10.75H74.4C74.45 9.87656 74.4833 9.00313 74.5167 8.09609C74.6833 3.66172 71.0833 0 66.6667 0ZM8.15 18.8125H22.2167C23.7333 33.9465 27.0833 44.0582 30.8667 50.8273C26.7167 48.9797 22.4 46.3762 18.6667 42.7145C13.3333 37.4906 9 29.9488 8.16667 18.8125H8.15ZM77.35 42.7145C73.6167 46.3762 69.3 48.9797 65.15 50.8273C68.9333 44.0582 72.2833 33.9465 73.8 18.8125H87.8667C87.0167 29.9488 82.6833 37.4906 77.3667 42.7145H77.35Z" fill="#344767" />
          </g>
          <defs>
            <clipPath id="clip0_4_297">
              <rect width="96" height="86" fill="white" />
            </clipPath>
          </defs>
        </svg>
     <div className="mb-4 text-center text-slate-700 text-xl font-bold font-Lato mt-28">{correctanswer} {langState === "en" ? " is the correct answer." : "ist die richtige Antwort."}
</div>
     
     <div className="mb-4">
       <p className="text-slate-700 text-xs font-normal font-Lato block text-center">
       {langState === "en" ? "You have selected the right option.Keep up the good work." :
        "Sie haben die richtige Option ausgewählt.Machen Sie weiter so."}</p>

     </div>    
     
     <Link><button className="w-full h-12 bg-slate-700 text-white rounded-lg font-normal font-Lato mt-6" onClick={onNextQuestion}>
     {langState === "en" ? "Continue" : " Fortsetzen"}
      </button></Link>
   </div>
 </div>
 </div>
  )
}

export default Corrct
