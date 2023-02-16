import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChiTietHopDong() {
  const [isActive, setIsActive] = useState<boolean>(true);

  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const [limit, setLimit] = useState<number>(13); // change số item hiển thị
  const indexOfLastNews = currentPage * limit; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  // const totalPages = Math.ceil(arrPlayList.length / limit); // Tính số tổng số pages
  // const newArrPlayList = arrPlayList.slice(indexOfFirstNews, indexOfLastNews);
  const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
  const navigate = useNavigate();
  return (
    <div className="chiTietHopDong">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý<i className="fas fa-chevron-right"></i>Quản lý hợp đồng
            <i className="fas fa-chevron-right"></i>Chi tiết
          </p>
          <h1>Chi tiết hợp đồng uỷ quyền bài hát - BH123</h1>
          <div className="tag">
            <p
              className={isActive ? "active" : ""}
              onClick={() => setIsActive(true)}
            >
              Thông tin hợp đồng
            </p>
            <p
              className={!isActive ? "active" : ""}
              onClick={() => setIsActive(false)}
            >
              Tác phẩm uỷ quyền
            </p>
          </div>
        </div>
        <div className="container-bottom">
          <div
            className="container-center"
            style={isActive ? { display: "flex" } : { display: "none" }}
          >
            <div className="wrap-center-list">
              <div className="center-list">
                <div className="center-item">
                  <div className="item-title">
                    <table>
                      <tbody>
                        <tr>
                          <td>Số hợp đồng:</td>
                          <td>BH123</td>
                        </tr>
                        <tr>
                          <td>Tên hợp đồng:</td>
                          <td>Hợp đồng uỷ quyền tác phẩm âm nhạc</td>
                        </tr>
                        <tr>
                          <td>Ngày hiệu lực:</td>
                          <td>01/05/2021</td>
                        </tr>
                        <tr>
                          <td>Ngày hết hạn:</td>
                          <td>01/05/2021</td>
                        </tr>
                        <tr>
                          <td>Tình trạng:</td>
                          <td>Còn thời hạn</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="center-item">
                  <p>Đính kèm tệp:</p>
                  <div className="file-dinhKem">
                    <div className="file-item">
                      <i className="fas fa-file-code"></i>
                      <p>hetthuongcannho.doc</p>
                    </div>
                    <div className="file-item">
                      <i className="fas fa-file-code"></i>
                      <p>hetthuongcannho.doc</p>
                    </div>
                    <div className="file-item">
                      <i className="fas fa-file-code"></i>
                      <p>hetthuongcannho.doc</p>
                    </div>
                  </div>
                </div>
                <div className="center-item">
                  <div className="item-title">
                    <h5>
                      <div className="bg-icon">
                        <i className="fas fa-info"></i>
                      </div>
                      Mức nhuận bút
                    </h5>
                    <table>
                      <tbody>
                        <tr>
                          <td>Quyền tác giả:</td>
                          <td>0%</td>
                        </tr>
                        <tr>
                          <td>Quyền liên quan:</td>
                        </tr>
                        <tr>
                          <td>Quyền của người biểu diễn:</td>
                          <td>50%</td>
                        </tr>
                        <tr>
                          <td>
                            Quyền của nhà sản xuất:
                            <br />
                            (Bản ghi/video)
                          </td>
                          <td>50%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="center-list">
                <div className="center-item">
                  <div className="item-title">
                    <h5>Thông tin pháp nhân uỷ quyền</h5>
                    <table>
                      <tbody>
                        <tr>
                          <td>Pháp nhân uỷ quyền:</td>
                          <td>Tổ chức</td>
                        </tr>
                        <tr>
                          <td>Tên tổ chức:</td>
                          <td>Cty TNHH TM DV ABCEDEF</td>
                        </tr>
                        <tr>
                          <td>Mã số thuế:</td>
                          <td>92387489</td>
                        </tr>
                        <tr>
                          <td>Ngân hàng:</td>
                          <td>ACB - Ngân hàng Á Châu</td>
                        </tr>
                        <tr>
                          <td>Quốc tịch:</td>
                          <td>Việt Nam</td>
                        </tr>
                        <tr>
                          <td>Địa chỉ:</td>
                          <td>
                            69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh,
                            Thành phố Hồ Chí Minh
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="center-item">
                  <div className="item-title">
                    <table>
                      <tbody>
                        <tr>
                          <td>Người đại diện:</td>
                          <td>Nguyễn Văn A</td>
                        </tr>
                        <tr>
                          <td>Chức vụ:</td>
                          <td>Giám đốc</td>
                        </tr>
                        <tr>
                          <td>Ngày sinh:</td>
                          <td>11/01/1988</td>
                        </tr>
                        <tr>
                          <td>Giới tính:</td>
                          <td>Nam</td>
                        </tr>
                        <tr>
                          <td>CMND/CCCD:</td>
                          <td>24147456</td>
                        </tr>
                        <tr>
                          <td>Ngày cấp:</td>
                          <td>2/05/2008</td>
                        </tr>
                        <tr>
                          <td>Nơi cấp:</td>
                          <td>Tp.Hồ Chí Minh</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="center-item">
                  <div className="item-title">
                    <table>
                      <tbody>
                        <tr>
                          <td>Quốc tịch:</td>
                          <td>Việt Nam</td>
                        </tr>
                        <tr>
                          <td>Nơi cư trú:</td>
                          <td>
                            69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh,
                            Thành phố Hồ Chí Minh
                          </td>
                        </tr>
                        <tr>
                          <td>Số điện thoại:</td>
                          <td>012456789</td>
                        </tr>
                        <tr>
                          <td>Tên đăng nhập:</td>
                          <td>nguyenvana1</td>
                        </tr>
                        <tr>
                          <td>Mật khẩu:</td>
                          <td>123456</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu">
              <div className="menu-item">
                <div className="bg-icon">
                  <i className="fas fa-edit"></i>
                </div>
                <p>Chỉnh sửa hợp đồng</p>
              </div>
              <div className="menu-item">
                <div className="bg-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <p>Gia hạn hợp đồng</p>
              </div>
              <div className="menu-item">
                <div className="bg-icon">
                  <i className="fas fa-times"></i>
                </div>
                <p>Huỷ hợp đồng</p>
              </div>
            </div>
          </div>
          <div
            className="container-tacPhamUyQuyen"
            style={!isActive ? { display: "flex" } : { display: "none" }}
          >
            <div className="wrap-tacPhamUyQuyen-content">
              <div className="tacPhamUyQuyen-title">
                <div className="title-item">
                  <label htmlFor="">Tình trạng phê duyệt</label>
                  <select>
                    <option value="">Tất cả</option>
                    <option value="">Mới</option>
                    <option value="">Đã phê duyệt</option>
                    <option value="">Từ chối</option>
                  </select>
                </div>
                <div className="title-search">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Tên bản ghi, tên ca sĩ, tác giả,..."
                  />
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <div className="tacPhamUyQuyen-table">
                <div className="wrap-table">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên bản ghi</th>
                        <th>Mã ISRC</th>
                        <th>Ca sĩ</th>
                        <th>Tác giả</th>
                        <th>Ngày tải</th>
                        <th>Tình trạng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="td-tenBanGhi">
                            <p>Gorgeous Wooden Bike</p>
                            <div className="td-chucNang">
                              <p>Ballad</p>
                              <i className="fas fa-circle"></i>
                              <p>Audio</p>
                              <i className="fas fa-circle"></i>
                              <p>3:12</p>
                            </div>
                          </div>
                        </td>
                        <td>VNA1423525</td>
                        <td>Vương Anh Tú</td>
                        <td>Vương Phong</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="tinhTrang moi">Mới</td>
                        <td className="action">Nghe</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="td-tenBanGhi">
                            <p>Gorgeous Wooden Bike</p>
                            <div className="td-chucNang">
                              <p>Ballad</p>
                              <i className="fas fa-circle"></i>
                              <p>Audio</p>
                              <i className="fas fa-circle"></i>
                              <p>3:12</p>
                            </div>
                          </div>
                        </td>
                        <td>VNA1423525</td>
                        <td>Vương Anh Tú</td>
                        <td>Vương Phong</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="tinhTrang daPheDuyet">Đã phê duyệt</td>
                        <td className="action">Nghe</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="td-tenBanGhi">
                            <p>Gorgeous Wooden Bike</p>
                            <div className="td-chucNang">
                              <p>Ballad</p>
                              <i className="fas fa-circle"></i>
                              <p>Audio</p>
                              <i className="fas fa-circle"></i>
                              <p>3:12</p>
                            </div>
                          </div>
                        </td>
                        <td>VNA1423525</td>
                        <td>Vương Anh Tú</td>
                        <td>Vương Phong</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="tinhTrang biTuChoi">Bị từ chối</td>
                        <td className="action">Nghe</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="td-tenBanGhi">
                            <p>Gorgeous Wooden Bike</p>
                            <div className="td-chucNang">
                              <p>Ballad</p>
                              <i className="fas fa-circle"></i>
                              <p>Audio</p>
                              <i className="fas fa-circle"></i>
                              <p>3:12</p>
                            </div>
                          </div>
                        </td>
                        <td>VNA1423525</td>
                        <td>Vương Anh Tú</td>
                        <td>Vương Phong</td>
                        <td>01/04/2021 15:53:13</td>
                        <td className="tinhTrang moi">Mới</td>
                        <td className="action">Nghe</td>
                      </tr>
                    </tbody>
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
                      // dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                    ></div>
                    <button
                      // disabled={currentPage >= totalPages}
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
            <div className="menu">
              <div className="menu-list">
                <div className="menu-item">
                  <div
                    className="bg-icon"
                    onClick={() =>
                      navigate("/admin/quanLyHopDong/chiTiet/chinhSuaThongTin")
                    }
                  >
                    <i className="fas fa-edit"></i>
                  </div>
                  <p>Chỉnh sửa tác phẩm</p>
                </div>
                <div className="menu-item">
                  <div className="bg-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <p>Gia hạn hợp đồng</p>
                </div>
                <div className="menu-item">
                  <div className="bg-icon">
                    <i className="fas fa-undo-alt"></i>
                  </div>
                  <p>Hủy hợp đồng</p>
                </div>
                <div className="menu-item">
                  <div className="bg-icon">
                    <i className="fas fa-plus"></i>
                  </div>
                  <p>Thêm bản ghi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}