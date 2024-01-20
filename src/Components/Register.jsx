import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import loginSchema from "../Schema/Loginschema";
import { useFormik } from "formik";
import { setUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/internal";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const langState = useSelector(state => state.user.lang)
  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
  });
  const handleRegister = async () => {
    const data = {
      email: values.email,
      password: values.password,
    };

    const response = await signup(data);

    if (response.status === 200) {
      // 1. setUser
      const user = {
        _id: response.data.user._id,
        email: response.data.user.email,
        auth: response.data.auth,
      };

      dispatch(setUser(user));
      // 2. redirect -> homepage
      navigate("/");
    } else if (response.code === "ERR_BAD_REQUEST") {
      // display error message
      setError(response.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="relative w-656 h-420 bg-white rounded-xl shadow p-8">
        <div className="mb-4 text-center text-slate-700 text-xl font-bold font-Lato">
        {langState === "en" ? "Create New Account" : "Neuen Account erstellen"}

        </div>

        <div className="mb-4">
          <label className="text-slate-700 text-xs font-normal font-Lato block">
            Email
          </label>
          <input
            type="text"
            name="email" // Make sure you include the name attribute
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full h-10 px-4 border rounded-lg focus:outline-none focus:border-slate-700 ${
              errors.email && touched.email ? "border-red-500" : "" // Add a border color for validation error
            }`}
          />
          {errors.email && touched.email && (
            <div className="text-red-500 text-xs mt-1 font-normal font-Lato">
              {errors.email}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="text-slate-700 text-xs font-normal font-Lato block">
            Password
          </label>
          <input
            type="password"
            name="password" // Make sure you include the name attribute
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full h-10 px-4 border rounded-lg focus:outline-none focus:border-slate-700 ${
              errors.password && touched.password ? "border-red-500" : "" // Add a border color for validation error
            }`}
          />
          {errors.password && touched.password && (
            <div className="text-red-500 text-xs mt-1 font-normal font-Lato">
              {errors.password}
            </div>
          )}
        </div>

        <div className="mb-6 flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-slate-700 text-xs font-normal font-Lato">
          {langState === "en" ? "Keep me signed in" : "Ich möchte angemeldet bleiben "}
          </label>
        </div>

        <div className="text-right text-slate-700 text-xs font-normal font-Lato mb-6">
        {langState === "en" ? "Forgot Password?" : " Passwort vergessen?"}
        </div>

        <div className="mb-6 text-right">
          <span className="text-slate-700 text-xs font-normal font-Lato">
          {langState === "en" ? "Already have an account?" : "Sie haben bereits ein Konto?"}
          </span>
          <Link to="/">
            <span className="text-slate-700 text-xs font-normal font-Lato underline">
            {langState === "en" ? "Login?" : "Einloggen?"}
            </span>
          </Link>
        </div>

        <button
          onClick={handleRegister}
          className="w-full h-12 bg-slate-700 text-white rounded-lg font-normal font-Lato"
        >
                 {langState === "en" ? "Create New Account" : "Neuen Account erstellen"}
        </button>

        {error != "" ? (
          <div className="text-red-500 text-sm font-normal font-Lato mt-4">
            {error}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Register;
