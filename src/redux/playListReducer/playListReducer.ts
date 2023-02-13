import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";
import { KhoBanGhiRedux } from "../khoBanGhi/khoBanghiReducer";

export interface PlayListRedux {
  desc: string | null;
  id: string | null;
  ngayTao: string | null;
  nguoiTao: string | null;
  soBanGhi: number | null;
  thoiLuong: string | null;
  tieuDe: string | null;
  chuDe: [string | null];
  arrBanGhi: KhoBanGhiRedux[] | undefined;
}
export interface PlayListState {
  newPlayList: PlayListRedux;
  itemPlayList: PlayListRedux;
  arrPlayList: PlayListRedux[];
}
const initialState: PlayListState = {
  newPlayList: {
    arrBanGhi: undefined,
    chuDe: [null],
    id: null,
    ngayTao: null,
    nguoiTao: null,
    soBanGhi: null,
    thoiLuong: null,
    tieuDe: null,
    desc: null,
  },
  itemPlayList: {
    arrBanGhi: undefined,
    chuDe: [""],
    id: "",
    ngayTao: "",
    nguoiTao: "",
    soBanGhi: 20,
    thoiLuong: "",
    tieuDe: "",
    desc: "",
  },
  arrPlayList: [],
};

const playListReducer = createSlice({
  name: "playList",
  initialState,
  reducers: {
    setArrPlayList: (
      state: PlayListState,
      action: PayloadAction<PlayListRedux[]>
    ) => {
      state.arrPlayList = action.payload;
    },
    setItemPlayList: (
      state: PlayListState,
      action: PayloadAction<PlayListRedux>
    ) => {
      state.itemPlayList = action.payload;
    },
    addBanGhiItemPlaylist: (
      state: PlayListState,
      action: PayloadAction<KhoBanGhiRedux>
    ) => {
      // console.log("redux", action.payload);
      if (state.itemPlayList.arrBanGhi === undefined) {
        let newarr: KhoBanGhiRedux[] = [];
        newarr.push(action.payload);
        state.itemPlayList.arrBanGhi = newarr;
      } else {
        state.itemPlayList.arrBanGhi.push(action.payload);
      }
    },
    deleteArrBanGhiRedux: (
      state: PlayListState,
      action: PayloadAction<number>
    ) => {
      if (state.itemPlayList.arrBanGhi !== undefined) {
        state.itemPlayList.arrBanGhi.splice(action.payload, 1);
      }
    },
    setNewPlayListArrBanGhiRedux: (
      state: PlayListState,
      action: PayloadAction<KhoBanGhiRedux>
    ) => {
      if (state.newPlayList.arrBanGhi !== undefined) {
        state.newPlayList.arrBanGhi.push(action.payload);
      } else {
        let newarr: KhoBanGhiRedux[] = [];
        newarr.push(action.payload);
        state.newPlayList.arrBanGhi = newarr;
      }
    },
  },
});

export const {
  setArrPlayList,
  setItemPlayList,
  addBanGhiItemPlaylist,
  deleteArrBanGhiRedux,
  setNewPlayListArrBanGhiRedux,
} = playListReducer.actions;

export default playListReducer.reducer;

// kết nối với firebae
export const getArrPlayListFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "playList"));
      onSnapshot(result, (querySnapshot) => {
        let arrPlayList: any = [];
        querySnapshot.forEach((doc) => {
          arrPlayList.push({ ...doc.data(), id: doc.id });
        });
        console.log("lấy từ firesStore về :", { arrPlayList });
        dispatch(setArrPlayList(arrPlayList));
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
