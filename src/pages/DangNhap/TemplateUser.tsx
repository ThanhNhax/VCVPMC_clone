import React from "react";
import { Outlet } from "react-router-dom";
import TopSibar from "../../Components/TopSibar";

export default function TemplateUser() {
  return (
    <div className="dang_nhap">
      <div className="dang_nhap--header">
        <TopSibar />
      </div>
      <div className="dang_nhap_content">
        <div className="logo">
          <img src="../img/vcpmc_logo.png" alt="logo_vcpmc" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
