import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ show, close }) => {
  const [loading, setLoading] = useState(false);
  const [specialty, setSpecialty] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
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
        <p id="new-appointment-title"></p>

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
        <button
        id="search-times-button"
        type="submit" 
        disabled={loading} 
        onClick={handleSubmit}>
        {loading ? "Please wait." : "Search"}
        </button>

        <div id="available-times">
            <ul>
                <button id="time-button">9:30</button><br></br>
                <button id="time-button">10:00</button><br></br>
                <button id="time-button">10:30</button><br></br>
                <button id="time-button">10:45</button><br></br>
            </ul>
        </div>

        <button id="search-times-button">Book appointment</button>

      </div>
    </div>
  );
};

export default Modal;