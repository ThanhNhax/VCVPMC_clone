import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface QuanLyThietBiRedux {
  tenTaiKhoảnQuanTri: string;
  soHopDong: string;
  admin: string;
  nguoiDung: number;
  thietBiDuocChiDinh: number;
  ngayHetHan: string;
  trangThai: boolean;
  id: string;
}
export interface QuanLyThietBiState {
  arrQuanLyThietBi: QuanLyThietBiRedux[] | [];
}
const initialState: QuanLyThietBiState = {
  arrQuanLyThietBi: [],
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
  },
});

export const { setArrQuanLyThietBiRedux } = quanLyThietBiReducer.actions;

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
