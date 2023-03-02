/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  getArrQuanLyThietBiFireStore,
  QuanLyThietBiRedux,
} from "../../../redux/quanLyThietBi/quanLyThietBiReducer";

export default function QuanLyThietBi() {
  const { arrQuanLyThietBi } = useSelector(
    (state: RootState) => state.quanLyThietBi
  );
  console.log({ arrQuanLyThietBi });
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getArrQuanLyThietBiFireStore());
  }, []);
  const renderTableLeft = () => {
    return arrQuanLyThietBi.map(
      (thietBi: QuanLyThietBiRedux, index: number) => (
        <tr key={index}>
          <td>
            <Checkbox />
          </td>
          <td className="text_right">{index + 1}</td>
          <td>{thietBi.tenThietBi}</td>
          <td>
            {thietBi.trangThai ? "Đang kích hoạt |" : "Ngừng kích hoạt "}{" "}
            {thietBi.kichHoat && thietBi.trangThai ? "Đang hoạt động" : ""}
          </td>
        </tr>
      )
    );
  };
  const renderTableRight = () => {
    return arrQuanLyThietBi.map(
      (thietBi: QuanLyThietBiRedux, index: number) => (
        <tr
          key={index}
          onClick={() => {
            alert("chi tiet");
          }}
        >
          <td>{thietBi.hanHopDong}</td>
          <td>{thietBi.tenDangNhap}</td>
          <td>{thietBi.diaChi}</td>
          <td>{thietBi.memory}</td>
          <td>{thietBi.macAddresss}</td>
          <td>{thietBi.skuId}</td>
          <td>{thietBi.hanBaoHanh}</td>
        </tr>
      )
    );
  };
  return (
    <div className="quanLyThietBi">
      <div className="container">
        <div className="container-top">
          <h1>Danh sách thiết bị</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-top">
              <div className="wrap-select">
                <select>
                  <option value="">Chọn nhóm tài khoản</option>
                  <option value="">Tất cả</option>
                  <option value="">Công ty TMCP Bách Hóa Xanh</option>
                  <option value="">Công ty TNHH XYZ</option>
                  <option value="">Công ty TMCP Adora</option>
                </select>
                <select>
                  <option value="">Ẩn hiện cột</option>
                  <option value="">
                    <Checkbox />
                    MAC Address
                  </option>
                  <option value="">
                    <Checkbox />
                    Memory
                  </option>
                  <option value="">
                    <Checkbox />
                    SKU/ID
                  </option>
                  <option value="">
                    <Checkbox />
                    Hạn bảo hành
                  </option>
                  <option value="">
                    <Checkbox />
                    Tên đăng nhập
                  </option>
                  <option value="">
                    <Checkbox />
                    Trạng thái
                  </option>
                  <option value="">
                    <Checkbox />
                    Địa điểm
                  </option>
                  <option value="">
                    <Checkbox />
                    Hạn hợp đồng
                  </option>
                </select>
              </div>
              <div className="search">
                <div id="input_search">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"
                  />
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
            <div className="content-table">
              <div className="wrap-table">
                <div className="wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <Checkbox />
                        </th>
                        <th>STT</th>
                        <th>Tên thiết bị</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableLeft()}</tbody>
                  </table>
                </div>
                <div className="wrap-table-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>Hạn hợp đồng</th>
                        <th>Tên đăng nhập</th>
                        <th>Địa điểm</th>
                        <th>Memory</th>
                        <th>MAC Addresss</th>
                        <th>SKU/ID</th>
                        <th>Hạn Bảo hành</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableRight()}</tbody>
                  </table>
                </div>
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
                  // disabled={currentPage === 1}
                  // onClick={() => {
                  //   if (currentPage === 1) {
                  //     setCurrentPage(1);
                  //   }
                  //   setCurrentPage(currentPage - 1);
                  // }}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <div
                    id="btnPage"
                    // dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                  ></div>
                  <button
                  // disabled={currentPage >= totalPages}
                  // onClick={() => {
                  //   setCurrentPage(currentPage + 1);
                  // }}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-plus"></i>
              </div>
              <p>Thêm thiết bị</p>
            </div>
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-power-off"></i>
              </div>
              <p>Kích hoạt thiết bị</p>
            </div>
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-lock"></i>
              </div>
              <p>Khoá thiết bị</p>
            </div>
            <div className="menu-item">
              <div className="bg-icon">
                <i className="far fa-trash-alt"></i>
              </div>
              <p>Xoá thiết bịị</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
