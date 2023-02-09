import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface ThoiHanSuDung {
  thoiGian: string;
  thoiHan: boolean;
}
export interface KhoBanGhiRedux {
  tenBanGhi: string;
  maISRC: string;
  thoiLuong: string;
  caSi: string;
  tacGia: string;
  theLoai: string;
  dinhDang: string;
  nhaSanXuat: string;
  thoiHanSuDung: ThoiHanSuDung;
}
export interface KhoBanGhiState {
  itemKhoBanGhi: KhoBanGhiRedux;
  arrKhoBanGhi: KhoBanGhiRedux[];
}
const initialState: KhoBanGhiState = {
  itemKhoBanGhi: {
    nhaSanXuat: "",
    dinhDang: "",
    tacGia: "",
    tenBanGhi: "",
    maISRC: "",
    caSi: "",
    theLoai: "",
    thoiLuong: "",
    thoiHanSuDung: {
      thoiGian: "",
      thoiHan: false,
    },
  },
  arrKhoBanGhi: [
    {
      tenBanGhi: "Mắt em",
      nhaSanXuat: "",
      maISRC: "sdsfwefdsf",
      caSi: "Phan Mạnh Quỳnh",
      tacGia: "Phan Mạnh Quỳnh",
      theLoai: "EDM",
      dinhDang: "Audio",
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
      action: PayloadAction<KhoBanGhiRedux[]>
    ) => {
      state.arrKhoBanGhi = action.payload;
    },
    setItemKhoBanGhi: (
      state: KhoBanGhiState,
      action: PayloadAction<KhoBanGhiRedux>
    ) => {
      console.log(action.payload);
      state.itemKhoBanGhi = action.payload;
    },
  },
});

export const { setArrKhoBanGhi, setItemKhoBanGhi } = khoBanghiReducer.actions;

export default khoBanghiReducer.reducer;

// kết nối firebased để lấy dữ liệu
export const getArrKhoBanGhiFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "khoBanGhi"));
      onSnapshot(result, (querySnapshot) => {
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
