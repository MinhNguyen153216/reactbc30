import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { productData,xemChiTiet } = this.props;

    return (
      <div className="card" style={{ height: 566 }}>
        <img src={productData.hinhAnh} alt="..." />
        <div className="card-body">
          <h3>{productData.tenSP}</h3>
          <p>{productData.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              xemChiTiet(productData);
            }}
          >
            Xem chi tiet
          </button>
        </div>
      </div>
    );
  }
}
