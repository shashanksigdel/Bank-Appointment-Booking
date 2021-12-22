import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./RescheduleAppointment.css";

const RescheduleApointment = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [appointment, setAppointment] = useState({
    name: "",
    address: "",
    branch: "",
    date: "",
    time: "",
    description: "",
  });
  const onInputChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3002/appointments/${id}`, appointment);
    navigate("/");
  };

  const loadAppointments = async () => {
    const result = await axios.get(`http://localhost:3002/appointments/${id}`);
    setAppointment(result.data);
  };

  return (
    <div className="rescheduleAppointmentWrapper">
      <div className="rescheduleAppointmentContainer  ">
        <h1>Reschedule Appointment</h1>
        <Link to="/">
          <button className="goBackBtn">Go Back</button>
        </Link>
      </div>
      <form
        className="rescheduleAppointmentForm"
        id="appointmentBookingForm"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={appointment.name}
          onChange={(e) => onInputChange(e)}
          required
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={appointment.address}
          onChange={(e) => onInputChange(e)}
          required
        />
        <label htmlFor="branch">Branch</label>
        <select
          name="branch"
          id="branch"
          value={appointment.branch}
          onChange={(e) => onInputChange(e)}
        >
          <option selected value>
            {" "}
            -- Choose Branch --{" "}
          </option>
          <option value="Godawari">Godawari</option>
          <option value="Thaiba">Thaiba</option>
          <option value="Gwarko">Gwarko</option>
        </select>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          aria-describedby="date-format"
          name="date"
          min="2021-12-28"
          max="2031-01-01"
          value={appointment.date}
          onChange={(e) => onInputChange(e)}
        />{" "}
        <label htmlFor="time">Time</label>
        {/* <input
          type="time"
          id="time"
          name="time"
          min="09:00"
          max="17:00"
          value={appointment.time}
          onChange={(e) => onInputChange(e)}
        /> */}
        <select
          name="time"
          value={appointment.time}
          onChange={(e) => onInputChange(e)}
        >
          <option selected value>
            {" "}
            -- Select Time of Appointment --{" "}
          </option>
          <option value="10:00 AM - 10:30 AM">10:00 AM - 10:30 AM</option>
          <option value="10:30 AM - 11:00 AM">10:30 AM - 11:00 AM</option>
          <option value="11:00 AM - 11:30 AM">11:00 AM - 11:30 AM</option>
          <option value="11:30 AM - 12:00 PM">11:30 AM - 12:00 PM</option>
          <option value="12:00 PM - 12:30 PM">12:00 PM - 12:30 PM</option>
          <option value="12:30 PM - 13:00 PM">12:30 PM - 13:00 PM</option>
          <option value="13:00 PM - 13:30 PM">13:00 PM - 13:30 PM</option>
          <option value="13:30 PM - 14:00 PM">13:30 PM - 14:00 PM</option>
          <option value="14:00 PM - 14:30 PM">14:00 PM - 14:30 PM</option>
          <option value="14:30 PM - 15:00 PM">14:30 PM - 15:00 PM</option>
          <option value="15:00 PM - 15:30 PM">15:00 PM - 15:30 PM</option>
          <option value="15:30 PM - 16:00 PM">15:30 PM - 16:00 PM</option>
          <option value="16:00 PM - 16:30 PM">16:00 PM - 16:30 PM</option>
          <option value="16:30 PM - 17:00 PM">16:30 PM - 17:00 PM</option>
        </select>
        <label htmlFor="description">Message</label>
        <textarea
          rows="4"
          cols="50"
          name="description"
          form="appointmentBookingForm"
          value={appointment.description}
          onChange={(e) => onInputChange(e)}
        >
          Enter Text here
        </textarea>
        <button type="submit" className="rescheduleButton">
          Reschedule Appointment
        </button>
      </form>
    </div>
  );
};

export default RescheduleApointment;
