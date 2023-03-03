import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
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
  matKhau?: string;
  matKhauNhapLai?: string;
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
  itemNguoiDung: NguoiDungDonViRedux | null;
}
const initialState: DonViSuDungState = {
  arrDonViSuDung: [],
  itemDonViSuDung: null,
  itemNguoiDung: null,
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
    setArrNguoiDung: (
      state: DonViSuDungState,
      action: PayloadAction<NguoiDungDonViRedux[]>
    ) => {
      if (state.itemDonViSuDung?.arrNguoiDung)
        state.itemDonViSuDung.arrNguoiDung = action.payload;
    },
    setItemNguoiDung: (
      state: DonViSuDungState,
      action: PayloadAction<NguoiDungDonViRedux>
    ) => {
      state.itemNguoiDung = action.payload;
    },
    setIndexItemNguoiDung: (
      state: DonViSuDungState,
      action: PayloadAction<string>
    ) => {
      if (state.itemNguoiDung !== null) {
        state.itemNguoiDung.id = action.payload;
      }
    },
    updateNguoiDung: (
      state: DonViSuDungState,
      action: PayloadAction<NguoiDungDonViRedux>
    ) => {
      if (state.itemDonViSuDung) {
        state.itemDonViSuDung.arrNguoiDung[parseInt(action.payload.id)] =
          action.payload;
        try {
          setDoc(
            doc(db, "quanLyDonViSuDung", state.itemDonViSuDung.id),
            { arrNguoiDung: state.itemDonViSuDung.arrNguoiDung },
            { merge: true }
          );
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
});

export const {
  setArrDonViSuDungRedux,
  setItemDonViSuDungRedux,
  setArrNguoiDung,
  setItemNguoiDung,
  setIndexItemNguoiDung,
  updateNguoiDung,
} = quanLyDonViSuDungReducer.actions;

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
