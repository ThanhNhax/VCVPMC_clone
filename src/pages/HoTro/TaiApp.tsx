import React from "react";

export default function TaiApp() {
  return (
    <div className="TaiApp">
      <img id="img-bg" src="../../img/icon/Group-72.png" alt="Group72.png" />
      <img id="img-bg2" src="../../img/icon/Group-75.png" alt="Group72.png" />

      <div className="container">
        <div className="container-top">
          <p>
            Hỗ trợ<i className="fas fa-chevron-right"></i>Tải App
          </p>
          <h1>Tải App</h1>
          <div className="content">
            <h1>
              ỨNG DỤNG <b>VCPMC</b>
            </h1>
            <p>
              Bạn vui lòng chọn <br />
              <b>nền tảng</b> phù hợp để trải nghiệm
            </p>
            <div className="card">
              <div className="item">
                <img src="../../img/icon/Group.png" alt="Group.png" />

                <button>Tool Upload</button>
              </div>
              <div className="item">
                <img src="../../img/icon/windown.png" alt="windown.png" />

                <button>Tải App Window</button>
              </div>
              <div className="item">
                <img src="../../img/icon/Android.png" alt="Android.png" />

                <button>Tải App Android</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
