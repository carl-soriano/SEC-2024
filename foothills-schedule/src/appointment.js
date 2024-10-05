import { useState, useRef } from 'react';

const Appointment = ({ appointment }) => {
  const [collapsed, setCollapsed] = useState(true);


  return (
    // handle the appointment display in the main page 
    <div className="appointment" onClick={() => setCollapsed((p) => !p)}>

      <div className="appointment-info">
        <div className="app-head">
          <p className="app-name">{appointment.name}</p>
        </div>
        {!collapsed && (
        <>
          <p className="app-content">{appointment.text}</p>

        </>
        )}
      </div>
    </div>
  );
};

export default Appointment;