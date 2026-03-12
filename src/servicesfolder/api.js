const API_BASE = "https://softwarehub.uk/unibase/traveljabs/v1/api";

export async function getVaccines() {
  const response = await fetch(`${API_BASE}/vaccines`);
  const data = await response.json();
  return data;
}

export async function getPatients() {
  const response = await fetch(`${API_BASE}/patients`);
  const data = await response.json();
  return data;
}

export async function getClinics() {
  const response = await fetch(`${API_BASE}/clinics`);
  const data = await response.json();
  return data;
}



export async function getAppointments() {


  const response = await fetch(`${API_BASE}/appointments`);

  const data = await response.json();
  return data;

}



export async function addVaccine(vaccine) {

  const response = await fetch(`${API_BASE}/vaccines`, {
    method: "POST",
    headers: {

      "Content-Type": "application/json"

    },
    body: JSON.stringify(vaccine)
  });

  

  return response.json();

}