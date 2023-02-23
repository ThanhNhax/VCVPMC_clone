/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../redux/configStore";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../FireStore/fireStore";
import { message } from "antd";

export default function ChiTietHopDongKhaiThac() {
  const item = useSelector(
    (state: RootState) => state.hopDong.itemHopDongKhaiThac
  );
  const navigate = useNavigate();
  console.log({ item });
  useEffect(() => {
    if (item === null) {
      navigate("/admin/quanLyHopDong");
    }
  }, [item]);
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
                      <td>{moment(item?.ngayHieuLuc).format("DD-MM-YYYY")}</td>
                    </tr>
                    <tr>
                      <td>Ngày hết hạn:</td>
                      <td>{moment(item?.ngayHetHan).format("DD-MM-YYYY")}</td>
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
                      <td>{item?.tenDonViSuDung}</td>
                    </tr>
                    <tr>
                      <td>Người đại diện:</td>
                      <td>{item?.nguoiDaiDien}</td>
                    </tr>
                    <tr>
                      <td>Chức vụ:</td>
                      <td>{item?.chucVu}</td>
                    </tr>
                    <tr>
                      <td>Ngày sinh:</td>
                      <td>{moment(item?.ngaySinh).format("DD/MM/YYYY")}</td>
                    </tr>
                    <tr>
                      <td>Quốc tịch:</td>
                      <td>{item?.quocTich}</td>
                    </tr>
                    <tr>
                      <td>Số điện thoại:</td>
                      <td>{item?.soDienThoai}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{item?.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="center-item">
                <table>
                  <tbody>
                    <tr>
                      <td>Giới tính:</td>
                      <td>{item?.gioiTinh}</td>
                    </tr>
                    <tr>
                      <td>CMND/ CCCD:</td>
                      <td>{item?.cmnd}</td>
                    </tr>
                    <tr>
                      <td>Ngày cấp:</td>
                      <td>{moment(item?.ngayCap).format("DD-MM-YYYY")}</td>
                    </tr>
                    <tr>
                      <td>Nơi cấp:</td>
                      <td>{item?.noiCap}</td>
                    </tr>
                    <tr>
                      <td>Mã số thuế:</td>
                      <td>{item?.maSoThue}</td>
                    </tr>
                    <tr>
                      <td>Nơi cư trú:</td>
                      <td>{item?.noiCuTru}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="center-item">
                <table>
                  <tbody>
                    <tr>
                      <td>Tên đăng nhập:</td>
                      <td>{item?.tenDangNhap}</td>
                    </tr>
                    <tr>
                      <td>Mật khẩu:</td>
                      <td>
                        <input
                          type="password"
                          defaultValue={item?.matKhau}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Số tài khoản:</td>
                      <td>{item?.soTaiKhoan}</td>
                    </tr>
                    <tr>
                      <td>Ngân hàng:</td>
                      <td>{item?.nganHang}</td>
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
              <div
                className="bg-icon"
                onClick={() => {
                  if (item) {
                    deleteDoc(doc(db, "hopDong", item?.id));
                    message.open({
                      type: "success",
                      content: "Hủy thành công!",
                      duration: 0.8,
                    });
                    navigate("/admin/quanLyHopDong");
                  }
                }}
              >
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
