import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Terms = () => {
  const langState = useSelector(state => state.user.lang)

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="relative w-508 h-60 bg-white rounded-xl shadow p-8">
          <div className="mb-4">
            <p className="text-slate-700 text-md font-normal font-Lato mt-4 text-center px-10">
          {langState === "en" ? "By registering or creating an Account, you agree to our" : 
          "Durch die Registrierung oder Erstellung eines Kontos stimmen Sie unseren zu "}
              <span className="underline">
                <Link to="/terms-and-conditions">
                {langState === "en" ? "Terms and Conditions" : "Geschäftsbedingungen"}
                </Link>
              </span>{' '}
              {langState === "en" ? "and" : "Und "}
              <span className="underline">
                <Link to="/privacy-policy" >
              {langState === "en" ? "Privacy Policy" : "Datenschutzrichtlinie"}
                  
                </Link>
              </span>
              .
            </p>
          </div>

          {/* Cross icon to close the route */}
          <Link to="/app">
            <AiOutlineClose className="absolute top-4 right-4 text-gray-500 cursor-pointer" />
          </Link>

          <Link to="/app">
            <button className="w-32 ml-36 h-12 bg-slate-700 text-white rounded-lg font-normal font-Lato mt-6">
              {langState === "en" ? "Accept" : "Akzeptieren"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
