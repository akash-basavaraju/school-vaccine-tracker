import React, { useEffect, useState } from "react";
import { fetchLandingData } from "../service/service";

export default function Home() {
  const [landingData, setLandinData] = useState();

  useEffect(() => {
    const getLandingData = async () => {
      const data = await fetchLandingData();
      setLandinData(data);
    };

    getLandingData();
  }, []);

  if (!landingData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center", padding: "200px", lineHeight: "3" }}>
      <div>Students Registered: {landingData.studentsRegistered}</div>
      <div>Students Vaccinated: {landingData.studentsVaccinated}</div>
      <div>
        Upcoming Vaccine Drives:{" "}
        {landingData.upcomingVaccineDrives.length > 0
          ? landingData.upcomingVaccineDrives
          : "No Dirves"}
      </div>
    </div>
  );
}
