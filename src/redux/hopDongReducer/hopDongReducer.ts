import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface HopDongRedux {
  soHopDong: string;
  tenHopDong: string;
  ngayTao: string;
  ngayHieuLuc: string;
  ngayHetHan: string;
  hieuLucHopDong: string;
}
export interface HopDongState {
  arrHopDong: HopDongRedux[] | null;
}
const initialState: HopDongState = {
  arrHopDong: null,
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
  },
});

export const { setArrHopDong } = hopDongReducer.actions;

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
