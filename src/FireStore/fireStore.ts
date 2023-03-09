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
// const data = {
//   chucVu: "",
//   cmnd: "123123123",
//   email: "thanhnha.k13@gmail.com",
//   gioiTinh: "",
//   hieuLucHopDong: "Đã hủy",
//   id: "",
//   maSoThue: "123123123",
//   matKhau: "123123",
//   nganHang: "ABC",
//   ngayCap: "2023-02-24",
//   ngayHetHan: "2023-02-24",
//   ngayHieuLuc: "2023-02-24",
//   ngaySinh: "2023-02-24",
//   ngayTao: "24/2/2023",
//   nguoiDaiDien: "",
//   noiCap: "Tp.Hồ Chi Minh",
//   noiCuTru: "Quang Trung Gò Vấp",
//   quocTich: "",
//   soDienThoai: "1212121212",
//   soHopDong: "1234",
//   soTaiKhoan: "123123123",
//   tenDangNhap: "thanhnha.k13@gmail.com",
//   tenHopDong: "Hợp đồng mới",
//   tenNguoiUyQuyen: "Nguyễn Văn A",
//   tenToChuc: "",
// };

// setDoc(doc(db, "hopDongUyQyen", "3OR2tIbd7cr1lezkMczK"), data, { merge: true });
