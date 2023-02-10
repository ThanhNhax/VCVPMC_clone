import React, { useState } from "react";

export default function Playlist() {
  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(12); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  // const totalPages = Math.ceil(arrKhoBanGhi.length / limit); // Tính số tổng số pages
  // const newArrKho = arrKhoBanGhi.slice(indexOfFirstNews, indexOfLastNews);
  const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
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
                  // style={isTable ? { color: "#FF7506" } : {}}
                  // onClick={() => {
                  //   setIsTable(true);
                  //   setLimit(12);
                  //   setCurrentPage(1);
                  // }}
                  className="fas fa-list-ul"
                ></i>
                <i
                  // onClick={() => {
                  //   setIsTable(false);
                  //   setLimit(8);
                  //   setCurrentPage(1);
                  // }}
                  // style={
                  //   !isTable
                  //     ? { color: "#FF7506", marginLeft: "10px" }
                  //     : { marginLeft: "10px" }
                  // }
                  className="fas fa-border-all"
                ></i>
              </div>
            </div>
            <div className="content-render">
              <div className="render-table">
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
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Top ca khúc 2021</td>
                      <td>20</td>
                      <td>01:04:3</td>
                      <td className="td-chuDe">
                        <p>Pop</p>
                        <p>Chill</p>
                        <p>Songs</p>
                      </td>
                      <td>22/10/2020</td>
                      <td>Cindy Cường</td>
                      <td className="action">Chi tiết</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Top ca khúc 2021</td>
                      <td>20</td>
                      <td>01:04:3</td>
                      <td className="td-chuDe">
                        <p>Pop</p>
                        <p>Chill</p>
                        <p>Songs</p>
                      </td>
                      <td>22/10/2020</td>
                      <td>Cindy Cường</td>
                      <td className="action">Chi tiết</td>
                    </tr>
                  </tbody>
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
                      // dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                    ></div>
                    <button
                      // disabled={currentPage >= totalPages}
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                      }}
                    >{`>`}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="playlist_content-addPlaylsit">
            <div className="bg_icon">
              {/* <i className="fas fa-bars"></i> */}
              <i className="fas fa-plus"></i>
            </div>
            <p>Thêm Playlist</p>
          </div>
        </div>
      </div>
    </div>
  );
}
