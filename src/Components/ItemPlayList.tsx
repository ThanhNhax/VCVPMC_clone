import { Checkbox, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlayListRedux } from "../redux/playListReducer/playListReducer";

type Props = {
  item: PlayListRedux;
  isPheDuyet?: boolean;
  isCheck: boolean;
};

export default function ItemPlayList({ item, isCheck, isPheDuyet }: Props) {
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
    <div className="itemPlayList">
      <img
        src="https://ds112.github.io/Music/ThietKeGiaoDien-master/images/su%20kien/310b98ade43043a069c3d3e9ee0c5766_1515485837.jpg"
        alt="img.PlayLsit"
        onClick={showModal}
      />
      <div className="itemPlayList_title">
        <h4>{item.tieuDe}</h4>
        <div className="chuDe-tilte">
          {item?.chuDe?.map((chuDe: string, index: number) => {
            return <p key={index}>{chuDe}</p>;
          })}
        </div>
        <p>Người tạo: {item.nguoiTao}</p>
        <p>Ngày tạo: {item.ngayTao}</p>

        <div className="title-bottom">
          <div className="item-list">
            <div className="item">
              <p>Số bản ghi</p>
              <p>{item.soBanGhi}</p>
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
              <Link to={"#"}>
                <div className="bg-icon">
                  <i className="fas fa-info"></i>
                </div>
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
