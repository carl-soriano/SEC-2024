//welcome page, after clicking start it takes the user to the login page
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {

  const navigate = useNavigate()

  const onButtonClick = () => {
      navigate('/login')
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>Foothills Hospital Appointment System</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={'Start'}
        />
      </div>
    </div>
  )
}

export default Home