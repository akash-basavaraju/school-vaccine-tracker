import Parse from "parse/dist/parse.min.js";

export async function addVaccineDrive({ date, noOfVaccinesAvailable }) {
  const vaccineDriveObj = new Parse.Object("VaccineDrives");

  vaccineDriveObj.set("date", date);
  vaccineDriveObj.set("noOfVaccinesAvailable", noOfVaccinesAvailable);

  await vaccineDriveObj.save();
}

export async function fetchVaccineDrives() {
  const query = new Parse.Query("VaccineDrives");

  const vaccineDriveObj = await query.find();

  return vaccineDriveObj.map((data) => ({ ...data.attributes }));
}

export async function addStudentFormData(data) {
  const studentFormObj = new Parse.Object("StudentForm");

  studentFormObj.set("studentName", data.studentName);
  studentFormObj.set("studentClass", data.studentClass);
  studentFormObj.set("isVaccinated", data.isVaccinated);
  studentFormObj.set("vaccineDate", data.vaccineDate);

  await studentFormObj.save();
}

export async function fetchStudentFormData() {
  const query = new Parse.Query("StudentForm");

  const studentFormData = await query.find();

  return studentFormData.map((data) => ({ ...data.attributes }));
}
