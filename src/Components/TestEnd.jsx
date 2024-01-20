import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Testend = () => {
  const langState = useSelector(state => state.user.lang)

  return (
    <div>
    <div className="flex items-center justify-center mt-16">
   <div className="relative w-656 h-300 bg-white rounded-xl shadow p-8">
     <div className="mb-4 text-center text-slate-700 text-xl font-bold font-Lato">
              {langState === "en" ? "Questionnaire Finished" : "Fragebogen abgeschlossen"}
      
      </div>
     
     <div className="mb-4 mt-16">
       <p className="text-slate-700 font-Lato block text-center text-base font-medium font-['Lato']">
              {langState === "en" ? "You finished the Test. You can move further with the next steps." :
               "Du hast den Test abgeschlossen. Mit den nächsten Schritten können Sie weiter vorankommen."}
        
        </p>

     </div>    
     
     <Link to='/app'><button className="w-full h-12  bg-slate-700 text-white rounded-lg font-normal font-Lato mt-16">
     {langState === "en" ? "Exit" : "Ausfahrt"}
      
      </button></Link>
   </div>
 </div>
 </div>
  )
}

export default Testend
