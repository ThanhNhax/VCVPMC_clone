import React, { useState } from "react";

export default function ChuKyDoiSoat() {
  const [isDoiSoat, setIsDoiSoat] = useState<boolean>(true);
  return (
    <div className="ChuKyDoiSoat">
      <div className="container">
        <div className="container-top">
          <p>
            Cài đặt<i className="fas fa-chevron-right"></i>Cài đặt hệ thống
            <i className="fas fa-chevron-right"></i>Thông tin tác phẩm
          </p>
          <h1>Cài đặt hệ thống</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <h2>Cài đặt chu kì đối soát</h2>
            <div className="wrap">
              <div className="div">
                <input
                  type="radio"
                  name="doiSoat"
                  id="theoQuy"
                  defaultChecked={isDoiSoat}
                  onClick={() => setIsDoiSoat(true)}
                />
                <label htmlFor="theoQuy">Đối soát theo quý</label>
              </div>
              <table
                style={isDoiSoat ? { display: "table" } : { display: "none" }}
              >
                <tbody>
                  <tr>
                    <td>Quý 1:</td>
                    <td>01/06 - 30/07</td>
                  </tr>
                  <tr>
                    <td>Quý 2:</td>
                    <td>01/08 - 30/09</td>
                  </tr>
                  <tr>
                    <td>Quý 3:</td>
                    <td>01/10 - 30/11</td>
                  </tr>
                  <tr>
                    <td>Quý 4:</td>
                    <td>01/12 - 31/12</td>
                  </tr>
                </tbody>
              </table>
              <div className="div">
                <input
                  type="radio"
                  name="doiSoat"
                  id="theoThang"
                  defaultChecked={!isDoiSoat}
                  onClick={() => setIsDoiSoat(false)}
                />
                <label htmlFor="theoThang">Đối soát theo tháng</label>
              </div>
              <div
                className="wrap-theoThang"
                style={!isDoiSoat ? { display: "flex" } : { display: "none" }}
              >
                <label htmlFor="ngayBatDau">Ngày bắt đầu:</label>
                <input type="date" id="ngayBatDau" />
                <label htmlFor="ngayKetThuc">Ngày kết thúc:</label>
                <input type="date" id="ngayKetThuc" />
              </div>
            </div>
          </div>
          <div className="form-btn">
            <button type="submit">Lưu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
