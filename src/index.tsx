import React from "react";
import ReactDOM from "react-dom/client";
// Cấu hình router-dom
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
// scss
import "./assets/scss/Style.scss";
// Cấu hình reudx
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

import DangNhap from "./pages/DangNhap/DangNhap";
import TemplateAmin from "./pages/Admin/TemplateAmin";
import ThongTinCoBan from "./pages/ThongTinCoBan/ThongTinCoBan";
import KhoBanGhi from "./pages/KhoBanGhi/KhoBanGhi";
import Playlist from "./pages/Playlist/Playlist";
import LapLichPhat from "./pages/LapLichPhat/LapLichPhat";
import CapNhatkhoBanGhi from "./pages/KhoBanGhi/CapNhatkhoBanGhi";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<DangNhap />}></Route>
          <Route path="*" element={""}></Route>
        </Routes>

        <Routes>
          <Route path="/admin" element={<TemplateAmin />}>
            <Route index element={<KhoBanGhi />}></Route>
            <Route
              path="/admin/khobanghi/capnhat"
              element={<CapNhatkhoBanGhi />}
            ></Route>
            <Route path="/admin/playlist" element={<Playlist />}></Route>
            <Route path="/admin/laplichphat" element={<LapLichPhat />}></Route>
            <Route
              path="/admin/thongtincoban"
              element={<ThongTinCoBan />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
