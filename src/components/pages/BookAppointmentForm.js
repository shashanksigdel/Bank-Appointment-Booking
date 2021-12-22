import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookAppointmentForm.css";

const BookAppointmentForm = () => {
  let navigate = useNavigate();
  const [appointment, setAppointment] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    branch: "",
    date: "",
    time: "",
    description: "",
  });
  const onInputChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/appointments", appointment);
    navigate("/");
  };

  return (
    <div className="container ">
      <form
        className="appointmentBookingForm"
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
        <label htmlFor="gender" className="genderLabel">
          Gender
        </label>
        <div className="genderDetails">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={(e) => onInputChange(e)}
          />
          <label htmlFor="male" required>
            Male
          </label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={(e) => onInputChange(e)}
          />
          <label htmlFor="female" required>
            Female
          </label>
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            onChange={(e) => onInputChange(e)}
          />
          <label htmlFor="other" required>
            Other
          </label>
        </div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={appointment.email}
          onChange={(e) => onInputChange(e)}
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{10}"
          value={appointment.phone}
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
        />
        <label htmlFor="time">Time</label>
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
        <div className="termsAndConditions">
          <input
            type="checkbox"
            id="termsAndConditions"
            name="termsAndConditions"
            required
            value="Checked"
          />
          <label htmlFor="termsAndConditions">
            I agree terms and Conditions.
          </label>
        </div>
        <button type="submit" className="appointmentBookingBtn">
          Book an Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointmentForm;
