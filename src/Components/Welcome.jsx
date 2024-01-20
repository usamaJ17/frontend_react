import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const langState = useSelector(state => state.user.lang)

  return (
    <div>
    <div className="flex items-center justify-center h-screen bg-gray-50">
   <div className="relative w-656 h-300 bg-white rounded-xl shadow p-8">
     <div className="mb-4 text-center text-slate-700 text-xl font-bold font-Lato">
     {langState === "en" ? "Introduction" : "Einführung"}
      </div>
     
     <div className="mb-4">
       <p className="text-slate-700 text-xs font-normal font-Lato block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit</p>

     </div>    
     
     <Link to='/accept'><button className="w-full h-12 bg-slate-700 text-white rounded-lg font-normal font-Lato mt-6">
     {langState === "en" ? "Continue" : "Weitermachen"}
      
      </button></Link>
   </div>
 </div>
 </div>
  )
}

export default Welcome
