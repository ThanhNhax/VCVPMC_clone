import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { merge } from "antd/es/theme/util/statistic";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { history } from "../..";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface ThoiHanSuDung {
  thoiGian: string | null;
  thoiHan: boolean;
}
// export interface NgayTai {
//   nt: {
//     nanoseconds: number;
//     seconds: number;
//   };
// }
export interface KhoBanGhiRedux {
  id: string | null;
  ngayTai: string | null;
  soHopDong: string | null;
  tenBanGhi: string | null;
  maISRC: string | null;
  thoiLuong: string | null;
  caSi: string | null;
  tacGia: string | null;
  theLoai: string | null;
  dinhDang: string | null;
  nhaSanXuat: string | null;
  thoiHanSuDung: ThoiHanSuDung;
}
export interface KhoBanGhiState {
  itemKhoBanGhi: KhoBanGhiRedux;
  arrKhoBanGhi: KhoBanGhiRedux[];
}
const initialState: KhoBanGhiState = {
  itemKhoBanGhi: {
    ngayTai: null,
    soHopDong: null,
    id: null,
    nhaSanXuat: null,
    dinhDang: null,
    tacGia: null,
    tenBanGhi: null,
    maISRC: null,
    caSi: null,
    theLoai: null,
    thoiLuong: null,
    thoiHanSuDung: {
      thoiGian: null,
      thoiHan: false,
    },
  },
  arrKhoBanGhi: [],
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

// update item kho bản ghi
export const updateItemKhoBanGhiFireStore = (item: KhoBanGhiRedux) => {
  return async (dispatch: AppDispatch) => {
    if (item.id) {
      const khoBanGhiRef = doc(db, "khoBanGhi", item.id);
      try {
        updateDoc(khoBanGhiRef, {
          caSi: item.caSi,
          dinhDang: item.dinhDang,
          id: item.id,
          maISRC: item.maISRC,
          ngayTai: item.ngayTai,
          nhaSanXuat: item.nhaSanXuat,
          soHopDong: item.soHopDong,
          tacGia: item.tacGia,
          tenBanGhi: item.tenBanGhi,
          theLoai: item.theLoai,
          thoiHanSuDung: item.thoiHanSuDung,
          thoiLuong: item.thoiLuong,
        });
        message.open({
          type: "success",
          content: "Cập nhật thành công!",
        });
        history.push("/admin/khobanghi");
      } catch (error) {
        console.log({ error });
      }
    }
  };
};
