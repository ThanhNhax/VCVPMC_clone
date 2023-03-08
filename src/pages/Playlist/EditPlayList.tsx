/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { message, Modal, Switch } from "antd";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../../FireStore/fireStore";
import { AppDispatch, RootState } from "../../redux/configStore";
import { KhoBanGhiRedux } from "../../redux/khoBanGhi/khoBanghiReducer";
import {
  deleteArrBanGhiRedux,
  setItemPlayList,
} from "../../redux/playListReducer/playListReducer";
import {
  getArrTabFireStore,
  getArrTheLoaiTacPhamFireStore,
  TheLoaiTacPhamRedux,
} from "../../redux/theLoaiTacPham/theLoaiTacPhamReducer";

// const tagsData = ["Pop", "EDM", "Lofi", "Ballad", "Chill", "Mashup"];

export const tongThoiLuong = (arr: KhoBanGhiRedux[]) => {
  let tam: string = "";
  let gio: number = 0;
  let phut: number = 0;
  let giay: number = 0;

  arr.map((banGhi: KhoBanGhiRedux) => {
    if (banGhi.thoiLuong) {
      let index = banGhi.thoiLuong.search(":");
      console.log({ index });
      giay += parseInt(
        banGhi.thoiLuong.slice(index + 1, banGhi.thoiLuong.length)
      );
      phut += parseInt(banGhi.thoiLuong.slice(0, index));
      console.log({ giay, phut }, banGhi.thoiLuong);
      if (giay >= 60) {
        giay = giay - 60;
        phut += 1;
      } else if (phut > 59) {
        phut = 0;
        gio += 1;
      }
      tam = gio + ":" + phut + ":" + giay;
      console.log({ tam });
    }
  });
  return tam;
};

export default function EditPlayList() {
  // Lấy data tag về từ redux
  const { arrTag } = useSelector((state: RootState) => state.theLoaiTacPham);

  // Lấy itemPlayList từ redux về
  const { itemPlayList } = useSelector((state: RootState) => state.playList);
  console.log({ itemPlayList });
  const dispatch: AppDispatch = useDispatch();
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit] = useState<number>(12); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  const totalPages = Math.ceil(itemPlayList?.arrBanGhi?.length / limit); // Tính số tổng số pages
  const newArrPlayList = itemPlayList.arrBanGhi.slice(
    indexOfFirstNews,
    indexOfLastNews
  );
  const [isStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
  const navigate = useNavigate();
  const styleI = {
    color: "#347AFF",
    opacity: "0.7",
    fontSize: "5px",
  };
  // xử lý toogle
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

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
    if (itemPlayList?.id === "") {
      navigate("/admin/playlist");
    }
  }, []);
  //call date  thể loại để  render ra các tag thể loại
  useEffect(() => {
    dispatch(getArrTabFireStore());
    console.log("call The loai");
  }, []);

  console.log("tong thoi Luong:", tongThoiLuong(itemPlayList.arrBanGhi));
  const handleSubmit = async () => {
    console.log("id: ", itemPlayList.id, itemPlayList);
    if (itemPlayList.id !== undefined) {
      const itemPlaylistRef = doc(db, "playList", itemPlayList.id);

      try {
        setDoc(
          itemPlaylistRef,
          {
            arrBanGhi: itemPlayList.arrBanGhi,
            chuDe: selectedTags,
            thoiLuong: tongThoiLuong(itemPlayList.arrBanGhi),
          },
          { merge: true }
        );
        message.open({
          type: "success",
          content: "Cập nhật thành công!",
          duration: 0.8,
        });
        //cập nhật lại itemPlayList
        dispatch(setItemPlayList(itemPlayList));
        navigate("/admin/playlist/xemchitiet");
      } catch (e) {
        console.log({ e });
      }
    }
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

  const renderBanGhiTable = () => {
    return newArrPlayList.map(
      (banGhi: KhoBanGhiRedux | undefined, index: number) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <div className="td-tenBanGhi">
                <p>{banGhi?.tenBanGhi}</p>
                <div
                  className="td-bottom"
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  <p>{banGhi?.theLoai}</p>
                  <i className="fas fa-circle" style={styleI}></i>
                  <p>{banGhi?.dinhDang}</p>
                  <i className="fas fa-circle" style={styleI}></i>
                  <p>{banGhi?.thoiLuong}</p>
                </div>
              </div>
            </td>
            <td>{banGhi?.caSi}</td>
            <td>{banGhi?.tacGia}</td>
            <td className="action" onClick={showModal}>
              Nghe
            </td>
            <td
              className="action"
              onClick={() => {
                if (itemPlayList.arrBanGhi !== undefined) {
                  const indexDelete = itemPlayList.arrBanGhi.findIndex(
                    (item) => item?.id === banGhi?.id
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
  };

  const [arrChuDeSearch, setArrChuDeSearch] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>(["Chill", "Lofi"]);
  const [valueSearch, setValueSearch] = useState<string>("");
  const handleSearch = (arr: string[], string: string) => {
    return arr.filter((el) => el.toLowerCase().includes(string.toLowerCase()));
  };

  return (
    <div className="editplaylist">
      <div className="container">
        <div className="content_top">
          <p>
            Playlist <i className="fas fa-chevron-right"></i>
            Chi tiết playlist
          </p>
          <h1>Playlist {itemPlayList?.tieuDe}</h1>
        </div>
        <div className="content_center">
          <div className="center-left">
            <div className="left-title">
              <div className="title-top title-item">
                <div className="img" onClick={showModal}></div>
                <h3>Tiêu đề</h3>
                <input
                  type="text"
                  placeholder="Tên tiêu đề"
                  defaultValue={itemPlayList.tieuDe ? itemPlayList.tieuDe : ""}
                />
              </div>
              <div className="title-table title-item">
                <table>
                  <tbody>
                    <tr>
                      <td>Người tạo:</td>
                      <td>{itemPlayList?.nguoiTao}</td>
                    </tr>
                    <tr>
                      <td>Tổng số:</td>
                      <td>
                        {itemPlayList?.arrBanGhi?.length
                          ? itemPlayList.arrBanGhi.length
                          : 0}
                        bản ghi
                      </td>
                    </tr>
                    <tr>
                      <td>Tổng thời lượng:</td>
                      <td>{tongThoiLuong(itemPlayList.arrBanGhi)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="title-decs title-item">
                <h5>Mô tả</h5>
                <textarea placeholder="Thêm mô tả" />
              </div>
              <div className="title-chuDe title-item">
                <h5>Chủ đề:</h5>
                <div className="select_tag">
                  <div className="list-tag">
                    {selectedTags.map((tag, index) => (
                      <div className="tag-item" key={tag}>
                        <span>{tag}</span>
                        <i
                          onClick={() => {
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            let selectedTagsDelete = selectedTags.splice(
                              index,
                              1
                            );
                            setSelectedTags([...selectedTags]);
                          }}
                        >
                          &times;
                        </i>
                      </div>
                    ))}
                  </div>
                  <input
                    type="search"
                    id="search-tag"
                    value={valueSearch}
                    onChange={(e) => {
                      const arrChuDe = handleSearch(arrTag, e.target.value);
                      setArrChuDeSearch(arrChuDe);
                      setValueSearch(e.target.value);
                    }}
                    placeholder="Nhập chủ đề"
                  />
                  <div className="render-table-tag">
                    {arrChuDeSearch.map((el) => (
                      <div className="table-list" key={el}>
                        <span
                          onClick={() => {
                            console.log(el);
                            setSelectedTags([...selectedTags, el]);
                            setArrChuDeSearch([]);
                            setValueSearch("");
                          }}
                        >
                          {el}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="title-bottom title-item">
                <div className="bottom-item">
                  <Switch defaultChecked onChange={onChange} />
                  <p>Hiển thị ở chế độ công khai</p>
                </div>
              </div>
            </div>
            <div className="left-table">
              <div className="wrap-table">
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên bản ghi</th>
                      <th>Ca sĩ</th>
                      <th>Tác giả</th>
                    </tr>
                  </thead>
                  <tbody>{renderBanGhiTable()}</tbody>
                </table>
              </div>
              <div className="pagination-table">
                <div className="pagination_left">
                  <p>
                    Hiển thị
                    <input defaultValue="12"></input>
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
              <div className="left-table-btn">
                <p>
                  <i>*</i> là những trường thông tin bắt buộc
                </p>
                <div className="btn-list">
                  <button
                    type="button"
                    onClick={() => navigate("/admin/playlist/xemchitiet")}
                  >
                    Hủy
                  </button>
                  <button type="submit" onClick={handleSubmit}>
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="center-right">
            <div className="menu-list">
              <div className="menu-item">
                <div
                  className="bg-icon"
                  onClick={() => {
                    console.log({ itemPlayList });
                    navigate("/admin/addbanghi");
                  }}
                >
                  <i className="fas fa-plus"></i>
                </div>
                <p>Thêm bản ghi</p>
              </div>
            </div>
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
          // src="https://www.youtube.com/embed/PoXDg2saXX8"
          title="YouTube video player"
          // frameborder="0"
        ></video>
      </Modal>
    </div>
  );
}
