import { Button, Upload } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function ThemHopDongUyQuyenMoi({}: Props) {
  const navigate = useNavigate();
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
        <div className="content-center">
          <div className="center-top">
            <div className="from-group">
              <div className="from-item">
                <label htmlFor="">
                  Số hợp đồng:<i>*</i>
                </label>
                <input type="text" />
              </div>
              <div className="from-item">
                <label htmlFor="">
                  Tên hợp đồng:<i>*</i>
                </label>
                <input type="text" />
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
                      style={{ display: "flex", justifyContent: "flex-start" }}
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
            <div className="bottom-wrap">
              <div className="from-group">
                <div className="from-item">
                  <label htmlFor="">Pháp nhân ủy quyền:</label>
                  <div className="from-radio">
                    <input type="radio" name="uyQuyen" id="caNhan" />
                    <label htmlFor="caNhan">Cá nhân</label>
                    <input type="radio" name="uyQuyen" id="toChuc" />
                    <label htmlFor="toChuc">Tổ chức</label>
                  </div>
                </div>
                <div className="from-item">
                  <label htmlFor="">Tên người uỷ quyền:</label>
                  <input type="text" />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Giới tính:<i>*</i>
                  </label>
                  <div className="from-radio">
                    <input type="radio" name="uyQuyen" id="nam" />
                    <label htmlFor="nam">Nam</label>
                    <input type="radio" name="uyQuyen" id="nu" />
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
                  <label htmlFor="">
                    Số điện thoại: <i>*</i>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="from-group">
                <div className="from-item">
                  <label htmlFor="">
                    CMND/ CCCD: <i>*</i>
                  </label>
                  <input type="text" />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Ngày cấp: <i>*</i>
                  </label>
                  <input type="text" />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Nơi cấp: <i>*</i>
                  </label>
                  <input type="text" />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Mã số thuế: <i>*</i>
                  </label>
                  <input type="text" />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Nơi cư trú: <i>*</i>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="from-group">
                <div className="from-item">
                  <label htmlFor="">
                    Email: <i>*</i>
                  </label>
                  <input type="text" />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Tên đăng nhập: <i>*</i>
                  </label>
                  <input type="text" />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Mật khẩu: <i>*</i>
                  </label>
                  <input type="text" />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Số tài khoản: <i>*</i>
                  </label>
                  <input type="text" />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Ngân hàng: <i>*</i>
                  </label>
                  <input type="text" />
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
            <button>Hủy</button>
            <button
              onClick={() =>
                navigate("/admin/quanLyHopDong/themThongTinBanGhi")
              }
            >
              Tạo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
