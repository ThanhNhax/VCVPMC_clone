/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Upload } from "antd";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/configStore";
import * as Yup from "yup";
import { HopDongUyQuyenRedux } from "../../../redux/hopDongReducer/hopDongReducer";

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

  let initialValues: HopDongUyQuyenRedux = {
    arrTacPhamUyQuyen: [],
    chucVu: "",
    cmnd: "",
    diaChi: "",
    email: "",
    gioiTinh: "",
    hieuLucHopDong: "",
    id: "",
    maSoThue: "",
    matKhau: "",
    nganHang: "",
    ngayCap: "",
    ngayHetHan: "",
    ngayHieuLuc: "",
    ngaySinh: "",
    ngayTao: "",
    nguoiDaiDien: "",
    nguoiUyQuyen: "",
    noiCap: "",
    noiCuTru: "",
    quocTich: "",
    quyenSoHuu: "",
    soDienThoai: "",
    soHopDong: "",
    soTaiKhoan: "",
    tenDangNhap: "",
    tenHopDong: "",
    tenToChuc: "",
  };
  if (item) {
    initialValues = item;
  }

  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .required("Không được bỏ trống!")
      .min(6, "Password nhiều hơn 6 ký tự!"),
    userName: Yup.string().required("Không được bỏ trống!"),
  });

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

        <Formik
          initialValues={initialValues}
          // validationSchema={loginSchema}
          onSubmit={async (values) => {
            console.log({ values });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="container-center">
                <div className="center-top">
                  <div className="from-group">
                    <div className="from-item">
                      <label htmlFor="">Số hợp đồng:</label>
                      <Field type="text" name="soHopDong" />
                    </div>
                    <div className="from-item">
                      <label htmlFor="">Tên hợp đồng:</label>
                      <Field type="text" name="tenHopDong" />
                    </div>
                    <div className="from-item">
                      <label htmlFor="">Ngày hiệu lực:</label>
                      <Field type="date" name="ngayHieuLuc" />
                    </div>
                    <div className="from-item">
                      <label htmlFor="">Ngày hết hạn:</label>
                      <Field type="date" name="ngayHetHan" />
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
                          <Field type="radio" name="uyQuyen" id="caNhan" />
                          <label htmlFor="caNhan">Cá nhân</label>
                          <Field type="radio" name="uyQuyen" id="toChuc" />
                          <label htmlFor="toChuc">Tổ chức</label>
                        </div>
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Tên người uỷ quyền: <i>*</i>
                        </label>
                        <Field type="text" name="nguoiUyQuyen" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Giới tính:<i>*</i>
                        </label>
                        <div className="from-radio">
                          <Field
                            type="radio"
                            name="gioiTinh"
                            id="nam"
                            value="Nam"
                          />
                          <label htmlFor="nam">Nam</label>
                          <Field
                            type="radio"
                            name="gioiTinh"
                            id="nu"
                            value="Nữ"
                          />
                          <label htmlFor="nu">Nữ</label>
                        </div>
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Ngày sinh:<i>*</i>
                        </label>
                        <Field type="date" name="ngaySinh" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Quốc tịch: <i>*</i>
                        </label>
                        <Field as="select" name="quocTich" id="quocTich">
                          <option value="vietNam">Việt Nam</option>
                        </Field>
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Số điện thoại: <i>*</i>
                        </label>
                        <Field type="text" name="soDienThoai" />
                      </div>
                    </div>
                    <div className="from-group">
                      <div className="from-item">
                        <label htmlFor="">
                          CMND/ CCCD: <i>*</i>
                        </label>
                        <Field type="text" name="cmdn" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Ngày cấp: <i>*</i>
                        </label>
                        <Field type="text" name="ngayCap" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Nơi cấp: <i>*</i>
                        </label>
                        <Field type="text" name="noiCap" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Mã số thuế: <i>*</i>
                        </label>
                        <Field type="text" name="maSoThue" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Nơi cư trú: <i>*</i>
                        </label>
                        <Field as="textarea" name="noiCuTru" />
                      </div>
                    </div>
                    <div className="from-group">
                      <div className="from-item">
                        <label htmlFor="">Email:</label>
                        <Field type="text" name="email" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Tên đăng nhập: <i>*</i>
                        </label>
                        <Field type="text" name="tenDangNhap" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">
                          Mật khẩu: <i>*</i>
                        </label>
                        <Field type="password" name="matKhau" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Số tài khoản:</label>
                        <Field type="text" name="soTaiKhoan" />
                      </div>
                      <div className="from-item">
                        <label htmlFor="">Ngân hàng:</label>
                        <Field type="text" name="nganHang" />
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
                  <button type="submit">Tạo</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
