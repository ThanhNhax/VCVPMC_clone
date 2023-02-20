/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useFormik } from "formik";
import {
  getUserEdit,
  updateUser,
  UserState,
} from "../../redux/userReducer/userReducer";
import { getStoreJSON, USER } from "../../util/setting";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export default function SuaThongTin() {
  const { user, accessToken } = useSelector(
    (state: RootState) => state.user.userLogin
  );
  console.log({ user });
  //chuyển hướng trang
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  //   Lấy uid từ localStore lên để call user
  let { uid } = getStoreJSON(USER);
  useEffect(() => {
    dispatch(getUserEdit(uid));
  }, []);
  const initialValues: UserState = {
    userLogin: {
      accessToken: accessToken,
      user: null,
    },
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit(value) {
      //handleSubmit
      console.log({ value });
      dispatch(updateUser(uid, value));
      message.open({
        type: "success",
        content: "Cập nhật thành công!",
        duration: 0.8,
      });
      navigate("/admin/thongtincoban");
    },
  });
  return (
    <div className="suaThongTin" style={{ color: "white" }}>
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
            <form onSubmit={formik.handleSubmit}>
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
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="form_title">
                    <label htmlFor="ngaySinh">Ngày sinh:</label>
                    <br />
                    <input
                      type="date"
                      name="ngaySinh"
                      id="ngaySinh"
                      defaultValue={user?.ngaySinh}
                      onChange={formik.handleChange}
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
                      onChange={formik.handleChange}
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
                      onChange={formik.handleChange}
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
                    value={user?.email}
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
                    value={user?.tenDangNhap}
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
                    value={user?.phanQuyen}
                    readOnly
                  />
                </div>
              </div>
              <div className="form_bottom">
                <button
                  onClick={() => {
                    navigate("/admin/thongtincoban");
                  }}
                  type="button"
                >
                  Hủy
                </button>
                <button type="submit">Lưu</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
