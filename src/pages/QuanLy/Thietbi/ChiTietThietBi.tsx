import React from "react";

export default function ChiTietThietBi() {
  return (
    <div className="ChiTietThietBi">
      <div className="container">
        <div className="container-top">
          <p>
            Danh sách thiết bị<i className="fas fa-chevron-right"></i>Chi tiết
            thiết bị
          </p>
          <h1>Thông tin thiết bị - Device12233444</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-item">
              <h5>Thông tin thiết bị</h5>
              <img src="../../img/Frame_534.png" alt="Frame_534.png" />
              <p>Hoạt động</p>
              <table>
                <tbody>
                  <tr>
                    <td>Ghi chú:</td>
                    <td>
                      Văn bản này không những đã tồn tại năm thế kỉ, mà khi được
                      áp dụng vào tin học
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="content-item">
              <h5>DEVICE12233444</h5>
              <table>
                <tbody>
                  <tr>
                    <td>SKU/ID:</td>
                    <td>SKU/ID:</td>
                  </tr>
                  <tr>
                    <td>Địa chỉ Mac:</td>
                    <td>SKU/ID:</td>
                  </tr>
                  <tr>
                    <td>Tên đăng nhập:</td>
                    <td>SKU/ID:</td>
                  </tr>
                  <tr>
                    <td>Định dạng:</td>
                    <td>SKU/ID:</td>
                  </tr>
                  <tr>
                    <td>Vị trí:</td>
                    <td>SKU/ID:</td>
                  </tr>
                  <tr>
                    <td>Thời hạn bảo hành:</td>
                    <td>SKU/ID:</td>
                  </tr>
                  <tr>
                    <td>Trạng thái thiết bị:</td>
                    <td>Activated</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="content-item">
              <div className="item">
                <h5>Thông tin phiên bản</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>Phiên bản cũ nhất:</td>
                      <td>12.3 (20/02/2020)</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>12.3 (20/02/2020)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="item">
                <h5>Dung lượng bộ nhớ</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>Dung lượng</td>
                      <td>512GB</td>
                    </tr>
                    <tr>
                      <td>Còn trống</td>
                      <td>123GB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-edit"></i>
              </div>
              <p>Khôi phục mật khẩu</p>
            </div>
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-lock"></i>
              </div>
              <p>Khôi phục mật khẩu</p>
            </div>
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <p>Khôi phục bộ nhớ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
