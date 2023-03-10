import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedback/feedbackReducer";
import hopDongReducer from "./hopDongReducer/hopDongReducer";
import khoBanghiReducer from "./khoBanGhi/khoBanghiReducer";
import lapLichPhatReducer from "./lapLichPhat/lapLichPhatReducer";
import phanQuyenNguoiDungReducer from "./phanQuyenNguoiDung/phanQuyenNguoiDungReducer";
import playListReducer from "./playListReducer/playListReducer";
import quanLyDoiTacUyQuyen from "./quanLyDoiTacUyQuyen/quanLyDoiTacUyQuyen";
import quanLyDonViSuDungReducer from "./quanLyDonViSuDung/quanLyDonViSuDungReducer";
import quanLyThietBiReducer from "./quanLyThietBi/quanLyThietBiReducer";
import theLoaiTacPhamReducer from "./theLoaiTacPham/theLoaiTacPhamReducer";
import userReducer from "./userReducer/userReducer";
import vaiTroNguoiDungReducer from "./vaiTroNguoiDung/vaiTroNguoiDungReducer";
// ...

export const store = configureStore({
  reducer: {
    khoBanGhi: khoBanghiReducer,
    user: userReducer,
    playList: playListReducer,
    lapLichPhat: lapLichPhatReducer,
    hopDong: hopDongReducer,
    quanLyDonViSuDung: quanLyDonViSuDungReducer,
    doiTacUyQuyen: quanLyDoiTacUyQuyen,
    quanLyThietBi: quanLyThietBiReducer,
    phanQuyenNguoiDung: phanQuyenNguoiDungReducer,
    theLoaiTacPham: theLoaiTacPhamReducer,
    feedback: feedbackReducer,
    vaiTroNguoiDung: vaiTroNguoiDungReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
