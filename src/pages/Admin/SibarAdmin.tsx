import React from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {
  setToggle(): void;
};

export default function SibarAdmin({ setToggle }: Props) {
  return (
    <div className="left">
      <div className="left_top" onClick={setToggle}>
        <div className="top-logo">
          <img src="../../img/vcpmc_logo.png" alt="logo_vcpmc" />
        </div>
      </div>
      <nav className="navbar_amdin">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/admin/khobanghi">
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
            <div className="nav-link">
              <i className="fas fa-file"></i>
              <p>Quản lý</p>
              <i className="fas fa-ellipsis-v"></i>
              <div className="dropdown-quanly">
                <Link to="/admin/quanLyHopDong">Quản lý hợp đồng</Link>

                <Link to="/admin/quanLyThietBi">Quản lý thiết bị</Link>

                <Link to="/admin/quanLyUyQuyen">Quản lý ủy quyền</Link>

                <Link to="/admin/donViSuDung">Đơn vị sử dụng</Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <i className="fas fa-file-invoice-dollar"></i>
              <p>Doanh thu</p>
              <i className="fas fa-ellipsis-v"></i>
              <div className="dropdown-quanly">
                <Link to="admin/doanhThu/phanPhoiDoanhThu">
                  Báo cáo doanh thu
                </Link>
                <Link to="/admin/lichSuaDoiSoat">Lịch sử đối soát</Link>

                <Link to="/admin/phanPhoiDoanhThu">Phân phối doanh thu</Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <i className="fas fa-cog"></i>
              <p>Cài đặt</p>
              <i className="fas fa-ellipsis-v"></i>
              <div className="dropdown-quanly">
                <Link to="/admin/phanQuyenNguoiDung">Phân quyền người</Link>

                <Link to="/admin/cauHinh">Cấu hình</Link>

                <Link to="/admin/quanLyUyQuyen">Quản lý hợp đồng</Link>

                <Link to="/admin/thongTinTacPham">Thông tin tác phẩm</Link>
                <Link to="/admin/donViSuDung">Chu kỳ đối soát</Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <i className="fas fa-question-circle"></i>
              <p>Hỗ trợ</p>
              <i className="fas fa-ellipsis-v"></i>
              <div className="dropdown-quanly">
                <Link to="/admin/quanLyHopDong">Hướng dẵn sử dụng</Link>

                <Link to="/admin/quanLyThietBi">Tải app</Link>

                <Link to="/admin/quanLyUyQuyen">Feedback</Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
