import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface ThoiHanSuDung {
  thoiGian: string;
  thoiHan: boolean;
}
export interface KhoBanGhi {
  tenBanGhi: string;
  maISRC: string;
  thoiLuong: string;
  caSi: string;
  tacGia: string;
  theLoai: string;
  dingDang: string;
  thoiHanSuDung: ThoiHanSuDung;
}
export interface KhoBanGhiState {
  arrKhoBanGhi: KhoBanGhi[];
}
const initialState: KhoBanGhiState = {
  arrKhoBanGhi: [
    {
      tenBanGhi: "Mắt em",
      maISRC: "sdsfwefdsf",
      caSi: "Phan Mạnh Quỳnh",
      tacGia: "Phan Mạnh Quỳnh",
      theLoai: "EDM",
      dingDang: "Audio",
      thoiLuong: "04:17",
      thoiHanSuDung: {
        thoiGian: "2023-09-24",
        thoiHan: false,
      },
    },
  ],
};

const khoBanghiReducer = createSlice({
  name: "khoBanGhi",
  initialState,
  reducers: {
    setArrKhoBanGhi: (
      state: KhoBanGhiState,
      action: PayloadAction<KhoBanGhi[]>
    ) => {
      state.arrKhoBanGhi = action.payload;
    },
  },
});

export const { setArrKhoBanGhi } = khoBanghiReducer.actions;

export default khoBanghiReducer.reducer;

// kết nối firebased để lấy dữ liệu
export const getArrKhoBanGhiFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "khoBanGhi"));
      const unSub = onSnapshot(result, (querySnapshot) => {
        let arrKhoBanGhi: any = [];
        querySnapshot.forEach((doc) => {
          arrKhoBanGhi.push({ ...doc.data(), id: doc.id });
        });
        console.log({ arrKhoBanGhi });
        dispatch(setArrKhoBanGhi(arrKhoBanGhi));
      });
    } catch (e) {
      console.log({ e });
    }
  };
};
