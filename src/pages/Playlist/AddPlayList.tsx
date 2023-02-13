import React, { useState } from "react";
import { Space, Switch, Tag } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  deleteArrBanghiPlaylist,
  PlayListRedux,
} from "../../redux/playListReducer/playListReducer";
import { KhoBanGhiRedux } from "../../redux/khoBanGhi/khoBanghiReducer";
import { useFormik } from "formik";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";

type Props = {};
const tagsData = ["Pop", "EDM", "Lofi", "Ballad", "Chill", "Mashup"];

export default function AddPlayList({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  //lấy newPlaylist  từ redux
  const { newPlayList } = useSelector((state: RootState) => state.playList);
  console.log(newPlayList);
  const navigate = useNavigate();
  // cấu hình phân pages cho table bản ghi
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(8); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  let totalPages: number = 1;
  if (newPlayList?.arrBanGhi !== undefined) {
    totalPages = Math.ceil(newPlayList?.arrBanGhi.length / limit); // Tính số tổng số pages kho bản ghi
  }
  const [tieuDe, setTieuDe] = useState<string>("");
  console.log(tieuDe);

  const pagesBanGhi = newPlayList?.arrBanGhi?.slice(
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

  const props: UploadProps = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture",
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement("img");
          img.src = reader.result as string;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d")!;
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "red";
            ctx.textBaseline = "middle";
            ctx.font = "33px Arial";
            ctx.fillText("Ant Design", 20, 20);
            canvas.toBlob((result) => resolve(result as any));
          };
        };
      });
    },
  };

  // xử lý toogle
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const renderBanGhiTable = () => {
    if (pagesBanGhi !== undefined) {
      return pagesBanGhi.map((khoBanGhi, index: number) => {
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
            <td className="action">Nghe</td>
            <td
              className="action"
              onClick={() => {
                if (newPlayList.arrBanGhi !== undefined) {
                  console.log("newPlaylist.arBanGhi !== undef");
                  const indexDelete = newPlayList.arrBanGhi.findIndex(
                    (item) => item?.id === khoBanGhi?.id
                  );
                  dispatch(deleteArrBanghiPlaylist(indexDelete));
                  if (newPlayList.arrBanGhi.length === 1) {
                    setIsNullData(true);
                  }
                }
              }}
            >
              Gỡ
            </td>
          </tr>
        );
      });
    }
  };

  const handleSubmit = () => {
    if (tieuDe === "" && newPlayList.arrBanGhi?.length === undefined) {
      message.open({
        type: "error",
        content: "Vui lòng nhập tiêu đề hoặc thêm bản ghi!",
        duration: 0.8,
      });
    } else {
      // newPlayList.tieuDe = tieuDe;
      let newItem: PlayListRedux = {
        anhBia: "",
        arrBanGhi: newPlayList.arrBanGhi,
        chuDe: newPlayList.chuDe,
        desc: newPlayList.desc,
        id: newPlayList.id,
        ngayTao: newPlayList.ngayTao,
        nguoiTao: newPlayList.nguoiTao,
        tieuDe: tieuDe,
        soBanGhi: newPlayList.soBanGhi,
        thoiLuong: newPlayList.thoiLuong,
      };
      console.log({ newItem });
      try {
        if (newItem.id !== undefined) {
          const washingtonRef = doc(db, "playList", newItem.id);
          //updata lên fireStore
          setDoc(washingtonRef, newItem, { merge: true });
          message.open({
            type: "success",
            content: "Cập nhật thành công!",
            duration: 0.8,
          });
          navigate("/admin/playlist");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  const [selectedTags, setSelectedTags] = useState<string[]>(["Chill", "Lofi"]);
  console.log(selectedTags);
  const [arrChuDeSearch, setArrChuDeSearch] = useState<string[]>([]);
  const [valueSearch, setValueSearch] = useState<string>("");
  const handleSearch = (arr: string[], string: string) => {
    return arr.filter((el) => el.toLowerCase().includes(string.toLowerCase()));
  };
  return (
    <div className="addPlaylist">
      <div className="container">
        <div className="content-top">
          <p>
            Playlist <i className="fas fa-chevron-right"></i>Thêm playlist mới
          </p>
          <h1>Thêm Playlist</h1>
        </div>
        <div className="center">
          <div className="content-center">
            <div className="center-left">
              <div className="left-item title-item">
                <p>Ảnh bài:</p>
                <Upload {...props}>
                  <Button id="input_file">
                    <i className="fas fa-cloud-upload-alt"></i> Tải lên
                  </Button>
                </Upload>
              </div>
              <div className="left-item title-item">
                <p>
                  Tiêu đề: <i>*</i>
                </p>
                <input
                  type="text"
                  value={tieuDe}
                  onChange={(e) => setTieuDe(e.target.value)}
                />
              </div>
              <div className="left-item title-item " id="item-list">
                <div className="item">
                  <p>Tổng số </p>
                  <p className="text-right">
                    {newPlayList.arrBanGhi?.length} bản ghi
                  </p>
                </div>
                <div className="item">
                  <p>Tổng thời lượng</p>
                  <p className="text-right">--:--:--</p>
                </div>
              </div>
              <div className="left-item title-item">
                <p>Mô tả:</p>
                <textarea></textarea>
              </div>
              <div className="left-item title-item">
                <p>Chủ đề:</p>
                <div className="select_tag">
                  <div className="list-tag">
                    {selectedTags.map((tag, index) => (
                      <div className="tag-item">
                        <span key={tag}>{tag}</span>
                        <i
                          onClick={() => {
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
                      const arrChuDe = handleSearch(tagsData, e.target.value);
                      setArrChuDeSearch(arrChuDe);
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
            <div className="center-right">
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
              {isNullData && newPlayList.arrBanGhi === undefined ? (
                <p id="null_data">
                  Vui lòng chọn bản ghi để thêm vào Playlist <i>*</i>
                </p>
              ) : (
                <></>
              )}
              <div className="right-button">
                <p>
                  <i>*</i> là những trường thông tin bắt buộc
                </p>
                <div className="btn-list">
                  <button
                    type="button"
                    // onClick={() => navigate("/admin/playlist/xemchitiet")}
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
          <div className="menu">
            <div className="menu-list">
              <div className="menu-item">
                <div
                  className="bg-icon"
                  onClick={() => {
                    navigate("/admin/addbanghiplaylist");
                    console.log("/admin/addbanghiplaylist");
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
    </div>
  );
}
