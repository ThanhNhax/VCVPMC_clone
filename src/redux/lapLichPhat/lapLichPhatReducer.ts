import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

export interface LapLichPhatRedux {
  arrThietBi: string[];
  id: string;
  ngayBatDau: string;
  ngayKetThuc: string;
  tenLich: string;
  thoiGianKetThuc: string;
  thoiGianBatDau: string;
}
interface LapLichPhatState {
  itemLapLichPhat: LapLichPhatRedux | null;
  arrLapLichPhat: LapLichPhatRedux[];
}
const initialState: LapLichPhatState = {
  itemLapLichPhat: null,
  arrLapLichPhat: [],
};

const lapLichPhatReducer = createSlice({
  name: "lapLichPhat",
  initialState,
  reducers: {
    setArrLapLichPhat: (
      state: LapLichPhatState,
      action: PayloadAction<LapLichPhatRedux[]>
    ) => {
      state.arrLapLichPhat = action.payload;
    },
    setItemLapLichPhat: (
      state: LapLichPhatState,
      action: PayloadAction<LapLichPhatRedux>
    ) => {
      state.itemLapLichPhat = action.payload;
    },
  },
});

export const { setArrLapLichPhat, setItemLapLichPhat } =
  lapLichPhatReducer.actions;

export default lapLichPhatReducer.reducer;

// lấy data từ fireStore về
export const getLapLichPhatFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "lapLichPhat"));
      onSnapshot(result, (querySnapshot) => {
        let arrLapLichPhat: any = [];
        querySnapshot.forEach((doc) => {
          arrLapLichPhat.push({ ...doc.data(), id: doc.id });
        });
        console.log("lấy từ firesStore về :", { arrLapLichPhat });
        dispatch(setArrLapLichPhat(arrLapLichPhat));
      });
    } catch (e) {
      console.log(e);
    }
  };
};
