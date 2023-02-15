import React from "react";

type Props = {};

export default function ThemThongTinBanGhi({}: Props) {
  return (
    <div className="themThongTinBanGhi">
      <div className="container-top">
        <p>
          Quản lý<i className="fas fa-chevron-right"></i>Quản lý hợp đồng
          <i className="fas fa-chevron-right"></i>Thêm bản ghi
        </p>
        <h1>Thêm thông tin bản ghi</h1>
      </div>
      <div className="container-content">
        <div className="wrap-content">
          <div className="content-top">
            <div className="bg-icon">
              <i className="fas fa-check"></i>
            </div>
            <h5>Hợp đồng đã được tạo thành công</h5>
          </div>
          <div className="content-center">
            <p>Có 2 cách để tạo bản ghi:</p>
            <div className="wrap-item">
              <div className="item">
                <p>
                  <span>Cách 1:</span> Upload bản ghi trực tiếp
                </p>
                <div className="tab-item">
                  <p>Bạn có thể thực hiện thêm bản ghi ngay trên website</p>
                  <input type="button" value="Thêm bản ghi trực tiếp " />
                </div>
              </div>
              <div className="item">
                <p>
                  <span>Cách 2:</span> Upload bản ghi qua phần mềm
                </p>
                <div className="tab-item">
                  <p>Bạn có thể thêm bản ghi bằng tool</p>
                  <input type="button" value="Thêm bản ghi bằng tool" />
                </div>
              </div>
              <p className="error">
                Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
