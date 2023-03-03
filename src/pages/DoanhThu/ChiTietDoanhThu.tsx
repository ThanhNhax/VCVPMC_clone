import React from "react";

export default function ChiTietDoanhThu() {
  return (
    <div className="ChiTietDoanhThu">
      <div className="container">
        <div className="container-top">
          <p>
            Doanh thu<i className="fas fa-chevron-right"></i>Phân phối doanh thu
            <i className="fas fa-chevron-right"></i>Chi tiết doanh thu
          </p>
          <h1>Hợp đồng Ủy quyền UQ123 - Quý 1</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-item">
              <div className="wrap-title">
                <h2>Danh sách bản ghi</h2>
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
              <div className="table">
                <div className="wrap-table">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Bài hát</th>
                        <th>Số lượt phát</th>
                        <th>Doanh thu (VNĐ)</th>
                        <th>Hành chính phí (VNĐ)</th>
                        <th>Nhuận bút (VNĐ)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tổng </td>
                        <td>13</td>
                        <td>17,527</td>
                        <td>1.045.000,000</td>
                        <td>209.001.505</td>
                        <td>835.998.495</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Hết thương cạn nhớ </td>
                        <td>1200</td>
                        <td>12.000.000</td>
                        <td>2.500.000</td>
                        <td>2.500.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="pagination-table">
                  <div className="pagination_left">
                    <p>
                      Hiển thị
                      <select
                      //   value={limit}
                      //   onChange={(e) => {
                      //     setLimit(parseInt(e.target.value));
                      //   }}
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
            <div className="content-item">
              <div className="wrap-title">
                <h2>Doanh thu bản ghi</h2>
                <h2>Cuộc gọi nhỡ</h2>
              </div>
              <div className="table">
                <div className="wrap-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Đơn vị khai thác</th>
                        <th>Số lượt phát</th>
                        <th>Doanh thu (VNĐ)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tổng </td>
                        <td>100</td>
                        <td>835.998.495</td>
                      </tr>
                      <tr>
                        <td>CTy TNHH A</td>
                        <td>200</td>
                        <td>2.500.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="bg-icon">
              <i className="fa fa-file-export"></i>
            </div>
            <p>Xuất dữ liệu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
