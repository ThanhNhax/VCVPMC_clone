import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemKhoBanGhi from "../../Components/ItemKhoBanGhi";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getArrKhoBanGhiFireStore,
  KhoBanGhiRedux,
} from "../../redux/khoBanGhi/khoBanghiReducer";

export default function KhoBanGhi() {
  const arrKhoBanGhi = useSelector(
    (state: RootState) => state.khoBanGhi.arrKhoBanGhi
  );
  const dispatch: AppDispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);
  const indexOfLastNews = currentPage * limit;
  const indexOfFirstNews = indexOfLastNews - limit;
  const totalPages = Math.ceil(arrKhoBanGhi.length / limit);
  const newArrKho = arrKhoBanGhi.slice(indexOfFirstNews, indexOfLastNews);
  const [isTable, setIsTable] = useState<boolean>(true);
  useEffect(() => {
    // Lấy danh sách kho bản ghi từ fireStore về
    const action = getArrKhoBanGhiFireStore();
    dispatch(action);
  }, []);

  // tạo ra danh sách kho bản ghi
  const renderKhoBanGhi = () => {
    return newArrKho.map((khoBanGhi, index) => {
      return (
        <tr key={index}>
          <td className="text_right">{index + 1}</td>
          <td>{khoBanGhi?.tenBanGhi}</td>
          <td>{khoBanGhi?.maISRC}</td>
          <td className="text_right">{khoBanGhi?.thoiLuong}</td>
          <td>{khoBanGhi?.caSi}</td>
          <td>{khoBanGhi?.tacGia}</td>
          <td>{khoBanGhi?.theLoai}</td>
          <td>{khoBanGhi?.dingDang}</td>
          <td>
            <p
              className={
                khoBanGhi?.thoiHanSuDung?.thoiHan
                  ? "true_thoiHan"
                  : "false_thoiHan"
              }
            >
              {khoBanGhi?.thoiHanSuDung?.thoiHan
                ? "Còn thời hạn"
                : "Đã hết hạn"}{" "}
            </p>

            {khoBanGhi?.thoiHanSuDung?.thoiGian}
          </td>
          <td className="action">
            <Link
              to="/admin/khobanghi/capnhat"
              onClick={() => {
                console.log("Click Cap nhat");
              }}
            >
              Cập nhật
            </Link>
          </td>
          <td className="action">
            <Link to="#">Nghe</Link>
          </td>
        </tr>
      );
    });
  };
  const renderKhoBanGhiCard = () => {
    return arrKhoBanGhi.map((item: KhoBanGhiRedux, index: number) => {
      return <ItemKhoBanGhi item={item} />;
    });
  };
  return (
    <div className="khoBanGhi">
      <div className="khoBanGhi_top">
        <h1>Kho bản ghi</h1>
        <form className="khoBanGhi_search">
          <div id="input_search">
            <input type="search" name="search" id="search" />
            <i className="fas fa-search"></i>
          </div>
        </form>
      </div>
      <div className="khoBanGhi_content">
        <div className="content-title">
          <div className="title_list">
            <div className="title-item">
              <label htmlFor="theLoai">Thể loại:</label>
              <select id="theLoai">
                <option value="">Tất cả</option>
                <option value="">Pop</option>
                <option value="">EDM</option>
                <option value="">Ballad</option>
              </select>
            </div>
            <div className="title-item">
              <label htmlFor="dinhDang">Định dạng:</label>
              <select id="dinhDang">
                <option value="">Tất cả</option>
                <option value="">Âm thanh</option>
                <option value="">Video</option>
              </select>
            </div>
            <div className="title-item">
              <label htmlFor="thoiGianSuDung">Thời gian sử dụng:</label>
              <select id="thoiGianSuDung">
                <option value="">Tất cả</option>
                <option value="">Còn thời hạn</option>
                <option value="">Hết hạn</option>
              </select>
            </div>
            <div className="title-item">
              <label htmlFor="trangThai">Trạng thái:</label>
              <select id="trangThai">
                <option value="">Tất cả</option>
                <option value="">Duyệt bởi người dùng</option>
                <option value="">Duyệt tự động</option>
              </select>
            </div>
            <div className="title-item">
              <i
                style={isTable ? { color: "#FF7506" } : {}}
                onClick={() => {
                  setIsTable(true);
                }}
                className="fas fa-list-ul"
              ></i>
              <i
                onClick={() => {
                  setIsTable(false);
                }}
                style={
                  !isTable
                    ? { color: "#FF7506", marginLeft: "5px" }
                    : { marginLeft: "5px" }
                }
                className="fas fa-border-all"
              ></i>
            </div>
          </div>
          <div
            className="content-table"
            style={isTable ? { display: "block" } : { display: "none" }}
          >
            <table>
              <thead>
                <tr>
                  <th className="text_right">STT</th>
                  <th>Tên bản ghi</th>
                  <th>Mã ISRC</th>
                  <th>Thời lượng</th>
                  <th>Ca sĩ</th>
                  <th>Tác giả</th>
                  <th>Thể loại</th>
                  <th>Định dạng</th>
                  <th>Thời hạn sử dụng</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{renderKhoBanGhi()}</tbody>
            </table>
            <div className="pagination">
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
                    <option value="4">4</option>
                    <option value="8">8</option>
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
                >{`<`}</button>
                {/* <p>1</p>
                <p>2</p>
                <p>3</p> */}
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                  }}
                >{`>`}</button>
              </div>
            </div>
          </div>
          <div
            className="content-card"
            style={!isTable ? { display: "block" } : { display: "none" }}
          >
            <div className="card-list">{renderKhoBanGhiCard()}</div>
          </div>
        </div>
        <div className="content-quanLyPheDuyet">
          <div className="bg_icon">
            <i className="far fa-edit"></i>
          </div>
          <span>Quản lý phê duyệt</span>
        </div>
      </div>
    </div>
  );
}
