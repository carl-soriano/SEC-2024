//main page of the application where appointments of a user display 

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from './modal';

function Main() {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const location = useLocation();
  const { patientID } = location.state || {}; // Get patientID from location state

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:4000/appointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ patientID }),
        });

        const data = await response.json();
        if (data.success) {
          setAppointments(data.data); 
        } else {
          console.error('No appointments found');
        }
      } catch (err) {
        console.error('Error fetching appointments:', err);
      }
    };

    if (patientID) {
      fetchAppointments();
    }
  }, [patientID]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  };

  return (
    <div>
      <header>
        <img
          src="https://images.squarespace-cdn.com/content/v1/56fd853b1d07c0659bf91865/1542236437716-FA9C835N1QF8L1ILSSAN/AHS.png"
          alt="ahs-logo"
          id="ahs-logo"
        />

        <h1 className="title">Foothills Hospital Appointment System</h1>
        <div className="newButton">
          <button
            type="button"
            className="addNew"
            onClick={() => setShowModal(true)}
          >
            &#43; New Appointment
          </button>
        </div>
      </header>


      <div>
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.appointment_id}>
                <strong>Doctor ID:</strong> {appointment.doctor_id} <br />
                <strong>Date:</strong> {formatDate(appointment.date)} <br />
                <strong>Start Time:</strong> {appointment.start_time} <br />
                <strong>End Time:</strong> {appointment.end_time}
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>

      <Modal show={showModal} close={() => setShowModal(false)} />
    </div>
  );
}

export default Main;
