import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface NguoiDungDonViRedux {
  tenNguoiDung: string;
  vaiTro: string;
  email: string;
  tenDangNhap: string;
  capNhatlanCuoi: string;
  trangThai: boolean;
  id: string;
}
export interface DonViSuDungRedux {
  arrNguoiDung: NguoiDungDonViRedux[] | [];
  tenTaiKhoảnQuanTri: string;
  soHopDong: string;
  admin: string;
  thietBiDuocChiDinh: number;
  ngayHetHan: string;
  trangThai: boolean;
  id: string;
}
export interface DonViSuDungState {
  arrDonViSuDung: DonViSuDungRedux[] | [];
  itemDonViSuDung: DonViSuDungRedux | null;
}
const initialState: DonViSuDungState = {
  arrDonViSuDung: [],
  itemDonViSuDung: null,
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
    setItemDonViSuDungRedux: (
      state: DonViSuDungState,
      action: PayloadAction<DonViSuDungRedux>
    ) => {
      state.itemDonViSuDung = action.payload;
    },
    // setArrNguoiDung: (
    //   state: DonViSuDungState,
    //   action: PayloadAction<NguoiDungDonViRedux>
    // ) => {
    //   state.itemDonViSuDung?.arrNguoiDung.push(action.payload);
    // },
  },
});

export const { setArrDonViSuDungRedux, setItemDonViSuDungRedux } =
  quanLyDonViSuDungReducer.actions;

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
        console.log({ arrDonViSuDung });
        dispatch(setArrDonViSuDungRedux(arrDonViSuDung));
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
