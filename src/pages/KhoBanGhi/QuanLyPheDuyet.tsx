import { Checkbox, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemKhoBanGhi from "../../Components/ItemKhoBanGhi";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getArrKhoBanGhiFireStore,
  KhoBanGhiRedux,
  setItemKhoBanGhi,
} from "../../redux/khoBanGhi/khoBanghiReducer";

export default function QuanLyPheDuyet() {
  const arrKhoBanGhi = useSelector(
    (state: RootState) => state.khoBanGhi.arrKhoBanGhi
  );
  //   console.log("Lấy từ redux về", { arrKhoBanGhi });
  const dispatch: AppDispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(12); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  const totalPages = Math.ceil(arrKhoBanGhi.length / limit); // Tính số tổng số pages
  const newArrKho = arrKhoBanGhi.slice(indexOfFirstNews, indexOfLastNews);
  const [isTable, setIsTable] = useState<boolean>(true); // hiển thị dưới dạng table hoặc dạng card
  const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<boolean>(false);
  // xử  lý modal popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenClear, setIsModalOpenClear] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState<boolean>(false);

  const styleI = {
    color: "#347AFF",
    opacity: "0.7",
    fontSize: "5px",
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModalClear = () => {
    setIsModalOpenClear(true);
  };

  const handleOkClear = () => {
    setIsModalOpenClear(false);
  };

  const handleCancelClear = () => {
    setIsModalOpenClear(false);
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
          <td>
            <Checkbox checked={isCheck ? true : false} />
          </td>
          <td>{index + 1}</td>
          <td>
            <div className="td-tenBanGhi">
              <p>{khoBanGhi.tenBanGhi}</p>
              <div
                className="td-bottom"
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <p>{khoBanGhi.theLoai}</p>
                <i className="fas fa-circle" style={styleI}></i>
                <p>{khoBanGhi.dinhDang}</p>
                <i className="fas fa-circle" style={styleI}></i>
                <p>{khoBanGhi.thoiLuong}</p>
              </div>
            </div>
          </td>
          <td>{khoBanGhi.caSi}</td>
          <td>{khoBanGhi.tacGia}</td>
          <td>{khoBanGhi.maISRC}</td>
          <td>{khoBanGhi.soHopDong}</td>
          <td>{khoBanGhi.ngayTai}</td>
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
          isPheDuyet={true}
          isCheck={isCheck}
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
    <div className="quanLyPheDuyet khoBanGhi">
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
      <div className="khoBanGhi_content quanLyPheDuyet_content">
        <div className="content-title">
          <div className="title_list">
            <div className="customs-item">
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
              {isCheckBox ? (
                <div>
                  <Checkbox
                    id="check"
                    onClick={() => setIsCheck((pre) => !pre)}
                  />
                  <label htmlFor="check">Chọn tất cả</label>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="title-item">
              <i
                style={isTable ? { color: "#FF7506" } : {}}
                onClick={() => {
                  setIsTable(true);
                  setLimit(12);
                  setCurrentPage(1);
                  setIsCheckBox(false);
                  setIsCheck(false);
                }}
                className="fas fa-list-ul"
              ></i>
              <i
                onClick={() => {
                  setIsTable(false);
                  setLimit(8);
                  setCurrentPage(1);
                  setIsCheckBox(true);
                  setIsCheck(false);
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
                      <th>
                        <Checkbox
                          onClick={() => setIsCheck((pre) => !pre)}
                          checked={isCheck}
                        />
                      </th>
                      <th className="text_right">STT</th>
                      <th>Tên bản ghi</th>
                      <th>Ca sĩ</th>
                      <th>Tác giả</th>
                      <th>Mã ISRC</th>
                      <th>Số hợp đồng</th>
                      <th>Ngày tải</th>
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
        <div className="content_menu">
          <div className="content_menu-item">
            <div className="bg_icon">
              <Link to={"/admin/khobanghi"}>
                <i className="fas fa-check" style={{ color: "#0FBF00" }}></i>
              </Link>
            </div>
            <span>Phê duyệt</span>
          </div>
          <div className="content_menu-item">
            <div className="bg_icon">
              <Link to={"#"} onClick={showModalClear}>
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <span>Từ chối</span>
          </div>
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
          src="https://www.youtube.com/embed/PoXDg2saXX8"
          title="YouTube video player"
          // frameborder="0"
        ></video>
      </Modal>
      <Modal
        open={isModalOpenClear}
        onOk={handleOkClear}
        onCancel={handleCancelClear}
        footer={null}
        wrapClassName="modal-tuChoi"
        width={480}
      >
        <div>
          <h4>Lý do từ chối phê duyệt</h4>
          <textarea
            // rows={6}
            // cols={70}
            placeholder="Cho chúng tôi biết lý do bạn muốn từ chối phê duyệt bản ghi này..."
          ></textarea>
          <div className="modal-btn">
            <button onClick={handleCancelClear}>Hủy</button>
            <button onClick={handleCancelClear}>Từ chối</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
