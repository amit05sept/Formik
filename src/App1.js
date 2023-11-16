import React from "react";
import ReactDom from "react-dom/client";
import { useState } from "react";

const onlyAlphabet = function (e, setFun) {
  const regex = /^[a-zA-Z ]*$/;
  if (regex.test(e.target.value)) {
    setFun(e.target.value);
  }
};

const onlyNumber = function (e, setFun) {
  const re = /^[0-9\b]+$/;
  if (re.test(e.target.value)) {
    setFun(e.target.value);
  }
};

const printData = function (name, roll, branch, course) {
  console.log(name, branch, course, roll);
};
const Container = function () {
  const [inputTxtName, setinputTxtName] = useState("");
  const [inputTxtRollNum, setinputTxtRollNum] = useState("");
  const [branch, setbranch] = useState("");
  const [courses, setcoures] = useState("");

  console.log("render");
  return (
    <div className="container">
      <div className="form-container" key="div1">
        <div className="form-heading"> enter your details</div>
        <div className="div-name">
          <label name="name" htmlFor="name" className="name-label">
            Name
          </label>
          <input
            className="inputArea"
            name="name"
            id="name"
            value={inputTxtName}
            onChange={(e) => onlyAlphabet(e, setinputTxtName)}
            placeholder="name"></input>
        </div>
        <div className="div-roll">
          <label name="rollNum" className="label-rollNum">
            Roll Number
          </label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]+"
            className="inputArea"
            name="rollNum"
            value={inputTxtRollNum}
            onChange={(e) => onlyNumber(e, setinputTxtRollNum)}
            placeholder="Roll Number"></input>
        </div>
        <div className="div-branch">
          <label name="branch" htmlFor="branch" className="label-branch">
            Branch
          </label>
          <select name="branch" className="dropdown inputArea" id="branch">
            <option hidden defaultValue>
              Select one...
            </option>
            <option value="IT">Information Technology</option>
            <option value="CSE">Computer science</option>
            <option value="ECE"> Electronic and Communication</option>
            <option value="EE"> Electrical Engineering</option>
            <option value="MECH">Mechanical Engineering</option>
          </select>
        </div>
        <div className="div-course">
          <label name="Course" className="label-Course">
            Course
          </label>
          <input
            type="text"
            className="inputArea"
            name="Course"
            value={courses}
            onChange={(e) => onlyAlphabet(e, setcoures)}
            placeholder="Course"></input>
        </div>
        <button
          className="button-submit"
          type="submit"
          onClick={() => {
            printData(inputTxtName, inputTxtRollNum, branch, courses);
          }}>
          Submit
        </button>
      </div>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Container />);
