import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import SibarAdmin from "./SibarAdmin";

export default function TemplateAmin() {
  return (
    <>
      <div className="template">
        <div className="template_left">
          <div className="sibarAdmin">
            <SibarAdmin />
          </div>
        </div>
        <div className="template_right">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
