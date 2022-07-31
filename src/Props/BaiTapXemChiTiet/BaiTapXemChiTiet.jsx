import React, { Component } from "react";
import SanPham from "./SanPham";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 G B",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class BaiTapXemChiTiet extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  };

  renderData = () => {
    return data.map((productData, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham productData={productData} xemChiTiet={this.xemChiTiet} />
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    console.log(sanPhamClick);
    this.setState({
      sanPhamChiTiet: sanPhamClick,
    });
  };

  render() {
    //dùng bóc tách phần tử (obj de-tructuring) để gọi dữ liệu nhanh hơn
    // let {
    //   maSP,
    //   tenSP,
    //   manHinh,
    //   heDieuHanh,
    //   cameraSau,
    //   cameraTruoc,
    //   ram,
    //   rom,
    //   giaBan,
    //   hinhAnh,
    // } = this.state.sanPhamChiTiet;

    return (
      <div className="container">
        <h3>Danh sach san pham</h3>
        <div className="row">{this.renderData()}</div>

        <div className="mt-2">
          <div className="row">
            <div className="col-4">
              <h3>{this.state.sanPhamChiTiet["tenSP"]}</h3>
              <img src={this.state.sanPhamChiTiet["hinhAnh"]} alt="..." />
            </div>
            <div className="col-8">
              <h3>Thong so ky thuat</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Man hinh</td>
                    <td>{this.state.sanPhamChiTiet["manHinh"]}</td>
                  </tr>
                  <tr>
                    <td>He dieu hanh</td>
                    <td>{this.state.sanPhamChiTiet["heDieuHanh"]}</td>
                  </tr>
                  <tr>
                    <td>Camera truoc</td>
                    <td>{this.state.sanPhamChiTiet["cameraTruoc"]}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.state.sanPhamChiTiet["ram"]}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.sanPhamChiTiet["rom"]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
