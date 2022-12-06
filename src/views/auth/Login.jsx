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
      <div className="div-center">
        <div className="container">
          <div className="row mx-auto main-content bg-success text-center">
            <div className="col-md-4 text-center company__info">
              <span className="company__logo">
                <h2>
                  <span className="fa fa-cart-plus" />
                </h2>
              </span>
              <h4 className="company_title">Shop</h4>
            </div>
            <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
              <div className="container-fluid">
                <div className="row">
                  <h2>Log In</h2>
                </div>
                <div className="row mb-2">
                  <Formik
                    initialValues={initialValue}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <p>Enter your username and password.</p>
                        <div className="form-group mb-5">
                          <Field
                            name="username"
                            placeholder="Enter Username"
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
                        </div>
                        <div className="form-group mb-5">
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
                        </div>
                        {loading ? (
                          <button
                            id="login"
                            disabled={true}
                            className="btn btn-primary"
                          >
                            SIGNING IN..
                          </button>
                        ) : (
                          <button
                            id="login"
                            type="submit"
                            className="btn btn-primary"
                          >
                            SIGN IN
                          </button>
                        )}
                      </Form>
                    )}
                  </Formik>
                </div>
                <div className="row mb-2">
                  <p>
                    Don't have an account?
                    <Link className="signup-link float-right" to="/register">
                      Register Here
                    </Link>
                  </p>
                </div>
                <div className="mb-2 footer-social-icon">
                  <Link>
                    <i className="fa fa-facebook-f facebook-bg" />
                  </Link>
                  <Link>
                    <i className="fa fa-google google-bg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
