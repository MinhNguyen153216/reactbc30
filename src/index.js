import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Page404 from "./pages/Page404/Page404";
import ProductManagement from "./pages/ProductManagement/ProductManagement";
import ReactLifeCycle from "./ReactLifeCycle/ReactLifeCycle";

const root = ReactDOM.createRoot(document.getElementById("root"));

//dùng react-router-dom để cấu hình trang lên thanh địa chỉ
root.render(
  <BrowserRouter>
    <Routes>
      {/* địa chỉ ban đầu (vd: mypage.com) */}
      <Route path="" element={<App />}>
        {/* địa chỉ có đường dẫn bổ sung (vd: mypage.com/home) */}
        <Route path="" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="reactform" element={<ProductManagement/>}></Route>
        <Route path="lifecycle" element={<ReactLifeCycle/>}></Route>
        {/* chuyển hướng trang về trang 404 */}
        {/* <Route path="*" element={<Page404 />}></Route> */}
        
        {/* chuyển hướng trang về trang chủ (khuyến khích) */}
        <Route path="*" element={<Navigate to=""/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
