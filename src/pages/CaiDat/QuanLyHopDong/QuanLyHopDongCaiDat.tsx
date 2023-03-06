import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuanLyHopDongCaiDat() {
  const navigate = useNavigate();
  return (
    <div className="CaiDatHopDong">
      <div className="container">
        <div className="container-top">
          <p>
            Cài đặt<i className="fas fa-chevron-right"></i>Quản lý loại hợp đồng
          </p>
          <h1>Loại hợp đồng</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Loại hợp đồng</th>
                  <th>Doanh thu VCPCM/hợp đồng (Đơn vị: %) </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Trọn gói</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Giá trị bài hát/ lượt phát</td>
                  <td>20%</td>
                </tr>
              </tbody>
            </table>
            <div className="content-right">
              <h2>Cảnh báo hết hạn khai thác tác phẩm</h2>
              <p>
                Hợp đồng được cảnh báo trước thời gian hết hạn:
                <span> {"365"} ngày</span>
              </p>
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <div
                className="bg-icon"
                onClick={() => navigate("/admin/caiDat/quanLyHopDong/chinhSua")}
              >
                <i className="far fa-file-alt"></i>
              </div>
              <p>Chỉnh sửa loại hợp đồng</p>
            </div>
            <div className="menu-item">
              <div
                className="bg-icon"
                onClick={() =>
                  navigate("/admin/caiDat/quanLyHopDong/chinhSuaCanhBao")
                }
              >
                <i className="far fa-calendar-alt"></i>
              </div>
              <p>Chỉnh sửa cảnh báo hết hạn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
