import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { clearLocalStorage, getStoreJSON, UID_USER } from "../../util/setting";
import { dangXuat, getUser } from "../../redux/userReducer/userReducer";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../FireStore/fireStore";

//modal

import { Modal } from "antd";

export default function ThongTinCoBan() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  //Lấy uid từ localStore lên để call user
  let uidUserStore: string = getStoreJSON(UID_USER);

  const [isType, setIsType] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getUser(uidUserStore));
  }, []);

  // modal
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
  // modal
  return (
    <div className="thongtincoban">
      <div className="container">
        <h1>Thông Tin Cơ Bản</h1>
        <div className="content">
          <div className="content_avatar">
            <div className="left-avatar">
              <img src={user.avatar} alt="avatar.png" />
              <div className="camera">
                <i className="fas fa-camera"></i>
              </div>
            </div>
            <p>
              {user.ten} {user.ho}
            </p>
          </div>
          <div className="content_form">
            <div id="form_profile">
              <form>
                <div className="form_profile-top">
                  <div>
                    <div className="form_title">
                      <label htmlFor="ho">Họ:</label>
                      <br />
                      <input
                        type="text"
                        name="ho"
                        id="ho"
                        value={user.ho}
                        readOnly
                      />
                    </div>
                    <div className="form_title">
                      <label htmlFor="ngaySinh">Ngày sinh:</label>
                      <br />
                      <input
                        type="text"
                        name="ngaySinh"
                        id="ngaySinh"
                        value={user.ngaySinh}
                        readOnly
                      />
                    </div>
                  </div>

                  <div>
                    <div className="form_title">
                      <label htmlFor="ten">Tên:</label>

                      <br />
                      <input
                        type="text"
                        name="ten"
                        id="ten"
                        value={user.ten}
                        readOnly
                      />
                    </div>
                    <div className="form_title">
                      <label htmlFor="sdt">Số điện thoại:</label>
                      <br />
                      <input
                        type="text"
                        name="sdt"
                        id="sdt"
                        value={user.sdt}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="form_profile-bottom">
                  <div className="form_title">
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={user.email}
                      readOnly
                    />
                  </div>
                  <div className="form_title">
                    <label htmlFor="tenDangNhap">Tên đăng nhập:</label>
                    <br />
                    <input
                      type="text"
                      name="tenDangNhap"
                      id="tenDangNhap"
                      value={user.tenDangNhap}
                      readOnly
                    />
                  </div>
                  <div className="form_title">
                    <label htmlFor="phanQuyen">Phân quyền:</label>
                    <br />
                    <input
                      type="text"
                      name="phanQuyen"
                      id="phanQuyen"
                      value={user.phanQuyen}
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="menu">
          <NavLink to={"/admin/suathongtin"} className="menu_icon">
            <div className="icon-bg">
              <i className="fas fa-edit"></i>
            </div>
            <p>Sửa thông tin</p>
          </NavLink>
          <div className="menu_icon">
            <div className="icon-bg" onClick={showModal}>
              <i className="fas fa-lock"></i>
            </div>
            <p>Đổi mật khẩu</p>
          </div>
          <div
            className="menu_icon"
            onClick={() => {
              console.log("Đăng xuất");
              dangXuat(auth);
            }}
          >
            <div className="icon-bg">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <p>Đăng xuất</p>
          </div>
        </div>

        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          wrapClassName="modal_doiMatKhau"
        >
          <form>
            <h5>Thay đổi mật khẩu</h5>
            <div className="form-title">
              <label htmlFor="passwordHienTai">Mật khẩu hiện tại:</label>
              <div className="password">
                <input type="password" id="passwordHienTai" />
                <i
                  onClick={() => {
                    setIsType(isType ? false : true);
                  }}
                  id={isType ? "" : "doiMau"}
                  className="fa fa-eye"
                ></i>
              </div>
            </div>
            <div className="form-title">
              <label htmlFor="passwordMoi">Mật khẩu mới:</label>
              <div className="password">
                <input type="password" id="passwordMoi" />
                <i
                  onClick={() => {
                    setIsType(isType ? false : true);
                  }}
                  id={isType ? "" : "doiMau"}
                  className="fa fa-eye"
                ></i>
              </div>
            </div>
            <div className="form-title">
              <label htmlFor="passwordNhapLai">
                Nhập lại mật khẩu hiện tại:
              </label>
              <div className="password">
                <input type="password" id="passwordNhapLai" />

                <i
                  onClick={() => {
                    setIsType(isType ? false : true);
                  }}
                  id={isType ? "" : "doiMau"}
                  className="fa fa-eye"
                ></i>
              </div>
            </div>
            <div className="form-btn">
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Hủy
              </button>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(false);
                }}
              >
                Lưu
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}
