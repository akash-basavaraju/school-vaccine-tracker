import Parse from "parse/dist/parse.min.js";

const VACCINE_SERVICE = "http://0.0.0.0:4000/vaccine-detail";
const STUDENT_SERVICE = "http://0.0.0.0:6000/student-detail";
const USER_SERVICE = "http://0.0.0.0:9000/user";

export async function addVaccineDrive({ date, noOfVaccinesAvailable }) {
  const response = await fetch(VACCINE_SERVICE, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ vId: Date.now(), date, noOfVaccinesAvailable }),
  });
  await response.json();
}

export async function fetchVaccineDrives() {
  const response = await fetch(VACCINE_SERVICE);
  const res = await response.json();

  return res;
}

export async function updateVaccineDrive(vId, data) {
  const response = await fetch(`${VACCINE_SERVICE}/${vId}`, {
    method: "PATCH",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ vId: vId, ...data }),
  });
  await response.json();
}

export async function addStudentFormData(data) {
  const response = await fetch(STUDENT_SERVICE, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: Date.now(),
      userName: data.studentName,
      studentClass: data.studentClass,
      isVaccinated: data.isVaccinated,
      vaccineDate: data.vaccineDate,
    }),
  });
  await response.json();
}

export async function fetchStudentFormData() {
  const response = await fetch(STUDENT_SERVICE);
  const res = await response.json();

  return res;
}
