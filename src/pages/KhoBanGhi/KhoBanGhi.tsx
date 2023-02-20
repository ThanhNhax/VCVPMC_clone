/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "antd";

import ItemKhoBanGhi from "../../Components/ItemKhoBanGhi";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getArrKhoBanGhiFireStore,
  KhoBanGhiRedux,
  setItemKhoBanGhi,
} from "../../redux/khoBanGhi/khoBanghiReducer";

export default function KhoBanGhi() {
  const arrKhoBanGhi = useSelector(
    (state: RootState) => state.khoBanGhi.arrKhoBanGhi
  );
  const dispatch: AppDispatch = useDispatch();
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(12); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  const totalPages = Math.ceil(arrKhoBanGhi.length / limit); // Tính số tổng số pages
  const newArrKho = arrKhoBanGhi.slice(indexOfFirstNews, indexOfLastNews);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
  const [isTable, setIsTable] = useState<boolean>(true); // hiển thị dưới dạng table hoặc dạng card
  // const [isCheck, setIsCheck] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(true);
  // xử  lý modal popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
          <td>{khoBanGhi?.dinhDang}</td>
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
                setToggle(false);
                console.log("Click Cap nhat");
                dispatch(setItemKhoBanGhi(khoBanGhi));
              }}
            >
              Cập nhật
            </Link>
          </td>
          <td className="action">
            <Link to="#" onClick={showModal}>
              Nghe
            </Link>
          </td>
        </tr>
      );
    });
  };
  const renderKhoBanGhiCard = () => {
    return newArrKho.map((item: KhoBanGhiRedux, index: number) => {
      return (
        <ItemKhoBanGhi
          item={item}
          key={index}
          isPheDuyet={false}
          isCheck={false}
        />
      );
    });
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
    <div className="khoBanGhi">
      <div className="khoBanGhi_top">
        <h1>Kho bản ghi</h1>
        <form className="khoBanGhi_search">
          <div id="input_search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Tên bản ghi, Ca sĩ"
            />
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
                  setLimit(12);
                  setCurrentPage(1);
                }}
                className="fas fa-list-ul"
              ></i>
              <i
                onClick={() => {
                  setIsTable(false);
                  setLimit(8);
                  setCurrentPage(1);
                }}
                style={
                  !isTable
                    ? { color: "#FF7506", marginLeft: "10px" }
                    : { marginLeft: "10px" }
                }
                className="fas fa-border-all"
              ></i>
            </div>
          </div>
          <div className="content-render">
            <div
              className="content-table"
              style={isTable ? { display: "block" } : { display: "none" }}
            >
              <div className="content-table-wrap">
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
                        <option value="12">12</option>
                        <option value="6">6</option>
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
            <div
              className="content-card"
              style={!isTable ? { display: "block" } : { display: "none" }}
            >
              <div className="card-container">
                <div className="card-list">{renderKhoBanGhiCard()}</div>
                <div className="pagination-card">
                  <div className="pagination_left">
                    <p>
                      Hiển thị
                      <select
                        value={limit}
                        onChange={(e) => {
                          setLimit(parseInt(e.target.value));
                        }}
                      >
                        <option value="7">7</option>
                        <option value="6">6</option>
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
                    <div
                      id="btnPage"
                      dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                    ></div>
                    <button
                      disabled={currentPage >= totalPages}
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                      }}
                    >{`>`}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-quanLyPheDuyet">
          <div className="bg_icon">
            <Link to={"/admin/khobanghi/quanLyPheDuyet"}>
              <i className="far fa-edit"></i>
            </Link>
          </div>
          <span>Quản lý phê duyệt</span>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        wrapClassName="modal-video"
        width={480}
      >
        <video
          width="452"
          height="247"
          // src="https://www.youtube.com/embed/PoXDg2saXX8"
          title="YouTube video player"
          // frameborder="0"
        ></video>
      </Modal>
    </div>
  );
}
