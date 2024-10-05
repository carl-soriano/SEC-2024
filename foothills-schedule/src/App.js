import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './login'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [patientID, setPatientID] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home email={patientID} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setPatientID} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App