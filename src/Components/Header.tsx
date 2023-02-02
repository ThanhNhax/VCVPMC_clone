import React from "react";
import { NavLink } from "react-router-dom";
import SibarAdmin from "../pages/Admin/SibarAdmin";
import TopSibar from "./TopSibar";
import UserAvatar from "./UserAvatar";

type Props = {};

export default function Header({}: Props) {
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
