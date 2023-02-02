import React from "react";

export default function KhoBanGhi() {
  return (
    <div>
      <div className="khoBanGhi_top">
        <h1>Kho bản ghi</h1>
        <form className="khoBanGhi_search">
          <div>
            <input type="search" name="search" id="search" />
            <i className="fas fa-search"></i>
          </div>
        </form>
      </div>
      <div className="khoBanGhi_content">
        <div className="content-title">
          <div>
            <div>
              <label htmlFor="theLoai">Thể loại:</label>
              <select id="theLoai">
                <option value="">Tất cả</option>
                <option value="">Pop</option>
                <option value="">EDM</option>
                <option value="">Ballad</option>
              </select>
            </div>
            <div>
              <label htmlFor="dinhDang">Định dạng:</label>
              <select id="dinhDang">
                <option value="">Tất cả</option>
                <option value="">Âm thanh</option>
                <option value="">Video</option>
              </select>
            </div>
            <div>
              <label htmlFor="thoiGianSuDung">Thời gian sử dụng:</label>
              <select id="thoiGianSuDung">
                <option value="">Tất cả</option>
                <option value="">Còn thời hạn</option>
                <option value="">Hết hạn</option>
              </select>
            </div>
            <div>
              <label htmlFor="trangThai">Trạng thái:</label>
              <select id="trangThai">
                <option value="">Tất cả</option>
                <option value="">Duyệt bởi người dùng</option>
                <option value="">Duyệt tự động</option>
              </select>
            </div>
            <div>
              <i className="fas fa-list-ul"></i>
              <i className="fas fa-border-all"></i>
            </div>
          </div>
          <div className="content-table">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên bản ghi</th>
                  <th>Mã ISRC</th>
                  <th>Thời lượng</th>
                  <th>Ca sĩ</th>
                  <th>Tác giả</th>
                  <th>Thể loại</th>
                  <th>Định dạng</th>
                  <th></th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
