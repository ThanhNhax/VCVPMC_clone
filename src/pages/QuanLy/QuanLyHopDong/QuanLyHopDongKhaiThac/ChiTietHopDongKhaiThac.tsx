import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../redux/configStore";

export default function ChiTietHopDongKhaiThac() {
  const item = useSelector(
    (state: RootState) => state.hopDong.itemHopDongKhaiThac
  );
  const navigate = useNavigate();
  return (
    <div className="chiTietHopDongKhaiThac">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý<i className="fas fa-chevron-right"></i>Quản lý hợp đồng
            <i className="fas fa-chevron-right"></i>Chi tiết
          </p>
          <h1>Hợp đồng khai thác - {item?.soHopDong} </h1>
        </div>
        <div className="container-center">
          <div className="wrap-center">
            <div className="center-list">
              <div className="center-item">
                <table>
                  <tbody>
                    <tr>
                      <td>Tên hợp đồng:</td>
                      <td>{item?.tenHopDong}</td>
                    </tr>
                    <tr>
                      <td>Số hợp đồng:</td>
                      <td>{item?.soHopDong}</td>
                    </tr>
                    <tr>
                      <td>Ngày hiệu lực:</td>
                      <td>{moment(item?.ngayHieuLuc).format("YYYY-MM-DD")}</td>
                    </tr>
                    <tr>
                      <td>Ngày hết hạn:</td>
                      <td>{moment(item?.ngayHetHan).format("YYYY-MM-DD")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="center-item">
                <p>Đính kèm tệp:</p>
                <div className="file-dinhKem">
                  <div className="file-item">
                    <i className="fas fa-file-code"></i>
                    <p>hetthuongcannho.doc</p>
                  </div>
                  <div className="file-item">
                    <i className="fas fa-file-code"></i>
                    <p>hetthuongcannho.doc</p>
                  </div>
                </div>
              </div>
              <div className="center-item">
                <table>
                  <tbody>
                    <tr>
                      <td>Loại hợp đồng:</td>
                      <td>Trọn gói</td>
                    </tr>
                    <tr>
                      <td>Giá trị hợp đồng (VNĐ):</td>
                      <td>365.000.000</td>
                    </tr>
                    <tr>
                      <td>Giá trị phân phối (VNĐ/ngày):</td>
                      <td>1.000.000</td>
                    </tr>
                    <tr>
                      <td>Tình trạng:</td>
                      <td className={item?.hieuLucHopDong}>
                        {item?.hieuLucHopDong}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="center-list">
              <div className="center-item">
                <table>
                  <tbody>
                    <tr>
                      <td>Tên đơn vị sử dụng:</td>
                      <td>Công ty TNHH MTV Âu Lạc</td>
                    </tr>
                    <tr>
                      <td>Người đại diện:</td>
                      <td>Nguyễn văn A</td>
                    </tr>
                    <tr>
                      <td>Chức vụ:</td>
                      <td>Giám đốc</td>
                    </tr>
                    <tr>
                      <td>Ngày sinh:</td>
                      <td>01/05/1984</td>
                    </tr>
                    <tr>
                      <td>Quốc tịch:</td>
                      <td>Việt Nam</td>
                    </tr>
                    <tr>
                      <td>Số điện thoại:</td>
                      <td>123456789012</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>nguyenvana@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="center-item">
                <table>
                  <tbody>
                    <tr>
                      <td>Giới tính:</td>
                      <td>Nam</td>
                    </tr>
                    <tr>
                      <td>CMND/ CCCD:</td>
                      <td>123456789012</td>
                    </tr>
                    <tr>
                      <td>Ngày cấp:</td>
                      <td>02/06/2005</td>
                    </tr>
                    <tr>
                      <td>Nơi cấp:</td>
                      <td>Tp.Hồ Chí Minh</td>
                    </tr>
                    <tr>
                      <td>Mã số thuế:</td>
                      <td>123456789012</td>
                    </tr>
                    <tr>
                      <td>Nơi cư trú:</td>
                      <td>
                        69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành
                        phố Hồ Chí Minh
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="center-item">
                <table>
                  <tbody>
                    <tr>
                      <td>Tên đăng nhập:</td>
                      <td>vuonganhtu123</td>
                    </tr>
                    <tr>
                      <td>Mật khẩu:</td>
                      <td>
                        <input
                          type="password"
                          defaultValue={11111111}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Số tài khoản:</td>
                      <td>123456789012</td>
                    </tr>
                    <tr>
                      <td>Ngân hàng:</td>
                      <td>ACB - Ngân hàng TMCP Á Châu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <div
                className="bg-icon"
                onClick={() =>
                  navigate(
                    "/admin/quanLyHopDong/chiTietHopDongKhaiThac/chinhSuaHopDongKhaiThac"
                  )
                }
              >
                <i className="fa fa-edit"></i>
              </div>
              <p>Chỉnh sửa</p>
            </div>
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-times"></i>
              </div>
              <p>Huỷ hợp đồng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
