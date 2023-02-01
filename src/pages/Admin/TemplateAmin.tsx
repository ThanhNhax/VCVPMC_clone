import React from "react";
import { Outlet } from "react-router-dom";
import TopSibar from "../../Components/TopSibar";
import UserAvatar from "../../Components/UserAvatar";
import SibarAdmin from "./SibarAdmin";

type Props = {};

export default function TemplateAmin({}: Props) {
  return (
    <div className="template_admin">
      <SibarAdmin />
      <div className="admin_user">
        <TopSibar />
        <UserAvatar />
      </div>
      <Outlet />
    </div>
  );
}
