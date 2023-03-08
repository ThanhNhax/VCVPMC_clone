/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Upload } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/configStore";

export default function ChinhSuaThongTin() {
  //lấy item trên redux về để chỉnh sửa
  const item = useSelector(
    (state: RootState) => state.hopDong.itemHopDongUyQuyen
  );
  console.log({ item });
  const navigate = useNavigate();
  useEffect(() => {
    if (!item) {
      navigate("/admin/quanLyHopDong");
    }
  }, []);
  return (
    <div className="chinhSuaThongTin">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý<i className="fas fa-chevron-right"></i>Quản lý hợp đồng
            <i className="fas fa-chevron-right"></i>Chi tiết
            <i className="fas fa-chevron-right"></i>Chỉnh sửa thông tin
          </p>
          <h1>Hợp đồng uỷ quyền bài hát - {item?.soHopDong}</h1>
        </div>
        <div className="container-center">
          <div className="center-top">
            <div className="from-group">
              <div className="from-item">
                <label htmlFor="">Số hợp đồng:</label>
                <input type="text" defaultValue={item?.soHopDong} />
              </div>
              <div className="from-item">
                <label htmlFor="">Tên hợp đồng:</label>
                <input type="text" defaultValue={item?.tenHopDong} />
              </div>
              <div className="from-item">
                <label htmlFor="">Ngày hiệu lực:</label>
                <input
                  type="date"
                  defaultValue={moment(item?.ngayHieuLuc).format("YYYY-MM-DD")}
                />
              </div>
              <div className="from-item">
                <label htmlFor="">Ngày hết hạn:</label>
                <input
                  type="date"
                  defaultValue={moment(item?.ngayHetHan).format("YYYY-MM-DD")}
                />
              </div>
              <div className="from-item">
                <label htmlFor="">Tình trạng:</label>
                <select defaultValue={item?.hieuLucHopDong}>
                  <option value="">Đang hiệu lực</option>
                </select>
              </div>
            </div>
            <div className="from-group">
              <div className="from-item">
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
            <div className="from-group">
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
                      <br /> (Bản ghi/video)
                    </td>
                    <td>50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="center-bottom ">
            <h4>Thông tin pháp nhân uỷ quyền</h4>
            <div className="bottom-wrap">
              <div className="from-group">
                <div className="from-item">
                  <label htmlFor="">Pháp nhân ủy quyền:</label>
                  <div className="from-radio">
                    <input
                      type="radio"
                      name="uyQuyen"
                      id="caNhan"
                      defaultChecked
                    />
                    <label htmlFor="caNhan">Cá nhân</label>
                    <input type="radio" name="uyQuyen" id="toChuc" />
                    <label htmlFor="toChuc">Tổ chức</label>
                  </div>
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Tên người uỷ quyền: <i>*</i>
                  </label>
                  <input type="text" defaultValue={"Nguyễn Văn A"} />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Giới tính:<i>*</i>
                  </label>
                  <div className="from-radio">
                    <input
                      type="radio"
                      name="gioiTinh"
                      id="nam"
                      defaultChecked
                    />
                    <label htmlFor="nam">Nam</label>
                    <input type="radio" name="gioiTinh" id="nu" />
                    <label htmlFor="nu">Nữ</label>
                  </div>
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Ngày sinh:<i>*</i>
                  </label>
                  <input type="date" />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Quốc tịch: <i>*</i>
                  </label>
                  <select name="quocTich" id="quocTich">
                    <option value="vietNam">Việt Nam</option>
                  </select>
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Số điện thoại: <i>*</i>
                  </label>
                  <input type="text" defaultValue={"(+84) 345 678 901"} />
                </div>
              </div>
              <div className="from-group">
                <div className="from-item">
                  <label htmlFor="">
                    CMND/ CCCD: <i>*</i>
                  </label>
                  <input type="text" defaultValue={"123456789012"} />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Ngày cấp: <i>*</i>
                  </label>
                  <input type="text" defaultValue={"10/01/2011"} />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Nơi cấp: <i>*</i>
                  </label>
                  <input type="text" defaultValue={"Tp.HCM, Việt Nam"} />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Mã số thuế: <i>*</i>
                  </label>
                  <input type="text" defaultValue={"92387489"} />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Nơi cư trú: <i>*</i>
                  </label>
                  <input
                    type="text"
                    defaultValue={
                      "69/53, Nguyễn Gia Trí, phường 25, quận Bình Thạnh, thành phố Hồ Chí Minh"
                    }
                  />
                </div>
              </div>
              <div className="from-group">
                <div className="from-item">
                  <label htmlFor="">Email:</label>
                  <input type="text" defaultValue={"nguyenvana@gmail.com"} />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Tên đăng nhập: <i>*</i>
                  </label>
                  <input type="text" defaultValue={"nguyenvana@gmail.com"} />
                </div>
                <div className="from-item">
                  <label htmlFor="">
                    Mật khẩu: <i>*</i>
                  </label>
                  <input type="password" defaultValue={"12345678"} />
                </div>
                <div className="from-item">
                  <label htmlFor="">Số tài khoản:</label>
                  <input type="text" defaultValue={"1231123312211223"} />
                </div>
                <div className="from-item">
                  <label htmlFor="">Ngân hàng:</label>
                  <input type="text" defaultValue={"ACB - Ngân hàng Á Châu"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-bottom">
          <p>
            <i>*</i>là những trường thông tin bắt buộc
          </p>
          <div className="button">
            <button
              type="button"
              onClick={() => navigate("/admin/quanLyHopDong/chiTiet")}
            >
              Hủy
            </button>
            <button>Tạo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
