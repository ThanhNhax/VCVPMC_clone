import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  getUserEdit,
  updateUser,
  User,
} from "../../redux/userReducer/userReducer";
import { getStoreJSON, UID_USER } from "../../util/setting";
import { Navigate, useNavigate } from "react-router-dom";

export default function SuaThongTin() {
  const user = useSelector((state: RootState) => state.user);
  console.log({ user });
  //chuyển hướng trang
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  //   Lấy uid từ localStore lên để call user
  let uidUserStore: string = getStoreJSON(UID_USER);
  console.log({ uidUserStore });
  useEffect(() => {
    dispatch(getUserEdit(uidUserStore));
  }, [uidUserStore]);
  const initialValues: User = {
    avatar: "",
    ho: "",
    ten: "",
    ngaySinh: "",
    sdt: "",
    email: "",
    tenDangNhap: "",
    phanQuyen: "",
    uid: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit(value) {
      //handleSubmit
      value.avatar = user.avatar;
      value.email = user.email;
      value.phanQuyen = user.phanQuyen;
      value.tenDangNhap = user.tenDangNhap;
      value.uid = uidUserStore;
      value.ho = value.ho ? value.ho : user.ho;
      value.sdt = value.sdt ? value.sdt : user.sdt;
      value.ngaySinh = value.ngaySinh ? value.ngaySinh : user.ngaySinh;
      value.ten = value.ten ? value.ten : user.ten;
      console.log({ value });
      dispatch(updateUser(uidUserStore, value));
      navigate("/admin/thongtincoban");
    },
  });
  return (
    <div className="suaThongTin" style={{ color: "white" }}>
      <h1>Thông Tin Cơ Bản</h1>
      <div className="content">
        <div className="content_avatar">
          <div className="left-avatar">
            <img src={user.avatar} alt="avatar.png" />
            <div className="camera">
              <i className="fas fa-camera"></i>
            </div>
          </div>
          <p>
            {user.ten} {user.ho}
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
                      defaultValue={user.ho}
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
                      defaultValue={user.ngaySinh}
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
                      defaultValue={user.ten}
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
                      defaultValue={user.sdt}
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
                    value={user.email}
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
                    value={user.tenDangNhap}
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
                    value={user.phanQuyen}
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
