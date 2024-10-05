import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [patientID, setPatientID] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    navigate('/main')
  }

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
    </div>
  )
}

export default Login
