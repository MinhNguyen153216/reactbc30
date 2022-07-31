import React, { Component } from "react";
import BaiViet from "./BaiViet";
import Card from "./Card";

const dsBaiViet = [
  { tieuDe: "tieu de 1", noiDung: "noi dung 1" },
  { tieuDe: "tieu de 2", noiDung: "noi dung 2" },
  { tieuDe: "tieu de 3", noiDung: "noi dung 3" },
];

export default class DemoProps extends Component {
  render() {
    //this.props là thuộc tính có sẵn của component dùng để nhận giá trị
    //  từ component cha truyền vào

    const tenSP = "Product 1";
    const gia = 1000;
    const baiViet = {
      tieuDe: "Tiêu đề asd",
      noiDung:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,quos. Et dolorum corporis inventore eveniet.",
    };

    return (
      <div className="container" style={{ marginBottom: 500 }}>
        <div className="w-25">
          <Card tenSP={tenSP} gia={gia} />
        </div>

        {/* động về mặt giá trị truyền vào */}
        <div className="w-25">
          <Card tenSP={"product 2"} gia={2000} />
        </div>

        <hr />
        <h3>Demo bài viết</h3>
        <BaiViet baiViet1={baiViet} />
        
        {dsBaiViet.map((baiViet, index)=>{
            return <div key={index}>
                <BaiViet baiViet1={baiViet}/>
            </div>
        })}
      </div>
    );
  }
}
