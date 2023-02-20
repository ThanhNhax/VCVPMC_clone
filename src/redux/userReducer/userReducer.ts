import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { history } from "../..";
import { db } from "../../FireStore/fireStore";
import { clearLocalStorage, setStoreJSON, USER } from "../../util/setting";
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
export interface UserState {
  userLogin: {
    accessToken: string | null;

    user: User | null;
  };
}

const initialState: UserState = {
  userLogin: {
    accessToken: null,
    user: null,
  },
};
const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserRedux: (state: UserState, actions: PayloadAction<User>) => {
      let { payload } = actions;
      console.log({ payload });
      state.userLogin.user = payload;
    },
    setUserAccessToken: (state: UserState, action: PayloadAction<string>) => {
      state.userLogin.accessToken = action.payload;
    },
  },
});

export const { setUserRedux, setUserAccessToken } = userReducer.actions;

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
        setStoreJSON(USER, userFireStore);
        //Đưa userLogin lên redux
        console.log({ userFireStore });
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
export const updateUser = (uid: string, data: UserState) => {
  return async (dispatch: AppDispatch) => {
    try {
      const docRef: any = doc(db, "users", uid);
      if (docRef) {
        await updateDoc(docRef, data);
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
      clearLocalStorage(USER);
      history.push("/");
    })
    .catch((e) => {
      console.log(e);
    });
};
