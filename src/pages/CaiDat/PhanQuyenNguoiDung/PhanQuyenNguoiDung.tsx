/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import {
  getArrPhanQuyenNguoiDungFireStore,
  PhanQuyenNguoiDungRedux,
  setItemPhanQuyenNguoiDung,
} from "../../../redux/phanQuyenNguoiDung/phanQuyenNguoiDungReducer";

export default function PhanQuyenNguoiDung() {
  // lấy data từ redux về
  const { arrPhanQuyenNguoiDung } = useSelector(
    (state: RootState) => state.phanQuyenNguoiDung
  );
  const [toggle, setToggle] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    // lấy dât từ fireStore về đổ lên redux
    dispatch(getArrPhanQuyenNguoiDungFireStore());
  }, []);
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(12); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  const totalPages = Math.ceil(arrPhanQuyenNguoiDung.length / limit); // Tính số tổng số pages
  const newArrPhanPage = arrPhanQuyenNguoiDung.slice(
    indexOfFirstNews,
    indexOfLastNews
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  const renderButtonPage = (n: number) => {
    let btn: any = "";
    for (let i = 0; i < n; i++) {
      btn += `<button
          className=${isStyleBtn ? "btn-item-active btn-item" : "btn-item"}
          >
          ${i + 1}
        </button>`;
    }
    return { __html: btn };
  };
  // cấu hình phân pages

  const renderTable = () => {
    return newArrPhanPage.map(
      (nguoiDung: PhanQuyenNguoiDungRedux, index: number) => (
        <tr key={index}>
          <td className="text_right">{index + 1}</td>
          <td>{nguoiDung.tenNguoiDung}</td>
          <td>{nguoiDung.tenDangNhap}</td>
          <td>{nguoiDung.vaiTro}</td>
          <td>
            <Switch defaultChecked={nguoiDung.trangThai} />
            {nguoiDung.trangThai ? "Đang kích hoạt" : "Ngừng kích hoạt"}
          </td>
          <td>{nguoiDung.email}</td>
          <td>{nguoiDung.soDienThoai}</td>
          <td>{nguoiDung.ngayHetHan}</td>
          <td
            className="action"
            onClick={() => {
              navigate("/admin/phanQuyenNguoiDung/chinhSua");
              dispatch(setItemPhanQuyenNguoiDung(nguoiDung));
            }}
          >
            Chỉnh sửa
          </td>
        </tr>
      )
    );
  };
  return (
    <div className="PhanQuyenNguoiDung">
      <div className="container">
        <div className="container-top">
          <p>
            Cài đặt<i className="fas fa-chevron-right"></i>Phân quyền người dùng
          </p>
          <h1>
            {toggle
              ? "Danh sách người dùng"
              : "Vai trò người dùng trên hệ thống"}
          </h1>
        </div>
        <div className="container-content">
          <div className="content-top">
            <div className="wrap-top">
              <div className="wrap-nguoiDung">
                <div
                  className={toggle ? "wrap active" : "wrap"}
                  onClick={() => setToggle(true)}
                >
                  <p>Danh sách người dùng</p>
                </div>
                <div
                  className={!toggle ? "wrap active" : "wrap"}
                  onClick={() => setToggle(false)}
                >
                  <p>Vai trò người dùng</p>
                </div>
              </div>
              <div id="input_search">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Tên bản ghi, Ca sĩ"
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div
              className="content-table"
              style={toggle ? { display: "block" } : { display: "none" }}
            >
              <div className="wrap-table">
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Họ tên</th>
                      <th>Tên đăng nhập</th>
                      <th>Vai trò</th>
                      <th>Trạng thái</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
                      <th>Ngày hết hạn</th>
                    </tr>
                  </thead>
                  <tbody>{renderTable()}</tbody>
                </table>
              </div>
              <div className="pagination-table">
                <div className="pagination_left">
                  <p>
                    Hiển thị
                    <select
                      value={limit}
                      onChange={(e) => {
                        setLimit(parseInt(e.target.value));
                      }}
                    >
                      <option value="12">12</option>
                      <option value="6">6</option>
                      <option value="8">8</option>
                    </select>
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
                    dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                  ></div>
                  <button
                    disabled={currentPage >= totalPages}
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                    }}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="content-table"
              style={!toggle ? { display: "block" } : { display: "none" }}
            >
              <div className="wrap-table">
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên nhóm người dùng</th>
                      <th>Số lượng người dùng</th>
                      <th>Vai trò</th>
                      <th>Vai trò</th>
                      <th>Mô tả</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text_right">1</td>
                      <td>Super Admin</td>
                      <td>1</td>
                      <td>System Admin</td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </td>
                      <td
                        className="action"
                        onClick={() =>
                          navigate(
                            "/admin/phanQuyenNguoiDung/chinhSuaVaiTroNguoiDungTrenHeThong"
                          )
                        }
                      >
                        Cập nhật
                      </td>
                      <td className="action" style={{ color: " #FF4747" }}>
                        Xóa
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pagination-table">
                <div className="pagination_left">
                  <p>
                    Hiển thị
                    <select
                      value={limit}
                      onChange={(e) => {
                        setLimit(parseInt(e.target.value));
                      }}
                    >
                      <option value="12">12</option>
                      <option value="6">6</option>
                      <option value="8">8</option>
                    </select>
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
                    dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                  ></div>
                  <button
                    disabled={currentPage >= totalPages}
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
          <div
            className="menu"
            style={toggle ? { display: "flex" } : { display: "none" }}
          >
            <div
              className="bg-icon"
              onClick={() => navigate("/admin/phanQuyenNguoiDung/themMoi")}
            >
              <i className="fas fa-user-plus"></i>
            </div>
            <p>Thêm người dùng</p>
          </div>
          <div
            className="menu"
            style={!toggle ? { display: "flex" } : { display: "none" }}
          >
            <div
              className="bg-icon"
              onClick={() =>
                navigate("/admin/phanQuyenNguoiDung/themMoiVaiTro")
              }
            >
              <i className="fas fa-user-friends"></i>
            </div>
            <p>Thêm vai trò</p>
          </div>
        </div>
      </div>
    </div>
  );
}
