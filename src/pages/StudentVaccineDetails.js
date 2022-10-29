import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { TABLE_COLUMNS } from "../components/AppConstants";
import { fetchStudentFormData } from "../service/service";

export default function StudentVaccineDetails() {
  const [studentFormData, setStudentFormData] = useState();

  useEffect(() => {
    const getStudentFormData = async () => {
      const data = await fetchStudentFormData();
      console.log(data);
      setStudentFormData(data);
    };
    getStudentFormData();
  }, []);

  if (!studentFormData) {
    return (
      <div
        style={{
          height: "500px",
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
    <div style={{ textAlign: "center", padding: "20px", lineHeight: "3" }}>
      Student Vaccine Details
      <MaterialTable
        columns={TABLE_COLUMNS}
        data={studentFormData}
        title="Student Vaccine Details"
      />
    </div>
  );
}
