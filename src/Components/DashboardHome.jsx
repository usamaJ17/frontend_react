import React, { useEffect, useState } from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import { getAllOppitments } from '../api/internal';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashboardHome = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const langState = useSelector(state => state.user.lang)

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await getAllOppitments();
        if (response.status === 200) {
          setAppointments(response.data);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const formatAppointmentDate = (date) => {
    const currentDate = new Date();
    const appointmentDate = new Date(date);
  
    if (appointmentDate.toDateString() === currentDate.toDateString()) {
      return 'Today';
    } else {
      const tomorrow = new Date(currentDate);
      tomorrow.setDate(currentDate.getDate() + 1);
  
      if (appointmentDate.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow';
      } else {
        const optionsDate = { weekday: 'long' };
        const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
  
        return (
          appointmentDate.toLocaleDateString('en-US', optionsDate)
        );
      }
    }
  };
  
  

  return (
    <div className="flex justify-center items-center mt-24">
      <div className="flex flex-wrap gap-4">
        {appointments.length === 0 ? (
          <div className="flex items-center justify-center">
            <p>No appointments scheduled.</p>
          </div>
        ) : (
          appointments.map(appointment => (
            <div key={appointment._id} className="w-[318px] h-64 bg-white rounded-xl shadow p-4">
              <div className="flex justify-center items-center mb-4">
                {/* IoCalendarOutline icon */}
                <IoCalendarOutline className="text-8xl mr-2 text-gray-500" />
              </div>

              <div className="flex items-center justify-center mb-4">
                <span className="text-lg font-light">
          {langState === "en" ? "Appointment" : "Verabredung"}
                </span>
              </div>

              <div className="mb-2">
                <span className="text-3xl font-normal flex items-center justify-center">
                  {formatAppointmentDate(appointment.date)}
                </span>
                <span className="text-xl font-medium flex items-center justify-center">
                  {appointment.time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
