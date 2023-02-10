import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import SibarAdminToggle from "../../Components/SibarAdminToggle";
import SibarAdmin from "./SibarAdmin";

export default function TemplateAmin() {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleToggle = () => setToggle((pre) => !pre);
  return (
    <>
      <div className="template">
        <div
          className="template_left"
          style={toggle ? { width: "10%" } : { width: "3%" }}
        >
          <div className="sibarAdmin">
            {toggle ? (
              <SibarAdmin setToggle={handleToggle} />
            ) : (
              <SibarAdminToggle setToggle={handleToggle} />
            )}
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
