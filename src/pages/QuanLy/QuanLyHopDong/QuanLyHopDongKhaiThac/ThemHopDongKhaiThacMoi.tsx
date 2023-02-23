import React, { useState } from "react";
import { Button, message, Upload } from "antd";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { HopDongKhaiThacRedux } from "../../../../redux/hopDongReducer/hopDongReducer";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../FireStore/fireStore";
import { useNavigate } from "react-router-dom";
export const initialValusHopDongKhaiThac: HopDongKhaiThacRedux = {
  id: "",
  hieuLucHopDong: "",
  ngayTao: "",
  tenHopDong: "",
  soHopDong: "",
  ngayHieuLuc: "",
  ngayHetHan: "",
  tenDonViSuDung: "",
  nguoiDaiDien: "",
  chucVu: "",
  ngaySinh: "",
  quocTich: "",
  soDienThoai: "",
  email: "",
  gioiTinh: "",
  cmnd: "",
  ngayCap: "",
  noiCap: "",
  maSoThue: "",
  noiCuTru: "",
  loaiHopDong: "",
  tenDangNhap: "",
  matKhau: "",
  soTaiKhoan: "",
  nganHang: "",
};
export default function ThemHopDongKhaiThacMoi() {
  const navigate = useNavigate();
  const [isType, setIsType] = useState<boolean>(true); // để handle type password => type text

  const schema = Yup.object().shape({
    tenHopDong: Yup.string().required(),
    soHopDong: Yup.string().required(),
    ngayHieuLuc: Yup.string().required(),
    ngayHetHan: Yup.string().required(),
    tenDonViSuDung: Yup.string().required(),
    nguoiDaiDien: Yup.string().required(),
    chucVu: Yup.string().required(),
    ngaySinh: Yup.string().required(),
    email: Yup.string().required(),
    cmnd: Yup.string().required(),
    ngayCap: Yup.string().required(),
    noiCap: Yup.string().required(),
    tenDangNhap: Yup.string().required(),
    matKhau: Yup.string().required(),
  });

  return (
    <div className="chinhSuaHopDongKhaiThac">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý<i className="fas fa-chevron-right"></i>Quản lý hợp đồng
            <i className="fas fa-chevron-right"></i>Thêm hợp đồng mới
          </p>
          <h1>Thêm hợp đồng khai thác mới</h1>
        </div>
        <Formik
          initialValues={initialValusHopDongKhaiThac}
          validationSchema={schema}
          onSubmit={(value: HopDongKhaiThacRedux) => {
            console.log("submit");
            value.hieuLucHopDong = "Mới";
            let ngayTao = new Date();
            value.ngayTao =
              `${ngayTao.getDate()}` +
              "/" +
              `${ngayTao.getMonth() + 1}` +
              "/" +
              `${ngayTao.getFullYear()}`;
            console.log({ value });
            // add lên  fireSore
            try {
              addDoc(collection(db, "hopDong"), value);
              navigate("/admin/quanLyHopDong");
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
              <div className="container-center">
                <div className="center-list">
                  <div className="center-item">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <label htmlFor="tenHopDong">
                              Tên hợp đồng: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="tenHopDong"
                              id="tenHopDong"
                              className={
                                errors.tenHopDong && touched.tenHopDong
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="soHopDong">
                              Số hợp đồng: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="soHopDong"
                              id="soHopDong"
                              className={
                                errors.soHopDong && touched.soHopDong
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="ngayHieuLuc">
                              Ngày hiệu lực: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="date"
                              name="ngayHieuLuc"
                              id="ngayHieuLuc"
                              className={
                                errors.ngayHieuLuc && touched.ngayHieuLuc
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="ngayHetHan">
                              Ngày hết hạn: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="date"
                              name="ngayHetHan"
                              id="ngayHetHan"
                              className={
                                errors.ngayHetHan && touched.ngayHetHan
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="center-item">
                    <label htmlFor="">Đính kèm tệp:</label>
                    <div className="upload-file">
                      <Upload>
                        <Button id="input_file">
                          <i className="fas fa-cloud-upload-alt"></i> Tải lên
                        </Button>
                      </Upload>
                      <p>
                        <i className="fas fa-file-word"></i>
                        hetthuongcannho.doc
                        <i className="fas fa-times"></i>
                      </p>
                      <p>
                        <i className="fas fa-file-word"></i>
                        hetthuongcannho.doc
                        <i className="fas fa-times"></i>
                      </p>
                    </div>
                  </div>
                  <div className="center-item">
                    <h5>Loại hợp đồng:</h5>
                    <div className="checked-item">
                      <div className="form-group">
                        <div className="wrap-form">
                          <Field
                            type="radio"
                            name="loaiHopDong"
                            id="tronGoi"
                            value="Trọn gói"
                            checked
                          />
                          <label htmlFor="tronGoi">Trọn gói</label>
                        </div>
                      </div>
                      <div className="wrap-checked-right">
                        <div className="form-group">
                          <label htmlFor="giaTriHopDong">
                            Giá trị hợp đồng
                            <br />
                            (VNĐ)
                          </label>
                          <Field
                            type="text"
                            value={"214.500.000"}
                            id="giaTriHopDong"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="giaTriPhanPhoi">
                            Giá trị phân phối
                            <br />
                            (VNĐ/ngày)
                          </label>
                          <Field
                            type="text"
                            id="giaTriPhanPhoi"
                            value={"1.500.000"}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                    <div className="checked-item">
                      <div className="form-group">
                        <div className="wrap-form">
                          <Field
                            type="radio"
                            name="loaiHopDong"
                            id="luotPhat"
                            value="Lượt phát"
                          />
                          <label htmlFor="luotPhat">Lượt phát</label>
                        </div>
                      </div>
                      <div className="wrap-checked-right">
                        <div className="form-group">
                          <label htmlFor="giaTriLuotPhat">
                            Giá trị lượt phát
                            <br />
                            (VNĐ)/lượt
                          </label>
                          <Field
                            type="text"
                            name="giaTriLuotPhat"
                            id="giaTriLuotPhat"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="center-list">
                  <div className="center-item">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <label htmlFor="tenDonViSuDung">
                              Tên đơn vị sử dụng: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="tenDonViSuDung"
                              id="tenDonViSuDung"
                              className={
                                errors.tenDonViSuDung && touched.tenDonViSuDung
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="nguoiDaiDien">
                              Người đại diện: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="nguoiDaiDien"
                              id="nguoiDaiDien"
                              className={
                                errors.nguoiDaiDien && touched.nguoiDaiDien
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="chucVu">
                              Chức vụ: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="chucVu"
                              id="chucVu"
                              className={
                                errors.chucVu && touched.chucVu
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="ngaySinh">
                              Ngày sinh: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="date"
                              name="ngaySinh"
                              id="ngaySinh"
                              className={
                                errors.ngaySinh && touched.ngaySinh
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="quocTich">
                              Quốc tịch: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              component="select"
                              id="quocTich"
                              name="quocTich"
                            >
                              <option value="Việt Nam">Việt Nam</option>
                              <option value="NY">New York</option>
                              <option value="SF">San Francisco</option>
                              <option value="CH">Chicago</option>
                              <option value="OTHER">Other</option>
                            </Field>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="soDienThoai">Số điện thoại:</label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="soDienThoai"
                              id="soDienThoai"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="email">
                              Email: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="email"
                              id="email"
                              className={
                                touched.email && errors.email
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="center-item">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <label htmlFor="gioiTinh">
                              Giới tính: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <div className="form-group">
                              <Field
                                type="radio"
                                name="gioiTinh"
                                id="nam"
                                value="Nam"
                                checked
                              />
                              <label htmlFor="nam">Nam</label>
                            </div>
                            <div className="form-group">
                              <Field
                                type="radio"
                                name="gioiTinh"
                                id="nu"
                                value="Nữ"
                              />
                              <label htmlFor="nu">Nữ</label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="CMND">
                              CMND/ CCCD: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="cmnd"
                              id="CMND"
                              className={
                                errors.cmnd && touched.cmnd ? "input_error" : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="ngayCap">
                              Ngày cấp: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="date"
                              name="ngayCap"
                              id="ngayCap"
                              className={
                                errors.ngayCap && touched.ngayCap
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="noiCap">
                              Nơi cấp: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="noiCap"
                              id="noiCap"
                              className={
                                errors.noiCap && touched.noiCap
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="maSoThue">Mã số thuế:</label>
                          </td>
                          <td>
                            <Field type="text" name="maSoThue" id="maSoThue" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="noiCuTru">Nơi cư trú:</label>
                          </td>
                          <td>
                            <Field
                              as="textarea"
                              name="noiCuTru"
                              id="noiCuTru"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="center-item">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <label htmlFor="tenDangNhap">
                              Tên đăng nhập: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              id="tenDangNhap"
                              name="tenDangNhap"
                              className={
                                errors.tenDangNhap && touched.tenDangNhap
                                  ? "input_error"
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="matKhau">
                              Mật khẩu: <i>*</i>
                            </label>
                          </td>
                          <td>
                            <div className="password">
                              <Field
                                type={isType ? "password" : "test"}
                                name="matKhau"
                                id="matKhau"
                                className={
                                  errors.matKhau && touched.matKhau
                                    ? "input_error"
                                    : ""
                                }
                              />
                              <i
                                onClick={() => {
                                  setIsType((pre) => !pre);
                                }}
                                id={isType ? "" : "doiMau"}
                                className="fa fa-eye"
                              ></i>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="soTaiKhoan">Số tài khoản:</label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="soTaiKhoan"
                              id="soTaiKhoan"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="nganHang">Ngân hàng:</label>
                          </td>
                          <td>
                            <Field type="text" name="nganHang" id="nganHang" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="container-btn">
                <p>
                  <i>*</i>là những trường thông tin bắt buộc
                </p>
                <div className="content-btn">
                  <button type="button">Hủy</button>
                  <button type="submit">Lưu</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
