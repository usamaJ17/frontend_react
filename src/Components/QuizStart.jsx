// QuizStart.js
import React from 'react';
import { useSelector } from 'react-redux';


const QuizStart = ({ onStartQuiz }) => {
  const langState = useSelector(state => state.user.lang)
  return (
    <div className="flex items-center justify-center mt-20 rounded-lg shadow-xl ">
      <div className="relative w-656 h-300  rounded-xl  p-8  mt-11">
        <div className="mb-4 text-center text-slate-700 text-xl font-bold font-Lato">
          {langState === "en" ? "Instructions for test" : "Anleitung zum Testen"}
          </div>
        
        <div className="mb-4">
          <p className="text-slate-700 text-md font-normal font-Lato block text-center">
            You have to identify the color of the text which is written below the question.
          </p>
        </div>

        <button onClick={onStartQuiz} className="w-full h-12 bg-slate-700 text-white rounded-lg font-normal font-Lato mt-6">
          {langState === "en" ? "Start" : "Anfangen"}
        </button>
      </div>
    </div>
  );
};

export default QuizStart;
