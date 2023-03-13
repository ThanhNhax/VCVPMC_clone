/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  getArrTheLoaiTacPhamFireStore,
  TheLoaiTacPhamRedux,
} from "../../../redux/theLoaiTacPham/theLoaiTacPhamReducer";

export default function ChinhSuaTacPham() {
  const [tenTheLoai, setTenTheLoai] = useState<string>("");
  console.log({ tenTheLoai });
  const { arrTheLoaiTacPham } = useSelector(
    (state: RootState) => state.theLoaiTacPham
  );
  console.log({ arrTheLoaiTacPham });
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getArrTheLoaiTacPhamFireStore());
  }, []);
  const handleChangle = (e: any) => {
    console.log(e.target.value);
    setTenTheLoai(e.target.value);
  };
  const renderTable = () => {
    return arrTheLoaiTacPham.map(
      (tacPham: TheLoaiTacPhamRedux, index: number) => (
        <tr key={index}>
          <td className="text_right">{index + 1}</td>
          <td>
            <input
              type="text"
              defaultValue={tacPham.tenTheLoai}
              onChange={handleChangle}
            />
          </td>
          <td>
            <input type="text" value={tacPham.moTa} onChange={handleChangle} />
          </td>
        </tr>
      )
    );
  };
  return (
    <div className="ChinhSuaThongTinTacPham ">
      <div className="container">
        <div className="container-top">
          <p>
            Cài đặt<i className="fas fa-chevron-right"></i>Cài đặt hệ thống
          </p>
          <h1>Thông tin tác phẩm</h1>
          <h2>Thể loại tác phẩm</h2>
        </div>
        <div className="container-content">
          <div className="wrap-content">
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
                    <select>
                      <option value="12">12</option>
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
            <div className="form-btn">
              <button
                type="button"
                onClick={() => navigate("/admin/thongTinTacPham")}
              >
                Hủy
              </button>
              <button
                type="submit"
                onClick={() => navigate("/admin/thongTinTacPham")}
              >
                Lưu
              </button>
            </div>
          </div>
          <div className="menu">
            <div className="bg-icon">
              <i className="fa fa-edit"></i>
            </div>
            <p>Chỉnh sửa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
