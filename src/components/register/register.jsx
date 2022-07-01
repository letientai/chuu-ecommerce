import React, { useState } from "react";
import Cursor from "../../assets/icon/cursor.png";
import "./register.scss";
import { Spinner } from "react-bootstrap";
import { RegisterSchema } from "./validate";
import { Formik, FastField, Form } from "formik";
const axios = require("axios");

export const Register = (prop) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    password_confirm: "",
    phone: "",
  };

  const closeForm = () => {
    prop.closeForm(true);
  };

  const openLogin = () => {
    prop.openLo(true);
  };

  const onRegister = (values) => {
    setLoading(true);
    axios
    .post("https://lap-center.herokuapp.com/api/register", {
      name: values.username,
      email: values.email,
      phone: values.phone,
      password: values.password,
    })
      .then(function (response) {
        setLoading(false);
        prop.closeForm(true)
      })
      .catch(function (error) {
        setLoading(false);
      });
  }
  return (
    <div className="container-re">
      <div
        className="outsite"
        onClick={closeForm}
        style={{ cursor: `url(${Cursor}), pointer` }}
      ></div>
      {loading && (
        <div className="loading bg-w w-100 h-100 d-flex justify-content-center flex-column">
          <Spinner animation="border" variant="danger" className="spiner" />
        </div>
      )}
      <div className="form d-flex">
        <div className="left d-flex justify-content-center flex-column">
          <img
            src="https://i.pinimg.com/originals/b4/d4/77/b4d477c99c19452d59ac069842aa54c7.jpg"
            alt=""
          />
          {/* <img src="https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2020/03/16/IU-va-Rose-BLACKPINK-dung-phong-cach-tren-bia-tap-chi-My-nu-nha-YG-qua-xinh-nhung-mot-mau-so-voi-em-gai-quoc-dan_5.jpg" alt="" /> */}
        </div>
        <div className="right">
          <div className="h-100 login-modal px-lg-5 px-2 d-flex text-lg-left text-center justify-content-center flex-column position-relative ">
            <div
              className="btn-close cursor-pointer"
              onClick={closeForm}
              style={{ position: "absolute", top: "15px", right: "15px" }}
            ></div>
             <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              onSubmit={(values) => {
                onRegister(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="email-input position-relative">
                    <FastField
                      name="username"
                      type="text"
                      className="auth-form-control"
                      placeholder="Username"
                    />
                    {errors.username && touched.username ? (
                      <div className="formError">{errors.username}</div>
                    ) : null}
                  </div>
                  <div className="email-input position-relative">
                    <FastField
                      name="email"
                      type="text"
                      className="auth-form-control"
                      placeholder="Email"
                    />
                    {errors.email && touched.email ? (
                      <div className="formError">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="email-input position-relative">
                    <FastField
                      name="password"
                      type="password"
                      className="auth-form-control"
                      placeholder="Password"
                    />
                    {errors.password && touched.password ? (
                      <div className="formError">{errors.password}</div>
                    ) : null}
                  </div>
                  <div className="email-input position-relative">
                    <FastField
                      name="password_confirm"
                      type="password"
                      className="auth-form-control"
                      placeholder="Password confirm"
                    />
                    {errors.password_confirm && touched.password_confirm ? (
                      <div className="formError">{errors.password_confirm}</div>
                    ) : null}
                  </div>
                  <div className="email-input position-relative">
                    <FastField
                      name="phone"
                      type="text"
                      className="auth-form-control"
                      placeholder="Phone"
                    />
                    {errors.phone && touched.phone ? (
                      <div className="formError">{errors.phone}</div>
                    ) : null}
                  </div>
                  {/* <div className="password-input position-relative">
                    <FastField
                      name="password"
                      type="password"
                      className="auth-form-control"
                      placeholder="Password"
                    />
                     {errors.password && touched.password ? (
                      <div className="formError">{errors.password}</div>
                    ) : null}
                  </div> */}
                  <div>
                    <button type="submit" className="auth-button">
                      Đăng ký{" "}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="signup-promo-text text-center">
              Bạn đã có tài khoản? <span onClick={openLogin}>Đăng nhập</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
