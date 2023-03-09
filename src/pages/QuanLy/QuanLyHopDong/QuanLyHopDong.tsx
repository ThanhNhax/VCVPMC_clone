/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  getArrHopDongFireStore,
  getArrHopDongUyQuyenFireStore,
  HopDongKhaiThacRedux,
  HopDongUyQuyenRedux,
  setItemHopDongKhaiThac,
  setItemHopDongUyQuyen,
} from "../../../redux/hopDongReducer/hopDongReducer";

export default function QuanLyHopDong() {
  const { arrHopDongKhaiThac } = useSelector(
    (state: RootState) => state.hopDong
  );
  console.log({ arrHopDongKhaiThac });
  const { arrHopDongUyQuyen } = useSelector(
    (state: RootState) => state.hopDong
  );
  console.log({ arrHopDongUyQuyen });
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getArrHopDongFireStore());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(getArrHopDongUyQuyenFireStore());
  }, []);
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(6); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu

  const totalPages = Math.ceil(arrHopDongKhaiThac?.length / limit); // Tính số tổng số pages
  const totalPagesHopDongUyQuyen = Math.ceil(arrHopDongUyQuyen?.length / limit); // Tính số tổng số pages
  const newArrHopDong = arrHopDongKhaiThac?.slice(
    indexOfFirstNews,
    indexOfLastNews
  );
  const newArrHopDongUyQuyen = arrHopDongUyQuyen?.slice(
    indexOfFirstNews,
    indexOfLastNews
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
  const [isActive, setIsActive] = useState<boolean>(true);
  const renderTableHopDongUyQuyen = () => {
    return newArrHopDongUyQuyen.map(
      (uyQuyen: HopDongUyQuyenRedux, index: number) => {
        return (
          <tr key={index}>
            <td className="text_right">{index + 1}</td>
            <td>{uyQuyen.soHopDong}</td>
            <td>{uyQuyen.tenHopDong}</td>
            <td>{uyQuyen.nguoiUyQuyen}</td>
            <td>{uyQuyen.quyenSoHuu}</td>
            <td className={uyQuyen.hieuLucHopDong}>{uyQuyen.hieuLucHopDong}</td>
            <td>{uyQuyen.ngayTao}</td>
            <td className="action">
              <Link
                to={"/admin/quanLyHopDong/chiTiet"}
                onClick={() => dispatch(setItemHopDongUyQuyen(uyQuyen))}
              >
                Xem chi tiết
              </Link>
            </td>
            {uyQuyen?.hieuLucHopDong?.match("hủy") ? (
              <td className="action">Lý do hủy</td>
            ) : (
              <td></td>
            )}
          </tr>
        );
      }
    );
  };

  const renderTableHopDongKhaiThac = () => {
    return newArrHopDong?.map(
      (hopDong: HopDongKhaiThacRedux, index: number) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{hopDong.soHopDong}</td>
            <td>{hopDong.tenHopDong}</td>
            <td>{hopDong.ngayTao}</td>
            <td>{hopDong.ngayHieuLuc}</td>
            <td>{hopDong.ngayHetHan}</td>
            {
              <td className={hopDong.hieuLucHopDong}>
                {hopDong.hieuLucHopDong}
              </td>
            }

            <td className="action">
              <Link
                to={"/admin/quanLyHopDong/chiTietHopDongKhaiThac"}
                onClick={() => dispatch(setItemHopDongKhaiThac(hopDong))}
              >
                Xem chi tiết
              </Link>
            </td>
            <td className="action">Sao chép hợp đồng</td>
          </tr>
        );
      }
    );
  };
  const renderButtonPage = (n: number) => {
    let btn: any = "";
    for (let i = 0; i < n; i++) {
      btn += `<button
          className=${isStyleBtn ? "btn-item-active btn-item" : "btn-item"}
          >
          ${i + 1}
        </button>`;
    }
    return { __html: btn };
  };
  return (
    <div className="quanLyHopDong">
      <div className="container">
        <div className="content-top">
          <p>
            Quản lý <i className="fas fa-chevron-right"></i>Quản lý hợp đồng
          </p>
          <h1>
            {isActive ? "Danh sách hợp đồng" : "Danh sách hợp đồng khai thác"}
          </h1>{" "}
          {/*truyền title Click thì đổi title  */}
          <div className="tag">
            <p
              className={isActive ? "active" : ""}
              onClick={() => setIsActive(true)}
            >
              Hợp đồng ủy quyền
            </p>
            <p
              className={!isActive ? "active" : ""}
              onClick={() => setIsActive(false)}
            >
              Hợp đồng khai thác
            </p>
          </div>
        </div>
        <div className="content-center">
          <div className="center-left">
            <div className="left-top">
              <div
                className="top-list"
                style={isActive ? { display: "flex" } : { display: "none" }}
              >
                <div className="top-item">
                  <label htmlFor="quyenSoHuu">Quyền sở hữu:</label>
                  <select id="quyenSoHuu">
                    <option value="">Tất cả</option>
                    <option value="">Người biểu diễn</option>
                    <option value="">Nhà sản xuất</option>
                  </select>
                </div>
                <div className="top-item">
                  <label htmlFor="theLoai">Hiệu lực hợp đồng:</label>
                  <select id="theLoai">
                    <option value="">Tất cả</option>
                    <option value="">Mới</option>
                    <option value="">Còn thời hạn</option>
                    <option value="">Hết hạn</option>
                    <option value="">Hủy</option>
                  </select>
                </div>
              </div>
              <div id="input_search">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Tên hợp đồng, số hợp đồng, người uỷ quyền..."
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className="center-table">
              <div
                className="wrap-danhSachHopDong wrap-danhSach"
                style={isActive ? { display: "block" } : { display: "none" }}
              >
                <div className="wrap-table">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Số hợp đồng</th>
                        <th>Tên hợp đồng</th>
                        <th>Người uỷ quyền</th>
                        <th>Quyền sở hữu</th>
                        <th>Hiệu lực hợp đồng</th>
                        <th>Ngày tạo</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableHopDongUyQuyen()}</tbody>
                  </table>
                </div>
                <div className="pagination-table">
                  <div className="pagination_left">
                    <p>
                      Hiển thị
                      <select
                        value={limit}
                        onChange={(e) => {
                          setLimit(parseInt(e.target.value));
                        }}
                      >
                        <option value="6">6</option>
                      </select>
                      hàng trong mỗi trang
                    </p>
                  </div>
                  <div className="pagination_right">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => {
                        if (currentPage === 1) {
                          setCurrentPage(1);
                        }
                        setCurrentPage(currentPage - 1);
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <div
                      id="btnPage"
                      dangerouslySetInnerHTML={renderButtonPage(
                        totalPagesHopDongUyQuyen
                      )}
                    ></div>
                    <button
                      disabled={currentPage >= totalPagesHopDongUyQuyen}
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="wrap-hopDongKhaiThac wrap-danhSach"
                style={!isActive ? { display: "block" } : { display: "none" }}
              >
                <div className="wrap-table">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Số hợp đồng</th>
                        <th>Khách hàng</th>
                        <th>Ngày tạo</th>
                        <th>Ngày hiệu lực</th>
                        <th>Ngày hết hạn</th>
                        <th>Hiệu lực hợp đồng</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableHopDongKhaiThac()}</tbody>
                  </table>
                </div>
                <div className="pagination-table">
                  <div className="pagination_left">
                    <p>
                      Hiển thị
                      <select
                        value={limit}
                        onChange={(e) => {
                          setLimit(parseInt(e.target.value));
                        }}
                      >
                        <option value="6">6</option>
                      </select>
                      hàng trong mỗi trang
                    </p>
                  </div>
                  <div className="pagination_right">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => {
                        if (currentPage === 1) {
                          setCurrentPage(1);
                        }
                        setCurrentPage(currentPage - 1);
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <div
                      id="btnPage"
                      dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                    ></div>
                    <button
                      disabled={currentPage >= totalPages}
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-right">
            <div className="bg_icon">
              <Link
                to={
                  isActive
                    ? "/admin/quanLyHopDong/themHopDongUyQuyenMoi"
                    : "/admin/quanLyHopDong/themHopDongKhaiThacMoi"
                }
              >
                <i className="far fa-edit"></i>
              </Link>
            </div>
            <span>Thêm hợp đồng</span>
          </div>
        </div>
      </div>
    </div>
  );
}
