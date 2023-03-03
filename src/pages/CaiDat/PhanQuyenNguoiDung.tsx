import React from "react";

export default function PhanQuyenNguoiDung() {
  return (
    <div className="PhanQuyenNguoiDung">
      <div className="container">
        <div className="container-top">
          <p>
            Cài đặt<i className="fas fa-chevron-right"></i>Phân quyền người dùng
          </p>
          <h1>Danh sách người dùng</h1>
        </div>
        <div className="container-content">
          <div className="content-top">
            <div className="wrap-top">
              <div className="wrap-nguoiDung">
                <div className="wrap active">
                  <p>Danh sách người dùng</p>
                </div>
                <div className="wrap">
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
            <div className="content-table">
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
                  <tbody>
                    <tr>
                      <td className="text_right">1</td>
                      <td>Phan Mạnh Quỳnh</td>
                      <td>PMQ_01</td>
                      <td>Group Admin</td>
                      <td>Đang kích hoạt</td>
                      <td>pmq@gmail.com</td>
                      <td>029 8131 6743</td>
                      <td>02/12/2022</td>
                      <td className="action">Chỉnh sửa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pagination-table">
                <div className="pagination_left">
                  <p>
                    Hiển thị
                    <select
                    // value={limit}
                    // onChange={(e) => {
                    //   setLimit(parseInt(e.target.value));
                    // }}
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
                  // disabled={currentPage === 1}
                  // onClick={() => {
                  //   if (currentPage === 1) {
                  //     setCurrentPage(1);
                  //   }
                  //   setCurrentPage(currentPage - 1);
                  // }}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <div
                    id="btnPage"
                    // dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                  ></div>
                  <button
                  // disabled={currentPage >= totalPages}
                  // onClick={() => {
                  //   setCurrentPage(currentPage + 1);
                  // }}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="bg-icon">
              <i className="fas fa-user-plus"></i>
            </div>
            <p>Thêm người dùng</p>
          </div>
        </div>
      </div>
    </div>
  );
}
