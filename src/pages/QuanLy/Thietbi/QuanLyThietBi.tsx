/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  getArrQuanLyThietBiFireStore,
  QuanLyThietBiRedux,
  setItemThietBi,
} from "../../../redux/quanLyThietBi/quanLyThietBiReducer";
import { useNavigate } from "react-router-dom";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../FireStore/fireStore";
import moment from "moment";
interface Disabled {
  trangThai: boolean;
  id: string;
}
export default function QuanLyThietBi() {
  const [isArrDisabled, setIsArrDisabled] = useState<Disabled[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  console.log({ isDisabled });
  console.log({ isArrDisabled });
  const navigate = useNavigate();
  const { arrQuanLyThietBi } = useSelector(
    (state: RootState) => state.quanLyThietBi
  );
  console.log({ arrQuanLyThietBi });
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getArrQuanLyThietBiFireStore());
    console.log("get arrQuanLyThietbi");
  }, []);
  const handleKichHoat = () => {
    if (isArrDisabled.length === 0) {
      setIsDisabled(true);
    } else {
      let tam = isArrDisabled.some(
        (item) => !isArrDisabled[0].trangThai === item.trangThai
      );
      console.log({ tam });
      if (tam) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    }
  };
  const onChange = (e: CheckboxChangeEvent, thietBi: QuanLyThietBiRedux) => {
    let newValue: Disabled = {
      trangThai: thietBi.trangThai,
      id: thietBi.id,
    };
    if (e.target.checked) {
      setIsArrDisabled([...isArrDisabled, newValue]);
    } else {
      let index = isArrDisabled.findIndex((item) => item.id === thietBi.id);
      console.log({ index });
      let newArrDisable = isArrDisabled.splice(index, 1);
      setIsArrDisabled([...isArrDisabled]);
    }
    if (isArrDisabled.length === 0) {
      setIsDisabled(true);
    }
  };
  useEffect(() => {
    handleKichHoat();
    console.log("re-render");
  }, [isArrDisabled.length]);

  const renderTableLeft = () => {
    return arrQuanLyThietBi.map(
      (thietBi: QuanLyThietBiRedux, index: number) => (
        <tr key={index}>
          <td>
            <Checkbox onChange={(e) => onChange(e, thietBi)}></Checkbox>
          </td>
          <td
            className="text_right"
            onClick={() => {
              dispatch(setItemThietBi(thietBi));
              navigate("/admin/quanLyThietBi/chiTiet");
            }}
          >
            {index + 1}
          </td>
          <td
            onClick={() => {
              dispatch(setItemThietBi(thietBi));
              navigate("/admin/quanLyThietBi/chiTiet");
            }}
          >
            {thietBi.tenThietBi}
          </td>
          <td
            className={thietBi.trangThai ? "true" : "false"}
            onClick={() => {
              dispatch(setItemThietBi(thietBi));
              navigate("/admin/quanLyThietBi/chiTiet");
            }}
          >
            {thietBi.trangThai
              ? "Đang kích hoạt | Đang hoạt động"
              : "Ngừng kích hoạt "}
          </td>
        </tr>
      )
    );
  };
  const renderTableRight = () => {
    return arrQuanLyThietBi.map(
      (thietBi: QuanLyThietBiRedux, index: number) => (
        <tr
          key={index}
          onClick={() => {
            dispatch(setItemThietBi(thietBi));
            navigate("/admin/quanLyThietBi/chiTiet");
          }}
        >
          <td>{thietBi.hanHopDong ? thietBi.hanHopDong : "-"}</td>
          <td>{thietBi.tenDangNhap ? thietBi.tenDangNhap : "-"}</td>
          <td>{thietBi.diaChi ? thietBi.diaChi : "-"}</td>
          <td>{thietBi.memory ? thietBi.memory : "-"}</td>
          <td>{thietBi.macAddresss ? thietBi.macAddresss : "-"}</td>
          <td>{thietBi.skuId ? thietBi.skuId : "-"}</td>
          <td>
            {thietBi.hanBaoHanh
              ? moment(thietBi.hanBaoHanh).format("DD/MM/YYYY")
              : "-"}
          </td>
        </tr>
      )
    );
  };

  return (
    <div className="quanLyThietBi">
      <div className="container">
        <div className="container-top">
          <h1>Danh sách thiết bị</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-top">
              <div className="wrap-select">
                <select>
                  <option value="">Chọn nhóm tài khoản</option>
                  <option value="">Tất cả</option>
                  <option value="">Công ty TMCP Bách Hóa Xanh</option>
                  <option value="">Công ty TNHH XYZ</option>
                  <option value="">Công ty TMCP Adora</option>
                </select>
                <select>
                  <option value="">Ẩn hiện cột</option>
                  <option value="">MAC Address</option>
                  <option value="">Memory</option>
                  <option value="">SKU/ID</option>
                  <option value="">Hạn bảo hành</option>
                  <option value="">Tên đăng nhập</option>
                  <option value="">Trạng thái</option>
                  <option value="">Địa điểm</option>
                  <option value="">Hạn hợp đồng</option>
                </select>
              </div>
              <div className="search">
                <div id="input_search">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"
                  />
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
            <div className="content-table">
              <div className="wrap-table">
                <div className="wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <Checkbox />
                        </th>
                        <th>STT</th>
                        <th>Tên thiết bị</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableLeft()}</tbody>
                  </table>
                </div>
                <div className="wrap-table-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>Hạn hợp đồng</th>
                        <th>Tên đăng nhập</th>
                        <th>Địa điểm</th>
                        <th>Memory</th>
                        <th>MAC Addresss</th>
                        <th>SKU/ID</th>
                        <th>Hạn Bảo hành</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableRight()}</tbody>
                  </table>
                </div>
              </div>
              <div className="pagination-table">
                <div className="pagination_left">
                  <p>
                    Hiển thị
                    <select
                    // value={limit}
                    // onChange={(e) => {
                    //   setLimit(parseInt(e.target.value));
                    // }}
                    >
                      <option value="12">12</option>
                      <option value="6">6</option>
                      <option value="8">8</option>
                    </select>
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
          <div className="menu">
            <div className="menu-item">
              <div
                className="bg-icon"
                onClick={() => navigate("/admin/quanLyThietBi/themMoi")}
              >
                <i className="fas fa-plus"></i>
              </div>
              <p>Thêm thiết bị</p>
            </div>
            <div
              className="menu-item "
              aria-disabled={isDisabled}
              onClick={() => {
                let arrThietBiNew: QuanLyThietBiRedux[] = [];
                // eslint-disable-next-line array-callback-return
                isArrDisabled.map((item: Disabled) => {
                  let newItem = arrQuanLyThietBi.find(
                    (thietBi) => thietBi.id === item.id
                  );
                  if (newItem) {
                    arrThietBiNew.push(newItem);
                    updateDoc(doc(db, "quanLyThietBi", newItem.id), {
                      trangThai: !newItem.trangThai,
                    });
                  }
                });
              }}
            >
              <div className="bg-icon">
                <i className="fas fa-power-off"></i>
              </div>
              <p>
                {isDisabled || isArrDisabled[0]?.trangThai
                  ? "Ngừng kích hoạt thiết bị"
                  : " Kích hoạt thiết bị"}
              </p>
            </div>
            <div className="menu-item" aria-disabled={isDisabled}>
              <div className="bg-icon">
                <i className="fas fa-lock"></i>
              </div>
              <p>
                {isDisabled || isArrDisabled[0]?.trangThai
                  ? "Khoá thiết bị"
                  : "Mở khóa thiết bị"}
              </p>
            </div>
            <div className="menu-item">
              <div
                className="bg-icon"
                onClick={() => {
                  console.log("handleDelete");
                  isArrDisabled.map((check: Disabled) => {
                    deleteDoc(doc(db, "quanLyThietBi", check.id));
                  });
                }}
              >
                <i className="far fa-trash-alt"></i>
              </div>
              <p>Xoá thiết bịị</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
