import React, { useState } from 'react'
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux/action-creators';

function CreateTeachers() {
  const dispatch = useDispatch();
  const postData = useSelector(state => state.teacherReducer);
  const { postTeacher } = bindActionCreators(actionCreators, dispatch);
  let navigation = useNavigate();
  let [isLoading, setloading] = useState(false);
  let formik = useFormik({
    initialValues: {
      name: '',
      subject: '',
      department: '',
      age: '',
      salary: '',
    },
    validate: (values) => {
      let errors = {};
      let pattern = new RegExp(/^[a-zA-Z\-]+$/)
      if (!values.name) {
        errors.name = 'Please enter the name'
      } else if (values.name.length < 5) {
        errors.name = 'Length must be greater than 5'
      } else if (values.name.length > 20) {
        errors.name = 'Length must be less than 20'
      } else if (!pattern.test(formik.values.name)) {
        errors.name = 'Enter the valid name'
      }
      if (!values.subject) {
        errors.subject = 'Please enter the subject'
      } else if (values.subject.length < 2) {
        errors.subject = 'Length must be greater than 2'
      } else if (values.subject.length > 10) {
        errors.subject = 'Length must be less than 10'
      }
      if (!values.department) {
        errors.department = 'Please enter the department name'
      }
      if (!values.age) {
        errors.age = 'Please enter the Age'
      } else if (values.age < 18) {
        errors.age = 'You are not eligible'
      } else if (values.age > 70) {
        errors.age = 'You are not eligible'
      }
      if (!values.salary) {
        errors.salary = 'Please enter the Salary'
      }
      return errors;
    },
    onSubmit: (values) => {
      try {
        postTeacher(values);
        alert(postData.status)
        // await axios.post('https://62c29ac6ff594c65675fe6f0.mockapi.io/teachers', values);
        navigation("/portal/teachersList")
      } catch (error) {
        console.log(error);
      }
    }
  })
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
              className="form-control" />
            {
              formik.errors.name ? <span style={{ color: 'red' }}> {formik.errors.name}</span> : null
            }
          </div>
          <div className="col-lg-6">
            <label>Subject</label>
            <input type="text"
              name="subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
              className="form-control" />
            {
              formik.errors.subject ? <span style={{ color: 'red' }}> {formik.errors.subject}</span> : null
            }
          </div>
          <div className="col-lg-6">
            <label>Department</label>
            <input type="text"
              name="department"
              onChange={formik.handleChange}
              value={formik.values.department}
              className="form-control" />
            {
              formik.errors.department ? <span style={{ color: 'red' }}> {formik.errors.department}</span> : null
            }
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input type="number"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="form-control" />
            {
              formik.errors.age ? <span style={{ color: 'red' }}> {formik.errors.age}</span> : null
            }
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input type="number"
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
              className="form-control" />
            {
              formik.errors.salary ? <span style={{ color: 'red' }}> {formik.errors.salary}</span> : null
            }
          </div>
        </div>
        <div className="col-lg-6">
          <input type={'submit'} value='Submit' className="btn btn-primary mt-5" disabled={!formik.isValid && isLoading} />
        </div>
      </form>
    </div>
  )
}

export default CreateTeachers