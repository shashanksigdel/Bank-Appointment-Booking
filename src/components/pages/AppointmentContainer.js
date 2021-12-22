import React from "react";
import { Link } from "react-router-dom";
import "./AppointmentContainer.css";

function AppointmentContainer({ appointments, cancelAppointment }) {
  return (
    <div className="appointmentContainer">
      {appointments.map((appointment, index) => (
        <div className="appointmentBody" key={index}>
          <h1>{appointment.description}</h1>
          <div className="nameAndInfo">
            <span>
              <i className="far fa-user-circle"></i>
              {appointment.name}
            </span>
            <span>
              <i className="fa-regular fa-compass"></i> {appointment.address},{" "}
              {appointment.branch}
            </span>
          </div>
          <div className="dateAndTime">
            <span>
              <i className="fa-regular fa-calendar"> </i>
              {appointment.date}
            </span>
            <span>
              <i className="fa-regular fa-clock"></i>
              {appointment.time}
            </span>
          </div>
          <button
            className="cancelBtn"
            // onClick={() => cancelAppointment(appointment.id)}
            onClick={() => {
              const confirmBox = window.confirm(
                "Do you really want to delete this Appointment?"
              );
              if (confirmBox === true) {
                cancelAppointment(appointment.id);
              }
            }}
          >
            Cancel
          </button>
          <Link to={`/reschedule/${appointment.id}`}>
            <button className="rescheduleBtn">Reschedule</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AppointmentContainer;
