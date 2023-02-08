import React from "react";
import { Link } from "react-router-dom";
import TopSibar from "../../Components/TopSibar";

type Props = {};

export default function QuenMatKhau() {
  return (
    <div className="quenMatKhau">
      <div className="quenMatKhau--header">
        <TopSibar />
      </div>
      <div className="quenMatKhau_content">
        <div className="logo">
          <img src="../img/vcpmc_logo.png" alt="logo_vcpmc" />
        </div>
        <div className="content_quenMatKhau">
          <h1>Khôi phục mật khẩu</h1>
          <p>
            Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
          </p>
          <div className="form_email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Nhập email..." id="email" />
          </div>
          <div className="form_button">
            <button>Xác nhận</button>
          </div>

          <div className="form_button">
            <Link to={""}>Quay lại đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
