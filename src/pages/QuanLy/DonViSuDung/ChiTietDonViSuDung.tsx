import React, { useState } from "react";
import { Checkbox } from "antd";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/configStore";
import { NguoiDungDonViRedux } from "../../../redux/quanLyDonViSuDung/quanLyDonViSuDungReducer";

export default function ChiTietDonViSuDung() {
  const item = useSelector(
    (state: RootState) => state.quanLyDonViSuDung.itemDonViSuDung
  );
  const navigate = useNavigate();
  if (item === null) navigate("/admin/donViSuDung");
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  // const [limit, setLimit] = useState<number>(13); // change số item hiển thị
  // const indexOfLastNews = currentPage * limit; // vị trí cuối
  // const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  // const totalPages = Math.ceil(arrPlayList.length / limit); // Tính số tổng số pages
  // const newArrPlayList = arrPlayList.slice(indexOfFirstNews, indexOfLastNews);
  // const [isStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages

  const renderTable = () => {
    return item?.arrNguoiDung.map((nguoiDung: NguoiDungDonViRedux, index) => (
      <tr key={index}>
        <td>
          <Checkbox />
        </td>
        <td className="text_right">{index + 1}</td>
        <td>{nguoiDung.tenNguoiDung}</td>
        <td>{nguoiDung.vaiTro}</td>
        <td>{nguoiDung.email}</td>
        <td>{nguoiDung.tenDangNhap}</td>
        <td>{nguoiDung.capNhatlanCuoi}</td>
        <td className="action">
          <Link to="">Xem chi tiết</Link>
        </td>
      </tr>
    ));
  };
  return (
    <div className="chiTietDonViSuDung quanLyDonViSuDung">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý <i className="fas fa-chevron-right"></i>Đơn vị sử dụng
            <i className="fas fa-chevron-right"></i> Chi tết
          </p>

          <h1>Đơn vị sử dụng - {item?.tenTaiKhoảnQuanTri}</h1>
        </div>
        <div className="container-content">
          <div className="wrap-content">
            <div className="content-top">
              <div id="input_search">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Tên bản ghi, tên ca sĩ, tác giả,..."
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className="content-bottom">
              <div className="wrap-table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <Checkbox></Checkbox>
                      </th>
                      <th>STT</th>
                      <th>Tên người dùng</th>
                      <th>Vai trò</th>
                      <th>Email</th>
                      <th>Tên đăng nhập</th>
                      <th>Cập nhật lần cuối</th>
                      <th>Trạng thái</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{renderTable()}</tbody>
                </table>
              </div>
              <div className="pagination-table">
                <div className="pagination_left">
                  <p>
                    Hiển thị
                    <input defaultValue="13" readOnly></input>
                    hàng trong mỗi trang
                  </p>
                </div>
                <div className="pagination_right">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => {
                      if (currentPage === 1) {
                        setCurrentPage(1);
                      }
                      setCurrentPage(currentPage - 1);
                    }}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <div
                    id="btnPage"
                    // dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                  ></div>
                  <button
                    // disabled={currentPage >= totalPages}
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                    }}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <div
                className="bg_icon"
                onClick={() =>
                  navigate("/admin/donViSuDung/chiTiet/themNguoiDung")
                }
              >
                <i className="fas fa-plus"></i>
              </div>
              <p>Thêm người dùng</p>
            </div>
            <div className="menu-item">
              <div className="bg_icon">
                <i className="fas fa-trash-alt"></i>
              </div>
              <p>Xóa</p>
            </div>
            <div className="menu-item">
              <div className="bg_icon">
                <i className="fas fa-user-friends"></i>
              </div>
              <p>Vai trò</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
