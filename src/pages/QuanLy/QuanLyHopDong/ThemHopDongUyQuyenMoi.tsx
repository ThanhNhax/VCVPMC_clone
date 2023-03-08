import React, { useState } from "react";
import { Button, message, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../FireStore/fireStore";
import { ngayTao } from "../../HoTro/Feedback";

export default function ThemHopDongUyQuyenMoi() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<boolean>(true);
  const [quocTich, setQuocTich] = useState<string>("");

  const initialValues = {
    id: "",
    soHopDong: "",
    tenHopDong: "",
    ngayHieuLuc: "",
    ngayHetHan: "",
    nguoiUyQuyen: "",
    gioiTinh: "Nam",
    ngaySinh: "",
    quocTich: "",
    soDienThoai: "",
    cmnd: "",
    ngayCap: "",
    noiCap: "",
    maSoThue: "",
    noiCuTru: "",
    email: "",
    tenDangNhap: "",
    matKhau: "",
    soTaiKhoan: "",
    nganHang: "",
    // tổ chức
    tenToChuc: "",
    nguoiDaiDien: "",
    chucVu: "",
    hieuLucHopDong: "",
    ngayTao: "",
  };
  // cá nhân : 15 field
  // tổ chức có 18 field
  const schemaCaNhan = Yup.object().shape({
    soHopDong: Yup.string().required(),
    tenHopDong: Yup.string().required(),
    ngayHieuLuc: Yup.string().required(),
    ngayHetHan: Yup.string().required(),
    tenNguoiUyQuyen: Yup.string().required(),
    ngaySinh: Yup.string().required(),
    cmnd: Yup.string().required(),
    ngayCap: Yup.string().required(),
    noiCap: Yup.string().required(),
    email: Yup.string().required(),
    tenDangNhap: Yup.string().required(),
    matKhau: Yup.string().required(),
  });

  return (
    <div className="themHopDingUyQuyenMoi">
      <div className="container">
        <div className="content-top">
          <p>
            Quản lý<i className="fas fa-chevron-right"></i>Quản lý hợp đồng
            <i className="fas fa-chevron-right"></i>Thêm hợp đồng
          </p>
          <h1>Thêm hợp đồng ủy quyền mới</h1>
        </div>
        <Formik
          initialValues={initialValues}
          // validationSchema={schemaCaNhan}
          onSubmit={(value) => {
            // gán hiệu lực hợp đồng là mới tạo
            value.hieuLucHopDong = "Mới";
            // set ngày tạo là ngày hiện tại
            value.ngayTao = ngayTao;

            // gán quốc tịch bằng state
            value.quocTich = quocTich;
            console.log({ value });
            // add lên  fireSore
            try {
              addDoc(collection(db, "hopDongUyQyen"), value);
              console.log("add firestore", { value });
              navigate("/admin/quanLyHopDong/themThongTinBanGhi");
              message.open({
                type: "success",
                content: "Tạo thành công!",
                duration: 0.8,
              });
            } catch (e) {
              console.log(e);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="content-center">
                <div className="center-top">
                  <div className="from-group">
                    <div className="from-item">
                      <label htmlFor="">
                        Số hợp đồng:<i>*</i>
                      </label>
                      <Field
                        type="text"
                        name="soHopDong"
                        className={
                          errors.soHopDong && touched.soHopDong
                            ? "input_error"
                            : ""
                        }
                      />
                    </div>
                    <div className="from-item">
                      <label htmlFor="">
                        Tên hợp đồng:<i>*</i>
                      </label>
                      <Field
                        type="text"
                        name="tenHopDong"
                        className={
                          errors.tenHopDong && touched.tenHopDong
                            ? "input_error"
                            : ""
                        }
                      />
                    </div>
                    <div className="from-item">
                      <label htmlFor="">
                        Ngày hiệu lực:<i>*</i>
                      </label>
                      <Field
                        type="date"
                        name="ngayHieuLuc"
                        className={
                          errors.ngayHieuLuc && touched.ngayHieuLuc
                            ? "input_error"
                            : ""
                        }
                      />
                    </div>
                    <div className="from-item">
                      <label htmlFor="">
                        Ngày hết hạn:<i>*</i>
                      </label>
                      <Field
                        type="date"
                        name="ngayHetHan"
                        className={
                          errors.ngayHetHan && touched.ngayHetHan
                            ? "input_error"
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="from-group">
                    <div className="from-item">
                      <label htmlFor="">Đính kèm tệp:</label>
                      <Upload>
                        <Button id="input_file">
                          <i className="fas fa-cloud-upload-alt"></i> Tải lên
                        </Button>
                      </Upload>
                    </div>
                  </div>
                  <div className="from-group">
                    <h5>
                      <div className="bg-icon">
                        <i className="fas fa-info"></i>
                      </div>
                      Mức nhuận bút
                    </h5>
                    <table>
                      <tbody>
                        <tr>
                          <td>Quyền tác giả:</td>
                          <td>0%</td>
                        </tr>
                        <tr>
                          <td>Quyền liên quan:</td>
                        </tr>
                        <tr>
                          <td>Quyền của người biểu diễn:</td>
                          <td>50%</td>
                        </tr>
                        <tr>
                          <td>
                            Quyền của nhà sản xuất:
                            <br /> (Bản ghi/video)
                          </td>
                          <td
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                            }}
                          >
                            50%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="center-bottom ">
                  <h4>Thông tin pháp nhân uỷ quyền</h4>
                  <div
                    className="bottom-wrap"
                    style={isActive ? { display: "flex" } : { display: "none" }}
                  >
                    <div className="from-group">
                      <div className="from-item">
                        <label htmlFor="">Pháp nhân ủy quyền:</label>
                        <div className="from-radio">
                          <input
                            type="radio"
                            name="uyQuyen"
                            id="caNhan1"
                            checked={isActive}
                            readOnly
                          />
                          <label htmlFor="caNhan1">Cá nhân</label>
                          <input
                            type="radio"
                            name="uyQuyen"
                            id="toChuc"
                            onChange={(e) => setIsActive(false)}
                          />
                          <label htmlFor="toChuc">Tổ chức</label>
                        </div>
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Tên người uỷ quyền: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="tenNguoiUyQuyen"
                          className={
                            isActive &&
                            errors.nguoiUyQuyen &&
                            touched.nguoiUyQuyen
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Giới tính: <i>*</i>
                        </label>
                        <div className="from-radio">
                          <Field
                            type="radio"
                            name="gioiTinh"
                            id="nam"
                            value="Nam"
                          />
                          <label htmlFor="nam">Nam</label>
                          <Field
                            type="radio"
                            name="gioiTinh"
                            id="nu"
                            value="Nữ"
                          />
                          <label htmlFor="nu">Nữ</label>
                        </div>
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Ngày sinh:<i>*</i>
                        </label>
                        <Field
                          type="date"
                          name="ngaySinh"
                          className={
                            isActive && errors.ngaySinh && touched.ngaySinh
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Quốc tịch: <i>*</i>
                        </label>
                        <select
                          id="quocTich"
                          name="quocTich"
                          value={quocTich}
                          onChange={(e) => setQuocTich(e.target.value)}
                        >
                          <option value="OTHER">Other</option>
                          <option value="Việt Nam">Việt Nam</option>
                          <option value="NY">New York</option>
                          <option value="SF">San Francisco</option>
                          <option value="CH">Chicago</option>
                        </select>
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Số điện thoại:</label>
                        <Field type="text" name="soDienThoai" />
                      </div>
                    </div>
                    <div className="from-group">
                      <div className="from-item">
                        <label htmlFor="">
                          CMND/ CCCD: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="cmnd"
                          className={
                            isActive && errors.cmnd && touched.cmnd
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Ngày cấp: <i>*</i>
                        </label>
                        <Field
                          type="date"
                          name="ngayCap"
                          className={
                            isActive && errors.ngayCap && touched.ngayCap
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Nơi cấp: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="noiCap"
                          className={
                            isActive && errors.noiCap && touched.noiCap
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Mã số thuế:</label>
                        <Field type="text" name="maSoThue" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Nơi cư trú:</label>
                        <Field type="textarea" name="noiCuTru" />
                      </div>
                    </div>
                    <div className="from-group">
                      <div className="from-item">
                        <label htmlFor="">
                          Email: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="email"
                          className={
                            isActive && errors.email && touched.email
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Tên đăng nhập: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="tenDangNhap"
                          className={
                            isActive &&
                            errors.tenDangNhap &&
                            touched.tenDangNhap
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Mật khẩu: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="matKhau"
                          className={
                            isActive && errors.matKhau && touched.matKhau
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Số tài khoản:</label>
                        <Field type="text" name="soTaiKhoan" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Ngân hàng:</label>
                        <Field type="text" name="nganHang" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="bottom-wrap toChuc"
                    style={
                      !isActive ? { display: "flex" } : { display: "none" }
                    }
                  >
                    <div className="from-group">
                      <div className="from-item">
                        <label htmlFor="">Pháp nhân ủy quyền:</label>
                        <div className="from-radio">
                          <input
                            type="radio"
                            name="uyQuyen"
                            id="caNhan"
                            onChange={() => setIsActive(true)}
                          />
                          <label htmlFor="caNhan">Cá nhân</label>
                          <input
                            type="radio"
                            name="uyQuyen"
                            id="toChuc"
                            checked={!isActive}
                            onChange={() => setIsActive(false)}
                          />
                          <label htmlFor="toChuc">Tổ chức</label>
                        </div>
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Tên tổ chức: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="tenToChuc"
                          className={
                            !isActive && errors.tenToChuc && touched.tenToChuc
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Mã số thuế:</label>
                        <Field type="text" name="maSoThue" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Số tài khoản:</label>
                        <Field type="text" name="soTaiKhoan" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Ngân hàng:</label>
                        <Field type="text" name="nganHang" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Địa chỉ:</label>
                        <Field type="text" name="diaChi" />
                      </div>
                    </div>
                    <div className="from-group">
                      <div className="from-item">
                        <label htmlFor="">
                          Người đại diện: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="nguoiDaiDien"
                          className={
                            !isActive &&
                            errors.nguoiDaiDien &&
                            touched.nguoiDaiDien
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Chức vụ:</label>
                        <Field type="text" name="chucVu" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Ngày sinh: <i>*</i>
                        </label>
                        <Field
                          type="date"
                          name="ngaySinh"
                          className={
                            !isActive && errors.ngaySinh && touched.ngaySinh
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Giới tính: <i>*</i>
                        </label>
                        <div className="from-radio">
                          <input
                            type="radio"
                            name="gioiTinh"
                            id="nam"
                            value="Nam"
                          />
                          <label htmlFor="nam">Nam</label>
                          <input
                            type="radio"
                            name="gioiTinh"
                            id="nu"
                            value="Nữ"
                          />
                          <label htmlFor="nu">Nữ</label>
                        </div>
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          CMND/ CCCD: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="cmnd"
                          className={
                            !isActive && errors.cmnd && touched.cmnd
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Ngày cấp: <i>*</i>
                        </label>
                        <Field
                          type="date"
                          name="ngayCap"
                          className={
                            !isActive && errors.ngayCap && touched.ngayCap
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Nơi cấp: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="noiCap"
                          className={
                            !isActive && errors.noiCap && touched.noiCap
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Quốc tịch: <i>*</i>
                        </label>
                        <select
                          id="quocTich"
                          name="quocTich"
                          value={quocTich}
                          onChange={(e) => setQuocTich(e.target.value)}
                        >
                          <option value="Việt Nam">Việt Nam</option>
                          <option value="NY">New York</option>
                          <option value="SF">San Francisco</option>
                          <option value="CH">Chicago</option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="from-group">
                      <div className="from-item">
                        <label htmlFor="">Nơi cư trú:</label>
                        <Field type="textarea" name="noiCuTru" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Số điện thoại:</label>
                        <Field type="text" name="soDienThoai" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Email: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="email"
                          className={
                            !isActive && errors.email && touched.email
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Tên đăng nhập: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="tenDangNhap"
                          className={
                            !isActive &&
                            errors.tenDangNhap &&
                            touched.tenDangNhap
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Mật khẩu: <i>*</i>
                        </label>
                        <Field
                          type="text"
                          name="matKhau"
                          className={
                            !isActive && errors.matKhau && touched.matKhau
                              ? "input_error"
                              : ""
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-bottom">
                <p>
                  <i>*</i>là những trường thông tin bắt buộc
                </p>
                <div className="button">
                  <button type="button">Hủy</button>
                  <button type="submit">Tạo</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
