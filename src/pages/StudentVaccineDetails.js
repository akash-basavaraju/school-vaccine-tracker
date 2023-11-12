import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { STUDENT_TABLE_COLUMNS } from "../components/AppConstants";
import { downloadCsv, makeCsv } from "../components/CSVGenerator";
import { fetchStudentFormData } from "../service/service";

export default function StudentVaccineDetails() {
  const [studentFormData, setStudentFormData] = useState();

  useEffect(() => {
    const getStudentFormData = async () => {
      const data = await fetchStudentFormData();

      setStudentFormData(data);
    };
    getStudentFormData();
  }, []);

  const makeAndDownloadCSV = () => {
    const csvData = makeCsv(studentFormData);
    downloadCsv(csvData);
  };

  if (!studentFormData) {
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
        <div
          style={{
            fontSize: "22px",
            fontWeight: "700",
            lineHeight: "1.25",
            marginBottom: "10px",
          }}
        >
          Student Vaccine Details
        </div>
        <button type="button" onClick={makeAndDownloadCSV}>
          Download as CSV
        </button>
      </div>
      <MaterialTable
        columns={STUDENT_TABLE_COLUMNS}
        data={studentFormData}
        title="Student Vaccine Details"
      />
    </div>
  );
}
