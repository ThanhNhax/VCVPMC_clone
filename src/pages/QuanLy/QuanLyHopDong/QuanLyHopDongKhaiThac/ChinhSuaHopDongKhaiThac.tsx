import React, { useState } from "react";
import { Button, Upload } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/configStore";
import moment from "moment";

export default function ChinhSuaHopDongKhaiThac() {
  const [isType, setIsType] = useState<boolean>(true); // để handle type password => type text
  const item = useSelector(
    (state: RootState) => state.hopDong.itemHopDongKhaiThac
  );
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
                      <input
                        type="text"
                        name="tenHopDong"
                        id="tenHopDong"
                        defaultValue={item?.tenHopDong}
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
                      <input
                        type="text"
                        name="soHopDong"
                        id="soHopDong"
                        defaultValue={item?.soHopDong}
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
                        defaultValue={moment(item?.ngayHieuLuc).format(
                          "YYYY-MM-DD"
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
                      <input
                        type="date"
                        name="ngayHetHan"
                        id="ngayHetHan"
                        defaultValue={moment(item?.ngayHetHan).format(
                          "YYYY-MM-DD"
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
                        defaultValue={"Công ty TNHH MTV  Âu Lạc"}
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
                        defaultValue={"Nguyễn văn A"}
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
                      <input
                        type="text"
                        name="chucVu"
                        id="chucVu"
                        defaultValue={"Giám đốc"}
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
                      <input
                        type="date"
                        name="ngaySinh"
                        id="ngaySinh"
                        defaultValue={"1984-01-10"}
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
                      <input
                        type="text"
                        name="soDienThoai"
                        id="soDienThoai"
                        defaultValue={"123456789012"}
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
                      <input
                        type="text"
                        name="email"
                        id="email"
                        defaultValue={"nguyenvana@gmail.com"}
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
                      <input
                        type="text"
                        name="CMND"
                        id="CMND"
                        defaultValue={"123456789012"}
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
                      <input
                        type="date"
                        name="ngayCap"
                        id="ngayCap"
                        defaultValue={"10/02/2014"}
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
                      <input
                        type="text"
                        name="noiCap"
                        id="noiCap"
                        defaultValue={"Tp.Hồ Chí Minh"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="maSoThue">Mã số thuế:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="maSoThue"
                        id="maSoThue"
                        defaultValue={"123456789012"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="noiCuTru">Nơi cư trú:</label>
                    </td>
                    <td>
                      <textarea
                        name="noiCuTru"
                        id="noiCuTru"
                        defaultValue={
                          "69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh"
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
                      <label htmlFor="tenDangNhap">
                        Tên đăng nhập: <i>*</i>
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="tenDangNhap"
                        name="tenDangNhap"
                        defaultValue={"nguyenvana@gmail.com"}
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
                        <input
                          type={isType ? "password" : "test"}
                          name="matKhau"
                          id="matKhau"
                          defaultValue={"11111111"}
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
                      <input
                        type="text"
                        name="soTaiKhoan"
                        id="soTaiKhoan"
                        defaultValue={"1231123312211223"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="nganHang">Ngân hàng:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="nganHang"
                        id="nganHang"
                        defaultValue={"ACB - Ngân hàng TMCP Á Châu"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="maSoThue">Mã số thuế:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="maSoThue"
                        id="maSoThue"
                        defaultValue={"123456789012"}
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
            <button>Hủy</button>
            <button>Lưu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
