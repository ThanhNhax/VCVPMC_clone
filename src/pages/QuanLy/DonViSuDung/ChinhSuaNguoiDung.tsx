/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { useNavigate } from "react-router-dom";
import {
  NguoiDungDonViRedux,
  updateNguoiDung,
} from "../../../redux/quanLyDonViSuDung/quanLyDonViSuDungReducer";
import { message } from "antd";
import { ngayTao } from "../../HoTro/Feedback";

export default function ChinhSuaNguoiDung() {
  const item = useSelector(
    (state: RootState) => state.quanLyDonViSuDung.itemNguoiDung
  );
  console.log({ item });
  const [isTrangThai, setIsTrangThai] = useState<boolean>(
    item?.trangThai ? item.trangThai : false
  );
  console.log({ isTrangThai });
  const navigate = useNavigate();
  useEffect(() => {
    if (!item) navigate("/admin/donViSuDung");
  }, []);
  const dispatch: AppDispatch = useDispatch();
  let initialValues: NguoiDungDonViRedux = {
    id: "",
    tenNguoiDung: "",
    email: "",
    vaiTro: "",
    tenDangNhap: "",
    matKhau: "",
    matKhauNhapLai: "",
    capNhatlanCuoi: "",
    trangThai: false,
  };
  if (item) initialValues = item;
  console.log({ initialValues });
  const validationSchema = Yup.object().shape({
    matKhau: Yup.string().required().min(6),
    matKhauNhapLai: Yup.string()
      .required()
      .min(6)
      .oneOf([Yup.ref("matKhau"), null], "Passwords must match"),
    tenNguoiDung: Yup.string().required(),
    tenDangNhap: Yup.string().required(),
    email: Yup.string().required().email(),
    vaiTro: Yup.string().required(),
  });
  return (
    <div className="chinhSuaNguoiDung">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý <i className="fas fa-chevron-right"></i>
            <span onClick={() => navigate("/admin/donViSuDung")}>
              Đơn vị sử dụng
            </span>
            <i className="fas fa-chevron-right"></i>
            <span onClick={() => navigate("/admin/donViSuDung/chiTiet")}>
              Chi tiết
            </span>
            <i className="fas fa-chevron-right"></i>Thông tin người dùng
            <i className="fas fa-chevron-right"></i>Chỉnh sửa thông tin
          </p>
          <h1>Thêm người dùng</h1>
        </div>
        <div className="container-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(value: NguoiDungDonViRedux) => {
              // gán ngày tạo là ngày hiện tại
              let newValue = { ...value };
              newValue.trangThai = isTrangThai;
              newValue.capNhatlanCuoi = ngayTao;
              console.log({ newValue });

              // cập nhật item người dung thay đổi lên redux
              dispatch(updateNguoiDung(newValue));
              message.open({
                type: "success",
                content: "Cập nhật thành công !",
              });
              navigate("/admin/donViSuDung/chiTiet");
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
                        className={
                          errors.email && touched.email ? "input-error" : ""
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vaiTro">
                        Vai trò <i>*</i>
                      </label>
                      <Field
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
                        Trạng thái người dùng: <i>*</i>
                      </label>
                      <div className="form-radio">
                        <div className="wrap-radio">
                          <input
                            type="radio"
                            name="trangThai"
                            defaultChecked={isTrangThai}
                            id="daKichHoat"
                            onChange={() => setIsTrangThai(true)}
                          />
                          <label htmlFor="daKichHoat">Đã kích hoạt</label>
                        </div>
                        <div className="wrap-radio">
                          <input
                            type="radio"
                            name="trangThai"
                            defaultChecked={!isTrangThai}
                            id="ngungKichHoat"
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
                      onClick={() =>
                        navigate("/admin/donViSuDung/chiTiet/thongTinNguoiDung")
                      }
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
