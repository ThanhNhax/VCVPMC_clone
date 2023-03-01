/* eslint-disable react-hooks/exhaustive-deps */
import { Switch } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  DoiTacUyQuyenRedux,
  getArrQuanLyDoiTacUyQuyenFireStore,
  setItemDoiTacUyQuyen,
} from "../../../redux/quanLyDoiTacUyQuyen/quanLyDoiTacUyQuyen";

export default function DoiTacUyQuyen() {
  const { arrDoiTacUyQuyen } = useSelector(
    (state: RootState) => state.doiTacUyQuyen
  );
  console.log({ arrDoiTacUyQuyen });
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getArrQuanLyDoiTacUyQuyenFireStore());
  }, []);
  const navigate = useNavigate();
  const renderTable = () => {
    return arrDoiTacUyQuyen.map(
      (uyQuyen: DoiTacUyQuyenRedux, index: number) => (
        <tr key={index}>
          <td className="stt">{index + 1}</td>
          <td>{uyQuyen.tenNguoiDung}</td>
          <td>{uyQuyen.tenDangNhap}</td>
          <td>{uyQuyen.email}</td>
          <td>{uyQuyen.ngayHetHan}</td>
          <td>{uyQuyen.soDienThoi}</td>
          <td>
            <Switch
              defaultChecked={uyQuyen.trangThai === "true" ? true : false}
            />
            {uyQuyen.trangThai === "true"
              ? "Đang kích hoạt"
              : "Ngừng kích hoạt"}
          </td>
          <td
            className="action"
            onClick={() => {
              navigate("/admin/quanLyUyQuyen/capNhat");
              // cập nhật lên redux itemDoiTacUyQuyen
              dispatch(setItemDoiTacUyQuyen(uyQuyen));
            }}
          >
            Cập nhật
          </td>
        </tr>
      )
    );
  };
  return (
    <div className="doiTacUyQuyen">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý
            <i className="fas fa-chevron-right"></i>Đối tác uỷ quyền
          </p>
          <h1>Danh sách đối tác ủy quyền</h1>
          <div id="input_search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Họ tên, tên đăng nhập, email..."
            />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="wrap-table">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ tên</th>
                <th>Tên đăng nhập</th>
                <th>Email</th>
                <th>Ngày hết hạn</th>
                <th>Số điện thoại</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
        <div className="pagination-table">
          <div className="pagination_left">
            <p>
              Hiển thị
              <input defaultValue="13" readOnly></input>
              hàng trong mỗi trang
            </p>
          </div>
          <div className="pagination_right">
            <button
            //   disabled={currentPage === 1}
            //   onClick={() => {
            //     if (currentPage === 1) {
            //       setCurrentPage(1);
            //     }
            // setCurrentPage(currentPage - 1);
            //   }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div
              id="btnPage"
              // dangerouslySetInnerHTML={renderButtonPage(totalPages)}
            ></div>
            <button
            // disabled={currentPage >= totalPages}
            //   onClick={() => {
            //     setCurrentPage(currentPage + 1);
            //   }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}