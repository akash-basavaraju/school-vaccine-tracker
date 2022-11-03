import React from "react";
import { PAGES } from "./AppConstants";

export default function Navigation({ usePage }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px 0px",
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "space-between",
        background: "#a6e1a6",
        alignItems: "center",
      }}
    >
      <div style={{ paddingLeft: "5px" }}>School Vaccine Tracker</div>
      <div style={{ display: "flex", color: "blue" }}>
        <div
          style={{ padding: "7px", cursor: "pointer" }}
          onClick={() => {
            usePage[1](PAGES.HOME);
          }}
        >
          Home
        </div>
        <div
          style={{ padding: "7px", cursor: "pointer" }}
          onClick={() => {
            usePage[1](PAGES.STUDENT_FORM);
          }}
        >
          Student Form
        </div>
        <div
          style={{ padding: "7px", cursor: "pointer" }}
          onClick={() => {
            usePage[1](PAGES.STUDENT_VACCINE_DETAILS);
          }}
        >
          Student Vaccine Details
        </div>
        <div
          style={{ padding: "7px", cursor: "pointer" }}
          onClick={() => {
            usePage[1](PAGES.VACCINE_DRIVES);
          }}
        >
          Vaccine Drives
        </div>
      </div>
    </div>
  );
}
