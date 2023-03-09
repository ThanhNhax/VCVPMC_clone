/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getArrFeedbackFireStore,
  setitemFeedback,
} from "../../redux/feedback/feedbackReducer";
import { FeedbackRedux } from "./Feedback";

export default function AdminFeedback() {
  const { arrFeedback } = useSelector((state: RootState) => state.feedback);
  const { itemFeedback } = useSelector((state: RootState) => state.feedback);
  console.log({ itemFeedback });
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getArrFeedbackFireStore());
  }, []);

  // cấu hình phân pages
  const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  const indexOfLastNews = currentPage * 6; // vị trí cuối
  const indexOfFirstNews = indexOfLastNews - 6; // Vị trí đầu
  const totalPages = Math.ceil(arrFeedback.length / 6); // Tính số tổng số pages
  const newArr = arrFeedback.slice(indexOfFirstNews, indexOfLastNews);
  const [isStyleBtn] = useState<boolean>(false);

  // cấu hình phân pages
  const renderButtonPage = (n: number) => {
    let btn: any = "";
    for (let i = 0; i < n; i++) {
      btn += `<button
          className=${isStyleBtn ? "btn-item-active btn-item" : "btn-item"}
          >
          ${i + 1}
        </button>`;
    }
    return { __html: btn };
  };
  const renderFeedback = () => {
    return newArr.map((feedback: FeedbackRedux, index: number) => (
      <div
        className="list-item"
        key={index}
        onClick={() => {
          // handle add item feedback leen Redux
          dispatch(setitemFeedback(feedback));
        }}
      >
        <div className="avatar">
          <img src={feedback.avatar} alt={feedback.avatar} />
        </div>
        <div className="title">
          <div className="title-top">
            <p>{feedback.tenNguoiDung}</p>
            <p>
              {feedback.ngayGui.time} {feedback.ngayGui.ngay}
            </p>
          </div>
          <div className="title-bottom">
            <p>Chủ đề: {feedback.vanDe}</p>
            <p>
              {feedback.noiDung.length > 32
                ? feedback.noiDung.substring(0, 32) + "..."
                : feedback.noiDung}
            </p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="AdminFeedback">
      <div className="container">
        <div className="container-top">
          <p>
            Hỗ trợ<i className="fas fa-chevron-right"></i>Feedback
          </p>
          <h1>Feedback</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="left-list">{renderFeedback()}</div>
            <div className="pagination_right">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  if (currentPage === 1) {
                    setCurrentPage(1);
                  }
                  setCurrentPage(currentPage - 1);
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <div
                id="btnPage"
                dangerouslySetInnerHTML={renderButtonPage(totalPages)}
              ></div>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="content-right">
            <div
              className="wrap-none-feedback"
              style={
                itemFeedback === null
                  ? { display: "block" }
                  : { display: "none" }
              }
            ></div>
            <div
              className="wrap-feedback"
              style={
                itemFeedback !== null
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <div className="right-top">
                <div className="wrap-avatar">
                  <div className="avatar">
                    <img
                      src={itemFeedback?.avatar}
                      alt="itemFeedback?.avatar"
                    />
                  </div>
                  <h3>{itemFeedback?.tenNguoiDung}</h3>
                </div>
                <p>
                  {itemFeedback?.ngayGui.time} {itemFeedback?.ngayGui.ngay}
                </p>
              </div>
              <h5>Chủ đề: {itemFeedback?.vanDe}</h5>
              <p>{itemFeedback?.noiDung}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
