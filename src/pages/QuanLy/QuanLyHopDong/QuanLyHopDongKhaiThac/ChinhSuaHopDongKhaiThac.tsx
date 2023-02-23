/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button, Upload } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/configStore";
import moment from "moment";
import { Field, Form, Formik } from "formik";
import { HopDongKhaiThacRedux } from "../../../../redux/hopDongReducer/hopDongReducer";
import { useNavigate } from "react-router-dom";

export default function ChinhSuaHopDongKhaiThac() {
  const navigate = useNavigate();
  const [isType, setIsType] = useState<boolean>(true); // để handle type password => type text
  const item = useSelector(
    (state: RootState) => state.hopDong.itemHopDongKhaiThac
  );
  console.log({ item });
  let initialValue: HopDongKhaiThacRedux = {
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
  useEffect(() => {
    if (item) {
      initialValue = item;
    } else {
      navigate("/admin/quanLyHopDong/chiTietHopDongKhaiThac");
    }
  }, []);

  return (
    <div className="chinhSuaHopDongKhaiThac">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý<i className="fas fa-chevron-right"></i>Quản lý hợp đồng
            <i className="fas fa-chevron-right"></i>Chi tiết
            <i className="fas fa-chevron-right"></i>Chỉnh sửa hợp đồng
          </p>
          <h1>Hợp đồng khai thác - {item?.soHopDong} </h1>
        </div>
        <Formik
          initialValues={initialValue}
          onSubmit={(value) => {
            console.log({ value });
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
                              value={item?.tenHopDong}
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
                              value={item?.soHopDong}
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
                              value={moment(item?.ngayHieuLuc).format(
                                "yyyy-MM-DD"
                              )}
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
                              value={moment(item?.ngayHetHan).format(
                                "yyyy-MM-DD"
                              )}
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
                          <input type="text" id="giaTriHopDong" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="giaTriPhanPhoi">
                            Giá trị phân phối
                            <br />
                            (VNĐ/ngày)
                          </label>
                          <input type="text" id="giaTriPhanPhoi" />
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
                              value={item?.tenDonViSuDung}
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
                              value={item?.nguoiDaiDien}
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
                              value={item?.chucVu}
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
                              value={item?.ngaySinh}
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
                              as="select"
                              name="quocTich"
                              id="quocTich"
                              value={item?.quocTich}
                            >
                              <option value="Việt Nam">Việt Nam</option>
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
                              value={item?.soDienThoai}
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
                              value={item?.email}
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
                            <Field type="text" name="CMND" id="CMND" />
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
                              value={moment(item?.ngayCap).format("yyyy-MM-DD")}
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
                            <Field type="text" name="noiCap" id="noiCap" />
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
                              type="textarea"
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
                              value={item?.tenDangNhap}
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
                                value={item?.matKhau}
                              />
                              <i
                                onClick={() => {
                                  setIsType(isType ? false : true);
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
                              value={item?.soTaiKhoan}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="nganHang">Ngân hàng:</label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              name="nganHang"
                              id="nganHang"
                              value={item?.nganHang}
                            />
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
