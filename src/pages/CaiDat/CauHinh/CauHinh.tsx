import React, { useState } from "react";

export default function CauHinh() {
  const [img, setImg] = useState<string>("../../img/image_20.png");
  return (
    <div className="CauHinh">
      <div className="container">
        <div className="container-top">
          <p>
            Cài đặt<i className="fas fa-chevron-right"></i>Cài đặt hệ thống
          </p>
          <h1>Cài đặt cấu hình</h1>
        </div>
        <div className="container-content">
          <div className="content-carousel">
            <div className="carousel-left">
              <div className="wrap-img">
                <img src={img} alt={img} />
                <p>Theme 1</p>
                <div className="bg-icon">
                  <i className="fas fa-check"></i>
                </div>
              </div>
            </div>
            <div className="carousel-right">
              <div className="carousel">
                <div className="btn">
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div onClick={() => setImg("../../img/Rectangle_7.png")}>
                  <img src="../../img/Rectangle_7.png" alt="Rectangle_7.png" />
                  <p>Theme 2</p>
                </div>
                <div onClick={() => setImg("../../img/Rectangle_8.png")}>
                  <img src="../../img/Rectangle_8.png" alt="Rectangle_8.png" />
                  <p>Theme 3</p>
                </div>
                <div onClick={() => setImg("../../img/Rectangle_9.png")}>
                  <img src="../../img/Rectangle_9.png" alt="Rectangle_9.png" />
                  <p>Theme 4</p>
                </div>
                <div className="btn">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Ngôn ngữ hiển thị</label>
            <select name="" id="">
              <option value="">Tiếng Việt</option>
              <option value="">Tiếng Anh</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
