import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Summry = ({score , Accuracy, Avg}) => {
  const langState = useSelector(state => state.user.lang)

  return (
    <div className="mt-7 relative w-656 h-420 bg-white rounded-xl shadow p-8">
      <div className="text-slate-700 text-xl font-bold font-Lato flex justify-center items-center">
      {langState === "en" ? "You have completed the test." : "Sie haben den Test abgeschlossen."}

      </div>
      <div className="flex justify-between items-center mt-20 px-10 ">
        <div className="text-center">
          <div className="">
            <FaTachometerAlt className="w-14 h-14 opacity-50 bg-['#344767']" />
          </div>
          <div className="opacity-50 text-slate-700 text-base font-bold font-['Lato']">
          {langState === "en" ? "Score" : "Punktzahl"}
            </div>
          <div className="mt-5"><span className="text-slate-700 text-[32px] font-bold font-['Lato']">{score}</span><span className="text-slate-700 text-base font-normal font-['Lato']">/20</span></div>
        </div>
        <div className="text-center ml-10">
          <div className="ml-6">
            <AiOutlineCheckCircle className="w-14 h-14 opacity-50 bg-['#344767']" />
          </div>
          <div className="opacity-50 text-slate-700 text-base font-bold font-['Lato']">
          {langState === "en" ? "Accuracy" : "Genauigkeit"}
            </div>
          <div className="text-slate-700 text-[32px] font-bold font-['Lato'] mt-5">{Accuracy}%</div>
        </div>
        <div className="text-center">
          <div className="ml-8">
            <IoTimerOutline className="w-14 h-14 opacity-50 bg-['#344767']" />
          </div>
          <div className="opacity-50 text-slate-700 text-base font-bold font-['Lato']">
          {langState === "en" ? "Avg. Time" : "Durchschnittliche Zeit"}

          </div>
          <div className="mt-5"><span className="text-slate-700 text-[32px] font-bold font-['Lato']">{Avg} </span><span className="text-slate-700 text-[32px] font-normal font-['Lato']">secs</span></div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <Link to="/app">
          <button className="w-508 h-12 bg-slate-700 text-white rounded-lg font-normal font-Lato">
          {langState === "en" ? "Continue" : "Fortsetzen"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Summry;
