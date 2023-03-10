import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { history } from "../..";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";
import { KhoBanGhiRedux } from "../khoBanGhi/khoBanghiReducer";

export interface LoaiHopDong {
  tronGoi: {
    giaTriHopDong: number;
    giaTriPhanPhoi: number;
  };
  luotPhat: {
    giaTriLuotPhat: number;
  };
}
export interface HopDongKhaiThacRedux {
  id: string;
  ngayTao: string;
  hieuLucHopDong: string;
  chucVu: string;
  cmnd: string;
  email: string;
  gioiTinh: string;
  loaiHopDong: LoaiHopDong;
  maSoThue: string;
  matKhau: string;
  nganHang: string;
  ngayCap: string;
  ngayHetHan: string;
  ngayHieuLuc: string;
  ngaySinh: string;
  nguoiDaiDien: string;
  noiCap: string;
  noiCuTru: string;
  quocTich: string;
  soDienThoai: string;
  soHopDong: string;
  soTaiKhoan: string;
  tenDangNhap: string;
  tenDonViSuDung: string;
  tenHopDong: string;
}
export interface HopDongUyQuyenRedux {
  diaChi: String;
  nguoiUyQuyen: string;
  quyenSoHuu: string;
  ngayTao: string;
  hieuLucHopDong: string;
  chucVu: string;
  cmnd: string;
  email: string;
  gioiTinh: string;
  id: string;
  maSoThue: string;
  matKhau: string;
  nganHang: string;
  ngayCap: string;
  ngayHetHan: string;
  ngayHieuLuc: string;
  ngaySinh: string;
  nguoiDaiDien: string;
  noiCap: string;
  noiCuTru: string;
  quocTich: string;
  soDienThoai: string;
  soHopDong: string;
  soTaiKhoan: string;
  tenDangNhap: string;
  tenHopDong: string;
  tenToChuc: string;
  arrTacPhamUyQuyen: [] | KhoBanGhiRedux[];
}
export interface HopDongState {
  arrHopDongUyQuyen: HopDongUyQuyenRedux[] | [];
  itemHopDongUyQuyen: HopDongUyQuyenRedux | null;
  arrHopDongKhaiThac: HopDongKhaiThacRedux[] | [];
  itemHopDongKhaiThac: HopDongKhaiThacRedux | null;
  newHopDongUyQuyen: HopDongUyQuyenRedux | null;
}
const initialState: HopDongState = {
  arrHopDongUyQuyen: [],
  itemHopDongUyQuyen: null,
  arrHopDongKhaiThac: [],
  itemHopDongKhaiThac: null,
  newHopDongUyQuyen: null,
};

const hopDongReducer = createSlice({
  name: "hopDong",
  initialState,
  reducers: {
    setArrHopDongKhaiThac: (
      state: HopDongState,
      action: PayloadAction<HopDongKhaiThacRedux[]>
    ) => {
      state.arrHopDongKhaiThac = [...action.payload];
    },
    setArrHopDongUyQuyen: (
      state: HopDongState,
      action: PayloadAction<HopDongUyQuyenRedux[]>
    ) => {
      state.arrHopDongUyQuyen = action.payload;
    },
    setItemHopDongUyQuyen: (
      state: HopDongState,
      action: PayloadAction<HopDongUyQuyenRedux>
    ) => {
      state.itemHopDongUyQuyen = action.payload;
    },
    setItemHopDongKhaiThac: (
      state: HopDongState,
      action: PayloadAction<HopDongKhaiThacRedux>
    ) => {
      state.itemHopDongKhaiThac = action.payload;
    },
    setNewHopDongUyQuyen: (
      state: HopDongState,
      action: PayloadAction<HopDongUyQuyenRedux>
    ) => {
      state.newHopDongUyQuyen = action.payload;
    },
  },
});

export const {
  setArrHopDongKhaiThac,
  setArrHopDongUyQuyen,
  setItemHopDongUyQuyen,
  setItemHopDongKhaiThac,
  setNewHopDongUyQuyen,
} = hopDongReducer.actions;

export default hopDongReducer.reducer;

// k???t n???i firebased ????? l???y d??? li???u h???p ?????ng khai th??c

export const getArrHopDongFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "hopDong"));
      onSnapshot(result, (querySnapshot) => {
        let arrHopDong: any = [];
        querySnapshot.forEach((doc) => {
          arrHopDong.push({ ...doc.data(), id: doc.id });
        });
        console.log("l???y t??? firesStore v??? :", { arrHopDong });
        dispatch(setArrHopDongKhaiThac(arrHopDong));
      });
    } catch (e) {
      console.log({ e });
    }
  };
};
// k???t n???i firebased ????? l???y d??? li???u arr h?????p ?????ng ???y quy???n
export const getArrHopDongUyQuyenFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "hopDongUyQyen"));
      onSnapshot(result, (querySnapshot) => {
        let arrHopDongUyQuyen: any = [];
        querySnapshot.forEach((doc) => {
          arrHopDongUyQuyen.push({ ...doc.data(), id: doc.id });
        });
        console.log("l???y t??? firesStore v??? :", { arrHopDongUyQuyen });
        dispatch(setArrHopDongUyQuyen(arrHopDongUyQuyen));
      });
    } catch (e) {
      console.log({ e });
    }
  };
};
export const updateItemHopDongUyQuyen = (item: HopDongUyQuyenRedux) => {
  return async (dispatch: AppDispatch) => {
    try {
      setDoc(doc(db, "hopDongUyQyen", item.id), item);
      dispatch(setItemHopDongUyQuyen(item));
      message.open({
        type: "success",
        content: "C???p nh???t th??nh c??ng!",
        duration: 0.8,
      });
      history.push("/admin/quanLyHopDong/chiTiet");
    } catch (e) {
      console.log(e);
    }
  };
};
