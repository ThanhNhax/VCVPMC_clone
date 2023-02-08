import React, { useState } from "react";
import TopSibar from "../../Components/TopSibar";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Checkbox, message } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireStore/fireStore";
import { getUser } from "../../redux/userReducer/userReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/configStore";

interface Login {
  userName: string;
  password: string;
}
export default function DangNhap() {
  const dispatch: AppDispatch = useDispatch();
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [isType, setIsType] = useState(true);
  const [isError, setIsError] = useState(false);

  const initialValues: Login = {
    userName: "",
    password: "",
  };
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .required("Không được bỏ trống!")
      .min(6, "Password nhiều hơn 6 ký tự!"),
    userName: Yup.string().required("Không được bỏ trống!"),
  });
  return (
    <div className="dang_nhap">
      <div className="dang_nhap--header">
        <TopSibar />
      </div>
      <div className="dang_nhap_content">
        <div className="logo">
          <img src="../img/vcpmc_logo.png" alt="logo_vcpmc" />
        </div>
        <div className="content">
          <h1>Đăng nhập</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={async (values: Login) => {
              console.log({ values });
              try {
                await signInWithEmailAndPassword(
                  auth,
                  values.userName,
                  values.password
                ).then((result) => {
                  console.log({ result });
                  // tạo user admin trên fireStote
                  const actions = getUser(result.user.uid);
                  dispatch(actions);
                });
              } catch (err: any) {
                console.log(err.message);
                message.open({
                  type: "error",
                  content:
                    "Tên đăng nhập hoặc mật khẩu không đúng! Vui lòng kiểm tra lại!",
                  duration: 3,
                });
                setIsError(true);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form_title">
                  <label htmlFor="userName">Tên đăng nhập</label>
                  <Field
                    type="text"
                    name="userName"
                    id="userName"
                    onFocus={() => setIsError(false)}
                    style={
                      (errors.userName && touched.userName) || isError
                        ? { border: " 2px solid red" }
                        : {}
                    }
                  />
                  {/* {errors.userName && touched.userName ? (
                    <p className="text-error">{errors.userName}</p>
                  ) : null} */}
                </div>
                <div className="form_title">
                  <label htmlFor="password">Mật khẩu</label>
                  <div className="password">
                    <Field
                      type={isType ? "password" : "text"}
                      name="password"
                      id="password"
                      style={
                        (errors.password && touched.password) || isError
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
                  {/* {errors.password && touched.password ? (
                    <p className="text-error">{errors.password}</p>
                  ) : null} */}
                </div>
                {(errors.password && touched.password) ||
                (errors.userName && touched.userName) ? (
                  <p className="text-error">Hãy nhập tài khoản và mật khẩu</p>
                ) : null}
                <div className="form_checkbox">
                  <Checkbox onChange={onChange}>Ghi nhớ tài khoản</Checkbox>
                </div>
                <div className="form_button">
                  <button type="submit">Đăng nhập</button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="form_footer">
            <Link to="/quenMatKhau">Quên mật khẩu?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
