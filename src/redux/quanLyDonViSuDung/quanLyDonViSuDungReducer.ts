import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface DonViSuDungRedux {
  tenTaiKhoảnQuanTri: string;
  soHopDong: string;
  admin: string;
  nguoiDung: number;
  thietBiDuocChiDinh: number;
  ngayHetHan: string;
  trangThai: boolean;
  id: string;
}
export interface DonViSuDungState {
  arrDonViSuDung: DonViSuDungRedux[] | [];
}
const initialState: DonViSuDungState = {
  arrDonViSuDung: [],
};

const quanLyDonViSuDungReducer = createSlice({
  name: "quanLyDonViSuDung",
  initialState,
  reducers: {
    setArrDonViSuDungRedux: (
      state: DonViSuDungState,
      action: PayloadAction<DonViSuDungRedux[]>
    ) => {
      state.arrDonViSuDung = action.payload;
    },
  },
});

export const { setArrDonViSuDungRedux } = quanLyDonViSuDungReducer.actions;

export default quanLyDonViSuDungReducer.reducer;

export const getArrQuanLyDonViSuDungFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "quanLyDonViSuDung"));
      onSnapshot(result, (querySnapshot) => {
        let arrDonViSuDung: any = [];
        querySnapshot.forEach((doc) => {
          arrDonViSuDung.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setArrDonViSuDungRedux(arrDonViSuDung));
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
