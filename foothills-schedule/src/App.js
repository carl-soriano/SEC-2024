// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './home'
// import Login from './login'
// import './App.css'
// import { useEffect, useState } from 'react'

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false)
//   const [patientID, setPatientID] = useState('')
//   const [merchants, setMerchants] = useState(false)

//   function getMerchant() {
//     fetch('http://localhost:3001')
//       .then(response => response.text())
//       .then(data => setMerchants(data))
//   }

//   function createMerchant() {
//     let name = prompt('Enter merchant name')
//     let email = prompt('Enter merchant email')
//     fetch('http://localhost:3001/merchants', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email }),
//     })
//       .then(response => response.text())
//       .then(data => {
//         alert(data)
//         getMerchant()
//       })
//   }

//   function deleteMerchant() {
//     let id = prompt('Enter merchant id')
//     fetch(`http://localhost:3001/merchants/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => response.text())
//       .then(data => {
//         alert(data)
//         getMerchant()
//       })
//   }

//   function updateMerchant() {
//     let id = prompt('Enter merchant id')
//     let name = prompt('Enter new merchant name')
//     let email = prompt('Enter new merchant email')
//     fetch(`http://localhost:3001/merchants/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email }),
//     })
//       .then(response => response.text())
//       .then(data => {
//         alert(data)
//         getMerchant()
//       })
//   }

//   useEffect(() => {
//     getMerchant()
//   }, [])

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={<Home email={patientID} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
//           />
//           <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setPatientID} />} />
//         </Routes>
//       </BrowserRouter>
//       <div>
//         {merchants ? merchants : 'There is no merchant data available'}
//         <br />
//         <button onClick={createMerchant}>Add merchant</button>
//         <br />
//         <button onClick={deleteMerchant}>Delete merchant</button>
//         <br />
//         <button onClick={updateMerchant}>Update merchant</button>
//       </div>
//     </div>
//   )
// }

// export default App
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './login'
import Appointment from './appointment'
import Main from './main'
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