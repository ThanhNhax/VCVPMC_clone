/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { history } from "../..";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { message } from "antd";
import { RootState } from "../../redux/configStore";

export default function CapNhatkhoBanGhi() {
  //Lấy Item kho bản ghi từ redux về
  const item = useSelector((state: RootState) => state.khoBanGhi.itemKhoBanGhi);
  console.log(item);
  const navigate = useNavigate();
  useEffect(() => {
    if (item == null) {
      navigate("/admin/khobanghi");
    }
  }, []);

  // delete item kho bản ghi
  const handleDelete = (id: string | null) => {
    //dispatch dc cái id của item
    if (id !== null) {
      const khoBanGhiRef = doc(db, "khoBanGhi", id);
      try {
        deleteDoc(khoBanGhiRef);
        //chuyển về page kho ban ghi
        navigate("/admin/khobanghi");
        message.success("xóa thành công!");
      } catch (error) {
        console.log({ error });
      }
    }
  };
  const initialValues = {
    maISRC: "",
    tenBanGhi: "",
    caSi: "",
    tacGia: "",
    nhaSanXuat: "",
    theLoai: "",
  };
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .required("Không được bỏ trống!")
      .min(3, "Password nhiều hơn 3 ký tự!"),
    userName: Yup.string().required("Không được bỏ trống!"),
  });
  return (
    <div className="capNhatKhoBanGhi">
      <div className="capNhatKhoBanGhi_title">
        <p>
          Kho bản ghi <i className="fas fa-chevron-right"></i> Cập nhật thông
          tin
        </p>
        <h3>Bản ghi - {item?.tenBanGhi}</h3>
      </div>
      <div className="capNhatKhoBanGhi_content">
        <div className="content_left">
          <div className="content_left-top">
            <div className="thongTin">
              <h5>Thông tin bản ghi</h5>
              <div className="avatar">
                <img src="../../img/Frame_433.png" alt="Frame 433.png" />
                <div className="camera">
                  <i className="fas fa-camera"></i>
                </div>
              </div>
              <div className="music">
                <i className="fas fa-music"></i>
                <span>{item?.tenBanGhi}.mp3</span>
              </div>
            </div>
            <div className="table_thongTin">
              <div className="table_item">
                <p>Ngày thêm: </p>
                <p>07/04.2021 - 17:45:30</p>
              </div>
              <div className="table_item">
                <p>Người tải lên: </p>
                <p>Super Admin</p>
              </div>
              <div className="table_item">
                <p>Người duyệt: </p>
                <p>
                  Hệ thống <br />
                  (Tự động phê duyệt)
                </p>
              </div>
              <div className="table_item">
                <p>Ngày phê duyệt: </p>
                <p>07/04.2021 - 17:45:50</p>
              </div>
            </div>
          </div>
          <div className="content_left-bottom">
            <div className="thongTin">
              <h5>Thông tin ủy quyền</h5>
            </div>
            <div className="table_thongTin">
              <div className="table_item">
                <p>Số hợp đồng: </p>
                <p>BH123</p>
              </div>
              <div className="table_item">
                <p>Ngày nhận ủy quyền: </p>
                <p>01/05/2021</p>
              </div>
              <div className="table_item">
                <p>Ngày hết hạn: </p>
                <p>01/08/2025</p>
              </div>
              <div className="table_item">
                <p>Trạng thái: </p>
                <p>Còng thời hạn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content_right">
          <h5>Chỉnh sửa thông tin</h5>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              console.log({ values });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form_profile">
                  <div className="form_title">
                    <label htmlFor="tenBanGhi">Tên bản ghi:</label>
                    <br />
                    <Field
                      type="text"
                      name="tenBanGhi"
                      id="tenBanGhi"
                      value={item?.tenBanGhi}
                    />
                    {errors.tenBanGhi && touched.tenBanGhi ? (
                      <p className="text-danger">{errors.tenBanGhi}</p>
                    ) : null}
                  </div>
                  <div className="form_title">
                    <label htmlFor="maISRC">Mã ISRC:</label>
                    <br />
                    <Field
                      type="text"
                      name="maISRC"
                      id="maISRC"
                      value={item?.maISRC}
                    />
                    {errors.maISRC && touched.maISRC ? (
                      <p className="text-danger">{errors.maISRC}</p>
                    ) : null}
                  </div>
                  <div className="form_title">
                    <label htmlFor="caSi">Ca sĩ:</label>
                    <br />
                    <Field
                      type="text"
                      name="caSi"
                      id="caSi"
                      value={item?.caSi}
                    />
                    {errors.caSi && touched.caSi ? (
                      <p className="text-danger">{errors.caSi}</p>
                    ) : null}
                  </div>
                  <div className="form_title">
                    <label htmlFor="tacGia">Tác giả:</label>
                    <br />
                    <Field
                      type="text"
                      name="tacGia"
                      id="tacGia"
                      value={item?.tacGia}
                    />
                    {errors.tacGia && touched.tacGia ? (
                      <p className="text-danger">{errors.tacGia}</p>
                    ) : null}
                  </div>

                  <div className="form_title">
                    <label htmlFor="nhaSanXuat">Nhà sản xuất:</label>
                    <br />
                    <Field
                      type="nhaSanXuat"
                      name="nhaSanXuat"
                      id="nhaSanXuat"
                      value={item?.nhaSanXuat}
                    />
                    {errors.nhaSanXuat && touched.nhaSanXuat ? (
                      <p className="text-danger">{errors.nhaSanXuat}</p>
                    ) : null}
                  </div>
                  <div className="form_title">
                    <label htmlFor="theLoai">Thể loại:</label>
                    <br />
                    <Field
                      as="select"
                      name="theLoai"
                      id="theLoai"
                      value={item?.theLoai}
                    >
                      <option value="pop">Pop</option>
                      <option value="ballad">Ballad</option>
                      <option value="rock">Rock</option>
                      <option value="edm">EDM</option>
                    </Field>
                    {errors.theLoai && touched.theLoai ? (
                      <p className="text-danger">{errors.theLoai}</p>
                    ) : null}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="xoaBanGhi">
          <div className="icon" onClick={() => handleDelete(item.id)}>
            <i className="fas fa-times"></i>
          </div>
          <p>Xóa bản ghi</p>
        </div>
      </div>
      <div className="capNhatKhoGhi_button">
        <button
          type="button"
          onClick={() => {
            history.push("/admin/khobanghi");
          }}
        >
          Huỷ
        </button>
        <button type="submit">Lưu</button>
      </div>
    </div>
  );
}
