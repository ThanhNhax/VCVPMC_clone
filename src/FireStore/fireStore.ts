// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  arrayUnion,
  doc,
  FieldValue,
  getFirestore,
  setDoc,
  updateDoc,
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

// const cityRef = doc(db, "playList", "7fR314PFFiof20b94tFR");
// setDoc(
//   cityRef,
//   {
//     arrBanGhi: [
//       {
//         caSi: "Phan Mạnh Quỳnh",
//         dinhDang: "Audio",
//         id: "4x6DPzZXo936ql28ecap",
//         maISRC: "sdsfwefdsf",
//         ngayTai: "2023-2-12 ",
//         nhaSanXuat: "",
//         soHopDong: "",
//         tacGia: "Phan Mạnh Quỳnh",
//         tenBanGhi: "Mắt em",
//         theLoai: "EDM",
//         thoiHanSuDung: { thoiHan: false, thoiGian: "2023-09-24" },
//         thoiLuong: "04:17",
//       },
//     ],
//   },
//   { merge: true }
// );
// deleteDoc(cityRef);
// setDoc(doc(db, "khoBanGhi", "ZaWSiITsY6H8uHSvNBWA"), {
//   ngayTai: "2023-2-12 ",
//   soHopDong: "",
//   id: "",
//   tenBanGhi: "Mắt em",
//   nhaSanXuat: "",
//   maISRC: "sdsfwefdsf",
//   caSi: "Phan Mạnh Quỳnh",
//   tacGia: "Phan Mạnh Quỳnh",
//   theLoai: "EDM",
//   dinhDang: "Audio",
//   thoiLuong: "04:17",
//   thoiHanSuDung: {
//     thoiGian: "2023-09-24",
//     thoiHan: false,
//   },
// });

// // tạo playlist tren fireStore

// setDoc(doc(db, "playList", "g2IdXWr0yZNm4wSGK27"), {
//   tieuDe: "Top ca khúc 2021",
//   soBanGhi: 20,
//   thoiLuong: "01:04:3",
//   chuDe: ["Pop", "EDM", "Songs", "Chill", "Lofi"],
//   ngayTao: 2 - 3 - 2022,
//   nguoiTao: "Thanh Nhã",
// });

// demo updata
// const user = {
//   ten: "thanh nha",
//   tuoi: 23,
// };
// const goRef = doc(db, "cities", "BJ", 'arrBanGhi');

// // Atomically add a new region to the "regions" array field.
// try{
//   updateDoc(goRef,{
//     0.
//   })
// }catch(e){
//   console.log(e)
// }
