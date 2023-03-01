import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface DoiTacUyQuyenRedux {
  tenNguoiDung: string;
  email: string;
  soDienThoi: string;
  vaiTro: string;
  tenDangNhap: string;
  matKhau: string;
  matKhauNhapLai: string;
  trangThai: string;
  id: string;
  ngayHetHan: string;
}
interface DoiTacUyQuyenState {
  arrDoiTacUyQuyen: DoiTacUyQuyenRedux[] | [];
  itemDoiTacUyQuyen: DoiTacUyQuyenRedux | null;
}
const initialState: DoiTacUyQuyenState = {
  arrDoiTacUyQuyen: [],
  itemDoiTacUyQuyen: null,
};

const quanLyDoiTacUyQuyen = createSlice({
  name: "doiTacUyQuyen",
  initialState,
  reducers: {
    setArrDoiTacUyQuyenRedux: (
      state: DoiTacUyQuyenState,
      action: PayloadAction<DoiTacUyQuyenRedux[]>
    ) => {
      state.arrDoiTacUyQuyen = action.payload;
    },
    setItemDoiTacUyQuyen: (
      state: DoiTacUyQuyenState,
      action: PayloadAction<DoiTacUyQuyenRedux>
    ) => {
      state.itemDoiTacUyQuyen = action.payload;
    },
  },
});

export const { setArrDoiTacUyQuyenRedux, setItemDoiTacUyQuyen } =
  quanLyDoiTacUyQuyen.actions;

export default quanLyDoiTacUyQuyen.reducer;

export const getArrQuanLyDoiTacUyQuyenFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "quanLyDoiTacUyQuyen"));
      onSnapshot(result, (querySnapshot) => {
        let arrDoiTacUyQuyen: any = [];
        querySnapshot.forEach((doc) => {
          arrDoiTacUyQuyen.push({ ...doc.data(), id: doc.id });
        });
        console.log({ arrDoiTacUyQuyen });
        dispatch(setArrDoiTacUyQuyenRedux(arrDoiTacUyQuyen));
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
