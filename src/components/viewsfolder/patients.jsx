import { useEffect, useState } from "react";
import { getPatients, updatePatient } from "../../servicesfolder/api";
import "./patients.scss";

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  async function loadPatients() {
    try {
      const data = await getPatients();
      setPatients(data);
    } catch (error) {
      console.error("Error loading patients:", error);
      alert("Failed to load patients");
    }
  }

  async function editPatient(patient) {
    const firstName = prompt("First name", patient.PatientFirstname);
    if (firstName === null) return;

    const lastName = prompt("Last name", patient.PatientLastname);
    if (lastName === null) return;

    const address = prompt("Address", patient.PatientAddress ?? "");
    if (address === null) return;

    const postcode = prompt("Postcode", patient.PatientPostcode);
    if (postcode === null) return;

    const age = prompt("Age", patient.PatientAge);
    if (age === null) return;

    const updatedPatient = {
      PatientID: patient.PatientID,
      PatientFirstname: firstName,
      PatientLastname: lastName,
      PatientAddress: address,
      PatientPostcode: postcode,
      PatientAge: Number(age)
    };

    console.log("Sending patient:", updatedPatient);

    try {
      await updatePatient(updatedPatient);
      await loadPatients();
      alert("Patient updated");
    } catch (error) {
      console.error("Error updating patient:", error);
      alert("Update failed");
    }
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
            <th>Address</th>
            <th>Postcode</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.PatientID}>
              <td>{patient.PatientID}</td>
              <td>{patient.PatientFirstname}</td>
              <td>{patient.PatientLastname}</td>
              <td>{patient.PatientAddress}</td>
              <td>{patient.PatientPostcode}</td>
              <td>{patient.PatientAge}</td>
              <td>
                <button onClick={() => editPatient(patient)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patients;