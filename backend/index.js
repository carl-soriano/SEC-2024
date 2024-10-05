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

// Appointment fetching endpoint
// Appointment fetching endpoint
app.post('/appointments', async (req, res) => {
  const { patientID } = req.body;

  try {
    const query = 'SELECT appointment_id, doctor_id, date, start_time, end_time FROM Appointment WHERE patient_id = $1';
    const result = await pool.query(query, [patientID]);

    if (result.rows.length > 0) {
      res.status(200).json({
        success: true,
        data: result.rows,  // Return the appointment data as an array
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'No appointments found for this patient.',
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});



// Listen on specified port
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
