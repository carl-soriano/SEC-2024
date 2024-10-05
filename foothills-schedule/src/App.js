import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './login'
import Main from './main'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [patientID, setPatientID] = useState('')

  useEffect(() => {
    getPatient()
  }, [])

  function getPatient() {
    fetch('http://localhost:3001')
      .then(response => response.text())
      .then(data => setPatientID(data))
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home patientID={patientID} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setPatientID={setPatientID} />} />
          <Route path="/main" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App