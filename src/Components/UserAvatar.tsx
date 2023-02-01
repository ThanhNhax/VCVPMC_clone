import React from "react";

type Props = {};

export default function UserAvatar({}: Props) {
  return (
    <div className="user_avatar">
      <div className="avatar">
        <img src="" alt="" />
      </div>
      <div className="title">
        <h5>Name</h5>
        <p>Chức vụ</p>
      </div>
    </div>
  );
}
