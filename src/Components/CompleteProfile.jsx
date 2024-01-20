import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CompleteProfile = () => {
  const langState = useSelector(state => state.user.lang)
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
    <div className="relative w-656 h-420 bg-white rounded-xl shadow p-8">
      <div className="mb-4 text-center text-slate-700 text-xl font-bold font-Lato">
          {langState === "en" ? "Complete your profile" : "Vervollständigen Sie Ihr Profil"}
        </div>

      {/* Fullname in a separate row */}
      <div className="mb-4">
        <label className="text-slate-700 text-xs font-normal font-Lato block">
          {langState === "en" ? "Fullname" : "Vervollständigen Sie Ihr Profil"}
          </label>
        <input type="text" className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700" />
      </div>

      {/* Phone number and Emergency contact in a row */}
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="text-slate-700 text-xs font-normal font-Lato block">Phone number</label>
          <input type="password" className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700" />
        </div>
        <div className="w-1/2 ml-2">
          <label className="text-slate-700 text-xs font-normal font-Lato block">Emergency contact</label>
          <input type="password" className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700" />
        </div>
      </div>

      {/* Age and Address in a row */}
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="text-slate-700 text-xs font-normal font-Lato block">Age</label>
          <input type="number" className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700" />
        </div>
        <div className="w-1/2 ml-2">
          <label className="text-slate-700 text-xs font-normal font-Lato block">Address</label>
          <input type="password" className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700" />
        </div>
      </div>

      {/* Create account button */}
      <button className="w-full h-12 bg-slate-700 text-white rounded-lg font-normal font-Lato">Create account</button>
    </div>
  </div>
  )
}

export default CompleteProfile
