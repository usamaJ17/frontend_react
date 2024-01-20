import React, { useState } from 'react';
import axios from 'axios';
import ConsultationPopup from './ConsultationPopup'; // Import the ConsultationPopup component
import { useSelector } from 'react-redux';
import { submitOppitments } from '../api/internal';

const AppointmentComponent = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [consultationStartTime, setConsultationStartTime] = useState(null);
  const langState = useSelector(state => state.user.lang)

  const user = useSelector((state) => state.user._id);
  const email = useSelector((state) => state.user.email);

  const bookAppointment = async () => {
    const data = {
      date,
      time,
      user,
    };
    try {
      // Call the endpoint to book the appointment
      const response = await submitOppitments(data);
     // Calculate consultation start time
      const gapMinutes = 15; // Adjust this value based on your requirement
      const bookedTime = new Date(`${date}T${time}`);
      const startTime = new Date(bookedTime.getTime() - gapMinutes * 60000);
      setConsultationStartTime(startTime);

      // Show the success popup
      setShowPopup(true);

      // Send email with appointment details
      await sendAppointmentEmail();
    } catch (error) {
      console.error('Error booking appointment:', error.message);
    }
  };

  const sendAppointmentEmail = async () => {
    try {
      // Call the endpoint to send the appointment email
      await axios.post('https://mern-back-1jic.onrender.com/api/send-appointment-email', {
        appointmentDate: date,
        appointmentTime: time,
        email,
      });

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending appointment email:', error.message);
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    updateButtonState(e.target.value, time);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    updateButtonState(date, e.target.value);
  };

  const updateButtonState = (newDate, newTime) => {
    setIsButtonDisabled(!newDate || !newTime);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="flex mb-4 justify-center items-center">
        <div className="w-1/4 mr-2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
          {langState === "en" ? "Date" : "Datum"}
            </label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          />
        </div>
        <div className="w-1/4 ml-2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
          {langState === "en" ? "Time" : "Ziet"}
          </label>
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={bookAppointment}
          disabled={isButtonDisabled}
          className={`w-1/4 h-12 bg-slate-700 text-white rounded-lg font-normal font-Lato ${
            isButtonDisabled && 'opacity-50 cursor-not-allowed'
          }`}
        >
                    {langState === "en" ? "Book Appointment" : "Termin buchen"}
        </button>
      </div>

      {showPopup && consultationStartTime && (
        <ConsultationPopup onClose={closePopup} startTime={consultationStartTime} />
      )}
    </>
  );
};

export default AppointmentComponent;
