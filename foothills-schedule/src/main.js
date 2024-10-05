import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Modal from './modal';

function Main() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <header>
        <img src="https://images.squarespace-cdn.com/content/v1/56fd853b1d07c0659bf91865/1542236437716-FA9C835N1QF8L1ILSSAN/AHS.png"  
          alt="ahs-logo" 
          id="ahs-logo"/>

        <h1 className="title">Foothills Hospital Appointment System</h1>
        <div className="newButton">
          <button type="button" className="addNew" onClick={() => setShowModal(true)}>&#43;  New Appointment</button>
        </div>
      </header>

      <Modal show={showModal} close={() => setShowModal(false)}/>
    </div>
  )
}

export default Main