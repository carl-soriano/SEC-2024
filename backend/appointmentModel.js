//appointment for backend

import { Pool } from "pg";
const pool = new Pool({
  user: "my_user",
  host: "localhost",
  database: "foothills_database", //our database from Postgres  
  password: "root",
  port: 5432,
});

//get all appointments from our database
const getAppointments = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM appointments", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

//create a new appointment in the database
const createAppointments = (body) => {
  return new Promise(function (resolve, reject) {
    const { patient_id, doctor_id, appointment_date, appointment_time } = body;
    pool.query(
      "INSERT INTO Appointment (patient_id, doctor_id, date, start_time, end_time) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [patient_id, doctor_id, appointment_date, appointment_time.start, appointment_time.end],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`A new appointment has been added: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};

//delete an appointment
const deleteAppointments = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM appointments WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Appointment deleted with ID: ${id}`);
      }
    );
  });
};

export {
  getAppointments,
  createAppointments,
  deleteAppointments,
};

