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
import QuenMatKhau from "./pages/DangNhap/QuenMatKhau";
import TemplateUser from "./pages/DangNhap/TemplateUser";
import CapnhatMatKhau from "./pages/DangNhap/CapnhatMatKhau";
import LinkError from "./pages/DangNhap/LinkError";
import QuanLyPheDuyet from "./pages/KhoBanGhi/QuanLyPheDuyet";
import XemChiTietPlayList from "./pages/Playlist/XemChiTietPlayList";
import EditPlayList from "./pages/Playlist/EditPlayList";
import AddBanGhi from "./pages/Playlist/AddBanGhi";
import AddPlayList from "./pages/Playlist/AddPlayList";
import AddBanGhiPlaylist from "./pages/Playlist/AddBanGhiPlaylist";
import ChiTietLichPhat from "./pages/LapLichPhat/ChiTietLichPhat";
import EditLichPhat from "./pages/LapLichPhat/EditLichPhat";
import ApLichChoThietBi from "./pages/LapLichPhat/ApLichChoThietBi";
import QuanLyHopDong from "./pages/QuanLy/QuanLyHopDong/QuanLyHopDong";
import ThemHopDongUyQuyenMoi from "./pages/QuanLy/QuanLyHopDong/ThemHopDongUyQuyenMoi";
import ThemThongTinBanGhi from "./pages/QuanLy/QuanLyHopDong/ThemThongTinBanGhi";
import ChiTietHopDong from "./pages/QuanLy/QuanLyHopDong/ChiTietHopDong";
import ChinhSuaThongTin from "./pages/QuanLy/QuanLyHopDong/ChinhSuaThongTin";
import ChiTietHopDongKhaiThac from "./pages/QuanLy/QuanLyHopDong/QuanLyHopDongKhaiThac/ChiTietHopDongKhaiThac";
import ChinhSuaHopDongKhaiThac from "./pages/QuanLy/QuanLyHopDong/QuanLyHopDongKhaiThac/ChinhSuaHopDongKhaiThac";
import ThemHopDongKhaiThacMoi from "./pages/QuanLy/QuanLyHopDong/QuanLyHopDongKhaiThac/ThemHopDongKhaiThacMoi";
import QuanLyDonViSuDung from "./pages/QuanLy/DonViSuDung/QuanLyDonViSuDung";
import ChiTietDonViSuDung from "./pages/QuanLy/DonViSuDung/ChiTietDonViSuDung";
import ThemNguoiDung from "./pages/QuanLy/DonViSuDung/ThemNguoiDung";
import ThongTinNguoiDung from "./pages/QuanLy/DonViSuDung/ThongTinNguoiDung";
import ChinhSuaNguoiDung from "./pages/QuanLy/DonViSuDung/ChinhSuaNguoiDung";
import DoiTacUyQuyen from "./pages/QuanLy/DoiTacUyQuyen/DoiTacUyQuyen";
import CapNhatDoiTacUyQuyen from "./pages/QuanLy/DoiTacUyQuyen/CapNhatDoiTacUyQuyen";
import QuanLyThietBi from "./pages/QuanLy/Thietbi/QuanLyThietBi";
import ChiTietThietBi from "./pages/QuanLy/Thietbi/ChiTietThietBi";
import ThemMoiThietBi from "./pages/QuanLy/Thietbi/ThemMoiThietBi";
import QuanLyPhanPhoiDoanhThu from "./pages/DoanhThu/QuanLyPhanPhoiDoanhThu";
import ChiTietDoanhThu from "./pages/DoanhThu/ChiTietDoanhThu";
import LichSuDoiSoat from "./pages/DoanhThu/LichSuDoiSoat/LichSuDoiSoat";
import ChiTietLichSuaDoiSoat from "./pages/DoanhThu/LichSuDoiSoat/ChiTietLichSuaDoiSoat";
import PhanQuyenNguoiDung from "./pages/CaiDat/PhanQuyenNguoiDung/PhanQuyenNguoiDung";
import ThemMoiPhanQuyenNguoiDung from "./pages/CaiDat/PhanQuyenNguoiDung/ThemMoiPhanQuyenNguoiDung";
import ChinhSuaPhanQuyenNguoiDung from "./pages/CaiDat/PhanQuyenNguoiDung/ChinhSuaPhanQuyenNguoiDung";
import ThemMoiVaiTroNguoiDungTrenHeThong from "./pages/CaiDat/PhanQuyenNguoiDung/ThemMoiVaiTroNguoiDungTrenHeThong";
import ChinhSuaVaiTroNguoiDungTrenHeThong from "./pages/CaiDat/PhanQuyenNguoiDung/ChinhSuaVaiTroNguoiDungTrenHeThong";
import CauHinh from "./pages/CaiDat/CauHinh/CauHinh";
import ThongTinTacPham from "./pages/CaiDat/ThongTinTacPham/ThongTinTacPham";
import QuanLyHopDongCaiDat from "./pages/CaiDat/QuanLyHopDong/QuanLyHopDongCaiDat";
import ChinhSuaLoaiHopDong from "./pages/CaiDat/QuanLyHopDong/ChinhSuaLoaiHopDong";
import CanhBaoHetHan from "./pages/CaiDat/QuanLyHopDong/CanhBaoHetHan";
import ChuKyDoiSoat from "./pages/CaiDat/ChuKyDoiSoat/ChuKyDoiSoat";
import ChinhSuaTacPham from "./pages/CaiDat/ThongTinTacPham/ChinhSuaTacPham";
import TaiApp from "./pages/HoTro/TaiApp";
import HuongDanSuDung from "./pages/HoTro/HuongDanSuDung";
import Feedback from "./pages/HoTro/Feedback";
import AdminFeedback from "./pages/HoTro/AdminFeedback";
import BaoCaoDoanhThu from "./pages/DoanhThu/BaoCaoDoanhThu/BaoCaoDoanhThu";
import BaoCaoChiTiet from "./pages/DoanhThu/BaoCaoDoanhThu/BaoCaoChiTiet";
import ChiTietDoanhThuBaoCao from "./pages/DoanhThu/BaoCaoDoanhThu/ChiTietDoanhThuBaoCao";
import LichSuDongBoThietBi from "./pages/DoanhThu/BaoCaoDoanhThu/LichSuDongBoThietBi";
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
            <Route path="*" element={<Navigate to={""} />}></Route>
            <Route path="/quenMatKhau" element={<QuenMatKhau />}></Route>
            <Route path="/capNhatMatKhau" element={<CapnhatMatKhau />}></Route>
            <Route path="/linkError" element={<LinkError />}></Route>
          </Route>
        </Route>

        <Route>
          <Route path="/admin" element={<TemplateAmin />}>
            <Route
              index
              path="/admin/khobanghi"
              element={<KhoBanGhi />}
            ></Route>
            <Route
              path="/admin/khobanghi/capnhat"
              element={<CapNhatkhoBanGhi />}
            ></Route>
            <Route
              path="/admin/khobanghi/quanLyPheDuyet"
              element={<QuanLyPheDuyet />}
            ></Route>
            <Route path="/admin/playlist" element={<Playlist />}></Route>
            <Route
              path="/admin/playlist/xemchitiet"
              element={<XemChiTietPlayList />}
            ></Route>
            <Route
              path="/admin/editplaylist"
              element={<EditPlayList />}
            ></Route>
            <Route path="/admin/addbanghi" element={<AddBanGhi />}></Route>
            <Route path="/admin/addplaylist" element={<AddPlayList />}></Route>
            <Route
              path="/admin/addbanghiplaylist"
              element={<AddBanGhiPlaylist />}
            ></Route>
            <Route path="/admin/laplichphat" element={<LapLichPhat />}></Route>
            <Route
              path="/admin/lapLichPhat/chiTiet"
              element={<ChiTietLichPhat />}
            ></Route>
            <Route
              path="/admin/lapLichPhat/editLichPhat"
              element={<EditLichPhat />}
            ></Route>
            <Route
              path="/admin/lapLichPhat/editLichPhat/apLichChoThietBi"
              element={<ApLichChoThietBi />}
            ></Route>
            <Route
              path="/admin/thongtincoban"
              element={<ThongTinCoBan />}
            ></Route>
            <Route path="/admin/suathongtin" element={<SuaThongTin />}></Route>
            <Route
              path="/admin/quanLyHopDong"
              element={<QuanLyHopDong />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/themHopDongUyQuyenMoi"
              element={<ThemHopDongUyQuyenMoi />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/themThongTinBanGhi"
              element={<ThemThongTinBanGhi />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/chiTiet"
              element={<ChiTietHopDong />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/chiTietHopDongKhaiThac"
              element={<ChiTietHopDongKhaiThac />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/chiTietHopDongKhaiThac/chinhSuaHopDongKhaiThac"
              element={<ChinhSuaHopDongKhaiThac />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/themHopDongKhaiThacMoi"
              element={<ThemHopDongKhaiThacMoi />}
            ></Route>
            <Route
              path="/admin/quanLyHopDong/chiTiet/chinhSuaThongTin"
              element={<ChinhSuaThongTin />}
            ></Route>
            <Route
              path="/admin/donViSuDung"
              element={<QuanLyDonViSuDung />}
            ></Route>
            <Route
              path="/admin/donViSuDung/chiTiet"
              element={<ChiTietDonViSuDung />}
            ></Route>
            <Route
              path="/admin/donViSuDung/chiTiet/themNguoiDung"
              element={<ThemNguoiDung />}
            ></Route>
            <Route
              path="/admin/donViSuDung/chiTiet/thongTinNguoiDung"
              element={<ThongTinNguoiDung />}
            ></Route>
            <Route
              path="/admin/donViSuDung/chiTiet/thongTinNguoiDung/chinhSuaThongTin"
              element={<ChinhSuaNguoiDung />}
            ></Route>
            <Route
              path="/admin/quanLyUyQuyen"
              element={<DoiTacUyQuyen />}
            ></Route>
            <Route
              path="/admin/quanLyUyQuyen/capNhat"
              element={<CapNhatDoiTacUyQuyen />}
            ></Route>
            <Route
              path="/admin/quanLyThietBi"
              element={<QuanLyThietBi />}
            ></Route>
            <Route
              path="/admin/quanLyThietBi/chiTiet"
              element={<ChiTietThietBi />}
            ></Route>
            <Route
              path="/admin/quanLyThietBi/themMoi"
              element={<ThemMoiThietBi />}
            ></Route>
            <Route
              path="/admin/phanPhoiDoanhThu"
              element={<QuanLyPhanPhoiDoanhThu />}
            ></Route>
            <Route
              path="/admin/phanPhoiDoanhThu/chiTiet"
              element={<ChiTietDoanhThu />}
            ></Route>
            <Route
              path="/admin/lichSuaDoiSoat"
              element={<LichSuDoiSoat />}
            ></Route>
            <Route
              path="/admin/lichSuDoiSoat/chiTiet"
              element={<ChiTietLichSuaDoiSoat />}
            ></Route>
            <Route
              path="/admin/phanQuyenNguoiDung"
              element={<PhanQuyenNguoiDung />}
            ></Route>
            <Route
              path="/admin/phanQuyenNguoiDung/themMoi"
              element={<ThemMoiPhanQuyenNguoiDung />}
            ></Route>
            <Route
              path="/admin/phanQuyenNguoiDung/chinhSua"
              element={<ChinhSuaPhanQuyenNguoiDung />}
            ></Route>
            <Route
              path="/admin/phanQuyenNguoiDung/themMoiVaiTro"
              element={<ThemMoiVaiTroNguoiDungTrenHeThong />}
            ></Route>
            <Route
              path="/admin/phanQuyenNguoiDung/chinhSuaVaiTroNguoiDungTrenHeThong"
              element={<ChinhSuaVaiTroNguoiDungTrenHeThong />}
            ></Route>
            <Route path="/admin/cauHinh" element={<CauHinh />}></Route>
            <Route
              path="/admin/thongTinTacPham"
              element={<ThongTinTacPham />}
            ></Route>
            <Route
              path="/admin/caiDat/quanLyHopDong"
              element={<QuanLyHopDongCaiDat />}
            ></Route>
            <Route
              path="/admin/caiDat/quanLyHopDong/chinhSua"
              element={<ChinhSuaLoaiHopDong />}
            ></Route>
            <Route
              path="/admin/caiDat/quanLyHopDong/chinhSuaCanhBao"
              element={<CanhBaoHetHan />}
            ></Route>
            <Route
              path="/admin/chuKyDoiSoat"
              element={<ChuKyDoiSoat />}
            ></Route>
            <Route
              path="/admin/thongTinTacPham/chinhSua"
              element={<ChinhSuaTacPham />}
            ></Route>
            <Route path="/admin/taiApp" element={<TaiApp />}></Route>
            <Route
              path="/admin/huongDanSuDung"
              element={<HuongDanSuDung />}
            ></Route>
            <Route path="/admin/feedback" element={<Feedback />}></Route>
            <Route
              path="/admin/adminFeedback"
              element={<AdminFeedback />}
            ></Route>
            <Route
              path="/admin/baoCaoDoanhThu"
              element={<BaoCaoDoanhThu />}
            ></Route>
            <Route
              path="/admin/baoCaoDoanhThu/chiTiet"
              element={<BaoCaoChiTiet />}
            ></Route>
            <Route
              path="/admin/baoCaoDoanhThu/chiTiet/chiTietDoanhThu"
              element={<ChiTietDoanhThuBaoCao />}
            ></Route>
            <Route
              path="/admin/baoCaoDoanhThu/chiTiet/lichSuDongBoThietBi"
              element={<LichSuDongBoThietBi />}
            ></Route>
            <Route
              path="*"
              element={<Navigate to={"/admin/khobanghi"} />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
