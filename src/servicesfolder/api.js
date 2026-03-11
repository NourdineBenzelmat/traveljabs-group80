const API_BASE = "https://softwarehub.uk/unibase/traveljabs/v1/api";

export async function getVaccines() {
  const response = await fetch(`${API_BASE}/vaccines`);
  const data = await response.json();
  return data;
}