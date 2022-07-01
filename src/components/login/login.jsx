import React, { useState } from "react";
import "./login.scss";
import Cursor from "../../assets/icon/cursor.png";
import facebook from "../../assets/icon/facebook.svg";
import zalo from "../../assets/icon/zalo.svg";
import apple from "../../assets/icon/apple.svg";
import google from "../../assets/icon/google.svg";
import { FastField, Formik, Form } from "formik";
import { Spinner } from "react-bootstrap";
import { LoginSchema } from "./validate";
const axios = require("axios");

export const Login = (prop) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    username: "",
    password: "",
  };

  const closeForm = () => {
    prop.closeForm(true);
  };

  const openRegister = () => {
    prop.openRe(true);
  };

  const onLogin = (values) => {
    setLoading(true);
    axios
      .post("https://lap-center.herokuapp.com/api/login", {
        username: values.username,
        password: values.password,
      })
      .then(function (response) {
        localStorage.setItem("customerName", response.data.userName);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("isAdmin", response.data.isAdmin);
        setLoading(false);
        prop.closeForm(true)
      })
      .catch(function (error) {
        setLoading(false);
      });
  };

  const signInSocial = [google, facebook, zalo, apple];

  return (
    <div className="container">
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
        <div className="left d-flex justify-content-center flex-column ">
          {/* <img
            src="https://s1.media.ngoisao.vn/resize_580/news/2021/04/02/tieu-vy-len-bia-tap-chi-phap-1-ngoisaovn-w980-h1277.png"
            alt=""
          /> */}
          <img
            src="https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2020/03/16/IU-va-Rose-BLACKPINK-dung-phong-cach-tren-bia-tap-chi-My-nu-nha-YG-qua-xinh-nhung-mot-mau-so-voi-em-gai-quoc-dan_5.jpg"
            alt=""
          />
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
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                onLogin(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="email-input position-relative">
                    <FastField
                      name="username"
                      type="text"
                      className="auth-form-control"
                      placeholder="Email"
                    />
                    {errors.username && touched.username ? (
                      <div className="formError">{errors.username}</div>
                    ) : null}
                  </div>
                  <div className="password-input position-relative">
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
                  <div>
                    <button type="submit" className="auth-button">
                      Đăng nhập{" "}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div>
              <div className="sign-in-social-text">
                Đăng nhập với tài khoản khác
              </div>
              <div className="d-flex justify-content-center">
                {signInSocial?.map((item, index) => (
                  <div key={index} className="pr-2 cursor-pointer">
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="forget-password-text text-center">
              Quên mật khẩu?
            </div>
            <div className="signup-promo-text text-center">
              Không có tài khoản? <span onClick={openRegister}>Đăng ký</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
