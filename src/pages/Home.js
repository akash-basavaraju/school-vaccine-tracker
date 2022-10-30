import React, { useEffect, useState } from "react";
import { fetchLandingData, fetchStudentFormData } from "../service/service";

export default function Home() {
  const [landingData, setLandinData] = useState();
  const [noOfStudents, setNoOfStudents] = useState();
  const [studentsVaccinated, setStudentsVaccinated] = useState();

  useEffect(() => {
    const getLandingData = async () => {
      const data = await fetchLandingData();
      setLandinData(data);
    };

    getLandingData();

    const getStudentFormData = async () => {
      const data = await fetchStudentFormData();
      setNoOfStudents(data.length);
      setStudentsVaccinated(data.filter((a) => a.isVaccinated).length);
    };
    getStudentFormData();
  }, []);

  if (!landingData) {
    return (
      <div
        style={{
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: "3",
        flexDirection: "column",
      }}
    >
      <div>
        <span style={{ fontSize: "22px", fontWeight: "600" }}>
          Students Registered:
        </span>{" "}
        {noOfStudents}
      </div>
      <div>
        <span style={{ fontSize: "22px", fontWeight: "600" }}>
          Students Vaccinated:
        </span>{" "}
        {studentsVaccinated}
      </div>
      <div>
        <span style={{ fontSize: "22px", fontWeight: "600" }}>
          Upcoming Vaccine Drives:
        </span>{" "}
        {landingData.upcomingVaccineDrives.length > 0
          ? landingData.upcomingVaccineDrives
          : "No Vaccination Drives"}
      </div>
    </div>
  );
}
