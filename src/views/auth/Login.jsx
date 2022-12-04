import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { login } from "../../store/_actions/AuthAction";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  let initialValue = { username: "kminchelle", password: "0lelplR" };
  let loginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(5, "Password should be of minimum 5 characters length")
      .required("Password is required")
      .test(
        "isValidPass",
        "Passowrd must be 5 char (One UpperCase & One LowerCase & One Digit)",
        (value, context) => {
          const hasUpperCase = /[A-Z]/.test(value);
          const hasLowerCase = /[a-z]/.test(value);
          const hasNumber = /[0-9]/.test(value);
          //const hasSymbole = /[!@#%&]/.test(value);
          let validConditions = 0;
          const numberOfMustBeValidConditions = 3;
          const conditions = [hasLowerCase, hasUpperCase, hasNumber];
          conditions.forEach((condition) =>
            condition ? validConditions++ : null
          );
          if (validConditions >= numberOfMustBeValidConditions) {
            return true;
          }
          return false;
        }
      ),
  });

  const handleSubmit = (values) => {
    setLoading(true);
    dispatch(login(values.username, values.password))
      .then((response) => {
        setLoading(false);
        history("/productList");
      })
      .catch(() => {
        setLoading(false);
      });
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
                  validationSchema={loginSchema}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <h3>Login</h3>
                      <p>Enter your username and password.</p>
                      <div className="form-group">
                        <label className="username">Username</label>
                        <Field
                          name="username"
                          placeholder="Enter Name"
                          className={`form-control border-0 border-bottom bg-transparent ${
                            touched.username && errors.username
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="username"
                          className="invalid-feedback"
                        />
                        <i className="fa fa-user" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="password">Password</label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                          className={`form-control border-0 border-bottom bg-transparent ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                        <i className="fa fa-lock" />
                      </div>
                      <Link className="signup-link float-right" to="/register">
                        register
                      </Link>
                      {loading ? (
                        <button
                          id="login"
                          disabled={true}
                          className="btn btn-block login-btn"
                        >
                          SIGNING IN..
                        </button>
                      ) : (
                        <button
                          id="login"
                          type="submit"
                          className="btn btn-block login-btn"
                        >
                          SIGN IN
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

export default Login;
