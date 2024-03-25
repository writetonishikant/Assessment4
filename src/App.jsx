import { useState } from "react";
import "./App.css";
import AssignmentOne from "./AssignmentOne";
import AssignmentTwo from "./AssignmentTwo";

const App = () => {
  const [showAssignmentOne, setShowAssignmentOne] = useState(true);
  const [showAssignmentTwo, setShowAssignmentTwo] = useState(false);

  const handleToggleClock = () => {
    setShowAssignmentOne(true);
    setShowAssignmentTwo(false);
  };

  const handleToggleTimer = () => {
    setShowAssignmentOne(false);
    setShowAssignmentTwo(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <button
            onClick={handleToggleClock}
            className={`btn btn-primary m-3 ${
              showAssignmentOne ? "disabled" : ""
            }`}
          >
            Assignment 1
          </button>
          <button
            onClick={handleToggleTimer}
            className={`btn btn-primary m-3 ${
              showAssignmentTwo ? "disabled" : ""
            }`}
          >
            Assignment 2
          </button>
        </div>
        {showAssignmentOne && <AssignmentOne />}
        {showAssignmentTwo && <AssignmentTwo />}
      </div>
    </div>
  );
};

export default App;
