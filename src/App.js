import { useState } from "react";
import { PAGES } from "./components/AppConstants";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import StudentForm from "./pages/StudentForm";
import StudentVaccineDetails from "./pages/StudentVaccineDetails";
import Parse from "parse/dist/parse.min.js";

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = "9yXtmOWsjNXylNrpvoij55n5cVcjbQufTBR6SCWB";
const PARSE_HOST_URL = "https://parseapi.back4app.com";
const PARSE_JAVASCRIPT_KEY = "mGS02Qyx9vTWv7QtrMMcZ1K5A2HGGQGel8ksqWYV";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  const usePage = useState(PAGES.HOME);

  // useEffect(() => {
  //   addLandingdData();
  // }, []);

  const getPageToRender = () => {
    switch (usePage[0]) {
      case PAGES.HOME: {
        return <Home usePage={usePage} />;
      }
      case PAGES.STUDENT_FORM: {
        return <StudentForm usePage={usePage} />;
      }
      case PAGES.STUDENT_VACCINE_DETAILS: {
        return <StudentVaccineDetails usePage={usePage} />;
      }
      default: {
        return <div>No Page Selected</div>;
      }
    }
  };

  return (
    <div>
      <Navigation usePage={usePage} />
      <div style={{ background: "aliceblue", padding: "10px" }}>
        {getPageToRender()}
      </div>
    </div>
  );
}

export default App;
