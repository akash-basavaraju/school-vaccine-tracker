import React from "react";
import { PAGES } from "./AppConstants";

export default function Navigation({ usePage }) {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        background: "#a6e1a6",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "10px" }}>School Vaccine Tracker</div>
      <div style={{ margin: "10px", display: "flex" }}>
        <div
          style={{ margin: "10px", cursor: "pointer", alignSelf: "flex-end" }}
          onClick={() => {
            usePage[1](PAGES.HOME);
          }}
        >
          Home
        </div>
        <div
          style={{ margin: "10px", cursor: "pointer", alignSelf: "flex-end" }}
          onClick={() => {
            usePage[1](PAGES.STUDENT_FORM);
          }}
        >
          Student Form
        </div>
        <div
          style={{ margin: "10px", cursor: "pointer", alignSelf: "flex-end" }}
          onClick={() => {
            usePage[1](PAGES.STUDENT_VACCINE_DETAILS);
          }}
        >
          Student Vaccine Details
        </div>
      </div>
    </div>
  );
}
