import { useEffect, useState } from "react";
import { getPatients } from "../../servicesfolder/api";
import "./patients.scss";

function Patients() {

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  async function loadPatients() {
    const data = await getPatients();
    setPatients(data);
  }

  return (
    <div>

      <h2>Patients</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Postcode</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>

          {patients.map((patient) => (
            <tr key={patient.PatientID}>
              <td>{patient.PatientID}</td>
              <td>{patient.PatientFirstname}</td>
              <td>{patient.PatientLastname}</td>
              <td>{patient.PatientPostcode}</td>
              <td>{patient.PatientAge}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Patients;
