import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";
import { KhoBanGhiRedux } from "../khoBanGhi/khoBanghiReducer";

export interface PlayListRedux {
  desc: string;
  id: string;
  ngayTao: string;
  nguoiTao: string;
  soBanGhi: number;
  thoiLuong: string;
  tieuDe: string;
  chuDe: [string];
  arrBanGhi: [KhoBanGhiRedux];
}
export interface PlayListState {
  itemPlayList: PlayListRedux;
  arrPlayList: PlayListRedux[];
}
const initialState: PlayListState = {
  itemPlayList: {
    arrBanGhi: [
      {
        caSi: "",
        dinhDang: "",
        id: "",
        maISRC: "",
        ngayTai: "",
        nhaSanXuat: "",
        soHopDong: "",
        tacGia: "",
        tenBanGhi: "",
        theLoai: "",
        thoiHanSuDung: { thoiGian: "", thoiHan: false },
        thoiLuong: "",
      },
    ],
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
      state.itemPlayList?.arrBanGhi.push(action.payload);
    },
    deleteArrBanGhiRedux: (
      state: PlayListState,
      action: PayloadAction<number>
    ) => {
      state.itemPlayList.arrBanGhi.splice(action.payload, 1);
    },
  },
});

export const {
  setArrPlayList,
  setItemPlayList,
  addBanGhiItemPlaylist,
  deleteArrBanGhiRedux,
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
