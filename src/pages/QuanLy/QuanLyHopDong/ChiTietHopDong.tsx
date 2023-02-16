import React, { useState } from "react";

type Props = {};

export default function ChiTietHopDong({}: Props) {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <div className="chiTietHopDong">
      <div className="container">
        <div className="container-top">
          <p>
            Quản lý<i className="fas fa-chevron-right"></i>Quản lý hợp đồng
            <i className="fas fa-chevron-right"></i>Chi tiết
          </p>
          <h1>Chi tiết hợp đồng uỷ quyền bài hát - BH123</h1>
          {/*truyền title Click thì đổi title  */}
          <div className="tag">
            <p
              className={isActive ? "active" : ""}
              onClick={() => setIsActive(true)}
            >
              Hợp đồng ủy quyền
            </p>
            <p
              className={!isActive ? "active" : ""}
              onClick={() => setIsActive(false)}
            >
              Hợp đồng khai thác
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
