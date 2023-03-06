/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  getArrTheLoaiTacPhamFireStore,
  TheLoaiTacPhamRedux,
} from "../../../redux/theLoaiTacPham/theLoaiTacPhamReducer";

export default function ThongTinTacPham() {
  const navigate = useNavigate();
  const { arrTheLoaiTacPham } = useSelector(
    (state: RootState) => state.theLoaiTacPham
  );
  console.log({ arrTheLoaiTacPham });
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getArrTheLoaiTacPhamFireStore());
  }, []);
  const renderTable = () => {
    return arrTheLoaiTacPham.map(
      (tacPham: TheLoaiTacPhamRedux, index: number) => (
        <tr key={index}>
          <td className="text_right">{index + 1}</td>
          <td>{tacPham.tenTheLoai}</td>
          <td>{tacPham.moTa}</td>
        </tr>
      )
    );
  };
  return (
    <div className="ThongTinTacPham">
      <div className="container">
        <div className="container-top">
          <p>
            Cài đặt<i className="fas fa-chevron-right"></i>Cài đặt hệ thống
          </p>
          <h1>Thông tin tác phẩm</h1>
          <h2>Thể loại tác phẩm</h2>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="wrap-table">
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên thể loại</th>
                    <th>Mô tả</th>
                  </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
              </table>
            </div>
            <div className="pagination-table">
              <div className="pagination_left">
                <p>
                  Hiển thị
                  <select
                  // value={limit}
                  // onChange={(e) => {
                  //   setLimit(parseInt(e.target.value));
                  // }}
                  >
                    <option value="12">12</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                  </select>
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
                //     setCurrentPage(currentPage - 1);
                //   }}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div
                  id="btnPage"
                  //   dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                ></div>
                <button
                //   disabled={currentPage >= totalPages}
                //   onClick={() => {
                //     setCurrentPage(currentPage + 1);
                //   }}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="menu">
            <div
              className="bg-icon"
              onClick={() => navigate("/admin/thongTinTacPham/chinhSua")}
            >
              <i className="fa fa-edit"></i>
            </div>
            <p>Chỉnh sửa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
