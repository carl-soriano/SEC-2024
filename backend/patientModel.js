const Pool = require("pg").Pool;
const pool = new Pool({
  user: "my_user",
  host: "localhost",
  database: "foothills_database", // your database from Postgres
  password: "root",
  port: 5432,
});

// Get all appointments for a patient based on patient_id
const getPatient = async (patientId) => {
  try {
    const results = await new Promise((resolve, reject) => {
      const query = `
        SELECT 
          appointment_id, 
          doctor_id, 
          date, 
          start_time, 
          end_time 
        FROM 
          Appointment 
        WHERE 
          patient_id = $1;
      `;

      // Log 
      console.log("Executing query:", query, "with parameters:", [patientId]);

      pool.query(query, [patientId], (error, results) => {
        if (error) {
          return reject(error);
        }
        if (results && results.rows) {
          console.log("Query results:", results.rows);  // Log 
          return resolve(results.rows);  
        } else {
          return reject(new Error("No results found"));
        }
      });
    });
    return results;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};

module.exports = {
  getPatient,
};
