import MaterialTable from "material-table";
import React, { useEffect, useMemo, useState } from "react";
import { VACCINE_DRIVE_COLUMNS } from "../components/AppConstants";
import {
  addVaccineDrive,
  fetchVaccineDrives,
  updateVaccineDrive,
} from "../service/service";

export default function VaccineDrives() {
  const [vaccineDrivesData, setVaccineDrivesData] = useState();
  const [showModal, setShowModel] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [timestamp, setTimestamp] = useState(Date.now());
  const [updatedData, setUpdateData] = useState();

  const todaysDate = useMemo(() => {
    const today = new Date();
    return new Date(
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    );
  }, []);

  useEffect(() => {
    const getVaccineDrivesData = async () => {
      const data = await fetchVaccineDrives();

      setVaccineDrivesData(data);
    };
    getVaccineDrivesData();
  }, [timestamp]);

  const handleVaccineDataChanges = async (data, isEdit, editIndex) => {
    if (!isEdit) {
      await addVaccineDrive(data);
    } else {
      await updateVaccineDrive(vaccineDrivesData[editIndex].vId, data);
    }
    setTimestamp(Date.now());
    setShowModel(false);
    setUpdateData();
  };

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
    <>
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
              textAlign: "left",
            }}
          >
            Vaccine Drive Details{" "}
            <div style={{ fontSize: "20px", fontWeight: "400" }}>
              (click on row to edit vaccine details)
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              if (!showModal) {
                setUpdateData();
                setIsEditing(false);
                setShowModel(true);
              }
            }}
          >
            Add Vaccine Drive
          </button>
        </div>
        <MaterialTable
          columns={VACCINE_DRIVE_COLUMNS}
          data={vaccineDrivesData}
          title="Vaccine Drive Details"
          onRowClick={(event, rowData) => {
            if (!showModal) {
              if (
                new Date(vaccineDrivesData[rowData.tableData.id].date) >=
                todaysDate
              ) {
                const uData = {
                  date: vaccineDrivesData[rowData.tableData.id].date,
                  noOfVaccinesAvailable:
                    vaccineDrivesData[rowData.tableData.id]
                      .noOfVaccinesAvailable,
                };

                setUpdateData(uData);
                setSelectedIndex(rowData.tableData.id);
                setIsEditing(true);
                setShowModel(true);
              } else {
                alert("Selected Vaccine Drive is already passed.");
              }
            }
          }}
        />
      </div>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: window.innerWidth,
            height: window.innerHeight,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "100",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              padding: "20px",
              background: "white",
              borderRadius: "5px",
              lineHeight: "2",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              {isEditing ? "Edit" : "Add"} Vaccine Drive
            </div>
            <div>
              Vaccine Drive Date :{" "}
              <input
                type="date"
                value={updatedData?.date ? updatedData.date : ""}
                onChange={(e) => {
                  if (new Date(e.target.value) >= todaysDate) {
                    setUpdateData((prev = {}) => {
                      return { ...prev, date: e.target.value };
                    });
                  } else {
                    alert("Please add the future vaccine drives");
                  }
                }}
              />
            </div>
            <div>
              Vaccines Available :{" "}
              <input
                type="number"
                value={
                  updatedData?.noOfVaccinesAvailable
                    ? updatedData.noOfVaccinesAvailable
                    : ""
                }
                onChange={(e) => {
                  setUpdateData((prev = {}) => {
                    return { ...prev, noOfVaccinesAvailable: e.target.value };
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ padding: "5px", margin: "10px" }}
                onClick={() => {
                  handleVaccineDataChanges(
                    updatedData,
                    isEditing,
                    selectedIndex
                  );
                }}
              >
                {isEditing ? "Update" : "Add"}
              </button>
              <button
                style={{ padding: "5px", margin: "10px" }}
                onClick={() => {
                  setUpdateData();
                  setShowModel(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
