import { Checkbox } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/configStore";

export default function ChiTietDonViSuDung() {
  const dispatch: AppDispatch = useDispatch();
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(13); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  // const totalPages = Math.ceil(arrPlayList.length / limit); // Tính số tổng số pages
  // const newArrPlayList = arrPlayList.slice(indexOfFirstNews, indexOfLastNews);
  const [isStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
  return (
    <div className="chiTietDonViSuDung quanLyDonViSuDung">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý <i className="fas fa-chevron-right"></i>Đơn vị sử dụng
          </p>
          <h1>Danh sách đơn vị sử dụng</h1>
        </div>
        <div className="container-content">
          <div className="wrap-content">
            <div className="content-top">
              <div id="input_search">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Tên hợp đồng, số hợp đồng, người uỷ quyền..."
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
                      <th>Tên tài khoản quản trị</th>
                      <th>Số hợp đồng</th>
                      <th>Admin</th>
                      <th>Người dùng</th>
                      <th>Thiết bị được chỉ định</th>
                      <th>Ngày hết hạn</th>
                      <th>Trạng thái</th>
                      <th></th>
                    </tr>
                  </thead>
                  {/* <tbody>{renderTable()}</tbody> */}
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
            <div className="bg_icon">
              <i className="fas fa-times"></i>
            </div>
            <p>Xóa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
