import React from "react";
import TopSibar from "../../Components/TopSibar";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Checkbox } from "antd";
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

  const initialValues: Login = {
    userName: "",
    password: "",
  };
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .required("Không được bỏ trống!")
      .min(3, "Password nhiều hơn 3 ký tự!"),
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
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form_title">
                  <label htmlFor="userName">Tên đăng nhập</label>
                  <Field type="text" name="userName" id="userName" />
                  {errors.userName && touched.userName ? (
                    <p className="text-danger">{errors.userName}</p>
                  ) : null}
                </div>
                <div className="form_title">
                  <label htmlFor="password">Mật khẩu</label>
                  <div className="password">
                    <Field type="password" name="password" id="password" />
                    <i className="fa fa-eye"></i>
                  </div>
                  {errors.password && touched.password ? (
                    <p className="text-danger">{errors.password}</p>
                  ) : null}
                </div>

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
            <Link to="#">Quên mật khẩu?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
