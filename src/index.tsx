import React from "react";
import ReactDOM from "react-dom/client";
// Cấu hình router-dom
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
// scss
import "./assets/scss/Style.scss";
import DangNhap from "./pages/DangNhap/DangNhap";
import TemplateAmin from "./pages/Admin/TemplateAmin";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<DangNhap />}></Route>
        <Route path="*" element={""}></Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<TemplateAmin />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
