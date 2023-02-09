import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function LinkError({}: Props) {
  return (
    <div className="content-linkError">
      <h5>Không thể kết nối </h5>
      <p>
        Dường như đã có chút trục trặc hoặc link này đã hết hạn. Vui lòng thử
        lại hoặc yêu cầu gửi lại link để đặt lại mật khẩu của bạn.
      </p>
      <div className="linkError-btn">
        <button>Yêu cầu gửi lại link</button>
      </div>
      <div className="link_dangNhap">
        <NavLink to="/">Quay lại đăng nhập</NavLink>
      </div>
    </div>
  );
}
