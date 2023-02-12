import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/configStore";
import { KhoBanGhiRedux } from "../../redux/khoBanGhi/khoBanghiReducer";

type Props = {};

export default function XemChiTietPlayList({}: Props) {
  const styleI = {
    color: "#347AFF",
    opacity: "0.7",
    fontSize: "5px",
  };

  // Lấy itemPlayList tuef redux về
  const { itemPlayList } = useSelector((state: RootState) => state.playList);
  console.log({ itemPlayList });
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(13); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  const totalPages = Math.ceil(itemPlayList?.arrBanGhi?.length / limit); // Tính số tổng số pages
  const newArrPlayList = itemPlayList?.arrBanGhi?.slice(
    indexOfFirstNews,
    indexOfLastNews
  );
  const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
  const navigate = useNavigate();

  useEffect(() => {
    if (itemPlayList?.id == "") {
      navigate("/admin/playlist");
    }
  }, []);
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
    return newArrPlayList.map((banGhi: KhoBanGhiRedux, index: number) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <div className="td-tenBanGhi">
              <p>{banGhi.tenBanGhi}</p>
              <div
                className="td-bottom"
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <p>{banGhi.theLoai}</p>
                <i className="fas fa-circle" style={styleI}></i>
                <p>{banGhi.dinhDang}</p>
                <i className="fas fa-circle" style={styleI}></i>
                <p>{banGhi.thoiLuong}</p>
              </div>
            </div>
          </td>
          <td>{banGhi.caSi}</td>
          <td>{banGhi.tacGia}</td>
          <td className="action">Nghe</td>
          <td className="action">Gỡ</td>
        </tr>
      );
    });
  };
  return (
    <div className="xemChiTietPlayList">
      <div className="container">
        <div className="content_top">
          <p>
            Playlist <i className="fas fa-chevron-right"></i>
            <span onClick={() => navigate("/admin/playlist")}>
              Chi tiết playlist
            </span>
          </p>
          <h1>Playlist {itemPlayList?.tieuDe}</h1>
        </div>
        <div className="content_center">
          <div className="center-left">
            <div className="left-title">
              <div className="title-top title-item">
                <div
                  className="img"
                  // onClick={showModal}
                ></div>
                <h3>{itemPlayList?.tieuDe}</h3>
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
                      <td>{itemPlayList?.arrBanGhi?.length} bản ghi</td>
                    </tr>
                    <tr>
                      <td>Tổng thời lượng:</td>
                      <td>01:02:3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="title-decs title-item">
                <p>{itemPlayList?.desc}</p>
              </div>
              <div className="title-chuDe title-item">
                {itemPlayList?.chuDe?.map((chuDe: string, index: number) => {
                  return <p key={index}>{chuDe}</p>;
                })}
              </div>
              <div className="title-bottom title-item">
                <div className="bottom-item">
                  <i className="fas fa-globe-asia"></i>
                  <p>Hiển thị ở chế độ công khai</p>
                </div>
                <div className="bottom-item">
                  <i className="fas fa-random"></i>
                  <p>Phát ngẫu nhiên</p>
                </div>
                <div className="bottom-item">
                  <i className="fas fa-retweet"></i>
                  <p>Lặp lại</p>
                </div>
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
                <tbody>{renderBanGhiTable()}</tbody>
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
          <div className="center-right">
            <div className="menu-list">
              <div className="menu-item">
                <div
                  className="bg-icon"
                  onClick={() => {
                    console.log({ itemPlayList });
                    navigate("/admin/editplaylist");
                  }}
                >
                  <i className="fas fa-edit"></i>
                </div>
                <p>Chỉnh sửa</p>
              </div>
              <div className="menu-item">
                <div className="bg-icon">
                  <i className="far fa-trash-alt"></i>
                </div>
                <p>Xóa playlist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
