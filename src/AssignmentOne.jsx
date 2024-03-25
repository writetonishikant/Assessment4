import { useState } from "react";
import "./App.css";

function AssignmentOne() {
  const [imageHovered, setImageHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [textboxMessage, setTextboxMessage] = useState("");

  const handleImageHover = () => {
    setImageHovered(!imageHovered);
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
    setClickCount((prevCount) => prevCount + 1);
    setTimeout(() => {
      if (clickCount === 1) {
        console.log("Button clicked once");
      }
      setClickCount(0);
    }, 300);
  };

  const handleButtonDoubleClick = () => {
    alert("Button double clicked");
    console.log("Button double clicked");
    setClickCount(0);
  };

  const handleInputFocus = () => {
    console.log("Focused on the textbox");
    setTextboxMessage("Focused on the textbox");
  };

  const handleInputBlur = () => {
    console.log("Out of the textbox");
    setTextboxMessage("Out of the textbox");
  };

  const handleCopy = () => {
    alert("Text copied!");
  };

  const handleCut = () => {
    alert("Text cut!");
  };

  const handlePaste = () => {
    alert("Text pasted!");
  };

  return (
    <div className="row">
      <h2 className="text-center py-3">Assignment 1</h2>
      <div className="col-4">
        <div className="card p-2 h-70">
          <img
            src="https://via.placeholder.com/100"
            className={imageHovered ? "img-hovered" : "img-not-hovered"}
            onMouseOver={handleImageHover}
            onMouseOut={handleImageHover}
          />
        </div>
      </div>
      <div className="col-4">
        <div className="card p-2 h-50">
          <button
            className="btn btn-secondary"
            onClick={handleButtonClick}
            onDoubleClick={handleButtonDoubleClick}
          >
            Click me
          </button>
          {clickCount === 1 && (
            <p className="pt-2 text-danger">Button clicked once</p>
          )}
        </div>
      </div>
      <div className="col-4">
        <div className="card p-2 h-50">
          <input
            className="form-control"
            type="text"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Type something"
          />
          <p className="pt-2">{textboxMessage}</p>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-12">
          <h3>Try copying, cutting, or pasting this text.</h3>
          <p
            style={{ fontSize: "18px" }}
            onCopy={handleCopy}
            onCut={handleCut}
            onPaste={handlePaste}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AssignmentOne;
