import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const ConsultationPopup = ({ onClose, startTime }) => {
  const currentTime = new Date();
  const sessionStartTime = new Date(startTime);
  const timeRemaining = Math.floor(
    (sessionStartTime - currentTime) / (1000 * 60)
  );
  const langState = useSelector(state => state.user.lang)
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="relative w-[500px] h-96 bg-white rounded-xl shadow p-10">
        {/* Close icon in the top-right corner */}
        <Link to="#" className="absolute top-4 right-4">
          <AiOutlineClose
            onClick={onClose}
            className="text-gray-500 cursor-pointer"
          />
        </Link>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="108"
            viewBox="0 0 96 108"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M29.2174 49.8462C23.6824 49.8462 18.3742 47.658 14.4604 43.763C10.5466 39.868 8.34782 34.5853 8.34782 29.0769V12.4615C8.34782 11.3599 8.78757 10.3033 9.57033 9.52433C10.3531 8.74533 11.4147 8.30769 12.5217 8.30769H16.6956C17.8026 8.30769 18.8643 7.87006 19.647 7.09106C20.4298 6.31206 20.8696 5.25551 20.8696 4.15385C20.8696 3.05218 20.4298 1.99563 19.647 1.21663C18.8643 0.437636 17.8026 0 16.6956 0H12.5217C9.20076 0 6.01581 1.31291 3.66753 3.6499C1.31925 5.98689 0 9.15653 0 12.4615V29.0769C0.00536523 33.7697 1.15522 38.391 3.35081 42.544C5.54641 46.697 8.72212 50.2576 12.6052 52.92C16.336 56.1933 19.3616 60.1851 21.4993 64.6543C23.6371 69.1234 24.8428 73.9774 25.0435 78.9231C25.0435 86.6348 28.1217 94.0306 33.601 99.4836C39.0804 104.937 46.5119 108 54.2608 108C62.0098 108 69.4413 104.937 74.9206 99.4836C80.4 94.0306 83.4782 86.6348 83.4782 78.9231V74.1877C87.4128 73.1767 90.8418 70.7723 93.1225 67.4252C95.4031 64.0781 96.3789 60.0182 95.8669 56.0063C95.3549 51.9945 93.3902 48.3062 90.3411 45.6328C87.292 42.9594 83.3679 41.4845 79.3043 41.4845C75.2407 41.4845 71.3166 42.9594 68.2675 45.6328C65.2185 48.3062 63.2538 51.9945 62.7417 56.0063C62.2297 60.0182 63.2055 64.0781 65.4862 67.4252C67.7668 70.7723 71.1958 73.1767 75.1304 74.1877V78.9231C75.1304 84.4314 72.9316 89.7142 69.0178 93.6091C65.104 97.5041 59.7958 99.6923 54.2608 99.6923C48.7259 99.6923 43.4176 97.5041 39.5038 93.6091C35.59 89.7142 33.3913 84.4314 33.3913 78.9231C33.6026 73.9713 34.8212 69.1136 36.9735 64.644C39.1258 60.1745 42.167 56.186 45.913 52.92C49.7807 50.2484 52.9402 46.6838 55.1209 42.5313C57.3017 38.3789 58.4387 33.7623 58.4348 29.0769V12.4615C58.4348 9.15653 57.1155 5.98689 54.7672 3.6499C52.4189 1.31291 49.234 0 45.913 0H41.7391C40.6321 0 39.5705 0.437636 38.7877 1.21663C38.005 1.99563 37.5652 3.05218 37.5652 4.15385C37.5652 5.25551 38.005 6.31206 38.7877 7.09106C39.5705 7.87006 40.6321 8.30769 41.7391 8.30769H45.913C47.02 8.30769 48.0817 8.74533 48.8644 9.52433C49.6472 10.3033 50.0869 11.3599 50.0869 12.4615V29.0769C50.0869 31.8044 49.5471 34.5051 48.4983 37.025C47.4495 39.5448 45.9123 41.8344 43.9744 43.763C42.0365 45.6916 39.7358 47.2214 37.2038 48.2652C34.6718 49.3089 31.958 49.8462 29.2174 49.8462ZM79.3043 66.4615C77.0903 66.4615 74.967 65.5863 73.4015 64.0283C71.836 62.4703 70.9565 60.3572 70.9565 58.1538C70.9565 55.9505 71.836 53.8374 73.4015 52.2794C74.967 50.7214 77.0903 49.8462 79.3043 49.8462C81.5183 49.8462 83.6416 50.7214 85.2071 52.2794C86.7726 53.8374 87.6521 55.9505 87.6521 58.1538C87.6521 60.3572 86.7726 62.4703 85.2071 64.0283C83.6416 65.5863 81.5183 66.4615 79.3043 66.4615Z"
              fill="#344767"
            />
          </svg>
        </div>
        <div className="mb-4">
          <p className="text-slate-700 text-md font-medium font-['Lato'] text-center mt-12">
          {langState === "en" ? "Your consultation session will start in" 
          : "Ihr Beratungsgespräch beginnt in"}
           {timeRemaining} {langState === "en" ? "minutes." : "Protokoll."}
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/app">
            <button className="w-96 h-12 bg-slate-700 text-white rounded-lg font-normal font-['Lato'] mt-9">
            {langState === "en" ? "Join Consultation Session" : "An der Konsultationssitzung teilnehmen"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;
