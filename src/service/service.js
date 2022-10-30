import Parse from "parse/dist/parse.min.js";

export async function addLandingdData() {
  const landingdDataObj = new Parse.Object("LandingdData");

  landingdDataObj.set("upcomingVaccineDrives", []);

  await landingdDataObj.save();
}

export async function fetchLandingData() {
  const query = new Parse.Query("LandingdData");

  const landingdDataObj = await query.first();

  return { ...landingdDataObj.attributes };
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
