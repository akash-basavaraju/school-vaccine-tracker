import React, { useEffect, useState } from "react";
import { IS_MOBILE } from "../components/AppConstants";
import { fetchStudentFormData, fetchVaccineDrives } from "../service/service";

export default function Home() {
  const [vaccineDrives, setVaccineDrives] = useState();
  const [noOfStudents, setNoOfStudents] = useState();
  const [studentsVaccinated, setStudentsVaccinated] = useState();

  useEffect(() => {
    const getVaccineDrives = async () => {
      const data = await fetchVaccineDrives();
      setVaccineDrives(data);
    };

    getVaccineDrives();

    const getStudentFormData = async () => {
      const data = await fetchStudentFormData();
      setNoOfStudents(data.length);
      setStudentsVaccinated(data.filter((a) => a.isVaccinated).length);
    };
    getStudentFormData();
  }, []);

  if (!vaccineDrives) {
    return (
      <div
        style={{
          height: IS_MOBILE ? "550px" : "700px",
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
        height: IS_MOBILE ? "550px" : "700px",
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
        <div style={{ fontSize: "22px", fontWeight: "600" }}>
          Upcoming Vaccine Drives
        </div>
        {vaccineDrives.length > 0
          ? vaccineDrives.map((vd, index) => {
              return (
                <div style={{ padding: "0px 5px" }}>
                  {index !== 0 ? " ," : ""}On {vd.date}:{" "}
                  {vd.noOfVaccinesAvailable} Vaccines Available
                </div>
              );
            })
          : "No Vaccination Drives"}
      </div>
    </div>
  );
}
