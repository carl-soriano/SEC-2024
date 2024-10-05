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

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };



    // function createMerchant() {
  //   let name = prompt('Enter merchant name')
  //   let email = prompt('Enter merchant email')
  //   fetch('http://localhost:3001/merchants', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email }),
  //   })
  //     .then(response => response.text())
  //     .then(data => {
  //       alert(data)
  //       getMerchant()
  //     })
  // }

  // function deleteMerchant() {
  //   let id = prompt('Enter merchant id')
  //   fetch(`http://localhost:3001/merchants/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(response => response.text())
  //     .then(data => {
  //       alert(data)
  //       getMerchant()
  //     })
  // }

  // function updateMerchant() {
  //   let id = prompt('Enter merchant id')
  //   let name = prompt('Enter new merchant name')
  //   let email = prompt('Enter new merchant email')
  //   fetch(`http://localhost:3001/merchants/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email }),
  //   })
  //     .then(response => response.text())
  //     .then(data => {
  //       alert(data)
  //       getMerchant()
  //     })
  // }

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