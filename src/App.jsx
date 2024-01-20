import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setLang } from "./store/userSlice";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ResetPassword from "./Components/ResetPassword";
import Welcome from "./Components/Welcome";
import YourSidebarComponent from "./Components/Screen";
import AppointmentComponent from "./Components/AppointmentComponent";
import DashboardHome from "./Components/DashboardHome";
import Terms from "./Components/TermsAndCondition";
import Test from "./Components/Test";
import Correct from "./Components/AnswerCorrect";
import Summry from "./Components/Summry";
import AppProfile from "./Components/AppProfile";
import Testend from "./Components/TestEnd";
import Questionary from "./Components/Questionary";
import useAutoLogin from "./hooks/useAutoLogin";
import Loader from "./Loader/Loader";

const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.user.auth);
  const lang =localStorage.getItem("lang")
  useEffect(() => {
    if(!lang) localStorage.setItem("lang","en")
    else dispatch(setLang(lang))
  },[])

  const loading = useAutoLogin();

  return loading ?  <Loader text='loading' /> : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registeruser" element={<Register />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/accept" element={<Terms />} />
      <Route path="/app/*" element={<YourSidebarComponent />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<AppProfile />} />
        <Route path="appointment" element={<AppointmentComponent />} />
        <Route path="start-test" element={<Test />} />
        <Route path="correctanswer" element={<Correct />} />
        <Route path="score" element={<Summry />} />
        <Route path="endtest" element={<Testend />} />
        <Route path="question" element={<Questionary />} />
      </Route>
    </Routes>
  );
};

export default App;
