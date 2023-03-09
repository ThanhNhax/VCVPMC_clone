/* eslint-disable react-hooks/exhaustive-deps */
import { Button, message, Modal, Upload } from "antd";
import { addDoc, collection } from "firebase/firestore";
import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { db } from "../../../FireStore/fireStore";
import { RootState } from "../../../redux/configStore";
import { HopDongUyQuyenRedux } from "../../../redux/hopDongReducer/hopDongReducer";
import { KhoBanGhiRedux } from "../../../redux/khoBanGhi/khoBanghiReducer";

export default function ThemThongTinBanGhi() {
  //Lấy newHopDongUyQuyen từ redux về
  const { newHopDongUyQuyen } = useSelector(
    (state: RootState) => state.hopDong
  );
  console.log({ newHopDongUyQuyen });
  const navigate = useNavigate();
  useEffect(() => {
    if (!newHopDongUyQuyen) {
      navigate("/admin/quanLyHopDong/themHopDongUyQuyenMoi");
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
  const initialValues: KhoBanGhiRedux = {
    tenBanGhi: "",
    maISRC: "",
    tacGia: "",
    caSi: "",
    theLoai: "",
    nhaSanXuat: "",
    dinhDang: "Audio",
    id: "",
    ngayTai: "",
    soHopDong: "",
    thoiHanSuDung: {
      thoiGian: "",
      thoiHan: true,
    },
    thoiLuong: "",
    trangThai: "Mới",
  };
  const loginSchema = Yup.object().shape({
    tenBanGhi: Yup.string().required(),
    tacGia: Yup.string().required(),
    caSi: Yup.string().required(),
    theLoai: Yup.string().required(),
    nhaSanXuat: Yup.string().required(),
  });
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
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values: KhoBanGhiRedux) => {
            if (newHopDongUyQuyen) {
              let newArrTacPham: KhoBanGhiRedux[] = [];
              newArrTacPham.push(values);
              let newHDUQ: HopDongUyQuyenRedux = { ...newHopDongUyQuyen };
              newHDUQ.arrTacPhamUyQuyen = newArrTacPham;
              console.log({ newHDUQ });
              try {
                addDoc(collection(db, "hopDongUyQyen"), newHDUQ);
                message.open({
                  type: "success",
                  content: "Tạo thành công!",
                  duration: 0.8,
                });
                navigate("/admin/quanLyHopDong");
              } catch (e) {
                console.log(e);
              }
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <h5>Thêm bản ghi mới</h5>
              <div className="form-group">
                <div className="form-item">
                  <label htmlFor="">
                    Tên bản ghi: <i>*</i>
                  </label>
                  <Field
                    type="text"
                    name="tenBanGhi"
                    className={
                      errors.tenBanGhi && touched.tenBanGhi ? "input-error" : ""
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Mã ISRC:</label>
                  <Field type="text" name="maISRC" />
                </div>
                <div className="form-item">
                  <label htmlFor="">
                    Tác giả: <i>*</i>
                  </label>
                  <Field
                    type="text"
                    name="tacGia"
                    className={
                      errors.tacGia && touched.tacGia ? "input-error" : ""
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">
                    Ca sĩ/Nhóm nhạc: <i>*</i>
                  </label>
                  <Field
                    type="text"
                    name="caSi"
                    className={errors.caSi && touched.caSi ? "input-error" : ""}
                  />
                </div>
                <div className="form-list">
                  <div className="form-item">
                    <label htmlFor="">
                      Thể loại: <i>*</i>
                    </label>
                    <Field
                      as="select"
                      name="theLoai"
                      className={
                        errors.theLoai && touched.theLoai ? "input-error" : ""
                      }
                    >
                      <option value="">Chọn thể loại</option>
                      <option value="Rap">Rap</option>
                      <option value="Ballad">Ballad</option>
                      <option value="Rock n Roll">Rock n Roll</option>
                      <option value="R&B">R&B</option>
                    </Field>
                  </div>
                  <div className="form-item">
                    <label htmlFor="">
                      Nhà sản xuất: <i>*</i>
                    </label>
                    <Field
                      type="text"
                      name="nhaSanXuat"
                      className={
                        errors.nhaSanXuat && touched.nhaSanXuat
                          ? "input-error"
                          : ""
                      }
                    />
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
                    <label htmlFor="">Đính kèm lời bài hát:</label>
                    <Upload>
                      <Button id="input_file">
                        <i className="fas fa-cloud-upload-alt"></i> Tải lên
                      </Button>
                    </Upload>
                  </div>
                </div>
                <div className="form-btn">
                  <button type="button">Hủy</button>
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
