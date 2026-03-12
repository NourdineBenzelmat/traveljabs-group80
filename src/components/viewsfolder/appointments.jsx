import { useEffect, useState } from "react";
import { getAppointments } from "../../servicesfolder/api";
import "./appointments.scss";

function Appointments() {


  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    loadAppointments();

  }, []);

  async function loadAppointments() {

    const data = await getAppointments();
    setAppointments(data);
  }

  return (
    <div>

      <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Clinic</th>
            <th>Staff</th>
            <th>Date</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>


          {appointments.map((appt) => (

            <tr key={appt.AppointmentID}>

              <td>{appt.AppointmentID}</td>

              <td>
                {appt.AppointmentPatientFirstname} {appt.AppointmentPatientLastname}
              </td>

              <td>{appt.AppointmentClinicName}</td>


              <td>
                {appt.AppointmentStaffFirstname} {appt.AppointmentStaffLastname}
              </td>

              <td>{appt.AppointmentDatetime}</td>

              <td>{appt.AppointmentStatusName}</td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}

export default Appointments;