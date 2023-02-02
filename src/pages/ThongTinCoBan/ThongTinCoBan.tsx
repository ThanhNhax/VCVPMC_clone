import React from "react";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

type Props = {};

export default function ThongTinCoBan({}: Props) {
  const initialValues = {
    ho: "",
    ten: "",
    ngaySinh: "",
    sdt: "",
    email: "",
    tenDangNhap: "",
    phanQuyen: "",
  };
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .required("Không được bỏ trống!")
      .min(3, "Password nhiều hơn 3 ký tự!"),
    userName: Yup.string().required("Không được bỏ trống!"),
  });
  return (
    <div className="container" style={{ color: "white" }}>
      <h1>Thông Tin Cơ Bản</h1>
      <div className="content">
        <div className="content_avatar">
          <div className="left-avatar">
            <img src="../img/Frame 433.png" alt="Frame 433.png" />
            <div className="camera">
              <i className="fas fa-camera"></i>
            </div>
          </div>
          <p>Name</p>
        </div>
        <div className="content_form">
          <div id="form_profile">
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                console.log({ values });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form_profile-top">
                    <div>
                      <div className="form_title">
                        <label htmlFor="ho">Họ:</label>
                        <br />
                        <Field type="text" name="ho" id="ho" />
                        {errors.ho && touched.ho ? (
                          <p className="text-danger">{errors.ho}</p>
                        ) : null}
                      </div>
                      <div className="form_title">
                        <label htmlFor="ngaySinh">Ngày sinh:</label>
                        <br />
                        <Field type="date" name="ngaySinh" id="ngaySinh" />
                        {errors.ngaySinh && touched.ngaySinh ? (
                          <p className="text-danger">{errors.ngaySinh}</p>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <div className="form_title">
                        <label htmlFor="ten">Tên:</label>

                        <br />
                        <Field type="text" name="ten" id="ten" />
                        {errors.ten && touched.ten ? (
                          <p className="text-danger">{errors.ten}</p>
                        ) : null}
                      </div>
                      <div className="form_title">
                        <label htmlFor="sdt">Số điện thoại:</label>
                        <br />
                        <Field type="text" name="sdt" id="sdt" />
                        {errors.sdt && touched.sdt ? (
                          <p className="text-danger">{errors.sdt}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="form_profile-bottom">
                    <div className="form_title">
                      <label htmlFor="email">Email:</label>
                      <br />
                      <Field type="email" name="email" id="email" />
                      {errors.email && touched.email ? (
                        <p className="text-danger">{errors.email}</p>
                      ) : null}
                    </div>
                    <div className="form_title">
                      <label htmlFor="tenDangNhap">Tên đăng nhập:</label>
                      <br />
                      <Field type="text" name="tenDangNhap" id="tenDangNhap" />
                      {errors.tenDangNhap && touched.tenDangNhap ? (
                        <p className="text-danger">{errors.tenDangNhap}</p>
                      ) : null}
                    </div>
                    <div className="form_title">
                      <label htmlFor="phanQuyen">Phân quyền:</label>
                      <br />
                      <Field type="text" name="phanQuyen" id="phanQuyen" />
                      {errors.phanQuyen && touched.phanQuyen ? (
                        <p className="text-danger">{errors.phanQuyen}</p>
                      ) : null}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="menu">
          <div className="menu_icon">
            <div className="icon-bg">
              <i className="fas fa-edit"></i>
            </div>
            <p>Sửa thông tin</p>
          </div>
          <div className="menu_icon">
            <div className="icon-bg">
              <i className="fas fa-lock"></i>
            </div>
            <p>Đổi mật khẩu</p>
          </div>
          <div className="menu_icon">
            <div className="icon-bg">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <p>Đăng xuất</p>
          </div>
        </div>
      </div>
    </div>
  );
}
