import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";
import { PhanQuyenNguoiDungRedux } from "../phanQuyenNguoiDung/phanQuyenNguoiDungReducer";
export interface VaiTroNguoiDungRedux {
  id: string;
  tenNhomNguoiDung: string;
  moTa: string;
  vaiTro: string;
}
interface VaiTroNguoiDungState {
  arrVaiTroNguoiDung: VaiTroNguoiDungRedux[] | [];
}
const initialState: VaiTroNguoiDungState = {
  arrVaiTroNguoiDung: [],
};

const vaiTroNguoiDungReducer = createSlice({
  name: "vaiTroNguoiDung",
  initialState,
  reducers: {
    setArrVaiTroNguoiDung: (
      state: VaiTroNguoiDungState,
      actions: PayloadAction<VaiTroNguoiDungRedux[]>
    ) => {
      state.arrVaiTroNguoiDung = actions.payload;
    },
  },
});

export const { setArrVaiTroNguoiDung } = vaiTroNguoiDungReducer.actions;

export default vaiTroNguoiDungReducer.reducer;

export const getArrVaiTroNguoiDungFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "vaiTroNguoiDung"));
      onSnapshot(result, (querySnapshot) => {
        let arrVaiTroNguoiDung: any = [];
        querySnapshot.forEach((doc) => {
          arrVaiTroNguoiDung.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setArrVaiTroNguoiDung(arrVaiTroNguoiDung));
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
