import React, { Component } from "react";
// import ảnh hưởng cho mọi component khác
import "./style.css";

//import chỉ ãnh hưởng component này
import styleX from "../StyleRender/StyleRender.module.css";

export default class StyleRender extends Component {
  render() {
    return (
      <div>
        StyleRender
        {/* Dùng cách 1 khi css cho page*/}
        <p className="color-red">Hello</p>

        {/* Dùng cách 2 khi "class" có thể bị thay đổi bởi event từ người dùng */}
        <p className={`${styleX['color-blue']}`}>Hello</p>

        {/* Dùng cách 3 khi "style" có thể bị thay đổi bởi người dùng */}
        {/* import object style */}
        <p style={{color:"green",backgroundColor:"black"}}>Text green</p>
      </div>
    );
  }
}
