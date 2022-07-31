import React, { Component } from "react";

export default class BaiTapProps extends Component {
  render() {
    let { dataProduct } = this.props;

    return (
      <div className="card">
        <img src={dataProduct.image} alt="" />
        <div className="card-body">
          <p>{dataProduct.name}</p>
          <p>{dataProduct.price}$</p>
          <button className="btn bg-dark text-white">Add to carts</button>
        </div>
      </div>
    );
  }
}
