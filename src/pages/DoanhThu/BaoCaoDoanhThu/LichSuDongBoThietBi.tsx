import React from "react";

export default function LichSuDongBoThietBi() {
  return (
    <div className="LichSuDongBoThietBi">
      <div className="container">
        <div className="container-top">
          <p>
            Doanh thu<i className="fas fa-chevron-right"></i>Báo cáo doanh thu
            <i className="fas fa-chevron-right"></i>Báo cáo chi tiết
            <i className="fas fa-chevron-right"></i>Lịch sử đồng bộ thiết bị
          </p>
          <h1>Hợp đồng HD123 - Kỳ tháng 03/2021</h1>
        </div>
        <div className="container-content">
          <h2>Danh sách thiết bị</h2>
          <div className="wrap-content">
            <div className="content">
              <div className="content-top">
                <div id="input_search">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Nhập tên bài hát"
                  />
                  <i className="fas fa-search"></i>
                </div>
                <div className="title">
                  <div className="title-item">
                    <p>Tổng thiết bị:</p>
                    <p>8 thiết bị</p>
                  </div>
                  <div className="title-item">
                    <p>Tổng lượt phát:</p>
                    <p>1784</p>
                  </div>
                </div>
              </div>
              <div className="content-table">
                <div className="item">
                  <div className="wrap-table">
                    <table>
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Tên thiết bị</th>
                          <th>Trạng thái</th>
                          <th>Thời gian đồng bộ dữ liệu</th>
                          <th>Tống số lượt phát</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text_right">1</td>
                          <td>Device1223322</td>
                          <td className="true">Đang hoạt động</td>
                          <td>22/05/2021 22:15:00</td>
                          <td className="text_right">70</td>
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
                <div className="item">
                  <div className="wrap-table">
                    <table>
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Danh sách bài hát</th>
                          <th>Số lượt phát</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text_right">1</td>
                          <td>Dù ngay mai bão giông</td>
                          <td className="text_right">10</td>
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
                <i className="fas fa-file-export"></i>
              </div>
              <p>Xuất dữ liệu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
