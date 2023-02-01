import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import TopSibar from "../../Components/TopSibar";
import UserAvatar from "../../Components/UserAvatar";
import SibarAdmin from "./SibarAdmin";

type Props = {};

export default function TemplateAmin({}: Props) {
  return (
    // <div className="template_admin">
    //   <div className="sibar_admin">
    //     <SibarAdmin />
    //   </div>
    //   <div className="right">
    //     <div className="admin_user">
    //       <div className="admin_user-language">
    //         <TopSibar />
    //       </div>
    //       <div className="admin_user-avatar">
    //         <Link to={"/admin/thongtincoban"}>
    //           <UserAvatar />
    //         </Link>
    //       </div>
    //     </div>
    //     <Outlet />
    //   </div>
    // </div>
    <>
      <Header />
      <Outlet />
    </>
  );
}
