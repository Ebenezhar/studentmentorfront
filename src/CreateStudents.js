import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { studentActionCreators } from "./redux/action-creators";

function CreateStudents() {
  let navigation = useNavigate();
  const dispatch = useDispatch();
  const studentList = useSelector(state => state.accountReducer);
  const { postStudent } = bindActionCreators(studentActionCreators, dispatch);
  const [gender, setgender] = useState();
  let [isLoading, setLoading] = useState(false);
  const handlegender = (e) => {
    setgender(e.target.value)
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      section: "",
      age: "",
      gender: "",
    },
    validate: (values) => {
      const errors = {};
      let pattern = new RegExp(/^[a-zA-Z\-]+$/);
      if (!values.name) {
        errors.name = "Please enter the name";
      } else if (values.name.length < 5) {
        errors.name = "Length must be greater than 5";
      } else if (values.name.length > 20) {
        errors.name = "Length must be less than 20";
      } else if (!pattern.test(formik.values.name)) {
        errors.name = "Enter the valid name";
      }
      if (!values.section) {
        errors.section = "Please Enter the section";
      }
      if (!values.age) {
        errors.age = "Please Enter the age";
      } else if (values.age < 5) {
        errors.age = "Please Enter the valid age";
      } else if (values.age > 25) {
        errors.age = "Please Enter the valid age";
      }

      return errors;
    },
    onSubmit: async (values) => {
      postStudent(values);
      alert(studentList.status);
      navigation("/portal/StudentList");
      // await axios.post(
      //   "https://62c29ac6ff594c65675fe6f0.mockapi.io/students",
      //   values
      // );
      // navigation("/portal/StudentList");
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
            />
            {formik.errors.name ? (
              <span style={{ color: "red" }}> {formik.errors.name}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label>Section</label>
            <input
              type="text"
              name="section"
              onChange={formik.handleChange}
              value={formik.values.section}
              className="form-control"
            />
            {formik.errors.section ? (
              <span style={{ color: "red" }}> {formik.errors.section}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              type="number"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="form-control"
            />
            {formik.errors.age ? (
              <span style={{ color: "red" }}> {formik.errors.age}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label>Gender</label>
            <div className="flex flex-row align-center">
              <select name='gender' onClick={formik.handleChange}>
                <option name="gender">
                  -select gender-
                </option>
                <option name="gender" value={"male"}>
                  Male
                </option>
                <option name="gender" value={"female"}>
                  Female
                </option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <input
              type={"submit"}
              value="Submit"
              className="btn btn-primary mt-5"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateStudents;
