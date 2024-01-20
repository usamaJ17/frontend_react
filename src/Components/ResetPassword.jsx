import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  const langState = useSelector(state => state.user.lang)

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="relative w-656 h-420 bg-white rounded-xl shadow p-8">
          <div className="mb-4 text-center text-slate-700 text-xl font-bold font-Lato">
            {langState === "en"
              ? "Recover your password"
              : "Passwort wiederherstellen"}
          </div>

          <div className="mb-4">
            <label className="text-slate-700 text-xs font-normal font-Lato block">
              Email
            </label>
            <input
              type="text"
              className="w-full h-10 px-4 border rounded-lg focus:outline-none focus:border-slate-700"
            />
          </div>
          <div className="text-right text-slate-700 text-xs font-normal font-Lato mb-6">
            {langState === "en" ? "Forgot Password?" : " Passwort vergessen?"}
          </div>

          <div className="mb-6 text-right">
            <span className="text-slate-700 text-xs font-normal font-Lato">
              {langState === "en"
                ? "Click here to Login?"
                : "Klicken Sie hier, um sich einzuloggen?"}
            </span>
            <Link to="/">
              <span className="text-slate-700 text-xs font-normal font-Lato underline">
                {" "}
                {langState === "en" ? "Login" : " Anmeldung"}
              </span>
            </Link>
          </div>

          <button className="w-full h-12 bg-slate-700 text-white rounded-lg font-normal font-Lato">
            {langState === "en"
              ? "Send password reset link"
              : " Link zum Zurücksetzen des Passworts senden"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
