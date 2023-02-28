/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { setItemNguoiDung } from "../../../redux/quanLyDonViSuDung/quanLyDonViSuDungReducer";

export default function ThongTinNguoiDung() {
  //Lấy thông tin người dùng từ redux về
  const item = useSelector(
    (state: RootState) => state.quanLyDonViSuDung.itemNguoiDung
  );
  console.log({ item });
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (!item) navigate("/admin/donViSuDung/chiTiet");
  }, []);
  return (
    <div className="ThongTinNguoiDung">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý<i className="fas fa-chevron-right"></i>
            <span onClick={() => navigate("/admin/donViSuDung")}>
              Đơn vị sử dụng
            </span>
            <i className="fas fa-chevron-right"></i>
            <span onClick={() => navigate("/admin/donViSuDung/chiTiet")}>
              Chi tiết
            </span>
            <i className="fas fa-chevron-right"></i>Thông tin người dùng
          </p>
          <h1>Thông tin người dùng</h1>
        </div>
        <div className="container-content">
          <div className="item">
            <table>
              <tbody>
                <tr>
                  <td>Tên người dùng:</td>
                  <td>{item?.tenNguoiDung}</td>
                </tr>
                <tr>
                  <td>Vai trò:</td>
                  <td>{item?.vaiTro}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{item?.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="item">
            <table>
              <tbody>
                <tr>
                  <td>Tên đăng nhập:</td>
                  <td>{item?.tenDangNhap}</td>
                </tr>
                <tr>
                  <td>Mật khẩu:</td>
                  <td>
                    <div className="listDot">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Trạng thái thiết bị:</td>
                  <td>
                    {item?.trangThai ? "Đã kích hoạt" : "Ngưng kích hoạt"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="item">
            <div
              className="bg-icon"
              onClick={() => {
                if (item) {
                  dispatch(setItemNguoiDung(item));
                  navigate(
                    "/admin/donViSuDung/chiTiet/thongTinNguoiDung/chinhSuaThongTin"
                  );
                }
              }}
            >
              <i className="fa fa-edit"></i>
            </div>
            <p>Chỉnh sửa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
