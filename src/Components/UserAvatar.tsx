import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/configStore";

export default function UserAvatar() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="user_avatar">
      <div className="user_img">
        {user.avatar ? (
          <img src={user.avatar} alt="avatar.png" />
        ) : (
          <i className="far fa-user"></i>
        )}
      </div>
      <div className="title">
        <h5>
          {user.ho.slice(0, 2)}.{user.ten}
        </h5>
        <p>{user.phanQuyen}</p>
      </div>
    </div>
  );
}
