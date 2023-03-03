import React from "react";
import { useNavigate } from "react-router-dom";

export default function LichSuDoiSoat() {
  const navigate = useNavigate();
  return (
    <div className="QuanLyPhanPhoiDoanhThu LichSuDoiSoat">
      <div className="container">
        <div className="container-top">
          <p>
            Doanh thu<i className="fas fa-chevron-right"></i>Phân phối doanh thu
          </p>
          <h1>Quản lý phân phối doanh thu</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-top">
              <div className="form-group">
                <label htmlFor="">Theo tháng:</label>
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
              <h2>Danh sách hợp đồng ủy quyền</h2>
              <div className="wrap-table">
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Hợp đồng ủy quyền</th>
                      <th>Người ủy quyền</th>
                      <th>Số bài hát ủy quyền</th>
                      <th>Doanh thu (VNĐ)</th>
                      <th>Hành chính phí (VNĐ)</th>
                      <th>Mức nhuận bút (VNĐ)</th>
                      <th>Ngày chốt đối soát</th>
                      <th>Chi tiết doanh thu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text_right">1</td>
                      <td>UQ789</td>
                      <td>Vương Anh Tú</td>
                      <td>15</td>
                      <td>365.000.000</td>
                      <td>365.000.000</td>
                      <td>365.000.000</td>
                      <td>21/07/2021</td>
                      <td
                        className="action"
                        onClick={() => navigate("/admin/lichSuDoiSoat/chiTiet")}
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
              <p>Xuất file</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
