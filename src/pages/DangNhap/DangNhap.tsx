import React from "react";
type Props = {};

export default function DangNhap({}: Props) {
  return (
    <div className="dang_nhap">
      <div className="top_header">
        <div className="top">
          <div className="top_content">
            <h4>Tiếng Việt</h4>
            <div className="top_logo">
              <i className="fas fa-star"></i>
            </div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="dang_nhap_content">
        <div className="logo">
          <img src="../img/vcpmc_logo.png" alt="logo_vcpmc" />
        </div>
        <div className="content">
          <h1>Đăng nhập</h1>
        </div>
        <form>
          <div className="form_title">
            <label htmlFor="userName">Tên đăng nhập</label>
            <br />
            <input type="text" id="userName" />
          </div>
          <div className="form_title">
            <label htmlFor="password">Password</label>
            <br />
            <input type="text" id="password" />
          </div>
          <div className="form_checkbox">
            <input type="checkbox" id="ghi_nho" />
            <label htmlFor="ghi_nho">Ghi nhớ đăng nhập</label>
          </div>
          <div className="form_button">
            <button type="submit">Đăng nhập</button>
          </div>
        </form>
        <div className="form_footer">
          <a>Quên mật khẩu?</a>
        </div>
      </div>
    </div>
  );
}
