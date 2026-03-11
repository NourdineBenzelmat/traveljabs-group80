import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layoutfolder/layout";

import Vaccines from "./components/viewsfolder/vaccines";
import Patients from "./components/viewsfolder/patients";
import Clinics from "./components/viewsfolder/clinics";
import Appointments from "./components/viewsfolder/appointments";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Vaccines />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;