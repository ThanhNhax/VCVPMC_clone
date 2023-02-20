import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getLapLichPhatFireStore,
  LapLichPhatRedux,
  setItemLapLichPhat,
} from "../../redux/lapLichPhat/lapLichPhatReducer";

export default function LapLichPhat() {
  const { arrLapLichPhat } = useSelector(
    (state: RootState) => state.lapLichPhat
  );
  console.log({ arrLapLichPhat });
  // cấu hình phân pages
  // const [currentPage, setCurrentPage] = useState<number>(1); // Vị trí page hiện tại
  // const [limit, setLimit] = useState<number>(13); // change số item hiển thị
  // const indexOfLastNews = currentPage * limit; // vị trí cuối
  // const indexOfFirstNews = indexOfLastNews - limit; // Vị trí đầu
  // // const totalPages = Math.ceil(arrPlayList.length / limit); // Tính số tổng số pages
  // // const newArrPlayList = arrPlayList.slice(indexOfFirstNews, indexOfLastNews);
  // const [isStyleBtn, setIsStyleBtn] = useState<boolean>(false);
  // cấu hình phân pages
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    // lấy data lập lịch phát từ fireStore về cập nhật lên redux
    dispatch(getLapLichPhatFireStore());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleXemChiTiet = (item: LapLichPhatRedux) => {
    // Cập nhật lên redux item lập lịch phát để dàn data trang chi tiết lập lịch phát
    dispatch(setItemLapLichPhat(item));
    navigate("/admin/lapLichPhat/chiTiet");
  };
  const renderTableLapLichPhat = () => {
    return arrLapLichPhat.map((lichPhat: LapLichPhatRedux, index: number) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{lichPhat.tenLich}</td>
          <td>
            {lichPhat.ngayBatDau} - {lichPhat.ngayKetThuc}
          </td>
          <td onClick={() => handleXemChiTiet(lichPhat)} className="action">
            Xem chi tiết
          </td>
          <td className="action-xoa">Xóa</td>
        </tr>
      );
    });
  };
  const navigate = useNavigate();
  return (
    <div className="lapLichPhat">
      <h1>Danh sách lịch phát</h1>
      <div className="container">
        <div className="container-table">
          <div className="wrap-table">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên lịch</th>
                  <th>Thời gian phát</th>
                </tr>
              </thead>
              <tbody>{renderTableLapLichPhat()}</tbody>
            </table>
            <div className="pagination-table">
              <div className="pagination_left">
                <p>
                  Hiển thị
                  <input defaultValue="13"></input>
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
        <div className="container-menu">
          <div
            className="bg_icon"
            onClick={() => {
              // navigate("/admin/addplaylist");
              // console.log("/admin/addplaylist");
            }}
          >
            <i className="fas fa-plus"></i>
          </div>
          <p>Thêm lịch phát</p>
        </div>
      </div>
    </div>
  );
}
