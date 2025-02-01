import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { fetchWithAuth } from '../api/api';

const DoctorDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await fetchWithAuth('http://localhost:3000/appointments');
        setAppointments(data);
      } catch (err) {
        console.error('Failed to fetch appointments:', err);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="w-screen h-screen p-6 bg-white">
      <h1 className="text-4xl font-bold text-green-500 mb-6">Doctor Dashboard</h1>
      <button
        onClick={logout}
        className="mb-6 bg-red-500 text-white py-2 px-4 font-bold rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Upcoming Appointments</h2>
        <div className="grid gap-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-green-100 p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-green-700">{appointment.patient}</h3>
              <p className="text-green-600">
                {appointment.date} at {appointment.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;