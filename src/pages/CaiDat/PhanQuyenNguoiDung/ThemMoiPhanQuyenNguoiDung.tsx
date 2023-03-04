import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../FireStore/fireStore";
import { message } from "antd";

interface PhanQuyenNguoiDung {
  tenNguoiDung: string;
  email: string;
  vaiTro: string;
  ngayHetHan: string;
  soDienThoai: string;
  tenDangNhap: string;
  matKhau: string;
}
export default function ThemMoiPhanQuyenNguoiDung() {
  const navigate = useNavigate();
  const [isType, setIsType] = useState<boolean>(true);
  const initValue: PhanQuyenNguoiDung = {
    email: "",
    matKhau: "",
    ngayHetHan: "",
    soDienThoai: "",
    tenDangNhap: "",
    tenNguoiDung: "",
    vaiTro: "",
  };
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
              console.log({ value });
              // add người dung mới
              try {
                addDoc(collection(db, "phanQuyenNguoidDung"), value);
                message.open({
                  type: "success",
                  content: "Thêm mới người dùng thành công!",
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
