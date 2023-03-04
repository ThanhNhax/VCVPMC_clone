import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";
export interface PhanQuyenNguoiDungRedux {
  id: string;
  tenNguoiDung: string;
  vaiTro: string;
  trangThai: boolean;
  tenDangNhap: string;
  email: string;
  soDienThoai: string;
  ngayHetHan: string;
  matKhau: string;
}
export interface PhanQuyenNguoiDungState {
  arrPhanQuyenNguoiDung: [] | PhanQuyenNguoiDungRedux[];
  itemPhanQuyenNguoiDung: PhanQuyenNguoiDungRedux | null;
}
const initialState: PhanQuyenNguoiDungState = {
  arrPhanQuyenNguoiDung: [],
  itemPhanQuyenNguoiDung: null,
};

const phanQuyenNguoiDungReducer = createSlice({
  name: "phanQuyenNguoiDung",
  initialState,
  reducers: {
    setArrPhanQuyenNguoiDung: (
      state: PhanQuyenNguoiDungState,
      actions: PayloadAction<PhanQuyenNguoiDungRedux[]>
    ) => {
      state.arrPhanQuyenNguoiDung = actions.payload;
    },
    setItemPhanQuyenNguoiDung: (
      state: PhanQuyenNguoiDungState,
      actions: PayloadAction<PhanQuyenNguoiDungRedux>
    ) => {
      state.itemPhanQuyenNguoiDung = actions.payload;
    },
  },
});

export const { setArrPhanQuyenNguoiDung, setItemPhanQuyenNguoiDung } =
  phanQuyenNguoiDungReducer.actions;

export default phanQuyenNguoiDungReducer.reducer;

// kết nối firebased để lấy dữ liệu hợp đồng khai thác

export const getArrPhanQuyenNguoiDungFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "phanQuyenNguoidDung"));
      onSnapshot(result, (querySnapshot) => {
        let arrPhanQuyenNguoiDung: any = [];
        querySnapshot.forEach((doc) => {
          arrPhanQuyenNguoiDung.push({ ...doc.data(), id: doc.id });
        });
        console.log("lấy từ firesStore về :", { arrPhanQuyenNguoiDung });
        dispatch(setArrPhanQuyenNguoiDung(arrPhanQuyenNguoiDung));
      });
    } catch (e) {
      console.log({ e });
    }
  };
};
