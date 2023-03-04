import { Checkbox } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ThemMoiVaiTroNguoiDungTrenHeThong() {
  const navigate = useNavigate();
  return (
    <div className="themMoiVaiTroNguoiDungTrenHeThong">
      <div className="container">
        <div className="container-top">
          <p>
            Cài đặt<i className="fas fa-chevron-right"></i>Phân quyền người dùng
            <i className="fas fa-chevron-right"></i>Thêm vai trò
          </p>
          <h1>Thêm vai trò người dùng</h1>
        </div>
        <div className="container-form">
          <Formik
            initialValues={{}}
            onSubmit={(value) => console.log({ value })}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="wrap-form">
                  <div className="wrap_form-left">
                    <div className="form-group">
                      <label htmlFor="tenVaiTro">Tên vai trò:</label>
                      <Field type="text" name="tenVaiTro" id="tenVaiTro" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="moTa">Mô tả:</label>
                      <Field as="textarea" name="moTa" id="moTa" />
                    </div>
                  </div>
                  <div className="wrap_form-right">
                    <label htmlFor="">Phân quyền chức năng:</label>
                    <div className="wrap-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Tên nhóm chức năng</th>
                            <th>
                              <Checkbox />
                            </th>
                            <th>Mã chức năng</th>
                            <th>Chức năng</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowSpan={5}>Quản lý người dùng</td>
                            <td>
                              <Checkbox />
                            </td>
                            <td>Phân quyền người dùng</td>
                            <td>nguoidung_phanquyen</td>
                          </tr>
                          <tr>
                            <td>
                              <Checkbox />
                            </td>
                            <td>Tạo người dùng</td>
                            <td>nguoidung_tao</td>
                          </tr>
                          <tr>
                            <td>
                              <Checkbox />
                            </td>
                            <td>Cập nhật thông tin người dùng</td>
                            <td>nguoidung_capnhat</td>
                          </tr>
                          <tr>
                            <td>
                              <Checkbox />
                            </td>
                            <td>Xóa người dùng</td>
                            <td>nguoidung_xoa</td>
                          </tr>
                          <tr>
                            <td>
                              <Checkbox />
                            </td>
                            <td>Xem thông tin chi tiết</td>
                            <td>nguoidung_xemchitiet</td>
                          </tr>
                          <tr>
                            <td rowSpan={5}>Quản lý thư viện</td>
                            <td>
                              <Checkbox />
                            </td>
                            <td>Danh sách Media</td>
                            <td>nguoidung_xemdanhsach</td>
                          </tr>
                          <tr>
                            <td>
                              <Checkbox />
                            </td>
                            <td>Tải lên Media</td>
                            <td>nguoidung_tailentep</td>
                          </tr>
                          <tr>
                            <td>
                              <Checkbox />
                            </td>
                            <td>Chỉnh sửa thông tin Media</td>
                            <td>nguoidung_chinhsua</td>
                          </tr>
                          <tr>
                            <td>
                              <Checkbox />
                            </td>
                            <td>Xóa Media</td>
                            <td>nguoidung_xoa</td>
                          </tr>
                          <tr>
                            <td>
                              <Checkbox />
                            </td>
                            <td>Phê duyệt Media</td>
                            <td>nguoidung_pheduyet</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="form-btn">
                  <button
                    type="button"
                    onClick={() => navigate("/admin/phanQuyenNguoiDung")}
                  >
                    Hủy
                  </button>
                  <button type="submit">Lưu</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
