import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import {signout} from '../api/internal'
import {resetUser} from '../store/userSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.auth);
  console.log("isAuth:", isAuth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const langState = useSelector(state => state.user.lang)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    // Implement your logout logic here
    console.log("Logout clicked");
    await signout();
    dispatch(resetUser())
    navigate('/');
  };

  return (
    <>
      {isAuth && ( // Render only if user is authenticated
      
        <div className="relative -top-20 right-0 left-[84%]">
          <div
            onClick={toggleDropdown}
            className="text-3xl bg-transparent text-slate-600 cursor-pointer border-2 border-gray-300 rounded p-1"
          >
            <FaUser />
          </div>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-md p-4 w-[183px] top-10 right-2">
              <div
                onClick={handleLogout}
                className="cursor-pointer flex items-center"
              >
                <FaSignOutAlt className="mr-2" />
                {langState === "en" ? "Logout" : "Abmeldung"}
              </div>
              {/* Add more options if needed */}
            </div>
          )}
        </div>
      )}
      <div className="bg-white shadow rounded-xl flex-grow p-4 ml-4 h-510 w-[1480px]">
        <Outlet />
      </div>
    </>
  );
};

export default MainContent;
