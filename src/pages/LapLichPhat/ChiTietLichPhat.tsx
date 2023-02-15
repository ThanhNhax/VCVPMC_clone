import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function ChiTietLichPhat({}: Props) {
  const navigate = useNavigate();
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(13); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  // const totalPages = Math.ceil(arrPlayList.length / limit); // Tính số tổng số pages
  // const newArrPlayList = arrPlayList.slice(indexOfFirstNews, indexOfLastNews);
  const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
  return (
    <div className="chiTietLichPhat">
      <div className="chiTietLichPhat-title">
        <p>
          Lập lịch phát <i className="fas fa-chevron-right"></i> Chi tiết
        </p>
        <h1>Danh sách lịch phát</h1>
        <p>Danh sách Playlist</p>
      </div>
      <div className="container">
        <div className="container-table">
          <div className="wrap-table">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên Playlist</th>
                  <th>Ngày Phát Playlist</th>
                  <th>Bắt đầu - Kết thúc</th>
                  <th>Chu kỳ phát</th>
                  <th>Thiết bị</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Top USUK 2021</td>
                  <td>22/05/2022 - 30/05/2022</td>
                  <td>06:00:00 - 08:00:00</td>
                  <td>Thứ 3 | Thứ 6</td>
                  <td>
                    Thiết bị 1 | Thiết bị 2 | Thiết bị 3| Thiết bị 4 | Thiết bị
                    5
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Top USUK 2021</td>
                  <td>22/05/2022 - 30/05/2022</td>
                  <td>06:00:00 - 08:00:00</td>
                  <td>Thứ 3 | Thứ 6</td>
                  <td>
                    Thiết bị 1 | Thiết bị 2 | Thiết bị 3| Thiết bị 4 | Thiết bị
                    5
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Top USUK 2021</td>
                  <td>22/05/2022 - 30/05/2022</td>
                  <td>06:00:00 - 08:00:00</td>
                  <td>Thứ 3 | Thứ 6</td>
                  <td>
                    Thiết bị 1 | Thiết bị 2 | Thiết bị 3| Thiết bị 4 | Thiết bị
                    5
                  </td>
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
              navigate("/admin/lapLichPhat/editLichPhat");
            }}
          >
            <i className="fas fa-edit"></i>
          </div>
          <p>Chỉnh sửa lịch phát</p>
        </div>
      </div>
    </div>
  );
}
