import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LapLichPhat() {
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(13); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  // const totalPages = Math.ceil(arrPlayList.length / limit); // Tính số tổng số pages
  // const newArrPlayList = arrPlayList.slice(indexOfFirstNews, indexOfLastNews);
  const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages

  const navigate = useNavigate();
  return (
    <div className="lapLichPhat">
      <h1>Danh sách lịch phát</h1>
      <div className="container">
        <div className="container-table">
          <div className="wrap-table">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên lịch</th>
                  <th>Thời gian phát</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Lịch phát số 1</td>
                  <td>22/05/2022 - 30/05/2022</td>
                  <td
                    onClick={() => navigate("/admin/lapLichPhat/chiTiet")}
                    className="action"
                  >
                    Xem chi tiết
                  </td>
                  <td className="action">Xóa</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Lịch phát số 1</td>
                  <td>22/05/2022 - 30/05/2022</td>
                  <td className="action">Xem chi tiết</td>
                  <td className="action">Xóa</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Lịch phát số 1</td>
                  <td>22/05/2022 - 30/05/2022</td>
                  <td className="action">Xem chi tiết</td>
                  <td className="action">Xóa</td>
                </tr>
              </tbody>
            </table>
            <div className="pagination-table">
              <div className="pagination_left">
                <p>
                  Hiển thị
                  <input defaultValue="13"></input>
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
        <div className="container-menu">
          <div
            className="bg_icon"
            onClick={() => {
              // navigate("/admin/addplaylist");
              // console.log("/admin/addplaylist");
            }}
          >
            <i className="fas fa-plus"></i>
          </div>
          <p>Thêm Playlist</p>
        </div>
      </div>
    </div>
  );
}
