import React, { useState } from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Circles, ColorRing } from "react-loader-spinner";

export default function Register() {
  let navigate = useNavigate();

  const [error, seterror] = useState(null);

  const [isLoading, setisLoading] = useState(false);
  async function submitRegister(values) {
    setisLoading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .catch((err) => {
        setisLoading(false);
        seterror(err.response.data.message);
      });
    if (data.message === "success") {
      setisLoading(false);
      navigate("/login");
    }
  }
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let validteSchema = Yup.object({
    name: Yup.string()
      .min(3, "min lenght is 3")
      .max(10, "max lenght is 10")
      .required("required field"),
    email: Yup.string().email("email is invalid").required("required field"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required field"),
    password: Yup.string()
      .matches(/[A-z][A-Za-z0-9]{5,10}/, "password is not valid")
      .required("required field"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Not matched with password")
      .required("required field"),
  });

  let formic = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validteSchema,
    onSubmit: submitRegister,
  });

  return (
    <>
      <div className="container mx-auto py-5">
        <h2 className="mb-4">Register Now</h2>
        <form onSubmit={formic.handleSubmit}>
          <label htmlFor="name"> Name:</label>
          <input
            id="name"
            name="name"
            value={formic.values.name}
            onChange={formic.handleChange}
            onBlur={formic.handleBlur}
            type="text"
            className="form-control mb-2"
          />
          {(formic.errors.name && formic.touched.name)&&  (
            <div className="alert alert-danger p-2 mt-2">
              {formic.errors.name}
            </div>
          )}
          <label htmlFor="email"> Email:</label>
          <input
            id="email"
            name="email"
            value={formic.values.email}
            onChange={formic.handleChange}
            onBlur={formic.handleBlur}
            type="email"
            className="form-control mb-2"
          />
          {formic.errors.email && formic.touched.email ? (
            <div className="alert alert-danger p-2 mt-2">
              {formic.errors.email}
            </div>
          ) : (
            ""
          )}
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            value={formic.values.password}
            onChange={formic.handleChange}
            onBlur={formic.handleBlur}
            type="password"
            className="form-control mb-2"
          />
          {formic.errors.password && formic.touched.password ? (
            <div className="alert alert-danger p-2 mt-2">
              {formic.errors.password}
            </div>
          ) : (
            ""
          )}
          <label htmlFor="rePassword">RePassword:</label>
          <input
            id="rePassword"
            value={formic.values.rePassword}
            name="rePassword"
            onChange={formic.handleChange}
            onBlur={formic.handleBlur}
            type="password"
            className="form-control mb-2"
          />
          {formic.errors.rePassword && formic.touched.rePassword ? (
            <div className="alert alert-danger p-2 mt-2">
              {formic.errors.rePassword}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            value={formic.values.phone}
            onChange={formic.handleChange}
            onBlur={formic.handleBlur}
            type="tel"
            className="form-control mb-2"
          />
          {formic.errors.phone && formic.touched.phone ? (
            <div className="alert alert-danger p-2 mt-2">
              {formic.errors.phone}
            </div>
          ) : (
            ""
          )}

          {error !== null ? (
            <div className="alert alert-danger p-2 mt-2">{error}</div>
          ) : (
            ""
          )}

          {isLoading ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : (
            <div className="d-flex align-items-center">
              <button
                disabled={!(formic.isValid && formic.dirty)}
                type="submit"
                className="btn btn-success text-white mt-2"
              >
                Register
              </button>

              <Link className="btn   align-items-center  " to="/login">
                Already have account?
              </Link>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
