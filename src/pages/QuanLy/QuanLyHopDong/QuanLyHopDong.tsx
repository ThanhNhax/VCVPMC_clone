import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function QuanLyHopDong() {
  // cấu hình phân pages
  // const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  // const [limit, setLimit] = useState<number>(10); // change số item hiển thị
  // const indexOfLastNews = currentPage * limit; // vị trí cuối
  // const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  // // const totalPages = Math.ceil(arrKhoBanGhi.length / limit); // Tính số tổng số pages
  // // const newArrKho = arrKhoBanGhi.slice(indexOfFirstNews, indexOfLastNews);
  // const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <div className="quanLyHopDong">
      <div className="container">
        <div className="content-top">
          <p>
            Quản lý <i className="fas fa-chevron-right"></i>Quản lý hợp đồng
          </p>
          <h1>
            {isActive ? "Danh sách hợp đồng" : "Danh sách hợp đồng khai thác"}
          </h1>{" "}
          {/*truyền title Click thì đổi title  */}
          <div className="tag">
            <p
              className={isActive ? "active" : ""}
              onClick={() => setIsActive(true)}
            >
              Hợp đồng ủy quyền
            </p>
            <p
              className={!isActive ? "active" : ""}
              onClick={() => setIsActive(false)}
            >
              Hợp đồng khai thác
            </p>
          </div>
        </div>
        <div className="content-center">
          <div className="center-left">
            <div className="left-top">
              <div
                className="top-list"
                style={isActive ? { display: "flex" } : { display: "none" }}
              >
                <div className="top-item">
                  <label htmlFor="quyenSoHuu">Quyền sở hữu:</label>
                  <select id="quyenSoHuu">
                    <option value="">Tất cả</option>
                    <option value="">Người biểu diễn</option>
                    <option value="">Nhà sản xuất</option>
                  </select>
                </div>
                <div className="top-item">
                  <label htmlFor="theLoai">Hiệu lực hợp đồng:</label>
                  <select id="theLoai">
                    <option value="">Tất cả</option>
                    <option value="">Mới</option>
                    <option value="">Còn thời hạn</option>
                    <option value="">Hết hạn</option>
                    <option value="">Hủy</option>
                  </select>
                </div>
              </div>
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
            <div className="center-table">
              <div
                className="wrap-danhSachHopDong wrap-danhSach"
                style={isActive ? { display: "block" } : { display: "none" }}
              >
                <div className="wrap-table">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Số hợp đồng</th>
                        <th>Tên hợp đồng</th>
                        <th>Người uỷ quyền</th>
                        <th>Quyền sở hữu</th>
                        <th>Hiệu lực hợp đồng</th>
                        <th>Ngày tạo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng uỷ quyền bài hát</td>
                        <td>Vương Anh Tú</td>
                        <td>Người biểu diễn</td>
                        <td className="true_thoiHan">Còn thời hạn</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="action">
                          <Link to={"/admin/quanLyHopDong/chiTiet"}>
                            Xem chi tiết
                          </Link>
                        </td>
                        <td className="action">Lý do hủy</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng uỷ quyền bài hát</td>
                        <td>Vương Anh Tú</td>
                        <td>Người biểu diễn</td>
                        <td className="false_thoiHan">Còn thời hạn</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Lý do hủy</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng uỷ quyền bài hát</td>
                        <td>Vương Anh Tú</td>
                        <td>Người biểu diễn</td>
                        <td className="true_thoiHan">Còn thời hạn</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Lý do hủy</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng uỷ quyền bài hát</td>
                        <td>Vương Anh Tú</td>
                        <td>Người biểu diễn</td>
                        <td className="false_thoiHan">Còn thời hạn</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Lý do hủy</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng uỷ quyền bài hát</td>
                        <td>Vương Anh Tú</td>
                        <td>Người biểu diễn</td>
                        <td className="true_thoiHan">Còn thời hạn</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Lý do hủy</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng uỷ quyền bài hát</td>
                        <td>Vương Anh Tú</td>
                        <td>Người biểu diễn</td>
                        <td className="false_thoiHan">Còn thời hạn</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Lý do hủy</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng uỷ quyền bài hát</td>
                        <td>Vương Anh Tú</td>
                        <td>Người biểu diễn</td>
                        <td className="true_thoiHan">Còn thời hạn</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Lý do hủy</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng uỷ quyền bài hát</td>
                        <td>Vương Anh Tú</td>
                        <td>Người biểu diễn</td>
                        <td className="false_thoiHan">Còn thời hạn</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Lý do hủy</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng uỷ quyền bài hát</td>
                        <td>Vương Anh Tú</td>
                        <td>Người biểu diễn</td>
                        <td className="true_thoiHan">Còn thời hạn</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Lý do hủy</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng uỷ quyền bài hát</td>
                        <td>Vương Anh Tú</td>
                        <td>Người biểu diễn</td>
                        <td className="false_thoiHan">Còn thời hạn</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Lý do hủy</td>
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
                        <option value="10">10</option>
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
                      onClick={() => {
                        // setCurrentPage(currentPage + 1);
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="wrap-hopDongKhaiThac wrap-danhSach"
                style={!isActive ? { display: "block" } : { display: "none" }}
              >
                <div className="wrap-table">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Số hợp đồng</th>
                        <th>Khách hàng</th>
                        <th>Ngày tạo</th>
                        <th>Ngày hiệu lực</th>
                        <th>Ngày hết hạn</th>
                        <th>Hiệu lực hợp đồng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng kinh doanh 1</td>
                        <td>01/04/2021 15:53:13</td>
                        <td>02/12/2021</td>
                        <td>02/12/2022</td>
                        <td className="moi_thoiHan">Mới</td>
                        <td className="action">
                          <Link
                            to={"/admin/quanLyHopDong/chiTietHopDongKhaiThac"}
                          >
                            Xem chi tiết
                          </Link>
                        </td>
                        <td className="action">Sao chép hợp đồng</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng kinh doanh 1</td>
                        <td>01/04/2021 15:53:13</td>
                        <td>02/12/2021</td>
                        <td>02/12/2022</td>
                        <td className="true_thoiHan">Đang hiệu lực</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Sao chép hợp đồng</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng kinh doanh 1</td>
                        <td>01/04/2021 15:53:13</td>
                        <td>02/12/2021</td>
                        <td>02/12/2022</td>
                        <td className="true_thoiHan">Đang hiệu lực</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Sao chép hợp đồng</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng kinh doanh 1</td>
                        <td>01/04/2021 15:53:13</td>
                        <td>02/12/2021</td>
                        <td>02/12/2022</td>
                        <td className="true_thoiHan">Đang hiệu lực</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Sao chép hợp đồng</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng kinh doanh 1</td>
                        <td>01/04/2021 15:53:13</td>
                        <td>02/12/2021</td>
                        <td>02/12/2022</td>
                        <td className="moi_thoiHan">Mới</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Sao chép hợp đồng</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng kinh doanh 1</td>
                        <td>01/04/2021 15:53:13</td>
                        <td>02/12/2021</td>
                        <td>02/12/2022</td>
                        <td className="false_thoiHan">Đã huỷ</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Sao chép hợp đồng</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng kinh doanh 1</td>
                        <td>01/04/2021 15:53:13</td>
                        <td>02/12/2021</td>
                        <td>02/12/2022</td>
                        <td className="false_thoiHan">Đã huỷ</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Sao chép hợp đồng</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng kinh doanh 1</td>
                        <td>01/04/2021 15:53:13</td>
                        <td>02/12/2021</td>
                        <td>02/12/2022</td>
                        <td className="false_thoiHan">Đã huỷ</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Sao chép hợp đồng</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng kinh doanh 1</td>
                        <td>01/04/2021 15:53:13</td>
                        <td>02/12/2021</td>
                        <td>02/12/2022</td>
                        <td className="moi_thoiHan">Mới</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Sao chép hợp đồng</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>HD123</td>
                        <td>Hợp đồng kinh doanh 1</td>
                        <td>01/04/2021 15:53:13</td>
                        <td>02/12/2021</td>
                        <td>02/12/2022</td>
                        <td className="moi_thoiHan">Mới</td>
                        <td className="action">Xem chi tiết</td>
                        <td className="action">Sao chép hợp đồng</td>
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
                        onChange={(e) => {
                          // setLimit(parseInt(e.target.value));
                        }}
                      >
                        <option value="10">10</option>
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
                    // setCurrentPage(currentPage + 1);
                    // }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-right">
            <div className="bg_icon">
              <Link to={"/admin/quanLyHopDong/themHopDongKhaiThacMoi"}>
                <i className="far fa-edit"></i>
              </Link>
            </div>
            <span>Thêm hợp đồng</span>
          </div>
        </div>
      </div>
    </div>
  );
}
