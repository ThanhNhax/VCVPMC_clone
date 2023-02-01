import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function SibarAdmin({}: Props) {
  return (
    <div className="left">
      <div className="left_logo">
        <img src="../img/vcpmc_logo.png" alt="logo_vcpmc" />
      </div>
      <nav className="navbar_amdin">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <NavLink
              className={(isActive) => (isActive ? "nav-link" : "nav-active")}
              to="/admin/khobanghi"
            >
              <i className="far fa-camera"></i>
              <span>Kho bản ghi</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
              to="/admin/playlist"
            >
              <i className="far fa-camera"></i>
              <span>Playlist</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
              to="/admin/laplichphat"
            >
              <i className="far fa-camera"></i>
              <span>Lập lịch phát</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
              to="#"
            >
              <i className="far fa-camera"></i>
              <span>Quản lý</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
              to="#"
            >
              <i className="far fa-camera"></i>
              <span>Doanh thu</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
              to="#"
            >
              <i className="far fa-camera"></i>
              <span>Cài đặt</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
              to="#"
            >
              <i className="far fa-camera"></i>
              <span>Hỗ trợ</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
