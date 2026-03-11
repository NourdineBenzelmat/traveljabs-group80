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