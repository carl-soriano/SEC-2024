import { useState } from 'react';

const Modal = ({ show, close }) => {
  const [loading, setLoading] = useState(false);
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    
    const res = await fetch('https://rzmajmg6ox7h7fx55ygc4puggu0tcenk.lambda-url.ca-central-1.on.aws/', {
      method: 'POST',
      body: formData,
    });

    setLoading(false);
  
  };

  if (!show) return null;
  return (
    <div className="modal-container"
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0'
    }}>
      <button id="close-button" onClick={close}>&#10006;</button>

      <div id="main-part">
        <p id="new-appointment-title">Make a New Appointment</p>

        <img src="https://images.squarespace-cdn.com/content/v1/56fd853b1d07c0659bf91865/1542236437716-FA9C835N1QF8L1ILSSAN/AHS.png"  
        alt="ahs-logo" 
        id="ahs-logo"/>

        <input
        id="specialty-input"
        type="text"
        placeholder="Search doctor by specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        required
        />
        <br></br>

        <button
        id="search-times-button"
        type="submit" 
        disabled={loading} 
        onClick={handleSubmit}>
        {loading ? "Please wait." : "Search"}
        </button>

      </div>
    </div>
  );
};

export default Modal;

