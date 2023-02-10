import { Checkbox, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  KhoBanGhiRedux,
  setItemKhoBanGhi,
} from "../redux/khoBanGhi/khoBanghiReducer";

type Props = {
  item: KhoBanGhiRedux;
  isPheDuyet: boolean;
  isCheck: boolean;
};

export default function ItemKhoBanGhi({ item, isPheDuyet, isCheck }: Props) {
  const dispatch = useDispatch();
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
  return (
    <div className="item_khoBanGhi">
      <video
        onClick={showModal}
        src="https://www.youtube.com/embed/PoXDg2saXX8"
        title="YouTube video player"
      ></video>
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
              <p>{item.dinhDang}</p>
            </div>
            <div className="item">
              <p>Thời lượng</p>
              <p>{item.thoiLuong}</p>
            </div>
          </div>
          <div className="item-edit">
            {isPheDuyet ? (
              <Checkbox checked={isCheck ? true : false} />
            ) : (
              <Link to={"/admin/khobanghi/capnhat"}>
                <i
                  onClick={() => {
                    console.log("edit");

                    console.log("Click Cap nhat");
                    dispatch(setItemKhoBanGhi(item));
                  }}
                  className="fa fa-edit"
                ></i>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        wrapClassName="modal-video"
        width={480}
      >
        <video
          width="452"
          height="247"
          src="https://www.youtube.com/embed/PoXDg2saXX8"
          title="YouTube video player"
        ></video>
      </Modal>
    </div>
  );
}
