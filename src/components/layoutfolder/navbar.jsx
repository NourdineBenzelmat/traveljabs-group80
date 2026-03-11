import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <div className="navItem">
        <Link to="/">Vaccines</Link>
      </div>

      <div className="navItem">
        <Link to="/patients">Patients</Link>
      </div>

      <div className="navItem">
        <Link to="/clinics">Clinics</Link>
      </div>

      <div className="navItem">
        <Link to="/appointments">Appointments</Link>
      </div>

    </nav>
  );
}

export default Navbar;