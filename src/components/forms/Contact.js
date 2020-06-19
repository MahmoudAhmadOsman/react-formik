import React from "react";
import "./Contact.css";
import { useFormik } from "formik"; // import Formik Hook

function Contact() {
  //Step: 1
  //useFormik is a React hook that will return all Formik state and helpers directly
  // pass it a intivialValue which is an object
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    //Step:2 add  onSubmit: values => {alert(JSON.stringify(values, null, 2));
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      console.log(values);
    },
  });
  //Step:2 Add onChange = { formik.handleChange } and value = { formik.values.lastName } in form fields

  //console.log(formik.values);

  //Step:3 add onSubmit={formik.handleSubmit} on the form tag
  return (
    <section className="main_formik">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={formik.handleSubmit}>
              <h1>Contact us</h1>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <br />
              <button type="submit" className="btn btn-primary">
                <b>SUBMIT</b>
              </button>
            </form>
          </div>
        </div>
        <p className="copy-right">
          &copy; Copyright 2020. All Rights Reserved. Mahmoud Osman
        </p>
      </div>
    </section>
  );
}

export default Contact;
