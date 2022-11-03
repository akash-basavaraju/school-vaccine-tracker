import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { VACCINE_DRIVE_COLUMNS } from "../components/AppConstants";
import { fetchVaccineDrives } from "../service/service";

export default function VaccineDrives() {
  const [vaccineDrivesData, setVaccineDrivesData] = useState();

  useEffect(() => {
    const getVaccineDrivesData = async () => {
      const data = await fetchVaccineDrives();

      setVaccineDrivesData(data);
    };
    getVaccineDrivesData();
  }, []);

  if (!vaccineDrivesData) {
    return (
      <div
        style={{
          height: `${window.innerHeight - 75}px`,
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
        height: `${window.innerHeight - 75}px`,
        textAlign: "center",
        padding: "20px",
        lineHeight: "3",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "22px", fontWeight: "700" }}>
          Vaccine Drive Details
        </div>
        <button type="button" onClick={() => {}}>
          Add Vaccine Drive
        </button>
      </div>
      <MaterialTable
        columns={VACCINE_DRIVE_COLUMNS}
        data={vaccineDrivesData}
        title="Vaccine Drive Details"
      />
    </div>
  );
}
