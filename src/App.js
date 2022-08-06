// import logo from './logo.svg';
// import './App.css';

import BaiTapRenderMap from "./BaiTapRenderMap/BaiTapRenderMap";
import DemoClass from "./Components/DemoClass";
import DemoFunc from "./Components/DemoFunc";
import Home from "./Components/Home/Home";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import ProductList from "./Props/BaiTapProps/ProductList";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import DemoProps from "./Props/DemoProps/DemoProps";
import ExcerciseCarStore from "./Props/ExcerciseCarStrore/ExcerciseCarStore";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapState from "./State/BaiTapState";
import DemoState from "./State/DemoState";
import StyleRender from "./StyleRender/StyleRender";

// react router dom
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Outlet là dành cho viết các nội dung thay đổi bởi path con */}
      {/* Các thằng con chỉ được load ở Outlet thôi */}

      {/* isActive là giá trị mà nó tìm trên thanh địa chỉ mà */}
      {/* <NavLink/> nó "to" đến */}
      {/* ở arrow func chứa isActive là đối số thì isActive là giá trị mà */}
      {/* nó đồng thời được bóc tách phần tử (obj de-structuring) */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Cybersoft
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-dark nav-link" : "nav-link"
                }
                style={({ isActive }) =>
                  isActive ? { borderRadius: "5px" } : {}
                }
                to="/home"
              >
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-dark nav-link" : "nav-link"
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-dark nav-link" : "nav-link"
                }
                to="/register"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-dark nav-link" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-dark nav-link" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-dark nav-link" : "nav-link"
                }
                to="/reactform"
              >
                ReactForm
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <Outlet />
      <footer className="bg-dark text-white text-center p-3">Footer</footer>
    </div>

    // <div className="App">
    //   {/* <Home/> */}
    //   {/* <Databinding/> */}
    //   {/* <HandleEvent /> */}
    //   {/* <DemoState/> */}
    //   {/* <StyleRender/> */}
    //   {/* <BaiTapState/> */}
    //   {/* <RenderWithMap/> */}
    //   {/* <BaiTapRenderMap/> */}
    //   {/* <DemoProps/> */}
    //   {/* <ProductList /> */}
    //   {/* <BaiTapXemChiTiet/> */}
    //   <ExcerciseCarStore/>
    // </div>
  );
}

export default App;
