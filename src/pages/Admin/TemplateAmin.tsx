import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import TopSibar from "../../Components/TopSibar";
import UserAvatar from "../../Components/UserAvatar";
import SibarAdmin from "./SibarAdmin";

type Props = {};

export default function TemplateAmin({}: Props) {
  return (
    <>
      <div className="template">
        <div className="template_left">
          <SibarAdmin />
        </div>
        <div className="template_right">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
