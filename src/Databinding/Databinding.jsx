import React, { Component } from "react";

export default class Databinding extends Component {
  userName = "qwead";

  showInfo() {
    return "hello";
  }

  renderCard = () => {
    return (
      <div>
        userName: {this.userName}
        <img src="https://picsum.photos/200/200" alt="" />
      </div>
    );
  };

  //phương thức render
  render() {
    //biến và hàm thì khi khai báo dùng var,let,const
    const hoTen = "asd";

    const tinhDiemTrungBinh = (diemToan, diemVan) => {
      return (diemToan + diemVan) / 2;
    };

    return (
      <div>
        <div>Databinding</div>
        <p>Họ Tên: {hoTen}</p>
        <p>Điểm trung bình: {tinhDiemTrungBinh(8, 3)}</p>
        <p>{this.showInfo()}</p>
        <div>{this.renderCard()}</div>
      </div>
    );
  }
}
