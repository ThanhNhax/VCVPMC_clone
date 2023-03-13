/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getArrQuanLyThietBiFireStore,
  QuanLyThietBiRedux,
} from "../../redux/quanLyThietBi/quanLyThietBiReducer";

export default function ApLichChoThietbi() {
  // cấu hình phân pages
  // const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  // const [limit, setLimit] = useState<number>(13); // change số item hiển thị
  // const indexOfLastNews = currentPage * limit; // vị trí cuối
  // const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  // // const totalPages = Math.ceil(arrPlayList.length / limit); // Tính số tổng số pages
  // // const newArrPlayList = arrPlayList.slice(indexOfFirstNews, indexOfLastNews);
  // const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { arrQuanLyThietBi } = useSelector(
    (state: RootState) => state.quanLyThietBi
  );
  console.log({ arrQuanLyThietBi });
  useEffect(() => {
    dispatch(getArrQuanLyThietBiFireStore());
  }, []);
  const renderTable = () => {
    return arrQuanLyThietBi.map(
      (thietBi: QuanLyThietBiRedux, index: number) => (
        <tr key={index}>
          <td>
            <Checkbox />
          </td>
          <td className="text_right">{index + 1}</td>
          <td>{thietBi.tenThietBi}</td>
          <td>{thietBi.macAddresss}</td>
          <td>{thietBi.skuId}</td>
          <td>{thietBi.id}</td>
          <td>{thietBi.tenDangNhap}</td>
          <td>{thietBi.diaChi}</td>
        </tr>
      )
    );
  };
  return (
    <div className="apLichChoThietBi">
      <p>
        Lập lịch phát <i className="fas fa-chevron-right"></i>Chi tiết
        <i className="fas fa-chevron-right"></i>Chỉnh sửa lịch phát
        <i className="fas fa-chevron-right"></i>Áp lịch cho thiết bị
      </p>
      <h1>Chọn thiết bị</h1>
      <div className="container">
        <div className="container-table">
          <div className="wrap-table">
            <table>
              <thead>
                <tr>
                  <th>
                    <Checkbox />
                  </th>
                  <th>STT</th>
                  <th>Tên thiết bị</th>
                  <th>MAC Address</th>
                  <th>SKU/ID</th>
                  <th>Đơn vị sử dụng</th>
                  <th>Tên đăng nhập</th>
                  <th>Đia điểm hoạt động</th>
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </table>
            <div className="pagination-table">
              <div className="pagination_left">
                <p>
                  Hiển thị
                  <input defaultValue="13"></input>
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
        <div className="container-menu">
          <div className="menu-item">
            <div
              className="bg_icon"
              onClick={() => {
                navigate("/admin/lapLichPhat/editLichPhat");
              }}
            >
              <i className="fas fa-check"></i>
            </div>
            <p>Chọn</p>
          </div>
          <div className="menu-item">
            <div
              className="bg_icon"
              onClick={() => {
                navigate("/admin/lapLichPhat/editLichPhat");
              }}
            >
              <i className="fas fa-times"></i>
            </div>
            <p>Xóa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
