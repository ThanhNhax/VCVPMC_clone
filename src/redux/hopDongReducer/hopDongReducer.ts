import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { AppDispatch } from "../configStore";

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
}
export interface HopDongState {
  arrHopDongUyQuyen: HopDongUyQuyenRedux[] | [];
  itemHopDongUyQuyen: HopDongUyQuyenRedux | null;
  arrHopDongKhaiThac: HopDongKhaiThacRedux[] | [];
  itemHopDongKhaiThac: HopDongKhaiThacRedux | null;
}
const initialState: HopDongState = {
  arrHopDongUyQuyen: [],
  itemHopDongUyQuyen: null,
  arrHopDongKhaiThac: [],
  itemHopDongKhaiThac: null,
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
      console.log(action.payload);
      state.itemHopDongKhaiThac = action.payload;
    },
  },
});

export const {
  setArrHopDongKhaiThac,
  setArrHopDongUyQuyen,
  setItemHopDongUyQuyen,
  setItemHopDongKhaiThac,
} = hopDongReducer.actions;

export default hopDongReducer.reducer;

// kết nối firebased để lấy dữ liệu hợp đồng khai thác

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
        dispatch(setArrHopDongKhaiThac(arrHopDong));
      });
    } catch (e) {
      console.log({ e });
    }
  };
};
// kết nối firebased để lấy dữ liệu arr hượp đồng ủy quyền
export const getArrHopDongUyQuyenFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "hopDongUyQyen"));
      onSnapshot(result, (querySnapshot) => {
        let arrHopDongUyQuyen: any = [];
        querySnapshot.forEach((doc) => {
          arrHopDongUyQuyen.push({ ...doc.data(), id: doc.id });
        });
        console.log("lấy từ firesStore về :", { arrHopDongUyQuyen });
        dispatch(setArrHopDongUyQuyen(arrHopDongUyQuyen));
      });
    } catch (e) {
      console.log({ e });
    }
  };
};
