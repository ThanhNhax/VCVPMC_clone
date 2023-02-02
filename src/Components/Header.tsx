import React from "react";
import { NavLink } from "react-router-dom";
import TopSibar from "./TopSibar";
import UserAvatar from "./UserAvatar";

export default function Header() {
  return (
    <div className="header">
      <div className="header_language">
        <TopSibar />
      </div>
      <div className="header_user">
        <NavLink to={"/admin/thongtincoban"}>
          <UserAvatar />
        </NavLink>
      </div>
    </div>
  );
}
