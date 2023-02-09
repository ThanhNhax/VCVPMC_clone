import { message } from "antd";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { history } from "../..";
import { auth } from "../../FireStore/fireStore";

import { Field, Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import LinkError from "./LinkError";

export default function QuenMatKhau() {
  const navigeta = useNavigate();
  const initialValues: FormikValues = {
    email: "",
  };
  const emailSchema = Yup.object().shape({
    email: Yup.string()
      .required("Không được bỏ trống!")
      .email("Email không hợp lệ"),
  });
  return (
    <div className="content_quenMatKhau">
      <h1>Khôi phục mật khẩu</h1>
      <p>
        Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
      </p>
      <div className="form_email">
        {/* <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Nhập email..."
          id="email"
          value={email}
          onChange={handleChange}
        /> */}
        <Formik
          initialValues={initialValues}
          validationSchema={emailSchema}
          onSubmit={(values) => {
            console.log(values.email);
            sendPasswordResetEmail(auth, values.email)
              .then(() => {
                // Password reset email sent!
                // ..
                message.success("Password reset email sent!");
                // history.push("/capNhatMatKhau");
              })
              .catch((error) => {
                console.log({ error });
                history.push("/linkError");
                // <Navigate to={<LinkError title={error.message} />} />;
              });
            auth.languageCode = "it";
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form_email">
                <label htmlFor="email">Email</label>
                <div className="password">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    style={
                      errors.email && touched.email
                        ? { border: " 2px solid red" }
                        : {}
                    }
                  />
                </div>
              </div>
              <div className="form_button">
                <button type="submit">Xác nhận</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="form_button">
        <p onClick={() => history.push("/")}>Quay lại đăng nhập </p>
      </div>
    </div>
  );
}
