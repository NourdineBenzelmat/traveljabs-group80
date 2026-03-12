import { useEffect, useState } from "react";
import { getVaccines, addVaccine } from "../../servicesfolder/api";
import "./vaccines.scss";

function Vaccines() {

  const [vaccines, setVaccines] = useState([]);
  
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    loadVaccines();
  }, []);

  async function loadVaccines() {
    const data = await getVaccines();
    setVaccines(data);
  }

  async function handleSubmit(e) {

    e.preventDefault();

    const newVaccine = {
      VaccineName: name,
      VaccineCost: Number(cost)
    };

    await addVaccine(newVaccine);

    setName("");
    setCost("");

    loadVaccines();
  }

  return (
    <div>

      <h2>Vaccines</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Vaccine Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />

        <button type="submit">
          Add Vaccine
        </button>

      </form>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>

        <tbody>

          {vaccines.map((vaccine) => (

            <tr key={vaccine.VaccineID}>

              <td>{vaccine.VaccineID}</td>
              <td>{vaccine.VaccineName}</td>
              <td>{vaccine.VaccineCost}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Vaccines;




