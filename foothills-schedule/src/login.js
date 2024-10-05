import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [patientID, setPatientID] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const onButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:4000/login', { // Changed port to 4000
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patientID }),
      });

      const data = await response.json();

      if (data.success) {
        navigate('/main');
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={patientID}
          placeholder="Enter the patient ID"
          onChange={(ev) => setPatientID(ev.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
      {error && <div className={'error'}>{error}</div>} 
    </div>
  );
};

export default Login;
