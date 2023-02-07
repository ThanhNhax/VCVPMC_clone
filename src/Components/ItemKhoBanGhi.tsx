import React from "react";
import { KhoBanGhiRedux } from "../redux/khoBanGhi/khoBanghiReducer";

type Props = {
  item: KhoBanGhiRedux;
};

export default function ItemKhoBanGhi({ item }: Props) {
  return (
    <div className="item_khoBanGhi">
      <video src=""></video>
      <div className="item_khoBanGhi-title">
        <div className="title-top">
          <h4>{item.tenBanGhi}</h4>
          <p>Ca sĩ: {item.caSi}</p>
          <p>Sáng tác: {item.tacGia}</p>
          <p>Số hợp đồng: {item.maISRC}</p>
        </div>
        <div className="title-bottom">
          <div className="item-list">
            <div className="item">
              <p>Thể loại</p>
              <p>{item.theLoai}</p>
            </div>
            <div className="item">
              <p>Định dạng</p>
              <p>{item.dingDang}</p>
            </div>
            <div className="item">
              <p>Thời lượng</p>
              <p>{item.thoiLuong}</p>
            </div>
          </div>
          <div className="item-edit">
            <i className="fa fa-edit"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
