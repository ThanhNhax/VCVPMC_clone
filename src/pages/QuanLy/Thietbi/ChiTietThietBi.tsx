/* eslint-disable react-hooks/exhaustive-deps */
import { message, Modal } from "antd";
import { Field, Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/configStore";
import * as Yup from "yup";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../FireStore/fireStore";

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

  const initValue = {
    macAddresss: item?.macAddresss,
    tenThietBi: item?.tenThietBi,
    tenDangNhap: item?.tenDangNhap,
    skuId: item?.skuId,
    viTri: item?.viTri,
    trangThai: item?.trangThai,
  };
  const Schema = Yup.object().shape({
    macAddresss: Yup.string().required("Không được bỏ trống!"),
    tenThietBi: Yup.string().required("Không được bỏ trống!"),
    tenDangNhap: Yup.string().required("Không được bỏ trống!"),
    skuId: Yup.string().required("Không được bỏ trống!"),
    trangThai: Yup.string().required("Không được bỏ trống!"),
  });
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
        wrapClassName="modal-chinhSuaThietBi"
        width={623}
      >
        <h5>Chỉnh sửa thông tin thiết bị</h5>
        <Formik
          initialValues={initValue}
          validationSchema={Schema}
          onSubmit={(value) => {
            console.log({ value });
            // update  các field thay đổi
            try {
              if (item) {
                updateDoc(doc(db, "quanLyThietBi", item?.id), value);
                message.open({
                  type: "success",
                  content: "Cập nhật thành công!",
                  duration: 0.8,
                });
                handleOk();
              }
            } catch (e) {
              console.log(e);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-chinhSua">
              <div id="wrap-form">
                <div className="form-group">
                  <label htmlFor="tenThietBi">
                    Tên thiết bị: <i>*</i>
                  </label>
                  <Field
                    type="text"
                    name="tenThietBi"
                    id="tenThietBi"
                    className={
                      errors.tenThietBi && touched.tenThietBi
                        ? "input-error"
                        : ""
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="skuId">
                    SKU/ID: <i>*</i>
                  </label>
                  <Field
                    type="text"
                    name="skuId"
                    id="skuId"
                    className={
                      errors.skuId && touched.skuId ? "input-error" : ""
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="macAddresss">
                    Địa chỉ Mac: <i>*</i>
                  </label>
                  <Field
                    type="text"
                    name="macAddresss"
                    id="macAddresss"
                    className={
                      errors.macAddresss && touched.macAddresss
                        ? "input-error"
                        : ""
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tenDangNhap">
                    Tên đăng nhập: <i>*</i>
                  </label>
                  <Field
                    type="text"
                    name="tenDangNhap"
                    id="tenDangNhap"
                    className={
                      errors.tenDangNhap && touched.tenDangNhap
                        ? "input-error"
                        : ""
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="viTri">Vị trí:</label>
                  <Field type="text" name="viTri" id="viTri" />
                </div>
                <div className="form-group">
                  <label htmlFor="">
                    Trạng thái thiết bị: <i>*</i>
                  </label>
                  <div className="form-item">
                    <Field
                      type="radio"
                      name="trangThai"
                      id="daKichHoat"
                      value={"true"}
                    />
                    <label htmlFor="daKichHoat">Đã kích hoạt</label>
                  </div>
                  <div className="form-item">
                    <Field
                      type="radio"
                      name="trangThai"
                      id="ngungKichHoat"
                      value={"false"}
                    />
                    <label htmlFor="ngungKichHoat">Ngừng kích hoạt</label>
                  </div>
                </div>
                <div className="form-btn">
                  <button type="button" onClick={handleCancel}>
                    Hủy
                  </button>
                  <button type="submit">Lưu</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}
