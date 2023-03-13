/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getArrPlayListFireStore,
  PlayListRedux,
} from "../../redux/playListReducer/playListReducer";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { LapLichPhatRedux } from "../../redux/lapLichPhat/lapLichPhatReducer";
import { history } from "../..";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { message } from "antd";

export default function AddLapLichPhat() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { arrPlayList } = useSelector((state: RootState) => state.playList);
  useEffect(() => {
    dispatch(getArrPlayListFireStore());
  }, []);
  const initialValues: LapLichPhatRedux = {
    arrThietBi: [],
    id: "",
    ngayBatDau: "",
    ngayKetThuc: "",
    tenLich: "",
    thoiGianBatDau: "",
    thoiGianKetThuc: "",
  };
  const schema = Yup.object().shape({
    tenLich: Yup.string().required(),
    ngayBatDau: Yup.string().required(),
    ngayKetThuc: Yup.string().required(),
  });
  return (
    <div className="editLichPhat">
      <div className="editLichPhat-title">
        <p>
          Lập lịch phát
          <i className="fas fa-chevron-right"></i>Thêm lịch phát mới
        </p>
        <h1>Lập lịch phát</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values: LapLichPhatRedux) => {
          console.log({ values });
          try {
            addDoc(collection(db, "lapLichPhat"), values);
            message.open({
              type: "success",
              content: "Thêm lịch phát mới thành công!",
              duration: 0.8,
            });
            history.push("/admin/lapLichPhat");
          } catch (e) {
            console.log(e);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="container">
            <div className="wrap_container-center">
              <div className="container-center">
                <div className="center-left">
                  <div className="left-top">
                    <div className="top-item">
                      <h5>Thông tin lịch phát</h5>
                      <label htmlFor="">Tên lịch phát:</label>
                      <Field
                        type="text"
                        name="tenLich"
                        className={
                          errors.tenLich && touched.tenLich ? "input-error" : ""
                        }
                      />
                    </div>
                    <div className="top-item">
                      <label htmlFor="tuNgay">Từ ngày</label>
                      <div className="input-date">
                        <Field
                          type="date"
                          name="ngayBatDau"
                          className={
                            errors.ngayBatDau && touched.ngayBatDau
                              ? "input-error"
                              : ""
                          }
                        />
                      </div>
                    </div>
                    <div className="top-item">
                      <label htmlFor="denNgay">Đến ngày</label>
                      <div className="input-date">
                        <Field
                          type="date"
                          name="ngayKetThuc"
                          className={
                            errors.ngayKetThuc && touched.ngayKetThuc
                              ? "input-error"
                              : ""
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="left-bottom">
                    <h5>Danh sách Playlist</h5>
                    <div className="listPlaylist">
                      {arrPlayList.map((data: PlayListRedux, index: number) => (
                        <div className="list-item" key={index}>
                          <p>{data.tieuDe}</p>
                          <div className="title-bottom">
                            <p>Thời lượng:</p>
                            <p>{data.thoiLuong}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="center-right">
                  <div className="presentation-content">
                    <div className="content-time">
                      <span></span>
                      <span>01:00</span>
                      <span>02:00</span>
                      <span>03:00</span>
                      <span>04:00</span>
                      <span>05:00</span>
                      <span>06:00</span>
                      <span>07:00</span>
                      <span>08:00</span>
                      <span>09:00</span>
                      <span>10:00</span>
                      <span>11:00</span>
                      <span>12:00</span>
                      <span>13:00</span>
                      <span>14:00</span>
                      <span>15:00</span>
                      <span>16:00</span>
                    </div>
                    <div className="content-playlist">
                      <div className="playlist-item ">
                        <span>Thứ hai</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="playlist-item ">
                        <span>Thứ ba</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="playlist-item ">
                        <span>Thứ tư</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="playlist-item ">
                        <span>Thứ năm</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="playlist-item ">
                        <span>Thứ sáu</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="playlist-item ">
                        <span>Thứ bảy</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="playlist-item ">
                        <span>Chủ nhật</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-menu">
                <div className="bg_icon">
                  <i className="far fa-calendar-alt"></i>
                </div>
                <p>Áp lịch cho thiết bị</p>
              </div>
            </div>
            <div className="container-button">
              <button
                type="button"
                onClick={() => navigate("/admin/lapLichPhat")}
              >
                Hủy
              </button>
              <button type="submit">Lưu</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
