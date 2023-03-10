import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { tongThoiLuong } from "../../pages/Playlist/EditPlayList";
import { AppDispatch } from "../configStore";
import { KhoBanGhiRedux } from "../khoBanGhi/khoBanghiReducer";

export interface PlayListRedux {
  anhBia: string | null;
  desc: string | null;
  id: string | undefined;
  ngayTao: string | null;
  nguoiTao: string | null;
  soBanGhi: number | null;
  thoiLuong: string;
  tieuDe: string | null;
  chuDe: string[];
  arrBanGhi: KhoBanGhiRedux[] | [];
}
export interface PlayListState {
  newPlayList: PlayListRedux;
  itemPlayList: PlayListRedux;
  arrPlayList: PlayListRedux[];
}
const initialState: PlayListState = {
  newPlayList: {
    arrBanGhi: [],
    chuDe: [],
    id: "",
    ngayTao: null,
    nguoiTao: null,
    soBanGhi: null,
    thoiLuong: "",
    tieuDe: null,
    desc: null,
    anhBia: null,
  },
  itemPlayList: {
    arrBanGhi: [],
    chuDe: [],
    id: "",
    ngayTao: "",
    nguoiTao: "",
    soBanGhi: 20,
    thoiLuong: "",
    tieuDe: "",
    desc: "",
    anhBia: null,
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
      state.itemPlayList.arrBanGhi = [
        ...state.itemPlayList.arrBanGhi,
        action.payload,
      ];
    },
    deleteArrBanGhiRedux: (
      state: PlayListState,
      action: PayloadAction<number>
    ) => {
      console.log(state.itemPlayList.arrBanGhi);
      if (state.itemPlayList.arrBanGhi !== undefined) {
        state.itemPlayList.arrBanGhi.splice(action.payload, 1);
      }
    },
    setNewPlayListArrBanGhiRedux: (
      state: PlayListState,
      action: PayloadAction<KhoBanGhiRedux>
    ) => {
      state.newPlayList.arrBanGhi = [
        ...state.newPlayList.arrBanGhi,
        action.payload,
      ];
    },
    deleteArrBanghiPlaylist: (
      state: PlayListState,
      action: PayloadAction<number>
    ) => {
      if (state.newPlayList !== undefined) {
        state.newPlayList.arrBanGhi?.splice(action.payload, 1);
      }
    },
    setNewPlayList: (
      state: PlayListState,
      action: PayloadAction<PlayListRedux>
    ) => {
      console.log("setNewPlaylist", action.payload);
      state.newPlayList = action.payload;
    },
    clearNewPlaylistRedux: (
      state: PlayListState,
      action: PayloadAction<undefined>
    ) => {
      state.newPlayList.arrBanGhi = [];
    },
  },
});

export const {
  setArrPlayList,
  setItemPlayList,
  addBanGhiItemPlaylist,
  deleteArrBanGhiRedux,
  setNewPlayListArrBanGhiRedux,
  deleteArrBanghiPlaylist,
  setNewPlayList,
  clearNewPlaylistRedux,
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
        dispatch(setArrPlayList(arrPlayList));
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

//
export const addNewPlaylist = (playlist: PlayListRedux) => {
  return async (dispatch: AppDispatch) => {
    try {
      const docRef = await addDoc(collection(db, "playList"), {
        arrBanGhi: playlist.arrBanGhi,
        chuDe: playlist.chuDe,
        desc: "",
        ngayTao: "",
        nguoiTao: "",
        soBanGhi: 0,
        thoiLuong: tongThoiLuong(playlist.arrBanGhi),
        tieuDe: "",
        id: "",
      });

      console.log("Document written with ID: ", docRef.id);
      dispatch(getItemPlayList(docRef.id));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getItemPlayList = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      let newItem: any;
      const docRef = doc(db, "playList", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        newItem = docSnap.data();
        newItem.id = docRef.id;
        dispatch(setNewPlayList(newItem));
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (e) {
      console.log(e);
    }
  };
};
