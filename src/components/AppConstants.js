export const PAGES = {
  HOME: "HOME",
  STUDENT_FORM: "STUDENT_FORM",
  STUDENT_VACCINE_DETAILS: "STUDENT_VACCINE_DETAILS",
  VACCINE_DRIVES: "VACCINE_DRIVES",
};

export const STUDENT_TABLE_COLUMNS = [
  { title: "#", render: (rowData) => rowData.tableData.id + 1 },
  { title: "Student Name", field: "studentName" },
  { title: "Student Class", field: "studentClass" },
  { title: "Student Vaccination Status", field: "isVaccinated" },
  { title: "Student Vaccination Date", field: "vaccineDate" },
];

export const VACCINE_DRIVE_COLUMNS = [
  { title: "#", render: (rowData) => rowData.tableData.id + 1 },
  { title: "Vaccine Drive Date", field: "date" },
  { title: "Number of Vaccines Available", field: "noOfVaccinesAvailable" },
];

export const IS_MOBILE = window.innerWidth < 480;
