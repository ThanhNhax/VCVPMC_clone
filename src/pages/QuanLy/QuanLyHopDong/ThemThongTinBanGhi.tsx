import { Button, Modal, Upload } from "antd";
import React, { useState } from "react";

export default function ThemThongTinBanGhi() {
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
    <div className="themThongTinBanGhi">
      <div className="container-top">
        <p>
          Quản lý<i className="fas fa-chevron-right"></i>Quản lý hợp đồng
          <i className="fas fa-chevron-right"></i>Thêm bản ghi
        </p>
        <h1>Thêm thông tin bản ghi</h1>
      </div>
      <div className="container-content">
        <div className="wrap-content">
          <div className="content-top">
            <div className="bg-icon">
              <i className="fas fa-check"></i>
            </div>
            <h5>Hợp đồng đã được tạo thành công</h5>
          </div>
          <div className="content-center">
            <p>Có 2 cách để tạo bản ghi:</p>
            <div className="wrap-item">
              <div className="item">
                <p>
                  <span>Cách 1:</span> Upload bản ghi trực tiếp
                </p>
                <div className="tab-item">
                  <p>Bạn có thể thực hiện thêm bản ghi ngay trên website</p>
                  <input
                    type="button"
                    value="Thêm bản ghi trực tiếp "
                    onClick={showModal}
                  />
                </div>
              </div>
              <div className="item">
                <p>
                  <span>Cách 2:</span> Upload bản ghi qua phần mềm
                </p>
                <div className="tab-item">
                  <p>Bạn có thể thêm bản ghi bằng tool</p>
                  <input type="button" value="Thêm bản ghi bằng tool" />
                </div>
              </div>
              <p className="error">
                Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        wrapClassName="modal-themBanGhi"
        width={650}
      >
        <form>
          <h5>Thêm bản ghi mới</h5>
          <div className="form-group">
            <div className="form-item">
              <label htmlFor="">
                Tên bản ghi: <i>*</i>
              </label>
              <input type="text" />
            </div>
            <div className="form-item">
              <label htmlFor="">
                Mã ISRC: <i>*</i>
              </label>
              <input type="text" />
            </div>
            <div className="form-item">
              <label htmlFor="">
                Tác giả: <i>*</i>
              </label>
              <input type="text" />
            </div>
            <div className="form-item">
              <label htmlFor="">
                Ca sĩ/Nhóm nhạc: <i>*</i>
              </label>
              <input type="text" />
            </div>
            <div className="form-list">
              <div className="form-item">
                <label htmlFor="">
                  Thể loại: <i>*</i>
                </label>
                <select>
                  <option value="">Rap</option>
                  <option value="">Ballad</option>
                  <option value="">Rock n Roll</option>
                  <option value="">R&B</option>
                </select>
              </div>
              <div className="form-item">
                <label htmlFor="">
                  Nhà sản xuất: <i>*</i>
                </label>
                <input type="text" />
              </div>
            </div>
            <div className="form-list">
              <div className="form-item">
                <label htmlFor="">
                  Đính kèm bản ghi: <i>*</i>
                </label>
                <Upload>
                  <Button id="input_file">
                    <i className="fas fa-cloud-upload-alt"></i> Tải lên
                  </Button>
                </Upload>
              </div>
              <div className="form-item">
                <label htmlFor="">
                  Đính kèm lời bài hát: <i>*</i>
                </label>
                <Upload>
                  <Button id="input_file">
                    <i className="fas fa-cloud-upload-alt"></i> Tải lên
                  </Button>
                </Upload>
              </div>
            </div>
            <div className="form-btn">
              <button>Hủy</button>
              <button>Lưu</button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
