// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkISf-qPnMrfanvL4Y6RzMEOtgYc3ofwk",
  authDomain: "vcpmc-clone-70f46.firebaseapp.com",
  projectId: "vcpmc-clone-70f46",
  storageBucket: "vcpmc-clone-70f46.appspot.com",
  messagingSenderId: "481188520514",
  appId: "1:481188520514:web:3e1c21b21db503479e03db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

///

// let data = {
//   id: "",
//   tenThietBi: "Device A12231",
//   trangThai: true,
//   kichHoai: true,
//   hanHopDong: "21/04/2021",
//   tenDangNhap: "123.12.156.10",
//   diaChi: "86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh",
//   memory: "0.00GB/32GB",
//   macAddresss: "123.12.156.10",
//   skuId: "12341234123",
//   hanBaoHanh: "21/04/2021",
// };

// addDoc(collection(db, "quanLyThietBi"), data);
