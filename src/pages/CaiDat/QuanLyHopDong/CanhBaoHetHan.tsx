import React from "react";

export default function CanhBaoHetHan() {
  return (
    <div className="CanhBaoHetHan">
      <div className="container">
        <div className="container-top">
          <p>
            Cài đặt<i className="fas fa-chevron-right"></i>Quản lý loại hợp đồng
          </p>
          <h1>Loại hợp đồng</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <h2>Cảnh báo hết hạn khai thác tác phẩm</h2>
            <div className="wrap">
              <p>Hợp đồng được cảnh báo trước thời gian hết hạn: </p>
              <input type="text" /> <span>ngày</span>
            </div>
          </div>
          <div className="form-btn">
            <button type="button">Hủy</button>
            <button type="submit">Lưu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
