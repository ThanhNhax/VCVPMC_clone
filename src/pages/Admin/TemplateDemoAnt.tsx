import React, { useState } from "react";

import TopSibar from "../../Components/TopSibar";
import UserAvatar from "../../Components/UserAvatar";
import { Link, NavLink, Outlet } from "react-router-dom";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;
type Props = {};

export default function TemplateDemoAnt({}: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <nav className="navbar_amdin">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <NavLink
              style={({ isActive }) =>
                isActive ? { borderRadius: "5px" } : {}
              }
              className={(props) =>
                props.isActive ? " nav-link bg-light text-dark" : "nav-link"
              }
              to=""
            >
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { borderRadius: "5px" } : {}
              }
              className={({ isActive }) =>
                isActive ? " nav-link bg-light text-dark" : "nav-link"
              }
              to=""
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { borderRadius: "5px" } : {}
              }
              className={({ isActive }) =>
                isActive ? " nav-link bg-light text-dark" : "nav-link"
              }
              to=""
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { borderRadius: "5px" } : {}
              }
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
              to="/demo/dangnhap"
            >
              Đăng nhập
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Vị trí component sẽ được load ở link con */}
      <Outlet />
    </>
  );
}
