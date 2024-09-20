import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AppointmentContainer from "../pages/AppointmentContainer";
import "./Appointments.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const result = await axios.get("http://localhost:3002/appointments");
    setAppointments(result.data.reverse());
  };

  const cancelAppointment = async (id) => {
    await axios.delete(`http://localhost:3002/appointments/${id}`);
    loadAppointments();
  };

  return (
    <div className="wrapper">
      <div className="appointmentContainerHeader">
        <h1>Scheduled Appointments</h1>
        <Link to="/bookAppointment">
          <button className="appointmentBookingBtn">Book an Appointment</button>
        </Link>
      </div>
      <AppointmentContainer
        appointments={appointments}
        cancelAppointment={cancelAppointment}
      />
    </div>
  );
};

export default Appointments;
