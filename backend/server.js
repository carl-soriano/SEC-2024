// the node server used for connecting the backend to the frontend


const express = require('express');
const cors = require('cors');
const e = require('express');
const { Pool } = require('pg');

const app = express();
const port = 4000;

const pool = new Pool({
  user: "my_user",
  host: "localhost",
  database: "foothills_database", // our database from Postgres  
  password: "root",
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Allow requests from React app
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

// Login 
app.post('/login', async (req, res) => {
  const { patientID } = req.body;

  try {
    const query = 'SELECT * FROM Appointment WHERE patient_id = $1';
    
    // Log 
    console.log("Executing query:", query, "with parameters:", [patientID]);

    const result = await pool.query(query, [patientID]);

   
    if (result.rows.length > 0) {
      console.log("Query results:", result.rows); 
      res.status(200).json({
        success: true,
        data: result.rows  //send the data from the database
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid patient ID'
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
