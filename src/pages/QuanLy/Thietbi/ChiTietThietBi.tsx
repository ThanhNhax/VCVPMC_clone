/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/configStore";

export default function ChiTietThietBi() {
  const item = useSelector(
    (state: RootState) => state.quanLyThietBi.itemTietBi
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!item) {
      navigate("/admin/quanLyThietBi");
    }
  }, []);

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
  return (
    <div className="ChiTietThietBi">
      <div className="container">
        <div className="container-top">
          <p>
            Danh sách thiết bị<i className="fas fa-chevron-right"></i>Chi tiết
            thiết bị
          </p>
          <h1>Thông tin thiết bị - {item?.tenThietBi}</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-item">
              <h5>Thông tin thiết bị</h5>
              <img src="../../img/Frame_534.png" alt="Frame_534.png" />
              <p className={item?.trangThai ? "true" : "false"}>
                {item?.trangThai ? "Hoạt động" : "Ngừng kích hoạt"}
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>Ghi chú:</td>
                    <td>
                      Văn bản này không những đã tồn tại năm thế kỉ, mà khi được
                      áp dụng vào tin học
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="content-item">
              <h5>{item?.tenThietBi}</h5>
              <table>
                <tbody>
                  <tr>
                    <td>SKU/ID:</td>
                    <td>{item?.skuId}</td>
                  </tr>
                  <tr>
                    <td>Địa chỉ Mac:</td>
                    <td>{item?.diaChi}</td>
                  </tr>
                  <tr>
                    <td>Tên đăng nhập:</td>
                    <td>{item?.tenDangNhap}</td>
                  </tr>
                  <tr>
                    <td>Định dạng:</td>
                    <td>{item?.dinhDang}</td>
                  </tr>
                  <tr>
                    <td>Vị trí:</td>
                    <td>{item?.viTri}</td>
                  </tr>
                  <tr>
                    <td>Thời hạn bảo hành:</td>
                    <td>{item?.hanBaoHanh}</td>
                  </tr>
                  <tr>
                    <td>Trạng thái thiết bị:</td>
                    <td>Activated</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="content-item">
              <div className="item">
                <h5>Thông tin phiên bản</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>Phiên bản cũ nhất:</td>
                      <td>12.3 (20/02/2020)</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>12.3 (20/02/2020)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="item">
                <h5>Dung lượng bộ nhớ</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>Dung lượng</td>
                      <td>512GB</td>
                    </tr>
                    <tr>
                      <td>Còn trống</td>
                      <td>123GB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <div className="bg-icon" onClick={showModal}>
                <i className="fas fa-edit"></i>
              </div>
              <p>Chỉnh sửa</p>
            </div>
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-lock"></i>
              </div>
              <p>Khôi phục mật khẩu</p>
            </div>
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <p>Khôi phục bộ nhớ</p>
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
