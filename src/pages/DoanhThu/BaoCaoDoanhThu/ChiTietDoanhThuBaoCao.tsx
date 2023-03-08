import React from "react";

export default function ChiTietDoanhThuBaoCao() {
  return (
    <div className="ChiTietDoanhThuBaoCao ChiTietLichSuaDoiSoat">
      <div className="container">
        <div className="container-top">
          <p>
            Doanh thu<i className="fas fa-chevron-right"></i>Báo cáo doanh thu
            <i className="fas fa-chevron-right"></i>Báo cáo chi tiết
            <i className="fas fa-chevron-right"></i>Chi tiết doanh thu
          </p>
          <h1>Hợp đồng HD123 - Kỳ tháng 06/2021</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-left">
              <div className="left-item">
                <h2>Thông tin hợp đồng</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>Số hợp đồng:</td>
                      <td>HĐ123</td>
                    </tr>
                    <tr>
                      <td>Đơn vị khai thác:</td>
                      <td>Công ty TNHH ABC</td>
                    </tr>
                    <tr>
                      <td>Loại hợp đồng:</td>
                      <td>Trọn gói</td>
                    </tr>
                    <tr>
                      <td>Hiệu lực từ:</td>
                      <td>01/01/2020</td>
                    </tr>
                    <tr>
                      <td>Ngày hết hạn:</td>
                      <td>01/01/2022</td>
                    </tr>
                    <tr>
                      <td>Giá trị hợp đồng:</td>
                      <td>730.000.000 VNĐ</td>
                    </tr>
                    <tr>
                      <td>Giá trị phân phối theo ngày:</td>
                      <td>365.000.000 VNĐ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="left-item">
                <h2>Thông tin đối soát</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>Ký đối soát:</td>
                      <td>01/01/2020</td>
                    </tr>
                    <tr>
                      <td>Số bài hát:</td>
                      <td>13 bài</td>
                    </tr>
                    <tr>
                      <td>Tổng số lượt phát:</td>
                      <td>200.000 lượt</td>
                    </tr>
                    <tr>
                      <td>Tổng doanh thu:</td>
                      <td>300.000.000 VNĐ</td>
                    </tr>
                    <tr>
                      <td>Doanh thu chưa phân phối:</td>
                      <td>1.000.000 VNĐ</td>
                    </tr>
                    <tr>
                      <td>Trạng thái đối soát:</td>
                      <td>Chưa đối soát</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="content-right">
              <div className="wrap-title">
                <h2>Danh sách bản ghi</h2>
                <div className="wrap">
                  <div className="form-group">
                    <label htmlFor="">Xem theo ngày/tuần:</label>
                    <input type="date" defaultValue="2021-05-18" />
                  </div>
                  <div id="input_search">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Nhập tên bài hát"
                    />
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
              <div className="table">
                <div className="wrap-table">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên bài hát</th>
                        <th>Tổng số lượt phát</th>
                        <th>Tổng doanh thu</th>
                        <th>Quyền biểu diễn</th>
                        <th>Quyền sản xuất</th>
                        <th>VCPMC</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Let Us Be</td>
                        <td>365</td>
                        <td>365.000.000</td>
                        <td>36.266</td>
                        <td>36.266</td>
                        <td>36.200</td>
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
          </div>
          <div className="menu">
            <div className="bg-icon">
              <i className="fa fa-file-export"></i>
            </div>
            <p>Xuất file</p>
          </div>
        </div>
      </div>
    </div>
  );
}
