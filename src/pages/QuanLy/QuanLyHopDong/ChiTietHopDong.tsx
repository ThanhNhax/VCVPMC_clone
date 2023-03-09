/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button, message, Modal, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/configStore";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../FireStore/fireStore";
import moment from "moment";
import { KhoBanGhiRedux } from "../../../redux/khoBanGhi/khoBanghiReducer";

export default function ChiTietHopDong() {
  const [isActive, setIsActive] = useState<boolean>(true);
  console.log({ isActive });
  const item = useSelector(
    (state: RootState) => state.hopDong.itemHopDongUyQuyen
  );
  const navigate = useNavigate();
  const [isToChuc, setIsToChuc] = useState<boolean>(
    item?.tenToChuc !== "" ? true : false
  );
  console.log({ item });
  useEffect(() => {
    if (!item) {
      navigate("/admin/quanLyHopDong");
    }
  }, []);

  // xử  lý modal popup
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenHuy, setIsModalOpenHuy] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModalHuy = () => {
    setIsModalOpenHuy(true);
  };

  const handleOkHuy = () => {
    setIsModalOpenHuy(false);
    // updata trạng thái thành đã hủy
    if (item?.id) {
      const washingtonRef = doc(db, "hopDongUyQyen", item?.id);
      updateDoc(washingtonRef, {
        hieuLucHopDong: "Đã hủy",
      });
      message.open({
        type: "success",
        content: "Hủy thành công!",
        duration: 0.8,
      });
      navigate("/admin/quanLyHopDong");
    }
  };

  const handleCancelHuy = () => {
    setIsModalOpenHuy(false);
  };
  console.log(item?.ngayHetHan);
  const d = new Date(`${moment(item?.ngayHetHan).format("YYYY-MM-DD")}`);
  console.log("miliseo:", d.getDate());

  const tuNgay =
    d.getDate() + 1 + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  console.log({ tuNgay });
  const renderTableTacPham = () => {
    return item?.arrTacPhamUyQuyen.map(
      (tacPham: KhoBanGhiRedux, index: number) => (
        <tr key={index}>
          <td className="text_right">{index + 1}</td>
          <td>
            <div className="td-tenBanGhi">
              <p>{tacPham.tenBanGhi}</p>
              <div className="td-chucNang">
                <p>{tacPham.theLoai}</p>
                <i className="fas fa-circle"></i>
                <p>{tacPham.dinhDang}</p>
                <i className="fas fa-circle"></i>
                <p>{tacPham.thoiLuong}</p>
              </div>
            </div>
          </td>
          <td>{tacPham.maISRC}</td>
          <td>{tacPham.caSi}</td>
          <td>{tacPham.tacGia}</td>
          <td>{tacPham.ngayTai}</td>
          <td className={tacPham?.trangThai + " tinhTrang"}>
            {tacPham?.trangThai}
          </td>
          <td className="action">Nghe</td>
        </tr>
      )
    );
  };

  return (
    <div className="chiTietHopDong">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý<i className="fas fa-chevron-right"></i>Quản lý hợp đồng
            <i className="fas fa-chevron-right"></i>Chi tiết
          </p>
          <h1>Chi tiết hợp đồng uỷ quyền bài hát - {item?.soHopDong}</h1>
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
                          <td>{item?.soHopDong}</td>
                        </tr>
                        <tr>
                          <td>Tên hợp đồng:</td>
                          <td>{item?.tenHopDong}</td>
                        </tr>
                        <tr>
                          <td>Ngày hiệu lực:</td>
                          <td>{item?.ngayHieuLuc}</td>
                        </tr>
                        <tr>
                          <td>Ngày hết hạn:</td>
                          <td>{item?.ngayHetHan}</td>
                        </tr>
                        <tr>
                          <td>Tình trạng:</td>
                          <td className={item?.hieuLucHopDong}>
                            {item?.hieuLucHopDong}
                          </td>
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
              {/* hiển thị khi pháp nhan ủy quyền là cá nhân */}
              <div
                className="center-list"
                style={!isToChuc ? { display: "flex" } : { display: "none" }}
              >
                <div className="center-item">
                  <div className="item-title">
                    <h5>Thông tin pháp nhân uỷ quyền</h5>
                    <table>
                      <tbody>
                        <tr>
                          <td>Pháp nhân uỷ quyền:</td>
                          <td>
                            {item?.tenToChuc !== "" ? "Tổ Chức" : "Cá nhân"}
                          </td>
                        </tr>
                        <tr>
                          <td>Tên người uỷ quyền:</td>
                          <td>{item?.nguoiUyQuyen}</td>
                        </tr>
                        <tr>
                          <td>Ngày sinh:</td>
                          <td>{item?.ngaySinh}</td>
                        </tr>
                        <tr>
                          <td>Giới tính:</td>
                          <td>{item?.gioiTinh}</td>
                        </tr>
                        <tr>
                          <td>Số điện thoại:</td>
                          <td>{item?.soDienThoai}</td>
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
                          <td>Số CMND/ CCCD:</td>
                          <td>{item?.cmnd}</td>
                        </tr>
                        <tr>
                          <td>Ngày cấp:</td>
                          <td>{item?.ngayCap}</td>
                        </tr>
                        <tr>
                          <td>Nơi cấp:</td>
                          <td>{item?.noiCap}</td>
                        </tr>
                        <tr>
                          <td>Mã số thuế:</td>
                          <td>{item?.maSoThue}</td>
                        </tr>
                        <tr>
                          <td>Nơi cư trú:</td>
                          <td>{item?.noiCuTru}</td>
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
                          <td>Email:</td>
                          <td>{item?.email}</td>
                        </tr>
                        <tr>
                          <td>Tài khoản đăng nhập:</td>
                          <td>{item?.tenDangNhap}</td>
                        </tr>
                        <tr>
                          <td>Mật khẩu:</td>
                          <td>{item?.matKhau}</td>
                        </tr>
                        <tr>
                          <td>Số tài khoản:</td>
                          <td>{item?.soTaiKhoan}</td>
                        </tr>
                        <tr>
                          <td>Ngân hàng:</td>
                          <td>{item?.nganHang}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="center-list"
                style={isToChuc ? { display: "flex" } : { display: "none" }}
              >
                <div className="center-item">
                  <div className="item-title">
                    <h5>Thông tin pháp nhân uỷ quyền</h5>
                    <table>
                      <tbody>
                        <tr>
                          <td>Pháp nhân uỷ quyền:</td>
                          <td>
                            {item?.tenToChuc !== "" ? "Tổ Chức" : "Cá nhân"}
                          </td>
                        </tr>
                        <tr>
                          <td>Tên tổ chức:</td>
                          <td>{item?.tenToChuc}</td>
                        </tr>
                        <tr>
                          <td>Mã số thuế:</td>
                          <td>{item?.maSoThue}</td>
                        </tr>
                        <tr>
                          <td>Ngân hàng:</td>
                          <td>{item?.nganHang}</td>
                        </tr>
                        <tr>
                          <td>Quốc tịch:</td>
                          <td>{item?.quocTich}</td>
                        </tr>
                        <tr>
                          <td>Địa chỉ:</td>
                          <td>{item?.diaChi}</td>
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
                          <td>{item?.nguoiDaiDien}</td>
                        </tr>
                        <tr>
                          <td>Chức vụ:</td>
                          <td>{item?.chucVu}</td>
                        </tr>
                        <tr>
                          <td>Ngày sinh:</td>
                          <td>{item?.ngaySinh}</td>
                        </tr>
                        <tr>
                          <td>Giới tính:</td>
                          <td>{item?.gioiTinh}</td>
                        </tr>
                        <tr>
                          <td>CMND/CCCD:</td>
                          <td>{item?.cmnd}</td>
                        </tr>
                        <tr>
                          <td>Ngày cấp:</td>
                          <td>{item?.ngayCap}</td>
                        </tr>
                        <tr>
                          <td>Nơi cấp:</td>
                          <td>{item?.noiCap}</td>
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
                          <td>{item?.quocTich}</td>
                        </tr>
                        <tr>
                          <td>Nơi cư trú:</td>
                          <td>{item?.noiCuTru}</td>
                        </tr>
                        <tr>
                          <td>Số điện thoại:</td>
                          <td>{item?.soDienThoai}</td>
                        </tr>
                        <tr>
                          <td>Tên đăng nhập:</td>
                          <td>{item?.tenDangNhap}</td>
                        </tr>
                        <tr>
                          <td>Mật khẩu:</td>
                          <td>{item?.matKhau}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu">
              <div className="menu-item">
                <div
                  className="bg-icon"
                  onClick={() =>
                    navigate("/admin/quanLyHopDong/chiTiet/chinhSuaThongTin")
                  }
                >
                  <i className="fas fa-edit"></i>
                </div>
                <p>Chỉnh sửa hợp đồng</p>
              </div>
              <div className="menu-item">
                <div className="bg-icon" onClick={showModal}>
                  <i className="fas fa-file-alt"></i>
                </div>
                <p>Gia hạn hợp đồng</p>
              </div>
              <div className="menu-item">
                <div className="bg-icon" onClick={showModalHuy}>
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
                    <tbody>{renderTableTacPham()}</tbody>
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
                    // disabled={currentPage === 1}
                    // onClick={() => {
                    //   if (currentPage === 1) {
                    //     setCurrentPage(1);
                    //   }
                    //   setCurrentPage(currentPage - 1);
                    // }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <div
                      id="btnPage"
                      // dangerouslySetInnerHTML={renderButtonPage(totalPages)}
                    ></div>
                    <button
                    // disabled={currentPage >= totalPages}
                    // onClick={() => {
                    //   setCurrentPage(currentPage + 1);
                    // }}
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
                  <div className="bg-icon" onClick={showModal}>
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <p>Gia hạn hợp đồng</p>
                </div>
                <div className="menu-item">
                  <div className="bg-icon" onClick={showModalHuy}>
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
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        wrapClassName="modal-giaHanHopDong"
        width={960}
      >
        <div className="modal-container">
          <h5>Gia hạn uỷ quyền tác phẩm</h5>
          <div className="content-top">
            <div className="thoGianGianHan">
              <p>
                Thời gian gia hạn <i>*</i>
              </p>
              <p>Từ ngày: {moment(tuNgay).format("DD/MM/YYYY")}</p>
              <div className="form-group">
                <label htmlFor="">Đến ngày:</label>
                <input type="date" name="" id="" />
              </div>
              <p>
                Lưu ý: Thời gian bắt đầu gia hạn hợp đồng mới được tính sau ngày
                hết hạn hợp đồng cũ một ngày.
              </p>
            </div>
            <div className="mucNhuanBut">
              <p>
                Mức nhuận bút <i>*</i>
              </p>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="quyen"
                  checked={!isChecked ? true : false}
                  onChange={() => setIsChecked(false)}
                />
                <label htmlFor="">Quyền tác giả</label>
                <input
                  type="text"
                  id="%"
                  defaultValue={"0"}
                  disabled={isChecked ? true : false}
                />
                <label htmlFor="%">%</label>
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  checked={isChecked ? true : false}
                  onChange={() => setIsChecked(true)}
                />
                <label htmlFor="">Quyền liên quan:</label>
              </div>
              <div className="form-list">
                <div className="form-group">
                  <input type="checkbox" checked={isChecked ? true : false} />
                  <label htmlFor="">Quyền của người biểu diễn</label>{" "}
                  <input
                    type="text"
                    defaultValue={"50"}
                    disabled={!isChecked ? true : false}
                  />
                  <label htmlFor="">%</label>
                </div>
                <div className="form-group">
                  <input type="checkbox" checked={isChecked ? true : false} />
                  <label htmlFor="">
                    Quyền của nhà sản xuất
                    <br />
                    (bản ghi/video)
                  </label>
                  <input
                    type="text"
                    defaultValue={"50"}
                    disabled={!isChecked ? true : false}
                  />
                  <label htmlFor="">%</label>
                </div>
              </div>
            </div>
          </div>
          <div className="content-bottom">
            <div className="form-group">
              <label htmlFor="">Đính kèm tệp:</label>
              <div className="upload-file">
                <Upload>
                  <Button id="input_file">
                    <i className="fas fa-cloud-upload-alt"></i> Tải lên
                  </Button>
                </Upload>
                <p>
                  <i className="fas fa-file-word"></i>
                  hetthuongcannho.doc
                  <i className="fas fa-times"></i>
                </p>
                <p>
                  <i className="fas fa-file-word"></i>
                  hetthuongcannho.doc
                  <i className="fas fa-times"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="content-btn">
            <button onClick={handleCancel}>Hủy</button>
            <button onClick={handleOk}>Lưu</button>
          </div>
        </div>
      </Modal>
      <Modal
        open={isModalOpenHuy}
        onOk={handleOkHuy}
        onCancel={handleCancelHuy}
        footer={null}
        wrapClassName="modal-huyHopDongUyQuyen"
        width={720}
      >
        <div className="container">
          <h1>Hủy hợp đồng uỷ quyền</h1>
          <textarea placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..." />
          <div className="content-btn">
            <button onClick={handleCancelHuy}>Quay lại</button>
            <button onClick={handleOkHuy}>Huỷ hợp đồng</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
