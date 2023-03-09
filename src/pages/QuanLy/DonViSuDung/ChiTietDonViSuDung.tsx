/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  deleteNguoiDung,
  NguoiDungDonViRedux,
  setIndexItemNguoiDung,
  setItemNguoiDung,
} from "../../../redux/quanLyDonViSuDung/quanLyDonViSuDungReducer";
import { CheckboxChangeEvent } from "antd/es/checkbox";

export default function ChiTietDonViSuDung() {
  const item = useSelector(
    (state: RootState) => state.quanLyDonViSuDung.itemDonViSuDung
  );
  console.log({ item });
  const dispatch: AppDispatch = useDispatch();
  const [arrIdNguoiDung, setArrIdNguoiDung] = useState<number[]>([]);
  console.log({ arrIdNguoiDung });
  const navigate = useNavigate();
  useEffect(() => {
    if (!item) navigate("/admin/donViSuDung");
  }, []);
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại

  const indexOfLastNews = currentPage * 13; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - 13; // Vị trí đầu
  let totalPages = 1;
  if (item) {
    totalPages = Math.ceil(item?.arrNguoiDung.length / 13); // Tính số tổng số pages
  }
  const newArrNguoiDung = item?.arrNguoiDung.slice(
    indexOfFirstNews,
    indexOfLastNews
  );
  const [isStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
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
  const renderTable = () => {
    return newArrNguoiDung?.map((nguoiDung: NguoiDungDonViRedux, index) => (
      <tr key={index}>
        <td>
          <Checkbox
            onChange={(e: CheckboxChangeEvent) => {
              if (e.target.checked) {
                setArrIdNguoiDung([...arrIdNguoiDung, index]);
              } else {
                let newArr = [...arrIdNguoiDung];
                let indexDelete = newArr.findIndex((item) => item === index);
                newArr.splice(indexDelete, 1);
                console.log({ newArr });
                setArrIdNguoiDung(newArr);
              }
            }}
          />
        </td>
        <td className="text_right">{index + 1}</td>
        <td>{nguoiDung.tenNguoiDung}</td>
        <td>{nguoiDung.vaiTro}</td>
        <td>{nguoiDung.email}</td>
        <td>{nguoiDung.tenDangNhap}</td>
        <td>{nguoiDung.capNhatlanCuoi}</td>
        <td className="action">
          <Link
            to="/admin/donViSuDung/chiTiet/thongTinNguoiDung"
            onClick={() => {
              dispatch(setItemNguoiDung(nguoiDung));
              dispatch(setIndexItemNguoiDung(`${index}`));
            }}
          >
            Xem chi tiết
          </Link>
        </td>
      </tr>
    ));
  };
  return (
    <div className="chiTietDonViSuDung quanLyDonViSuDung">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý <i className="fas fa-chevron-right"></i>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/admin/donViSuDung")}
            >
              Đơn vị sử dụng
            </span>
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
              <div
                className="bg_icon"
                onClick={() => {
                  dispatch(deleteNguoiDung(arrIdNguoiDung));
                  navigate("/admin/donViSuDung");
                }}
              >
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
