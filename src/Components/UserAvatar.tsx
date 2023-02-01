import React from "react";

type Props = {};

export default function UserAvatar({}: Props) {
  return (
    <div className="user_avatar">
      <div className="user_img">
        <i className="far fa-user"></i>
      </div>
      <div className="title">
        <h5>Name</h5>
        <p>Chức vụ</p>
      </div>
    </div>
  );
}
