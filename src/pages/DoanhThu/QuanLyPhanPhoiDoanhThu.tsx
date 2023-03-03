import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuanLyPhanPhoiDoanhThu() {
  const navigate = useNavigate();
  return (
    <div className="QuanLyPhanPhoiDoanhThu">
      <div className="container">
        <div className="container-top">
          <p>
            Doanh thu<i className="fas fa-chevron-right"></i>Lịch sử đối soát
          </p>
          <h1>Lịch sử đối soát doanh thu</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-top">
              <div className="form-group">
                <label htmlFor="">Thời gian thực hiện:</label>
                <input type="date" />
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
              <h2>Danh sách hợp đồng khai thác đã đối soát</h2>
              <div className="wrap-table">
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Số hợp đồng</th>
                      <th>Đơn vị khai thác</th>
                      <th>Thời hạn hợp đồng</th>
                      <th>Loại hợp đồng</th>
                      <th>Tổng lượt phát</th>
                      <th>Tổng doanh thu</th>
                      <th>Doanh thu chưa phân phối</th>
                      <th>Ngày chốt đối soát</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text_right">1</td>
                      <td>HĐ123</td>
                      <td>Cty TNHH TM DV ABCEDEF</td>
                      <td>10/07/2020 - 10/07/2021 </td>
                      <td>Trọn gói</td>
                      <td>365</td>
                      <td>365.000.000</td>
                      <td>1.000.000</td>
                      <td>10/07/2021</td>
                      <td
                        className="action"
                        onClick={() =>
                          navigate("/admin/phanPhoiDoanhThu/chiTiet")
                        }
                      >
                        Xem chi tiết
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
          <div className="menu">
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fa fa-file-export"></i>
              </div>
              <p>Xuất dữ liệu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
