/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PhanQuyenNguoiDungRedux } from "../../../redux/phanQuyenNguoiDung/phanQuyenNguoiDungReducer";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/configStore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../FireStore/fireStore";
import { message } from "antd";
export default function ChinhSuaPhanQuyenNguoiDung() {
  const item = useSelector(
    (state: RootState) => state.phanQuyenNguoiDung.itemPhanQuyenNguoiDung
  );
  const [trangThai, setTrangThai] = useState<boolean>(
    item?.trangThai ? item?.trangThai : false
  );
  console.log({ trangThai });
  const handleChange = () => setTrangThai((pre) => !pre);
  const navigate = useNavigate();
  const [isType, setIsType] = useState<boolean>(true);
  useEffect(() => {
    if (!item) {
      navigate("/admin/phanQuyenNguoiDung");
    }
  }, []);
  let initValue: PhanQuyenNguoiDungRedux = {
    trangThai: false,
    id: "",
    email: "",
    matKhau: "",
    ngayHetHan: "",
    soDienThoai: "",
    tenDangNhap: "",
    tenNguoiDung: "",
    vaiTro: "",
  };
  if (item) {
    initValue = item;
  }
  const schema = Yup.object().shape({
    matKhau: Yup.string()
      .required("Không được bỏ trống!")
      .min(6, "Password nhiều hơn 6 ký tự!"),
    tenNguoiDung: Yup.string().required(),
    vaiTro: Yup.string().required(),
    tenDangNhap: Yup.string().required(),
  });
  return (
    <div className="ThemMoiPhanQuyenNguoiDung">
      <div className="container">
        <div className="container-top">
          <p>
            Thêm người dùng mới<i className="fas fa-chevron-right"></i>Phân
            quyền người dùng<i className="fas fa-chevron-right"></i>Thêm người
            dùng
          </p>
          <h1>Thêm người dùng mới</h1>
        </div>
        <div className="container-form">
          <Formik
            initialValues={initValue}
            validationSchema={schema}
            onSubmit={(value) => {
              let newValue = { ...value };

              newValue.trangThai = trangThai;
              console.log({ newValue });
              // update phân quyền người dùng
              try {
                setDoc(doc(db, "phanQuyenNguoidDung", newValue.id), newValue);
                message.open({
                  type: "success",
                  content: "Cập nhật người dùng thành công!",
                  duration: 0.8,
                });
                navigate("/admin/phanQuyenNguoiDung");
              } catch (e) {
                console.log(e);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="wrap">
                  <div className="wrap-form">
                    <div className="form-group">
                      <label htmlFor="tenNguoiDung">
                        Tên người dùng: <i>*</i>
                      </label>
                      <Field
                        type="text"
                        name="tenNguoiDung"
                        id="tenNguoiDung"
                        className={
                          errors.tenNguoiDung && touched.tenNguoiDung
                            ? "input-error"
                            : ""
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="soDienThoai">Số điện thoại:</label>
                      <Field type="text" name="soDienThoai" id="soDienThoai" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ngayHetHan">Ngày hết hạn:</label>
                      <Field type="date" name="ngayHetHan" id="ngayHetHan" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vaiTro">
                        Vai trò: <i>*</i>
                      </label>
                      <Field
                        as="select"
                        name="vaiTro"
                        id="vaiTro"
                        className={
                          errors.vaiTro && touched.vaiTro ? "input-error" : ""
                        }
                      >
                        <option value="">Vui lòng chọn</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Group Admin">Group Admin</option>
                        <option value="Sub - user">Sub - user</option>
                        <option value="Content manager">Content manager</option>
                        <option value="QC">QC</option>
                      </Field>
                    </div>
                  </div>
                  <div className="wrap-form">
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <Field type="email" name="email" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tenDangNhap">
                        Tên đăng nhập: <i>*</i>
                      </label>
                      <Field
                        type="text"
                        name="tenDangNhap"
                        id="tenDangNhap"
                        className={
                          errors.tenDangNhap && touched.tenDangNhap
                            ? "input-error"
                            : ""
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="matKhau">
                        Mật khẩu: <i>*</i>
                      </label>
                      <div className="password">
                        <Field
                          type={isType ? "password" : "text"}
                          name="matKhau"
                          id="matKhau"
                          className={
                            errors.matKhau && touched.matKhau
                              ? "input-error"
                              : ""
                          }
                        />
                        <i
                          className="fas fa-eye-slash"
                          id={isType ? "" : "doiMau"}
                          onClick={() => setIsType((pre) => !pre)}
                        ></i>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        Trạng thái: <i>*</i>
                      </label>
                      <div className="form-radio">
                        <div className="wrap-radio">
                          <input
                            type="radio"
                            name="trangThai"
                            id="true"
                            defaultChecked={trangThai}
                            onChange={handleChange}
                            className={
                              errors.tenDangNhap && touched.tenDangNhap
                                ? "input-error"
                                : ""
                            }
                          />
                          <label htmlFor="true">Đang hoạt động</label>
                        </div>
                        <div className="wrap-radio">
                          <input
                            type="radio"
                            name="trangThai"
                            id="false"
                            defaultChecked={!trangThai}
                            onChange={handleChange}
                            className={
                              errors.tenDangNhap && touched.tenDangNhap
                                ? "input-error"
                                : ""
                            }
                          />
                          <label htmlFor="false">Ngừng hoạt động</label>
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
                      onClick={() => navigate("/admin/phanQuyenNguoiDung")}
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
