import React, { useState } from "react";
import { Button, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";

export default function ThemHopDongUyQuyenMoi() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<boolean>(true);
  const initialValues = {
    soHopDong: "",
    tenHopDong: "",
    ngayHieuLuc: "",
    ngayHetHan: "",
    tenNguoiUyQuyen: "",
    gioiTinh: "",
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
  };
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
          onSubmit={(value) => {
            console.log({ value });
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
                      <Field type="text" name="soHopDong" />
                    </div>
                    <div className="from-item">
                      <label htmlFor="">
                        Tên hợp đồng:<i>*</i>
                      </label>
                      <Field type="text" name="tenHopDong" />
                    </div>
                    <div className="from-item">
                      <label htmlFor="">
                        Ngày hiệu lực:<i>*</i>
                      </label>
                      <input type="date" />
                    </div>
                    <div className="from-item">
                      <label htmlFor="">
                        Ngày hết hạn:<i>*</i>
                      </label>
                      <input type="date" />
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
                        <Field type="text" name="tenNguoiUyQuyen" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Giới tính:<i>*</i>
                        </label>
                        <div className="from-radio">
                          <input
                            type="radio"
                            name="gioiTinh"
                            id="nam"
                            defaultChecked
                          />
                          <label htmlFor="nam">Nam</label>
                          <input type="radio" name="gioiTinh" id="nu" />
                          <label htmlFor="nu">Nữ</label>
                        </div>
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Ngày sinh:<i>*</i>
                        </label>
                        <input type="date" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Quốc tịch: <i>*</i>
                        </label>
                        <select name="quocTich" id="quocTich">
                          <option value="vietNam">Việt Nam</option>
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
                        <Field type="text" name="cmnd" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Ngày cấp: <i>*</i>
                        </label>
                        <Field type="text" name="ngayCap" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Nơi cấp: <i>*</i>
                        </label>
                        <Field type="text" name="noiCap" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Mã số thuế:</label>
                        <Field type="text" name="maSoThue" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Nơi cư trú:</label>
                        <Field type="text" name="noiCuTru" />
                      </div>
                    </div>
                    <div className="from-group">
                      <div className="from-item">
                        <label htmlFor="">
                          Email: <i>*</i>
                        </label>
                        <Field type="text" name="email" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Tên đăng nhập: <i>*</i>
                        </label>
                        <Field type="text" name="tenDangNhap" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Mật khẩu: <i>*</i>
                        </label>
                        <Field type="text" name="matKhau" />
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
                        <Field type="text" name="tenToChuc" />
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
                        <Field type="text" name="nguoiDaiDien" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Chức vụ:</label>
                        <Field type="text" name="chucVu" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Ngày sinh: <i>*</i>
                        </label>
                        <input type="date" name="ngaySinh" />
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
                            defaultChecked
                          />
                          <label htmlFor="nam">Nam</label>
                          <input type="radio" name="gioiTinh" id="nu" />
                          <label htmlFor="nu">Nữ</label>
                        </div>
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          CMND/ CCCD: <i>*</i>
                        </label>
                        <Field type="text" name="cmnd" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Ngày cấp: <i>*</i>
                        </label>
                        <input type="date" name="ngayCap" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Nơi cấp: <i>*</i>
                        </label>
                        <Field type="text" name="noiCap" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Quốc tịch: <i>*</i>
                        </label>
                        <select name="quocTich">
                          <option value="Việt Nam">Việt Nam</option>
                        </select>
                      </div>
                    </div>
                    <div className="from-group">
                      <div className="from-item">
                        <label htmlFor="">Nơi cư trú:</label>
                        <textarea name="noiCuTru" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Số điện thoại:</label>
                        <Field type="text" name="soDienThoai" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Email: <i>*</i>
                        </label>
                        <input type="email" name="email" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Tên đăng nhập: <i>*</i>
                        </label>
                        <Field type="text" name="tenDangNhap" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Mật khẩu: <i>*</i>
                        </label>
                        <Field type="text" name="matKhau" />
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
                  <button
                    type="submit"
                    // onClick={() =>
                    //   navigate("/admin/quanLyHopDong/themThongTinBanGhi")
                    // }
                  >
                    Tạo
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
