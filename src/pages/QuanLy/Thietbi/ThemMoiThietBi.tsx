import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { QuanLyThietBiRedux } from "../../../redux/quanLyThietBi/quanLyThietBiReducer";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../FireStore/fireStore";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function ThemMoiThietBi() {
  const navigate = useNavigate();
  const [isType, setIsType] = useState<boolean>(true);

  const initValues: QuanLyThietBiRedux = {
    tenThietBi: "",
    skuId: "",
    macAddresss: "",
    hanBaoHanh: "",
    thongTin: "",
    ghiChu: "",
    tenDangNhap: "",
    password: "",
    passwordComfirm: "",
    vaiTro: "",
    diaChi: "",
    dinhDang: "",
    hanHopDong: "",
    id: "",
    kichHoat: false,
    memory: "",
    trangThai: false,
    viTri: "",
  };
  const Schema = Yup.object().shape({
    password: Yup.string().required().min(6),
    passwordComfirm: Yup.string()
      .required()
      .min(6)
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    tenThietBi: Yup.string().required(),
    skuId: Yup.string().required(),
    macAddresss: Yup.string().required(),
    hanBaoHanh: Yup.string().required(),
    tenDangNhap: Yup.string().required(),
  });

  return (
    <div className="ThemMoiThietBi">
      <div className="container">
        <div className="container-top">
          <p>
            Danh sách thiết bị<i className="fas fa-chevron-right"></i>Chi tiết
            thiết bị<i className="fas fa-chevron-right"></i>Thêm thiết bị mới
          </p>
          <h1>Thêm thiết bị mới</h1>
        </div>
        <div className="container-form">
          <Formik
            initialValues={initValues}
            validationSchema={Schema}
            onSubmit={(value: QuanLyThietBiRedux) => {
              console.log(value);
              // addDoc lên fireStore
              try {
                addDoc(collection(db, "quanLyThietBi"), value);
                message.open({
                  type: "success",
                  content: "Thêm mới thiết bị thành  công!",
                  duration: 0.8,
                });
                navigate("/admin/quanLyThietBi");
              } catch (e) {
                console.log(e);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="wrap-form">
                  <div className="form-group">
                    <div className="form-item">
                      <label htmlFor="tenThietBi">
                        Tên thiết bị: <i>*</i>
                      </label>
                      <Field
                        type="text"
                        name="tenThietBi"
                        id="tenThietBi"
                        className={
                          errors.tenThietBi && touched.tenThietBi
                            ? "input-error"
                            : ""
                        }
                      />
                    </div>
                    <div className="form-item">
                      <label htmlFor="skuId">
                        SKU/ID: <i>*</i>
                      </label>
                      <Field
                        type="text"
                        name="skuId"
                        id="skuId"
                        className={
                          errors.skuId && touched.skuId ? "input-error" : ""
                        }
                      />
                    </div>
                    <div className="form-item">
                      <label htmlFor="macAddresss">
                        Địa chỉ Mac: <i>*</i>
                      </label>
                      <Field
                        type="text"
                        name="macAddresss"
                        id="macAddresss"
                        className={
                          errors.macAddresss && touched.macAddresss
                            ? "input-error"
                            : ""
                        }
                      />
                    </div>
                    <div className="form-item">
                      <label htmlFor="hanBaoHanh">
                        Thời hạn bảo hành: <i>*</i>
                      </label>
                      <Field
                        type="date"
                        name="hanBaoHanh"
                        id="hanBaoHanh"
                        className={
                          errors.hanBaoHanh && touched.hanBaoHanh
                            ? "input-error"
                            : ""
                        }
                      />
                    </div>
                    <div className="form-item">
                      <label htmlFor="">
                        Label: <i>*</i>
                      </label>
                      <Field as="select">
                        <option value=""></option>
                      </Field>
                    </div>
                    <div className="form-item">
                      <label htmlFor="thongTin">
                        Thông tin: <i>*</i>
                      </label>
                      <div className="thongTin">
                        <Field as="select" name="thongTin" id="thongTin" />
                        <div className="thongTin-bot">
                          <div className="bg-thongTin">
                            <i className="fas fa-plus"></i>
                          </div>
                          <p>Thêm thông tin</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-item">
                      <label htmlFor="ghiChu">
                        Ghi chú <i>*</i>
                      </label>
                      <Field as="textarea" name="ghiChu" id="ghiChu" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-item">
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

                    <div className="form-item">
                      <label htmlFor="password">
                        Mật khẩu: <i>*</i>
                      </label>
                      <div className="password">
                        <Field
                          type={isType ? "password" : "text"}
                          name="password"
                          id="password"
                          className={
                            errors.password && touched.password
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
                    <div className="form-item">
                      <label htmlFor="passwordComfirm">
                        Nhập lại mật khẩu: <i>*</i>
                      </label>
                      <div className="password">
                        <Field
                          type={isType ? "password" : "text"}
                          name="passwordComfirm"
                          id="passwordComfirm"
                          className={
                            errors.passwordComfirm && touched.passwordComfirm
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
                    <div className="form-item">
                      <label htmlFor="vaiTro">
                        Vai trò: <i>*</i>
                      </label>
                      <Field type="text" name="vaiTro" id="vaiTro"></Field>
                    </div>
                  </div>
                </div>
                <div className="form-btn">
                  <p>
                    <i>*</i>là những trường thông tin bắt buộc
                  </p>
                  <div className="btn">
                    <button type="button">Hủy</button>
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
