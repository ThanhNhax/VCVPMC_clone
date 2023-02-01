import React from "react";

type Props = {};

export default function ThongTinCoBan({}: Props) {
  return (
    <div className="container">
      <h1>Thông Tin Cơ Bản</h1>
      <div className="content">
        <div className="content_left">
          <div className="left-avatar">
            <img src="./img/Frame 433.png" alt="Frame 433.png" />
            <i className="far fa-camera"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
