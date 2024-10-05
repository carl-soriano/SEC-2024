const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 4000;

const pool = new Pool({
  user: "my_user",
  host: "localhost",
  database: "foothills_database", // your database from Postgres  
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

// Login endpoint
app.post('/login', async (req, res) => {
  const { patientID } = req.body;

  try {
    const result = await pool.query('SELECT * FROM Patient WHERE patient_id = $1', [patientID]);
    
    if (result.rows.length > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid patient ID' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
