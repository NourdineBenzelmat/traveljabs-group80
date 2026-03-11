import { useEffect, useState } from "react";
import { getVaccines } from "../../servicesfolder/api";
import "./vaccines.scss";

function Vaccines() {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    loadVaccines();
  }, []);

  async function loadVaccines() {
    const data = await getVaccines();
    setVaccines(data);
  }

  return (
    <div>
      <h2>Available Vaccines</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vaccine Name</th>
            <th>Cost</th>
          </tr>
        </thead>

        <tbody>
          {vaccines.map((vaccine) => (
            <tr key={vaccine.VaccineID}>
              <td>{vaccine.VaccineID}</td>
              <td>{vaccine.VaccineName}</td>
              <td>£{vaccine.VaccineCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vaccines;