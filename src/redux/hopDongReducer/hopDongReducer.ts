import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface HopDongRedux {
  id: string;
  soHopDong: string;
  tenHopDong: string;
  ngayTao: string;
  ngayHieuLuc: string;
  ngayHetHan: string;
  hieuLucHopDong: string;
}
export interface HopDongUyQuyenRedux {
  id: string;
  soHopDong: string;
  tenHopDong: string;
  ngayTao: string;
  hieuLucHopDong: string;
  nguoiUyQuyen: string;
  quyenSoHuu: string;
  ngayHieuLuc: string;
  ngayHetHan: string;
}
export interface HopDongState {
  arrHopDong: HopDongRedux[] | [];
  arrHopDongUyQuyen: HopDongUyQuyenRedux[] | [];
  itemHopDongUyQuyen: HopDongUyQuyenRedux | null;
}
const initialState: HopDongState = {
  arrHopDong: [],
  arrHopDongUyQuyen: [],
  itemHopDongUyQuyen: null,
};

const hopDongReducer = createSlice({
  name: "hopDong",
  initialState,
  reducers: {
    setArrHopDong: (
      state: HopDongState,
      action: PayloadAction<HopDongRedux[]>
    ) => {
      state.arrHopDong = [...action.payload];
    },
    setArrHopDongUyQuyen: (
      state: HopDongState,
      action: PayloadAction<HopDongUyQuyenRedux[]>
    ) => {
      state.arrHopDongUyQuyen = action.payload;
    },
    setItemHopDongUyQuyen: (
      state: HopDongState,
      action: PayloadAction<HopDongUyQuyenRedux>
    ) => {
      state.itemHopDongUyQuyen = action.payload;
    },
  },
});

export const { setArrHopDong, setArrHopDongUyQuyen, setItemHopDongUyQuyen } =
  hopDongReducer.actions;

export default hopDongReducer.reducer;

// kết nối firebased để lấy dữ liệu
export const getArrHopDongFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "hopDong"));
      onSnapshot(result, (querySnapshot) => {
        let arrHopDong: any = [];
        querySnapshot.forEach((doc) => {
          arrHopDong.push({ ...doc.data(), id: doc.id });
        });
        console.log("lấy từ firesStore về :", { arrHopDong });
        dispatch(setArrHopDong(arrHopDong));
      });
    } catch (e) {
      console.log({ e });
    }
  };
};
// kết nối firebased để lấy dữ liệu arr hượp đồng ủy quyền
export const getArrHopDongUyQuyenFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "hopDongUyQyen"));
      onSnapshot(result, (querySnapshot) => {
        let arrHopDongUyQuyen: any = [];
        querySnapshot.forEach((doc) => {
          arrHopDongUyQuyen.push({ ...doc.data(), id: doc.id });
        });
        console.log("lấy từ firesStore về :", { arrHopDongUyQuyen });
        dispatch(setArrHopDongUyQuyen(arrHopDongUyQuyen));
      });
    } catch (e) {
      console.log({ e });
    }
  };
};
