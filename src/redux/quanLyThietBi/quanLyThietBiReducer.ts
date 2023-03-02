import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface QuanLyThietBiRedux {
  id: string;
  tenThietBi: string;
  trangThai: boolean;
  kichHoat: boolean;
  hanHopDong: string;
  tenDangNhap: string;
  diaChi: string;
  memory: string;
  macAddresss: string;
  skuId: string;
  hanBaoHanh: string;
  dinhDang: string;
  viTri: string;
  thongTin: string;
  ghiChu: string;
  password: string;
  passwordComfirm: string;
  vaiTro: string;
}
export interface QuanLyThietBiState {
  arrQuanLyThietBi: QuanLyThietBiRedux[] | [];
  itemTietBi: QuanLyThietBiRedux | null;
}
const initialState: QuanLyThietBiState = {
  arrQuanLyThietBi: [],
  itemTietBi: null,
};

const quanLyThietBiReducer = createSlice({
  name: "quanLyThietBi",
  initialState,
  reducers: {
    setArrQuanLyThietBiRedux: (
      state: QuanLyThietBiState,
      action: PayloadAction<QuanLyThietBiRedux[]>
    ) => {
      state.arrQuanLyThietBi = action.payload;
    },
    setItemThietBi: (
      state: QuanLyThietBiState,
      action: PayloadAction<QuanLyThietBiRedux>
    ) => {
      state.itemTietBi = action.payload;
    },
  },
});

export const { setArrQuanLyThietBiRedux, setItemThietBi } =
  quanLyThietBiReducer.actions;

export default quanLyThietBiReducer.reducer;

// get date từ fireStore về
// kết nối với firebae
export const getArrQuanLyThietBiFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "quanLyThietBi"));
      onSnapshot(result, (querySnapshot) => {
        let arrQuanLyThietBi: any = [];
        querySnapshot.forEach((doc) => {
          arrQuanLyThietBi.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setArrQuanLyThietBiRedux(arrQuanLyThietBi));
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
