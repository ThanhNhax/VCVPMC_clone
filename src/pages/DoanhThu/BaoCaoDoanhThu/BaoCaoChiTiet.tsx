import { Modal } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BaoCaoChiTiet() {
  const [isThang, setIsThang] = useState<boolean>(true);
  const navigate = useNavigate();
  // xử  lý modal popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/admin/baoCaoDoanhThu/chiTiet/chiTietDoanhThu");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="BaoCaoChiTiet">
      <div className="container">
        <div className="container-top">
          <p>
            Doanh thu<i className="fas fa-chevron-right"></i>Báo cáo doanh thu
          </p>
          <h1>Báo cáo doanh thu</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-top">
              <div className="form-group">
                <label
                  htmlFor=""
                  style={
                    isThang ? { display: "inline-block" } : { display: "none" }
                  }
                >
                  Theo tháng:
                </label>
                <label
                  htmlFor=""
                  style={
                    !isThang ? { display: "inline-block" } : { display: "none" }
                  }
                >
                  Theo quý:
                </label>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    console.log(e.target.value);
                    if (e.target.value === "Theo quý") {
                      setIsThang(false);
                    } else {
                      setIsThang(true);
                    }
                  }}
                >
                  <option value="Theo tháng">Theo tháng</option>
                  <option value="Theo quý">Theo quý</option>
                </select>
                <select
                  style={
                    isThang ? { display: "inline-block" } : { display: "none" }
                  }
                >
                  <option value="">Tháng 1 </option>
                  <option value="">Tháng 2 </option>
                  <option value="">Tháng 3 </option>
                  <option value="">Tháng 4 </option>
                  <option value="">Tháng 5 </option>
                  <option value="">Tháng 6 </option>
                  <option value="">Tháng 7 </option>
                  <option value="">Tháng 8 </option>
                  <option value="">Tháng 9 </option>
                  <option value="">Tháng 10 </option>
                  <option value="">Tháng 11</option>
                  <option value="">Tháng 12 </option>
                </select>
                <select
                  style={
                    !isThang ? { display: "inline-block" } : { display: "none" }
                  }
                >
                  <option value="">Quý 1</option>
                  <option value="">Quý 2</option>
                  <option value="">Quý 3</option>
                  <option value="">Quý 4</option>
                </select>
              </div>
              <div className="input_search">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Nhập tên người dùng"
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className="content-table">
              <div className="wrap-table">
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Số hợp đồng</th>
                      <th>Đơn vị khai thác</th>
                      <th>Thời hạn hợp đồng</th>
                      <th>Loại hợp đồng</th>
                      <th>Số thiết bị đã đồng bộ</th>
                      <th>Tổng số lượt phát</th>
                      <th>Ngày chốt đối soát</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text_right">1</td>
                      <td>HD123</td>
                      <td>CTY TNHH MTV XYZ</td>
                      <td>01/04/2021 - 09/02/2025</td>
                      <td>Trọn gói</td>
                      <td>8/8</td>
                      <td>321.000</td>
                      <td>22/04/2021</td>
                      <td
                        className="action"
                        onClick={() =>
                          navigate(
                            "/admin/baoCaoDoanhThu/chiTiet/chiTietDoanhThu"
                          )
                        }
                      >
                        Chi tiết doanh thu
                      </td>
                      <td
                        className="action"
                        onClick={() =>
                          navigate(
                            "/admin/baoCaoDoanhThu/chiTiet/lichSuDongBoThietBi"
                          )
                        }
                      >
                        Lịch sử đồng bộ trên thiết bị
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pagination-table">
                <div className="pagination_left">
                  <p>
                    Hiển thị
                    <select
                    //   value={limit}
                    //   onChange={(e) => {
                    //     setLimit(parseInt(e.target.value));
                    //   }}
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
            <div className="menu-item">
              <div className="bg-icon" onClick={showModal}>
                <i className="fas fa-file-alt"></i>
              </div>
              <p>Chốt doanh thu</p>
            </div>
            <div className="menu-item">
              <div className="bg-icon">
                <i className="fas fa-file-export"></i>
              </div>
              <p>Xuất dữ liệu</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        wrapClassName="modal-chotDoanhThu
        "
        width={629}
      >
        <h5>Chốt doanh thu</h5>
        <div className="wrap-p">
          <p>
            Doanh thu sẽ được chốt từ ngày 01/05/2021 đến ngày 14/05/2021 trên
            tất cả các hợp đồng sử dụng.
          </p>
          <p>
            Nhấn {"<Tiếp tục>"} để chốt doanh thu. <br /> Nhấn {"<Hủy>"} để hủy
            bỏ và không chốt doanh thu
          </p>
        </div>
        <div className="form-btn">
          <button onClick={handleCancel}>Huỷ</button>
          <button onClick={handleOk}>Tiếp tục</button>
        </div>
      </Modal>
    </div>
  );
}
