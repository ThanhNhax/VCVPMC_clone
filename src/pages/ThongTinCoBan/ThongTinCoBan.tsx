/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getStoreJSON, USER } from "../../util/setting";
import { dangXuat, getUser, User } from "../../redux/userReducer/userReducer";
import { NavLink } from "react-router-dom";
import { auth } from "../../FireStore/fireStore";
import * as Yup from "yup";

//modal

import { message, Modal } from "antd";
import { Field, Form, Formik } from "formik";
import { updatePassword } from "firebase/auth";

export default function ThongTinCoBan() {
  const { user } = useSelector((state: RootState) => state.user.userLogin);
  const dispatch: AppDispatch = useDispatch();
  //Lấy uid từ localStore lên để call user
  let userStore: User = getStoreJSON(USER);

  const [isType, setIsType] = useState<boolean>(true);

  useEffect(() => {
    if (user!) {
      dispatch(getUser(userStore.uid));
    }
  }, []);

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const initialValues = {
    passwordHienTai: "",
    passwordMoi: "",
    passwordNhapLai: "",
  };
  const loginSchema = Yup.object().shape({
    passwordHienTai: Yup.string().required().min(6),
    passwordMoi: Yup.string().required().min(6),
    passwordNhapLai: Yup.string()
      .required()
      .min(6)
      .oneOf([Yup.ref("passwordMoi"), null], "Passwords must match"),
  });
  // modal
  return (
    <div className="thongtincoban">
      <div className="container">
        <h1>Thông Tin Cơ Bản</h1>
        <div className="content">
          <div className="content_avatar">
            <div className="left-avatar">
              <img src={user?.avatar} alt="avatar.png" />
              <div className="camera">
                <i className="fas fa-camera"></i>
              </div>
            </div>
            <p>
              {user?.ten} {user?.ho}
            </p>
          </div>
          <div className="content_form">
            <div id="form_profile">
              <form>
                <div className="form_profile-top">
                  <div>
                    <div className="form_title">
                      <label htmlFor="ho">Họ:</label>
                      <br />
                      <input
                        type="text"
                        name="ho"
                        id="ho"
                        defaultValue={user?.ho}
                        readOnly
                      />
                    </div>
                    <div className="form_title">
                      <label htmlFor="ngaySinh">Ngày sinh:</label>
                      <br />
                      <input
                        type="text"
                        name="ngaySinh"
                        id="ngaySinh"
                        defaultValue={user?.ngaySinh}
                        readOnly
                      />
                    </div>
                  </div>

                  <div>
                    <div className="form_title">
                      <label htmlFor="ten">Tên:</label>

                      <br />
                      <input
                        type="text"
                        name="ten"
                        id="ten"
                        defaultValue={user?.ten}
                        readOnly
                      />
                    </div>
                    <div className="form_title">
                      <label htmlFor="sdt">Số điện thoại:</label>
                      <br />
                      <input
                        type="text"
                        name="sdt"
                        id="sdt"
                        defaultValue={user?.sdt}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="form_profile-bottom">
                  <div className="form_title">
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue={user?.email}
                      readOnly
                    />
                  </div>
                  <div className="form_title">
                    <label htmlFor="tenDangNhap">Tên đăng nhập:</label>
                    <br />
                    <input
                      type="text"
                      name="tenDangNhap"
                      id="tenDangNhap"
                      defaultValue={user?.tenDangNhap}
                      readOnly
                    />
                  </div>
                  <div className="form_title">
                    <label htmlFor="phanQuyen">Phân quyền:</label>
                    <br />
                    <input
                      type="text"
                      name="phanQuyen"
                      id="phanQuyen"
                      defaultValue={user?.phanQuyen}
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="menu">
          <NavLink to={"/admin/suathongtin"} className="menu_icon">
            <div className="icon-bg">
              <i className="fas fa-edit"></i>
            </div>
            <p>Sửa thông tin</p>
          </NavLink>
          <div className="menu_icon">
            <div className="icon-bg" onClick={showModal}>
              <i className="fas fa-lock"></i>
            </div>
            <p>Đổi mật khẩu</p>
          </div>
          <div
            className="menu_icon"
            onClick={() => {
              console.log("Đăng xuất");
              dangXuat(auth);
            }}
          >
            <div className="icon-bg">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <p>Đăng xuất</p>
          </div>
        </div>

        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          wrapClassName="modal_doiMatKhau"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              console.log({ values });
              const user = auth.currentUser;
              console.log({ user });
              const newPassword = values.passwordNhapLai;

              if (user) {
                updatePassword(user, newPassword)
                  .then(() => {
                    // Update successful.
                    console.log("thanh coong");
                  })
                  .catch((error: any) => {
                    console.log(error);
                  });
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <h5>Thay đổi mật khẩu</h5>
                <div className="form-title">
                  <label htmlFor="passwordHienTai">Mật khẩu hiện tại:</label>
                  <div className="password">
                    <Field
                      type={isType ? "password" : "text"}
                      id="passwordHienTai"
                      name="passwordHienTai"
                      className={
                        errors.passwordHienTai && touched.passwordHienTai
                          ? "input-error"
                          : ""
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
                <div className="form-title">
                  <label htmlFor="passwordMoi">Mật khẩu mới:</label>
                  <div className="password">
                    <Field
                      type={isType ? "password" : "text"}
                      id="passwordMoi"
                      name="passwordMoi"
                      className={
                        errors.passwordMoi && touched.passwordMoi
                          ? "input-error"
                          : ""
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
                <div className="form-title">
                  <label htmlFor="passwordNhapLai">
                    Nhập lại mật khẩu hiện tại:
                  </label>
                  <div className="password">
                    <Field
                      type={isType ? "password" : "text"}
                      id="passwordNhapLai"
                      name="passwordNhapLai"
                      className={
                        errors.passwordNhapLai && touched.passwordNhapLai
                          ? "input-error"
                          : ""
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
                <div className="form-btn">
                  <button type="button" onClick={() => setIsModalOpen(false)}>
                    Hủy
                  </button>
                  <button type="submit">Lưu</button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal>
      </div>
    </div>
  );
}
