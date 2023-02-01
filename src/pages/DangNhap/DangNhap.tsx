import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import TopSibar from "../../Components/TopSibar";
import { db } from "../../FireStore/fireStore";
type Props = {};

interface Login {
  userName: string | undefined;
  password: string | undefined;
}
export default function DangNhap({}: Props) {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userLogin: Login = {
      userName: userName,
      password: password,
    };
    if (userLogin.userName !== "" && userLogin.password !== "") {
      await addDoc(collection(db, "user"), userLogin);
      setUserName("");
    }
  };
  return (
    <div className="dang_nhap">
      <TopSibar />
      <div className="dang_nhap_content">
        <div className="logo">
          <img src="../img/vcpmc_logo.png" alt="logo_vcpmc" />
        </div>
        <div className="content">
          <h1>Đăng nhập</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form_title">
            <label htmlFor="userName">Tên đăng nhập</label>
            <br />
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="form_title">
            <label htmlFor="password">Password</label>
            <br />
            <div className="password">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <i className="fas fa-eye"></i>
            </div>
          </div>
          <div className="form_checkbox">
            <input type="checkbox" id="ghi_nho" />
            <label htmlFor="ghi_nho">Ghi nhớ đăng nhập</label>
          </div>
          <div className="form_button">
            <button type="submit">Đăng nhập</button>
          </div>
        </form>
        <div className="form_footer">
          <a>Quên mật khẩu?</a>
        </div>
      </div>
    </div>
  );
}
