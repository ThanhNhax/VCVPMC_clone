/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/configStore";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { DoiTacUyQuyenRedux } from "../../../redux/quanLyDoiTacUyQuyen/quanLyDoiTacUyQuyen";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../FireStore/fireStore";

export default function ChinhSuaNguoiDung() {
  const navigate = useNavigate();
  const item = useSelector(
    (state: RootState) => state.doiTacUyQuyen.itemDoiTacUyQuyen
  );
  console.log({ item });
  useEffect(() => {
    if (!item) {
      navigate("/admin/quanLyUyQuyen");
    }
  }, []);
  const [iseTrangThai, setIsTrangThai] = useState<boolean>(
    item?.trangThai ? item?.trangThai : false
  );

  let initialValues: DoiTacUyQuyenRedux = {
    id: "",
    tenNguoiDung: "",
    email: "",
    vaiTro: "",
    tenDangNhap: "",
    matKhau: "",
    matKhauNhapLai: "",
    trangThai: false,
    ngayHetHan: "",
    soDienThoi: "",
  };
  if (item) initialValues = item;
  console.log({ initialValues });
  const validationSchema = Yup.object().shape({
    matKhau: Yup.string().required().min(6),
    matKhauNhapLai: Yup.string()
      .required()
      .min(6)
      .oneOf([Yup.ref("matKhau"), null], "Passwords must match"),
  });
  return (
    <div className="chinhSuaNguoiDung">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý <i className="fas fa-chevron-right"></i>
            <span onClick={() => navigate("/admin/quanLyUyQuyen")}>
              Đối tác uỷ quyền
            </span>
            <i className="fas fa-chevron-right"></i>Cập nhật thông tin người
            dùng
          </p>
          <h1>Cập nhật thông tin</h1>
        </div>
        <div className="container-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(value: DoiTacUyQuyenRedux) => {
              let newValue = { ...value };
              newValue.trangThai = iseTrangThai;
              console.log({ newValue });
              // update len fireStore
              try {
                if (item) {
                  setDoc(doc(db, "quanLyDoiTacUyQuyen", item.id), newValue, {
                    merge: true,
                  });

                  message.open({
                    type: "success",
                    content: "Cập nhật thành công !",
                  });
                  navigate("/admin/quanLyUyQuyen");
                }
              } catch (e) {
                console.log(e);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="wrap-form">
                  <div className="form-left">
                    <div className="form-group">
                      <label htmlFor="tenNguoiDung">
                        Tên người dùng <i>*</i>
                      </label>
                      <Field
                        type="text"
                        id="tenNguoiDung"
                        name="tenNguoiDung"
                        readOnly
                        className={
                          errors.tenNguoiDung && touched.tenNguoiDung
                            ? "input-error"
                            : ""
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        Email <i>*</i>
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        readOnly
                        className={
                          errors.email && touched.email ? "input-error" : ""
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="soDienThoi">
                        Số điện thoại <i>*</i>
                      </label>
                      <Field
                        type="text"
                        id="soDienThoi"
                        name="soDienThoi"
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vaiTro">
                        Vai trò <i>*</i>
                      </label>
                      <Field
                        readOnly
                        as="select"
                        id="vaiTro"
                        name="vaiTro"
                        className={
                          errors.vaiTro && touched.vaiTro ? "input-error" : ""
                        }
                      >
                        <option value="">Chọn vai trò</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Group Admin">Group Admin</option>
                        <option value="Sub-User">Sub - user</option>
                        <option value="Content manager">Content manager</option>
                      </Field>
                    </div>
                  </div>
                  <div className="form-left">
                    <div className="form-group">
                      <label htmlFor="tenDangNhap">
                        Tên đăng nhập <i>*</i>
                      </label>
                      <Field
                        type="text"
                        id="tenDangNhap"
                        name="tenDangNhap"
                        readOnly
                        className={
                          errors.tenDangNhap && touched.tenNguoiDung
                            ? "input-error"
                            : ""
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="matKhau">
                        Mật khẩu <i>*</i>
                      </label>
                      <Field
                        type="password"
                        id="matKhau"
                        name="matKhau"
                        className={
                          errors.matKhau && touched.matKhau ? "input-error" : ""
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="matKhauNhapLai">
                        Nhập lại mật khẩu <i>*</i>
                      </label>
                      <Field
                        type="password"
                        id="matKhauNhapLai"
                        name="matKhauNhapLai"
                        className={
                          errors.matKhauNhapLai && touched.matKhauNhapLai
                            ? "input-error"
                            : ""
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="matKhauNhapLai">
                        Trạng thái <i>*</i>
                      </label>
                      <div className="form-radio">
                        <div className="wrap-radio">
                          <input
                            type="radio"
                            name="trangThai"
                            id="daKichHoat"
                            defaultChecked={iseTrangThai}
                            onChange={() => setIsTrangThai(true)}
                          />
                          <label htmlFor="daKichHoat">Đã kích hoạt</label>
                        </div>
                        <div className="wrap-radio">
                          <input
                            type="radio"
                            name="trangThai"
                            id="ngungKichHoat"
                            defaultChecked={!iseTrangThai}
                            onChange={() => setIsTrangThai(false)}
                          />
                          <label htmlFor="ngungKichHoat">Ngưng kích hoạt</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-btn">
                  <p>
                    <i>*</i>là những trường thông tin bắt buộc
                  </p>
                  <div className="btn">
                    <button
                      type="button"
                      onClick={() => navigate("/admin/quanLyUyQuyen")}
                    >
                      Hủy
                    </button>
                    <button type="submit">Lưu</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
