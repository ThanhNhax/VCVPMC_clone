import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { history } from "../..";
import { db } from "../../FireStore/fireStore";
import { clearLocalStorage, setStoreJSON, UID_USER } from "../../util/setting";
import { AppDispatch } from "../configStore";
export interface User {
  avatar: string;
  ngaySinh: string;
  email: string;
  ho: string;
  ten: string;
  sdt: string;
  uid: string;
  phanQuyen: string;
  tenDangNhap: string;
}
interface UserState {
  userLogin: {
    accessToken: string;

    user: User;
  };
}

const initialState: User = {
  avatar: "",
  ngaySinh: "",
  ho: "",
  ten: "",
  sdt: "",
  uid: "",
  email: "",
  phanQuyen: "",
  tenDangNhap: "",
};
const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserRedux: (state: User, actions: PayloadAction<User>) => {
      let { payload } = actions;
      console.log({ payload });
      state.avatar = payload.avatar;
      state.email = payload.email;
      state.ho = payload.ho;
      state.ten = payload.ten;
      state.ngaySinh = payload.ngaySinh;
      state.phanQuyen = payload.phanQuyen;
      state.sdt = payload.sdt;
      state.tenDangNhap = payload.tenDangNhap;
    },
  },
});

export const { setUserRedux } = userReducer.actions;

export default userReducer.reducer;

// add user

export const getUser = (uid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const docRef = doc(db, "users", uid);
      if (docRef) {
        const doc = await getDoc(docRef);
        const userFireStore: any = doc.data();
        // Lưu lại user_Login
        setStoreJSON(UID_USER, uid);
        //Đưa userLogin lên redux
        dispatch(setUserRedux(userFireStore));
        // chuyển hướng trang sang pages thông tin cơ bản
        history.push("/admin/thongtincoban");
      }
    } catch (err) {
      console.log(err);
      history.push("/");
    }
  };
};
export const getUserEdit = (uid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const docRef = doc(db, "users", uid);
      if (docRef) {
        const doc = await getDoc(docRef);
        const userFireStore: any = doc.data();
        dispatch(setUserRedux(userFireStore));
      }
    } catch (err) {
      console.log(err);
      // history.push("/");
    }
  };
};
// update User
export const updateUser = (uid: string, data: User) => {
  return async (dispatch: AppDispatch) => {
    try {
      const docRef: any = doc(db, "users", uid);
      if (docRef) {
        let doc = await updateDoc(docRef, data);
        dispatch(getUserEdit(uid));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
// Đăng xuất

export const dangXuat = (auth: Auth) => {
  signOut(auth)
    .then(() => {
      clearLocalStorage(UID_USER);
      history.push("/");
    })
    .catch((e) => {
      console.log(e);
    });
};
