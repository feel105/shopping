import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Country, State, City } from "country-state-city";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  //init value before form render
  let initialValue = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "Male",
    country: "IN",
    state: "",
    city: "",
  };
  //validation of form using yup
  let signupSchema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("The Email is required."),
    gender: Yup.string().required("Gender is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
  });
  const countries = Country.getAllCountries();
  const handleCountryChange = (countryId) => {
    setStateList(State.getStatesOfCountry(countryId));
  };
  const handleStateChange = (stateId) => {
    console.log(stateId, "stateId");
    setCityList(City.getCitiesOfState(initialValue.country, stateId));
  };

  //handle form submiy and get data of forms
  const handleSubmit = (values) => {
    setLoading(true);
    //here call API register
  };
  return (
    <>
      <div className="container login_page">
        <div className="row">
          <div className="col-sm-6 form-section">
            <div className="login-wrapper">
              <div className="form_outer2">
                <Formik
                  initialValues={initialValue}
                  validationSchema={signupSchema}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                >
                  {({ errors, touched, setFieldValue, setValues }) => (
                    <Form>
                      <h3>Sign Up</h3>
                      <p>Please enter info to create account.</p>
                      <div className="form-group">
                        <label className="firstname">Firstname</label>
                        <Field
                          name="firstname"
                          placeholder="Enter Name"
                          className={`form-control border-0 border-bottom bg-transparent ${
                            touched.firstname && errors.firstname
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="firstname"
                          className="invalid-feedback"
                        />
                        <i className="fa fa-user" />
                      </div>
                      <div className="form-group">
                        <label className="lastname">lastname</label>
                        <Field
                          name="lastname"
                          placeholder="Enter Name"
                          className={`form-control border-0 border-bottom bg-transparent ${
                            touched.lastname && errors.lastname
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="lastname"
                          className="invalid-feedback"
                        />
                        <i className="fa fa-user" />
                      </div>
                      <div className="form-group">
                        <label className="email">email</label>
                        <Field
                          name="email"
                          placeholder="Enter Email"
                          className={`form-control border-0 border-bottom bg-transparent ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                        <i className="fa fa-user" />
                      </div>
                      <div className="form-group col-md-12 col-sm-12">
                        <label htmlFor="info">Gender</label>
                        <div
                          role="group"
                          aria-labelledby="my-radio-group"
                          className={"w-100"}
                        >
                          <label className={"d-inline"}>
                            <Field type="radio" name="gender" value="Male" />
                            <span className={"pl-2"}>Male</span>
                          </label>
                          <label className={"d-inline pl-2"}>
                            <Field type="radio" name="gender" value="Female" />
                            <span className={"pl-2"}>Female</span>
                          </label>
                        </div>
                      </div>

                      <div className="form-group  col-md-4 col-sm-12">
                        <label htmlFor="country">Country</label>
                        <Field
                          as="select"
                          name="country"
                          onChange={(e) => {
                            setFieldValue("country", e.target.value);
                            handleCountryChange(e.target.value);
                          }}
                          className={`new_select form-control ${
                            touched.country && errors.country
                              ? "is-invalid"
                              : ""
                          }`}
                        >
                          <option value="">Select country</option>
                          {countries &&
                            countries.map((allData, index) => (
                              <option
                                key={`country-opt-${index}`}
                                title={allData.isoCode}
                                data-id={allData.isoCode}
                                value={allData.isoCode}
                              >
                                {allData.name}
                              </option>
                            ))}
                        </Field>
                        <ErrorMessage
                          component="div"
                          name="country"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group  col-md-4 col-sm-12">
                        <label htmlFor="state">state</label>
                        <Field
                          as="select"
                          name="state"
                          onChange={(e) => {
                            setFieldValue("state", e.target.value);
                            handleStateChange(e.target.value);
                          }}
                          className={`new_select form-control ${
                            touched.state && errors.state ? "is-invalid" : ""
                          }`}
                        >
                          <option value="">Select state</option>
                          {stateList &&
                            stateList.map((allData, index) => (
                              <option
                                key={`state-opt-${index}`}
                                title={allData.isoCode}
                                data-id={allData.isoCode}
                                value={allData.isoCode}
                              >
                                {allData.name}
                              </option>
                            ))}
                        </Field>
                        <ErrorMessage
                          component="div"
                          name="state"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group  col-md-4 col-sm-12">
                        <label htmlFor="city">city</label>
                        <Field
                          as="select"
                          name="city"
                          onChange={(e) => {
                            setFieldValue("city", e.target.value);
                          }}
                          className={`new_select form-control ${
                            touched.city && errors.city ? "is-invalid" : ""
                          }`}
                        >
                          <option value="">Select city</option>
                          {cityList &&
                            cityList.map((allData, index) => (
                              <option
                                key={`city-opt-${index}`}
                                title={allData.isoCode}
                                data-id={allData.isoCode}
                                value={allData.isoCode}
                              >
                                {allData.name}
                              </option>
                            ))}
                        </Field>
                        <ErrorMessage
                          component="div"
                          name="city"
                          className="invalid-feedback"
                        />
                      </div>

                      <Link className="login-link float-right" to="/login">
                        Login
                      </Link>
                      {loading ? (
                        <button
                          id="signup"
                          disabled={true}
                          className="btn btn-block login-btn"
                        >
                          SIGN UP..
                        </button>
                      ) : (
                        <button
                          id="signup"
                          type="submit"
                          className="btn btn-block login-btn"
                        >
                          SIGN UP
                        </button>
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
