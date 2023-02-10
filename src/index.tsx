import React from "react";
import ReactDOM from "react-dom/client";
// Cấu hình router-dom
//setup router dom
import {
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
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
import SuaThongTin from "./pages/ThongTinCoBan/SuaThongTin";
import DomeModal from "./HOC/DomeModal";
import QuenMatKhau from "./pages/DangNhap/QuenMatKhau";
import TemplateUser from "./pages/DangNhap/TemplateUser";
import CapnhatMatKhau from "./pages/DangNhap/CapnhatMatKhau";
import LinkError from "./pages/DangNhap/LinkError";
import QuanLyPheDuyet from "./pages/KhoBanGhi/QuanLyPheDuyet";
export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route>
          <Route path="" element={<TemplateUser />}>
            <Route index element={<DangNhap />}></Route>
            <Route path="*" element={<Navigate to={"/"} />}></Route>
            <Route path="/demoModal" element={<DomeModal />}></Route>
            <Route path="/quenMatKhau" element={<QuenMatKhau />}></Route>
            <Route path="/capNhatMatKhau" element={<CapnhatMatKhau />}></Route>
            <Route path="/linkError" element={<LinkError />}></Route>
          </Route>
        </Route>

        <Route>
          <Route path="/admin" element={<TemplateAmin />}>
            <Route index element={<KhoBanGhi />}></Route>
            <Route
              path="/admin/khobanghi/capnhat"
              element={<CapNhatkhoBanGhi />}
            ></Route>{" "}
            <Route
              path="/admin/khobanghi/quanLyPheDuyet"
              element={<QuanLyPheDuyet />}
            ></Route>
            <Route path="/admin/playlist" element={<Playlist />}></Route>
            <Route path="/admin/laplichphat" element={<LapLichPhat />}></Route>
            <Route
              path="/admin/thongtincoban"
              element={<ThongTinCoBan />}
            ></Route>
            <Route path="/admin/suathongtin" element={<SuaThongTin />}></Route>
            {/* <Route path="*" element={<Navigate to={"/admin"} />}></Route> */}
          </Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
