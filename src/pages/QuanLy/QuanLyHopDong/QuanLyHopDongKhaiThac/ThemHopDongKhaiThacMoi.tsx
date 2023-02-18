import React, { useState } from "react";
import { Button, Upload } from "antd";

export default function ThemHopDongKhaiThacMoi() {
  const [isType, setIsType] = useState<boolean>(true); // để handle type password => type text

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
                      <input type="text" name="tenHopDong" id="tenHopDong" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="soHopDong">
                        Số hợp đồng: <i>*</i>
                      </label>
                    </td>
                    <td>
                      <input type="text" name="soHopDong" id="soHopDong" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="ngayHieuLuc">
                        Ngày hiệu lực: <i>*</i>
                      </label>
                    </td>
                    <td>
                      <input type="date" name="ngayHieuLuc" id="ngayHieuLuc" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="ngayHetHan">
                        Ngày hết hạn: <i>*</i>
                      </label>
                    </td>
                    <td>
                      <input type="date" name="ngayHetHan" id="ngayHetHan" />
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
                    <input
                      type="text"
                      defaultValue={"214.500.000"}
                      id="giaTriHopDong"
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
                      defaultValue={"1.500.000"}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="checked-item">
                <div className="form-group">
                  <div className="wrap-form">
                    <input type="radio" name="loaiHopDong" id="luotPhat" />
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
                      <input
                        type="text"
                        name="tenDonViSuDung"
                        id="tenDonViSuDung"
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
                      <input
                        type="text"
                        name="nguoiDaiDien"
                        id="nguoiDaiDien"
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
                      <input type="text" name="chucVu" id="chucVu" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="ngaySinh">
                        Ngày sinh: <i>*</i>
                      </label>
                    </td>
                    <td>
                      <input type="text" name="ngaySinh" id="ngaySinh" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="quocTich">
                        Quốc tịch: <i>*</i>
                      </label>
                    </td>
                    <td>
                      <select name="quocTich" id="quocTich">
                        <option value="">Việt Nam</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="soDienThoai">Số điện thoại:</label>
                    </td>
                    <td>
                      <input type="text" name="soDienThoai" id="soDienThoai" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="email">
                        Email: <i>*</i>
                      </label>
                    </td>
                    <td>
                      <input type="text" name="email" id="email" />
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
                        <input type="radio" name="gioiTinh" id="nam" checked />
                        <label htmlFor="nam">Nam</label>
                      </div>
                      <div className="form-group">
                        <input type="radio" name="gioiTinh" id="nu" />
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
                      <input type="text" name="CMND" id="CMND" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="ngayCap">
                        Ngày cấp: <i>*</i>
                      </label>
                    </td>
                    <td>
                      <input type="text" name="ngayCap" id="ngayCap" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="noiCap">
                        Nơi cấp: <i>*</i>
                      </label>
                    </td>
                    <td>
                      <input type="text" name="noiCap" id="noiCap" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="maSoThue">Mã số thuế:</label>
                    </td>
                    <td>
                      <input type="text" name="maSoThue" id="maSoThue" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="noiCuTru">Nơi cư trú:</label>
                    </td>
                    <td>
                      <textarea name="noiCuTru" id="noiCuTru" />
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
                      <input type="text" id="tenDangNhap" name="tenDangNhap" />
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
                        <input
                          type={isType ? "password" : "test"}
                          name="matKhau"
                          id="matKhau"
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
                      <input type="text" name="soTaiKhoan" id="soTaiKhoan" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="nganHang">Ngân hàng:</label>
                    </td>
                    <td>
                      <input type="text" name="nganHang" id="nganHang" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="maSoThue">Mã số thuế:</label>
                    </td>
                    <td>
                      <input type="text" name="maSoThue" id="maSoThue" />
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
            <button>Hủy</button>
            <button>Lưu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
