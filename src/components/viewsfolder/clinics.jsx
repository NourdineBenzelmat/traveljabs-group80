import { useEffect, useState } from "react";
import { getClinics } from "../../servicesfolder/api";
import "./clinics.scss";

function Clinics() {

  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    loadClinics();
  }, []);

  async function loadClinics() {
    const data = await getClinics();
    setClinics(data);
  }

  return (
    <div>

      <h2>Clinics</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Postcode</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>

          {clinics.map((clinic) => (
            <tr key={clinic.ClinicID}>
              <td>{clinic.ClinicID}</td>
              <td>{clinic.ClinicName}</td>
              <td>{clinic.ClinicAddress}</td>
              <td>{clinic.ClinicPostcode}</td>
              <td>{clinic.ClinicContact}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Clinics;