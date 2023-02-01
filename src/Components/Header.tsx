import React from "react";
import SibarAdmin from "../pages/Admin/SibarAdmin";
import TopSibar from "./TopSibar";
import UserAvatar from "./UserAvatar";

type Props = {};

export default function Header({}: Props) {
  return (
    <div>
      <SibarAdmin />
      <TopSibar />
      <UserAvatar />
    </div>
  );
}
