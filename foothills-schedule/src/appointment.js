import { useState, useRef } from 'react';

const Appointment = ({ appointment }) => {
  const [collapsed, setCollapsed] = useState(true);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if(isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setCollapsed(true);
    }else{
        audioRef.current.play();
        setIsPlaying(true);
        setCollapsed(true);
    }
  };



  return (
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