import React from "react";

export default function ChinhSuaLoaiHopDong() {
  return (
    <div className="ChinhSuaLoaiHopDong">
      <div className="container">
        <div className="container-top">
          <p>
            Cài đặt<i className="fas fa-chevron-right"></i>Quản lý loại hợp đồng
          </p>
          <h1>Loại hợp đồng</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="wrap-table">
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Loại hợp đồng</th>
                    <th>Doanh thu VCPCM/hợp đồng (Đơn vị: %) </th>
                    <th>Ngày áp dụng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <input type="text" defaultValue={"Trọn gói"} />
                    </td>
                    <td>
                      <input type="text" defaultValue={"20%"} />
                    </td>
                    <td>
                      <input type="text" defaultValue={"21/07/2021 13:00:00"} />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <input
                        type="text"
                        defaultValue={"Giá trị bài hát/ lượt phát"}
                      />
                    </td>
                    <td>
                      <input type="text" defaultValue={"20%"} />
                    </td>
                    <td>
                      <input type="text" defaultValue={"21/07/2021 13:00:00"} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="form-btn">
              <button type="button">Hủy</button>
              <button type="submit">Lưu</button>
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-plus"></i>
              </div>
              <p>Thêm lịch áp dụng</p>
            </div>
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-trash-alt"></i>
              </div>
              <p>Xóa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
