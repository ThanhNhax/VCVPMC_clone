import React from "react";
import { Avatar, List } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {};
const data = [
  {
    ten: "Playlist 1",
    thoiLuong: "02:00:00",
  },
  {
    ten: "Playlist 1",
    thoiLuong: "02:00:00",
  },
  {
    ten: "Playlist 1",
    thoiLuong: "02:00:00",
  },
  {
    ten: "Playlist 1",
    thoiLuong: "02:00:00",
  },
  {
    ten: "Playlist 1",
    thoiLuong: "02:00:00",
  },
  {
    ten: "Playlist 1",
    thoiLuong: "02:00:00",
  },
  {
    ten: "Playlist 1",
    thoiLuong: "02:00:00",
  },
  {
    ten: "Playlist 1",
    thoiLuong: "02:00:00",
  },
];

export default function EditLichPhat({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="editLichPhat">
      <div className="editLichPhat-title">
        <p>
          Lập lịch phát <i className="fas fa-chevron-right"></i> Chi tiết
          <i className="fas fa-chevron-right"></i>Chỉnh sửa lịch phát
        </p>
        <h1>Lịch phát số 1</h1>
      </div>
      <div className="container">
        <div className="wrap_container-center">
          <div className="container-center">
            <div className="center-left">
              <div className="left-top">
                <div className="top-item">
                  <h5>Thông tin lịch phát</h5>
                  <label htmlFor="">Tên lịch phát:</label>
                  <input type="text" defaultValue={"Lịch phát số 1"} />
                </div>
                <div className="top-item">
                  <label htmlFor="tuNgay">Từ ngày</label>
                  <div className="input-date">
                    <input
                      type="text"
                      name="denNgay"
                      id="denNgay"
                      defaultValue={"06-30-2022"}
                    />
                    <i className="far fa-calendar-alt"></i>
                  </div>
                </div>
                <div className="top-item">
                  <label htmlFor="denNgay">Đến ngày</label>
                  <div className="input-date">
                    <input
                      type="text"
                      name="denNgay"
                      id="denNgay"
                      defaultValue={"06-30-2022"}
                    />
                    <i className="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>
              <div className="left-bottom">
                <h5>Danh sách Playlist</h5>
                <div className="listPlaylist">
                  {data.map((data) => (
                    <div className="list-item">
                      <p>{data.ten}</p>
                      <div className="title-bottom">
                        <p>Thời lượng:</p>
                        <p>{data.thoiLuong}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="center-right">
              {/* <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Thứ hai</th>
                    <th>Thứ ba</th>
                    <th>Thứ tư</th>
                    <th>Thứ năm</th>
                    <th>Thứ sáu</th>
                    <th>Thứ bảy</th>
                    <th>Chủ nhật</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01:00</td>
                  </tr>
                  <tr>
                    <td>02:00</td>
                  </tr>
                  <tr>
                    <td>03:00</td>
                  </tr>
                  <tr>
                    <td>04:00</td>
                  </tr>
                  <tr>
                    <td>05:00</td>
                  </tr>
                  <tr>
                    <td>06:00</td>
                  </tr>
                  <tr>
                    <td>07:00</td>
                  </tr>
                  <tr>
                    <td>08:00</td>
                  </tr>
                  <tr>
                    <td>09:00</td>
                  </tr>
                  <tr>
                    <td>10:00</td>
                  </tr>
                  <tr>
                    <td>11:00</td>
                  </tr>
                  <tr>
                    <td>12:00</td>
                  </tr>
                  <tr>
                    <td>13:00</td>
                  </tr>
                  <tr>
                    <td>14:00</td>
                  </tr>
                  <tr>
                    <td>15:00</td>
                  </tr>
                  <tr>
                    <td>16:00</td>
                  </tr>
                </tbody>
              </table> */}
              {/* <div className="presentation">
                <div className="presentation-null"></div>
                <div className="presentation-title">
                  <span>Thứ hai</span>
                  <span>Thứ ba</span>
                  <span>Thứ tư</span>
                  <span>Thứ năm</span>
                  <span>Thứ sáu</span>
                  <span>Thứ bảy</span>
                  <span>Chủ nhật</span>
                </div>
              </div> */}
              <div className="presentation-content">
                <div className="content-time">
                  <span></span>
                  <span>01:00</span>
                  <span>02:00</span>
                  <span>03:00</span>
                  <span>04:00</span>
                  <span>05:00</span>
                  <span>06:00</span>
                  <span>07:00</span>
                  <span>08:00</span>
                  <span>09:00</span>
                  <span>10:00</span>
                  <span>11:00</span>
                  <span>12:00</span>
                  <span>13:00</span>
                  <span>14:00</span>
                  <span>15:00</span>
                  <span>16:00</span>
                </div>
                <div className="content-playlist">
                  <div className="playlist-item ">
                    <span>Thứ hai</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="playlist-item ">
                    <span>Thứ ba</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="playlist-item ">
                    <span>Thứ tư</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="playlist-item ">
                    <span>Thứ năm</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="playlist-item ">
                    <span>Thứ sáu</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="playlist-item ">
                    <span>Thứ bảy</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="playlist-item ">
                    <span>Chủ nhật</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-menu">
            <div
              className="bg_icon"
              onClick={() => {
                navigate("/admin/lapLichPhat/editLichPhat/apLichChoThietBi");
              }}
            >
              <i className="far fa-calendar-alt"></i>
            </div>
            <p>Áp lịch cho thiết bị</p>
          </div>
        </div>
        <div className="container-button">
          <button>Hủy</button>
          <button>Lưu</button>
        </div>
      </div>
    </div>
  );
}
