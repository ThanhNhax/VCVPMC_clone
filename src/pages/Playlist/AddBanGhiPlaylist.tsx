import React, { useEffect, useState } from "react";
import { message, Modal } from "antd";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { db } from "../../FireStore/fireStore";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getArrKhoBanGhiFireStore,
  KhoBanGhiRedux,
} from "../../redux/khoBanGhi/khoBanghiReducer";
import {
  deleteArrBanGhiRedux,
  setItemPlayList,
  setNewPlayListArrBanGhiRedux,
} from "../../redux/playListReducer/playListReducer";

export default function AddBanGhiPlaylist() {
  const { newPlayList } = useSelector((state: RootState) => state.playList);
  console.log({ newPlayList });
  const dispatch: AppDispatch = useDispatch();
  const { arrKhoBanGhi } = useSelector((state: RootState) => state.khoBanGhi);
  const navigate = useNavigate();
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(8); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  const totalPages = Math.ceil(arrKhoBanGhi.length / limit); // Tính số tổng số pages kho bản ghi
  let totalPagesArrPlaylist: number = 1;
  if (newPlayList?.arrBanGhi !== undefined) {
    totalPagesArrPlaylist = Math.ceil(newPlayList?.arrBanGhi?.length / limit);
  }

  // Tính số tổng số pages kho bản ghi
  const newArrKho = arrKhoBanGhi?.slice(indexOfFirstNews, indexOfLastNews);
  const newArrPlayList = newPlayList.arrBanGhi?.slice(
    indexOfFirstNews,
    indexOfLastNews
  );

  const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
  const styleI = {
    color: "#347AFF",
    opacity: "0.7",
    fontSize: "5px",
  };

  // xử ky arrBanGhi == null
  const [isNullData, setIsNullData] = useState<boolean>(true);

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
    // Call arrKhoBanGhi từ FireStore về
    dispatch(getArrKhoBanGhiFireStore());
  }, []);

  //tạo ra table kho bản ghi
  const renderKhoBanGhiTable = () => {
    return newArrKho.map((khoBanGhi: KhoBanGhiRedux, index: number) => {
      return (
        <tr key={index}>
          <td className="text_right">{index + 1}</td>
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
          <td className="action" onClick={showModal}>
            Nghe
          </td>
          <td
            className="action"
            onClick={() => {
              console.log({ khoBanGhi });
              setIsNullData(false);
              //cập nhật lên redux
              dispatch(setNewPlayListArrBanGhiRedux(khoBanGhi));
            }}
          >
            Thêm
          </td>
        </tr>
      );
    });
  };
  // tạo ra table kho bản đã chọn trong item Playlist
  const renderItemPlaylistArrBanGhi = () => {
    if (newArrPlayList !== undefined) {
      return newArrPlayList.map(
        (khoBanGhi: KhoBanGhiRedux | undefined, index: number) => {
          return (
            <tr key={index}>
              <td className="text_right">{index + 1}</td>
              <td>
                <div className="td-tenBanGhi">
                  <p>{khoBanGhi?.tenBanGhi}</p>
                  <div
                    className="td-bottom"
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <p>{khoBanGhi?.theLoai}</p>
                    <i className="fas fa-circle" style={styleI}></i>
                    <p>{khoBanGhi?.dinhDang}</p>
                    <i className="fas fa-circle" style={styleI}></i>
                    <p>{khoBanGhi?.thoiLuong}</p>
                  </div>
                </div>
              </td>
              <td>{khoBanGhi?.caSi}</td>
              <td>{khoBanGhi?.tacGia}</td>
              <td className="action" onClick={showModal}>
                Nghe
              </td>
              <td
                className="action"
                onClick={() => {
                  if (newPlayList.arrBanGhi !== undefined) {
                    const indexDelete = newPlayList.arrBanGhi.findIndex(
                      (item) => item?.id === khoBanGhi?.id
                    );
                    dispatch(deleteArrBanGhiRedux(indexDelete));
                  }
                }}
              >
                Gỡ
              </td>
            </tr>
          );
        }
      );
    }
  };
  // tạo ra các button phân pages
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

  // xử ly updata khi handle submit
  // const handleSubmit = async () => {
  //   console.log("id: ", itemPlayList.id, itemPlayList);
  //   const itemPlaylistRef = doc(db, "playList", itemPlayList.id);
  //   try {
  //     setDoc(
  //       itemPlaylistRef,
  //       { arrBanGhi: itemPlayList.arrBanGhi },
  //       { merge: true }
  //     );
  //     message.open({
  //       type: "success",
  //       content: "Cập nhật thành công!",
  //       duration: 0.8,
  //     });
  //     //cập nhật lại itemPlayList
  //     dispatch(setItemPlayList(itemPlayList));
  //     navigate("/admin/editplaylist");
  //   } catch (e) {
  //     console.log({ e });
  //   }
  // };
  return (
    <div className="addbanghi">
      <div className="addbanghgi_container">
        <div className="content-top">
          <p>
            Playlist<i className="fas fa-chevron-right"></i> Thêm playlist mới
            <i className="fas fa-chevron-right"></i>Thêm bản ghi vào playlist
            mới
          </p>
          <h1>Thêm bản ghi</h1>
        </div>
        <div className="content-center">
          <div className="center-left">
            <div className="left-title">
              <h2>Kho bản ghi </h2>
              <div className="title-dropdown">
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
                  <label htmlFor="playlistMau">Playlist mẫu:</label>
                  <select id="playlistMau">
                    <option value="">Playlist mẫu</option>
                    <option value="">Playlist 1</option>
                    <option value="">Playlist 2</option>
                    <option value="">Playlist 3</option>
                    <option value="">Playlist 4</option>
                  </select>
                </div>
              </div>
              <div id="input_search">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Tên chủ đề, người tạo"
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className="left-table">
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên bản ghi</th>
                    <th>Ca sĩ</th>
                    <th>Tác giả</th>
                  </tr>
                </thead>
                <tbody>{renderKhoBanGhiTable()}</tbody>
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
                    <i className="fas fa-chevron-left"></i>{" "}
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
                    <i className="fas fa-chevron-right"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="center-right center-left">
            <div className="right-title left-title">
              <h2>Danh sách bản ghi được thêm vào Playlist</h2>
              <div className="title-list">
                <div className="title-item">
                  <p>Tổng số :</p>
                  <span>bản ghi</span>
                </div>
                <div className="title-item">
                  <p>Tổng thời lượng :</p>
                  <span>1:2:4s</span>
                </div>
              </div>
              <div className="title-search">
                <div className="input-search">
                  <div id="input_search">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Tên chủ đề, người tạo"
                    />
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-table left-table">
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên bản ghi</th>
                    <th>Ca sĩ</th>
                    <th>Tác giả</th>
                  </tr>
                </thead>
                <tbody>{renderItemPlaylistArrBanGhi()}</tbody>
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
                    <i className="fas fa-chevron-left"></i>{" "}
                  </button>
                  <div
                    id="btnPage"
                    dangerouslySetInnerHTML={renderButtonPage(
                      totalPagesArrPlaylist
                    )}
                  ></div>
                  <button
                    disabled={currentPage >= totalPages}
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                    }}
                  >
                    <i className="fas fa-chevron-right"></i>{" "}
                  </button>
                </div>
              </div>
              {isNullData ? (
                <p id="null_data">
                  Vui lòng chọn bản ghi để thêm vào Playlist <i>*</i>
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="content-bottom">
          <button
            type="button"
            onClick={() => {
              // dispatch(setItemPlayList(itemPlayList));
              navigate("/admin/editplaylist");
            }}
          >
            Hủy
          </button>
          <button
            type="submit"
            // onClick={handleSubmit}
          >
            Lưu
          </button>
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
