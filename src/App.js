import React from "react";
import ReactDom from "react-dom/client";
import { useFormik } from "formik";
import { validate } from "./shcemas/index";

const initialValues = {
  email: "",
  name: "",
  roll_number: "",
  branch: "",
  course: "",
};

const Container = function () {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validate,
      onSubmit: (values , action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);
  console.log("render");
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-container" key="div1">
          <div className="form-heading"> enter your details</div>
          <div className="div-name">
            <label name="name" htmlFor="name" className="name-label">
              Name
            </label>
            <input
              className="inputArea"
              autoComplete="off"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name"></input>
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </div>
          <div className="div-roll">
            <label
              name="Roll_number"
              htmlFor="roll_number"
              className="label-rollNum">
              Roll Number
            </label>
            <input
              type="number"
              inputMode="numeric"
              autoComplete="off"
              pattern="[0-9]+"
              className="inputArea"
              id="roll_number"
              name="roll_number"
              value={values.roll_number}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Roll Number"></input>
            {errors.roll_number && touched.roll_number ? (
              <p className="form-error">{errors.roll_number}</p>
            ) : null}
          </div>
          <div className="div-branch">
            <label name="rranch" htmlFor="branch" className="label-branch">
              Branch
            </label>
            <select
              name="branch"
              className="dropdown inputArea"
              autoComplete="off"
              id="branch"
              value={values.branch}
              onChange={handleChange}
              onBlur={handleBlur}>
              <option hidden defaultValue>
                Select one...
              </option>
              <option value="IT">Information Technology</option>
              <option value="CSE">Computer science</option>
              <option value="ECE"> Electronic and Communication</option>
              <option value="EE"> Electrical Engineering</option>
              <option value="MECH">Mechanical Engineering</option>
            </select>
            {errors.branch && touched.branch ? (
              <p className="form-error">{errors.branch}</p>
            ) : null}
          </div>
          <div className="div-course">
            <label name="course" htmlFor="course" className="label-Course">
              Course
            </label>
            <input
              type="text"
              className="inputArea course"
              name="course"
              autoComplete="off"
              id="course"
              value={values.course}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Course"></input>
            {errors.course && touched.course?<p className="form-error">{errors.course}</p>:null}
          </div>
          <div className="div-email">
            <label name="email" htmlFor="email" className="label-email">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              className="inputArea email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="email"></input>
            {errors.email && touched.email ? <p className="form-error">{errors.email}</p>:null}
          </div>
          <button className="button-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Container />);
