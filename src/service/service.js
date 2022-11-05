import Parse from "parse/dist/parse.min.js";

export async function addVaccineDrive({ date, noOfVaccinesAvailable }) {
  const vaccineDriveObj = new Parse.Object("VaccineDrives");

  vaccineDriveObj.set("date", date);
  vaccineDriveObj.set("noOfVaccinesAvailable", Number(noOfVaccinesAvailable));

  await vaccineDriveObj.save();
}

export async function fetchVaccineDrives() {
  const query = new Parse.Query("VaccineDrives");

  query.ascending("date");

  const vaccineDriveObj = await query.find();

  return vaccineDriveObj.map((data) => ({ ...data.attributes, id: data.id }));
}

export async function updateVaccineDrive(id, data) {
  const query = new Parse.Query("VaccineDrives");

  const vaccineDriveObj = await query.get(id);
  vaccineDriveObj.set("date", data.date);
  vaccineDriveObj.set(
    "noOfVaccinesAvailable",
    Number(data.noOfVaccinesAvailable)
  );

  await vaccineDriveObj.save();
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

  return studentFormData.map((data) => ({ ...data.attributes, id: data.id }));
}
