import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";
export interface TheLoaiTacPhamRedux {
  id: string;
  tenTheLoai: string;
  moTa: string;
}
export interface TheLoaiTacPhamState {
  arrTheLoaiTacPham: [] | TheLoaiTacPhamRedux[];
  arrTag: [] | string[];
}
const initialState: TheLoaiTacPhamState = {
  arrTheLoaiTacPham: [],
  arrTag: [],
};

const theLoaiTacPhamReducer = createSlice({
  name: "theLoaiTacPham",
  initialState,
  reducers: {
    setArrTheLoaiTacPham: (
      state: TheLoaiTacPhamState,
      actions: PayloadAction<TheLoaiTacPhamRedux[]>
    ) => {
      state.arrTheLoaiTacPham = actions.payload;
    },
    setTag: (state: TheLoaiTacPhamState, actions: PayloadAction<string[]>) => {
      state.arrTag = actions.payload;
    },
  },
});

export const { setArrTheLoaiTacPham, setTag } = theLoaiTacPhamReducer.actions;

export default theLoaiTacPhamReducer.reducer;

export const getArrTheLoaiTacPhamFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "theLoaiTacPham"));
      onSnapshot(result, (querySnapshot) => {
        let arrTheLoaiTacPham: any = [];
        querySnapshot.forEach((doc) => {
          arrTheLoaiTacPham.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setArrTheLoaiTacPham(arrTheLoaiTacPham));
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const getArrTabFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "theLoaiTacPham"));
      onSnapshot(result, (querySnapshot) => {
        let arrTheLoaiTacPham: any = [];
        querySnapshot.forEach((doc) => {
          arrTheLoaiTacPham.push(doc.data().tenTheLoai);
        });
        dispatch(setTag(arrTheLoaiTacPham));
        console.log({ arrTheLoaiTacPham });
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
