import React, { useState } from "react";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface UpdatePassword {
  newPassword: string;
  enterNewPassword: string;
}

export default function CapnhatMatKhau() {
  const [isType, setIsType] = useState<boolean>(true);

  const initialValues: UpdatePassword = {
    newPassword: "",
    enterNewPassword: "",
  };
  const loginSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Không được bỏ trống!")
      .min(6, "Password nhiều hơn 6 ký tự!"),
    enterNewPassword: Yup.string()
      .required("Không được bỏ trống!")
      .min(6, "Password nhiều hơn 6 ký tự!"),
  });
  return (
    <div className="content">
      <h1 style={{ marginBottom: "20px" }}>Đặt lại mật khẩu</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log({ values });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form_title">
              <label htmlFor="newPassword">Mật khẩu mới</label>
              <div className="password">
                <Field
                  type={isType ? "password" : "text"}
                  name="newPassword"
                  id="newPassword"
                  style={
                    errors.newPassword && touched.newPassword
                      ? { border: " 2px solid red" }
                      : {}
                  }
                />
                <i
                  onClick={() => {
                    setIsType(isType ? false : true);
                  }}
                  id={isType ? "" : "doiMau"}
                  className="fa fa-eye"
                ></i>
              </div>
            </div>
            <div className="form_title">
              <label htmlFor="enterNewPassword">Nhập lại mật khẩu mới</label>
              <div className="password">
                <Field
                  type={isType ? "password" : "text"}
                  name="enterNewPassword"
                  id="enterNewPassword"
                  style={
                    errors.enterNewPassword && touched.enterNewPassword
                      ? { border: " 2px solid red" }
                      : {}
                  }
                />
                <i
                  onClick={() => {
                    setIsType(isType ? false : true);
                  }}
                  id={isType ? "" : "doiMau"}
                  className="fa fa-eye"
                ></i>
              </div>
            </div>
            {errors.enterNewPassword && touched.enterNewPassword ? (
              <p className="text-error">{errors.enterNewPassword}</p>
            ) : null}

            <div className="form_button">
              <button type="submit">Lưu mật khẩu</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
