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
//   tenNhomNguoiDung: "Super Admin",
//   vaiTro: "System Admin",

//   moTa: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//   email: "cidas@gmail.com",
//   soDienThoai: "0212 5932 1214",
//   ngayHetHan: "02/12/2024",
//   matKhau: "123123",
// };

// addDoc(collection(db, "phanQuyenNguoidDung"), data);
