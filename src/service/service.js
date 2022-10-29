import Parse from "parse/dist/parse.min.js";

export async function addLandingdData() {
  const landingdDataObj = new Parse.Object("LandingdData");

  landingdDataObj.set("studentsRegistered", "200");
  landingdDataObj.set("studentsVaccinated", "50");
  landingdDataObj.set("upcomingVaccineDrives", []);

  await landingdDataObj.save();
}

export async function fetchLandingData() {
  const query = new Parse.Query("LandingdData");

  const landingdDataObj = await query.first();

  return {
    studentsRegistered: landingdDataObj.get("studentsRegistered"),
    studentsVaccinated: landingdDataObj.get("studentsVaccinated"),
    upcomingVaccineDrives: landingdDataObj.get("upcomingVaccineDrives"),
  };
}
