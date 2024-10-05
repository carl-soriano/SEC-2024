const express = require("express");
const app = express();
const port = 3001;

const appointments_model = require("./appointmentModel.js");
const patient_model = require("./patientModel.js");
const doctor_model = require("./doctorModel.js");

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
  next();
});

// Fetch all patients
app.get("/", (req, res) => {
  patient_model.getPatient()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.error(error); // Log the error
      res.status(500).send({ error: 'Failed to fetch patients.' }); // Structured error response
    });
});

// Update patient details
app.put("/patients/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  patient_model.updatePatient(id, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.error(error); // Log the error
      res.status(500).send({ error: 'Failed to update patient.' }); // Structured error response
    });
});

// Listen on specified port
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
