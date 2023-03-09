import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { message } from "antd";
const d = new Date();

export let ngayTao =
  d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
export let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
export interface FeedbackRedux {
  avatar: string;
  tenNguoiDung: string;
  id: string;
  vanDe: string;
  noiDung: string;
  ngayGui: {
    ngay: string;
    time: string;
  };
}
export default function Feedback() {
  // lấy tên user từ redux
  const { user } = useSelector((state: RootState) => state.user.userLogin);
  const initialValues: FeedbackRedux = {
    id: "",
    noiDung: "",
    tenNguoiDung: "",
    vanDe: "",
    ngayGui: {
      ngay: "",
      time: "",
    },
    avatar: "",
  };
  const schema = Yup.object().shape({
    vanDe: Yup.string().required(),
    noiDung: Yup.string().required(),
  });
  return (
    <div className="Feedback">
      <div className="container">
        <div className="container-top">
          <p>
            Hỗ trợ<i className="fas fa-chevron-right"></i>Feedback
          </p>
          <h1>Feedback</h1>
        </div>
        <div className="content">
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={async (values) => {
              let tenNguoiDung: string = user?.ho + " " + user?.ten;
              if (user) {
                values.avatar = user.avatar;
              }
              values.tenNguoiDung = tenNguoiDung;
              values.ngayGui.ngay = ngayTao;
              values.ngayGui.time = time;

              console.log({ values });
              // handle add feedback lên fireSote
              try {
                addDoc(collection(db, "feedback"), values);
                message.open({
                  type: "success",
                  content: "Gửi feedback thành công",
                  duration: 0.8,
                });
              } catch (e) {
                console.log(e);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="wrap-form">
                  <div className="form-group">
                    <label>Tên người dùng</label>
                    <input
                      type="text"
                      value={user?.ho.slice(0, 2) + "." + user?.ten}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vanDe">
                      Bạn muốn được hỗ trợ vấn đề gì?
                    </label>
                    <Field
                      as="select"
                      name="vanDe"
                      id="vanDe"
                      className={
                        errors.vanDe && touched.vanDe ? "input-error" : ""
                      }
                    >
                      <option value="">Chọn vấn đề bạn cần được hỗ trợ</option>
                      <option value="Tài khoản">Tài khoản</option>
                      <option value="Quản lý doanh thu">
                        Quản lý doanh thu
                      </option>
                      <option value="Vấn đề bản quyền">Vấn đề bản quyền</option>
                      <option value="Khác">Khác</option>
                    </Field>
                  </div>
                  <div className="form-group">
                    <label htmlFor="noiDung">Nội dung</label>
                    <Field
                      as="textarea"
                      name="noiDung"
                      id="noiDung"
                      className={
                        errors.noiDung && touched.noiDung ? "input-error" : ""
                      }
                    ></Field>
                  </div>
                </div>
                <div className="form-btn">
                  <button type="submit">Gửi</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
