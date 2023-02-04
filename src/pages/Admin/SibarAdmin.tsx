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
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/">
              <i className="far fa-folder-open"></i>
              <p>Kho bản ghi</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/playlist">
              <div id="playList">
                <i id="bar" className="fas fa-bars"></i>
                <div id="play">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <p>Playlist</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/laplichphat">
              <i className="far fa-calendar-alt"></i>
              <p>Lập lịch phát</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/playlist">
              <i className="fas fa-file"></i>
              <p>Quản lý</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/playlist">
              <i className="fas fa-file-invoice-dollar"></i>
              <p>Doanh thu</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/playlist">
              <i className="fas fa-cog"></i>
              <p>Cài đặt</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/playlist">
              <i className="fas fa-question-circle"></i>
              <p>Hỗ trợ</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
