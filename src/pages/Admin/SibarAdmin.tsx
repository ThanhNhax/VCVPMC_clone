import React from "react";

type Props = {};

export default function SibarAdmin({}: Props) {
  const handleActive = (e: any) => {
    console.log(e.target);
  };
  return (
    <div className="left">
      <div className="left_logo">
        <img src="../img/vcpmc_logo.png" alt="logo_vcpmc" />{" "}
      </div>
      <div className="list_item">
        <div className="item active">
          <i className="fas fa-user"></i>
          <p>Kho bản ghi</p>
        </div>
        <div className="item">
          <i className="fas fa-user"></i>
          <p>Playlist</p>
        </div>{" "}
        <div className="item">
          <i className="fas fa-user"></i>
          <p>Lập lịch phát</p>
        </div>
        <div className="item">
          <i className="fas fa-user"></i>
          <p>Quản lí tài khoản</p>
        </div>
        <div className="item">
          <i className="fas fa-user"></i>

          <p>Thiết bị</p>
        </div>{" "}
        <div className="item">
          <i className="fas fa-user"></i>
          <p>Theo dõi lượt phát</p>
        </div>
      </div>
    </div>
  );
}
