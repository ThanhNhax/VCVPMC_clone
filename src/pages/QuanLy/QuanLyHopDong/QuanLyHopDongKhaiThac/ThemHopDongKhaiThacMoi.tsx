import React, { useState, useMemo } from "react";
import { Button, message, Upload } from "antd";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { HopDongKhaiThacRedux } from "../../../../redux/hopDongReducer/hopDongReducer";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../FireStore/fireStore";
import { useNavigate } from "react-router-dom";
import { get_day_of_time } from "./ChinhSuaHopDongKhaiThac";

export const schema = Yup.object().shape({
  tenHopDong: Yup.string().required(),
  soHopDong: Yup.string().required(),
  ngayHieuLuc: Yup.string(),
  ngayHetHan: Yup.string(),
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
export const handleGiaTriPhanPhoi = (
  giaTriHopDong: string,
  d1: string,
  d2: string
) => {
  const ngayHieuLuc = new Date(d1);
  const ngayHetHan = new Date(d2);
  const totalDay = get_day_of_time(ngayHieuLuc, ngayHetHan);
  if (totalDay === 0) return 0;
  return (parseFloat(giaTriHopDong) / totalDay).toFixed(3);
};

export default function ThemHopDongKhaiThacMoi() {
  const [quocTich, setQuocTich] = useState<string>("");
  const [toggleLoaiHopDong, setToggleLoaiHopDong] = useState<boolean>(true);
  console.log({ toggleLoaiHopDong });
  console.log({ quocTich });
  const navigate = useNavigate();
  const [isType, setIsType] = useState<boolean>(true); // để handle type password => type text

  const [ngayHieuLuc, setNgayHieuLuc] = useState<string>("");
  const [ngayHetHan, setNgayHetHan] = useState<string>("");
  const [giaTriHopDong, setGiaTriHopDong] = useState<string>("");
  const [giaTriLuotPhat, setGiaTriLuotPhat] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const momeHandleGiaTriPhanPhoi = useMemo(
    () => handleGiaTriPhanPhoi(giaTriHopDong, ngayHieuLuc, ngayHetHan),
    [giaTriHopDong, ngayHieuLuc, ngayHetHan]
  );

  const initialValusHopDongKhaiThac: HopDongKhaiThacRedux = {
    id: "",
    hieuLucHopDong: "",
    ngayTao: "",
    tenHopDong: "",
    soHopDong: ngayHetHan,
    ngayHieuLuc: ngayHieuLuc,
    ngayHetHan: "",
    tenDonViSuDung: "",
    nguoiDaiDien: "",
    chucVu: "",
    ngaySinh: "",
    quocTich: quocTich,
    soDienThoai: "",
    email: "",
    gioiTinh: "Nam",
    cmnd: "",
    ngayCap: "",
    noiCap: "",
    maSoThue: "",
    noiCuTru: "",
    loaiHopDong: {
      tronGoi: {
        giaTriHopDong: parseInt(giaTriHopDong),
        giaTriPhanPhoi: 0,
      },
      luotPhat: {
        giaTriLuotPhat: 0,
      },
    },
    tenDangNhap: "",
    matKhau: "",
    soTaiKhoan: "",
    nganHang: "",
  };

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
            //gán lại ngày hết hạn ngày hiệu lúc ,giá trị hợp đồng
            value.ngayHetHan = ngayHetHan;
            value.ngayHieuLuc = ngayHieuLuc;
            value.loaiHopDong.tronGoi.giaTriHopDong = parseInt(giaTriHopDong);
            value.loaiHopDong.luotPhat.giaTriLuotPhat =
              parseInt(giaTriLuotPhat);
            // gán hiệu lực hợp đồng là mới tạo
            value.hieuLucHopDong = "Mới";
            // gán ngày tạo là ngày hiện tại
            let ngayTao = new Date();
            value.ngayTao =
              `${ngayTao.getDate()}` +
              "/" +
              `${ngayTao.getMonth() + 1}` +
              "/" +
              `${ngayTao.getFullYear()}`;
            // gán quốc tịch bằng state
            value.quocTich = quocTich;

            console.log({ value });
            // add lên  fireSore
            try {
              addDoc(collection(db, "hopDong"), value);
              console.log("add firestore", { value });
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
                            <input
                              type="date"
                              name="ngayHieuLuc"
                              id="ngayHieuLuc"
                              value={ngayHieuLuc}
                              onChange={(e) => setNgayHieuLuc(e.target.value)}
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
                            <input
                              type="date"
                              name="ngayHetHan"
                              id="ngayHetHan"
                              value={ngayHetHan}
                              onChange={(e) => setNgayHetHan(e.target.value)}
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
                          <input
                            type="radio"
                            name="loaiHopDong"
                            id="tronGoi"
                            checked={toggleLoaiHopDong}
                            onChange={() => {
                              setToggleLoaiHopDong(true);
                              setGiaTriLuotPhat("0");
                            }}
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
                          <input
                            type="text"
                            id="giaTriHopDong"
                            name="loaiHopDong.tronGoi.giaTriHopDong"
                            value={giaTriHopDong}
                            onChange={(e) => {
                              setGiaTriHopDong(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="giaTriPhanPhoi">
                            Giá trị phân phối
                            <br />
                            (VNĐ/ngày)
                          </label>
                          <input
                            type="text"
                            id="giaTriPhanPhoi"
                            readOnly
                            value={
                              momeHandleGiaTriPhanPhoi === "NaN"
                                ? 0
                                : momeHandleGiaTriPhanPhoi
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="checked-item">
                      <div className="form-group">
                        <div className="wrap-form">
                          <input
                            type="radio"
                            id="luotPhat"
                            name="loaiHopDong"
                            checked={!toggleLoaiHopDong}
                            onChange={() => {
                              setToggleLoaiHopDong(false);
                              setGiaTriHopDong("0");
                            }}
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
                          <input
                            type="text"
                            id="giaTriLuotPhat"
                            value={giaTriLuotPhat}
                            onChange={(e) => setGiaTriLuotPhat(e.target.value)}
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
