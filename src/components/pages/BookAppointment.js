import React from "react";
import { Link } from "react-router-dom";
import BookAppointmentForm from "./BookAppointmentForm";
import "./BookAppointment.css";

function BookAppointment() {
  return (
    <div className="wrapper">
      <div className="bookAppointmentContainer">
        <h1>Book New Appointment</h1>
        <Link to="/">
          <button className="goBackBtn">Go Back</button>
        </Link>
      </div>
      <div className="bookAppointmentContainerForm">
        <BookAppointmentForm />{" "}
      </div>
    </div>
  );
}

export default BookAppointment;
