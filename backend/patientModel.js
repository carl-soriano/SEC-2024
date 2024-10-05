const Pool = require("pg").Pool;
const pool = new Pool({
  user: "my_user",
  host: "localhost",
  database: "foothills_database", //our database from Postgres
  password: "root",
  port: 5432,
});



//get all merchants our database
const getPatient = async () => {
  try {
    const results = await new Promise((resolve, reject) => {
      pool.query("SELECT * FROM Patient;", (error, results) => {
        if (error) {
          return reject(error);
        }
        if (results && results.rows) {
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
//create a new patient record in the databsse
// const createPatient = (body) => {
//   return new Promise(function (resolve, reject) {
//     const { name, email } = body;
//     pool.query(
//       "INSERT INTO Patient (patient_id, name, contact) VALUES",
//       [name, email],
//       (error, results) => {
//         if (error) {
//           reject(error);
//         }
//         if (results && results.rows) {
//           resolve(
//             `A new patient has been added: ${JSON.stringify(results.rows[0])}`
//           );
//         } else {
//           reject(new Error("No results found"));
//         }
//       }
//     );
//   });
// };
//delete a Patient
// const deletePatient = (id) => {
//   return new Promise(function (resolve, reject) {
//     pool.query(
//       "DELETE FROM Patient WHERE ",
//       [id],
//       (error, results) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(`Patient deleted with ID: ${id}`);
//       }
//     );
//   });
// };


module.exports = {
  getPatient,
  // createPatient,  Unused 
  // deletePatient, Unused
};

