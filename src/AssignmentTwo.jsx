import { useState } from "react";
import "./App.css";

function AssignmentTwo() {
  const [inputValue, setInputValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault(); // This will prevents the default form submission behavior and page reload
    alert("You typed : " + inputValue);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsInputEmpty(value === '');
  };

  return (
    <div className="row">
      <h2 className="text-center py-3">Assignment 2</h2>
      <div className="col-12">
        <div className="card p-2 h-70">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Type something..."
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-secondary w-100" disabled={isInputEmpty}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AssignmentTwo;
