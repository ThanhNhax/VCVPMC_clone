import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ItemPlayList from "../../Components/ItemPlayList";
import { AppDispatch, RootState } from "../../redux/configStore";
import moment from "moment";
import {
  getArrPlayListFireStore,
  PlayListRedux,
  setItemPlayList,
} from "../../redux/playListReducer/playListReducer";

export default function Playlist() {
  //Lấy Arr playList từ reudux về
  const { arrPlayList } = useSelector((state: RootState) => state.playList);
  const dispatch: AppDispatch = useDispatch();
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(13); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  const totalPages = Math.ceil(arrPlayList.length / limit); // Tính số tổng số pages
  const newArrPlayList = arrPlayList.slice(indexOfFirstNews, indexOfLastNews);
  const [isStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages

  const [isTable, setIsTable] = useState<boolean>(true); // hiển thị dưới dạng table hoặc dạng card
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getArrPlayListFireStore());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChiTiet = (item: PlayListRedux) => {
    console.log(item.id);
    // cập nhật itemPlayList lên redux
    dispatch(setItemPlayList(item));
  };
  ////
  // handle thoi luong

  const renderPlayListTable = () => {
    return newArrPlayList.map((item: PlayListRedux, index: number) => {
      return (
        <tr key={index}>
          <td className="text_right">{index + 1}</td>
          <td>{item.tieuDe}</td>
          <td className="text_right">{item.arrBanGhi.length}</td>
          <td className="text_right">{item.thoiLuong}</td>
          <td className="td-chuDe">
            {item?.chuDe?.map((chuDe: string | null, index: number) => {
              return <p key={index}>{chuDe}</p>;
            })}
          </td>
          <td>{moment(item.ngayTao).format("DD/mm/yyy")}</td>
          <td>{item.nguoiTao}</td>
          <td className="action">
            <Link
              to={"/admin/playlist/xemchitiet"}
              onClick={() => handleChiTiet(item)}
            >
              Chi tiết
            </Link>
          </td>
        </tr>
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
  const renderPlayListCard = () => {
    return newArrPlayList.map((item: PlayListRedux, index: number) => {
      return <ItemPlayList item={item} isCheck={false} key={index} />;
    });
  };
  return (
    <div className="playlist">
      <h1>Playlist</h1>
      <div className="playlist_container">
        <div className="playlist_content">
          <div className="playlist_content-left">
            <div className="content-title">
              <form className="content-search">
                <div id="input_search">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Tên chủ đạo, người tạo"
                  />
                  <i className="fas fa-search"></i>
                </div>
              </form>
              <div className="title-item">
                <i
                  style={isTable ? { color: "#FF7506" } : {}}
                  onClick={() => {
                    setIsTable(true);
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
                className="render-table"
                style={isTable ? { display: "block" } : { display: "none" }}
              >
                <div className="wrap-table">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Số bản ghi</th>
                        <th>Thời lượng</th>
                        <th>Chủ đề</th>
                        <th>Ngày tạo</th>
                        <th>Người tạo</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{renderPlayListTable()}</tbody>
                  </table>
                </div>
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
              <div
                className="render-card"
                style={!isTable ? { display: "block" } : { display: "none" }}
              >
                <div className="card-container">
                  <div className="card-list">{renderPlayListCard()}</div>
                  <div className="pagination-card">
                    <div className="pagination_left">
                      <p>
                        Hiển thị
                        <input defaultValue={8} />
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
          </div>
          <div className="playlist_content-addPlaylsit">
            <div
              className="bg_icon"
              onClick={() => {
                navigate("/admin/addplaylist");
                console.log("/admin/addplaylist");
              }}
            >
              <i className="fas fa-plus"></i>
            </div>
            <p>Thêm Playlist</p>
          </div>
        </div>
      </div>
    </div>
  );
}
