/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { history } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { message } from "antd";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  KhoBanGhiRedux,
  updateItemKhoBanGhiFireStore,
} from "../../redux/khoBanGhi/khoBanghiReducer";
import moment from "moment";

export default function CapNhatkhoBanGhi() {
  const dispatch: AppDispatch = useDispatch();
  //Lấy Item kho bản ghi từ redux về
  const item: KhoBanGhiRedux = useSelector(
    (state: RootState) => state.khoBanGhi.itemKhoBanGhi
  );
  console.log({ item });
  const [tenBanGhi, setTenBanGhi] = useState<string>(
    item.tenBanGhi ? item.tenBanGhi : ""
  );
  const [maISRC, setMaISRC] = useState<string>(item.maISRC ? item.maISRC : "");
  const [caSi, setCaSi] = useState<string>(item.caSi ? item.caSi : "");
  const [tacGia, setTacGia] = useState<string>(item.tacGia ? item.tacGia : "");
  const [nhaSanXuat, setNhaSanXuat] = useState<string>(
    item.nhaSanXuat ? item.nhaSanXuat : ""
  );
  const [theLoai, setTheLoai] = useState<string>(
    item.theLoai ? item.theLoai : ""
  );

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let itemUpdate: KhoBanGhiRedux = {
      caSi: caSi,
      dinhDang: item.dinhDang ? item.dinhDang : "Aidio",
      id: item.id,
      maISRC: maISRC,
      ngayTai: item.ngayTai,
      nhaSanXuat: nhaSanXuat,
      soHopDong: item.soHopDong,
      tacGia: tacGia,
      tenBanGhi: tenBanGhi,
      theLoai: theLoai,
      thoiHanSuDung: item.thoiHanSuDung,
      thoiLuong: item.thoiLuong,
    };
    console.log({ itemUpdate });
    dispatch(updateItemKhoBanGhiFireStore(itemUpdate));
  };

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
        <div className="wrap-content">
          <div className="wrap">
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
                    <p>{moment(item.ngayTai).format("MM/MM/YYYY")}</p>
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
                    <p>{item.soHopDong}</p>
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
                    {item.thoiHanSuDung?.thoiHan ? (
                      <p className="true-thoiHan">Còn thời hạn</p>
                    ) : (
                      <p className="false-thoiHan">Đã hết hạn</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="content_right">
              <h5>Chỉnh sửa thông tin</h5>

              <form>
                <div className="form_profile">
                  <div className="form_title">
                    <label htmlFor="tenBanGhi">
                      Tên bản ghi: <i>*</i>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="tenBanGhi"
                      id="tenBanGhi"
                      value={tenBanGhi}
                      onChange={(e) => setTenBanGhi(e.target.value)}
                    />
                  </div>
                  <div className="form_title">
                    <label htmlFor="maISRC">
                      Mã ISRC: <i>*</i>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="maISRC"
                      id="maISRC"
                      value={maISRC}
                      onChange={(e) => setMaISRC(e.target.value)}
                    />
                  </div>
                  <div className="form_title">
                    <label htmlFor="caSi">
                      Ca sĩ: <i>*</i>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="caSi"
                      id="caSi"
                      value={caSi}
                      onChange={(e) => setCaSi(e.target.value)}
                    />
                  </div>
                  <div className="form_title">
                    <label htmlFor="tacGia">
                      Tác giả: <i>*</i>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="tacGia"
                      id="tacGia"
                      value={tacGia}
                      onChange={(e) => setTacGia(e.target.value)}
                    />
                  </div>

                  <div className="form_title">
                    <label htmlFor="nhaSanXuat">
                      Nhà sản xuất: <i>*</i>
                    </label>
                    <br />
                    <input
                      type="nhaSanXuat"
                      name="nhaSanXuat"
                      id="nhaSanXuat"
                      value={nhaSanXuat}
                      onChange={(e) => setNhaSanXuat(e.target.value)}
                    />
                  </div>
                  <div className="form_title">
                    <label htmlFor="theLoai">
                      Thể loại: <i>*</i>
                    </label>
                    <br />
                    <select
                      name="theLoai"
                      id="theLoai"
                      value={theLoai}
                      onChange={(e) => setTheLoai(e.target.value)}
                    >
                      <option defaultValue="pop">Pop</option>
                      <option defaultValue="ballad">Ballad</option>
                      <option defaultValue="rock">Rock</option>
                      <option defaultValue="edm">EDM</option>
                    </select>
                  </div>
                </div>
              </form>
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
            <button type="submit" onClick={handleSubmit}>
              Lưu
            </button>
          </div>
        </div>
        <div className="xoaBanGhi">
          <div className="icon" onClick={() => handleDelete(item.id)}>
            <i className="fas fa-times"></i>
          </div>
          <p>Xóa bản ghi</p>
        </div>
      </div>
    </div>
  );
}
