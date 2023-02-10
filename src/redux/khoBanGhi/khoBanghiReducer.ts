import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface ThoiHanSuDung {
  thoiGian: string;
  thoiHan: boolean;
}
// export interface NgayTai {
//   nt: {
//     nanoseconds: number;
//     seconds: number;
//   };
// }
export interface KhoBanGhiRedux {
  id: string;
  ngayTai: string;
  soHopDong: string;
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
    ngayTai: "{ nt: { nanoseconds: 12, seconds: 123 } }",
    soHopDong: "",
    id: "",
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
      ngayTai: "{ nt: { nanoseconds: 12, seconds: 123 } }",
      soHopDong: "",
      id: "",
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
      console.log("Payload:", action.payload);
      state.arrKhoBanGhi = action.payload;
    },
    setItemKhoBanGhi: (
      state: KhoBanGhiState,
      action: PayloadAction<KhoBanGhiRedux>
    ) => {
      // console.log(action.payload);
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
        console.log("lấy từ firesStore về :", { arrKhoBanGhi });
        dispatch(setArrKhoBanGhi(arrKhoBanGhi));
      });
    } catch (e) {
      console.log({ e });
    }
  };
};

// delete item kho bản ghi

export const deleteFireStore = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const khoBanGhiRef = doc(db, "khoBanGhi", id);
    try {
      await deleteDoc(khoBanGhiRef);
    } catch (error) {
      console.log({ error });
    }
  };
};
