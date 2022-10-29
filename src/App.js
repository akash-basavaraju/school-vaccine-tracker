import { useState } from "react";
import { PAGES } from "./components/AppConstants";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import StudentForm from "./pages/StudentForm";
import StudentVaccineDetails from "./pages/StudentVaccineDetails";

function App() {
  const useStateVar = useState({ currentPage: PAGES.HOME });

  const getPageToRender = () => {
    switch (useStateVar[0].currentPage) {
      case PAGES.HOME: {
        return <Home useStateVar={useStateVar} />;
      }
      case PAGES.STUDENT_FORM: {
        return <StudentForm useStateVar={useStateVar} />;
      }
      case PAGES.STUDENT_VACCINE_DETAILS: {
        return <StudentVaccineDetails useStateVar={useStateVar} />;
      }
      default: {
        return <div>No Page Selected</div>;
      }
    }
  };

  return (
    <div>
      <Navigation useStateVar={useStateVar} />
      <div style={{ background: "aliceblue", padding: "10px" }}>
        {getPageToRender()}
      </div>
    </div>
  );
}

export default App;
