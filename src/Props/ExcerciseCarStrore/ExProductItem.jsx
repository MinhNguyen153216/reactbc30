import React, { Component } from "react";

export default class ExProductItem extends Component {
  render() {
    let { product, changeState } = this.props;
    return (
      <div className="card">
        <img src={product.img} alt="..." />
        <div className="card-body">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#modelId"
            onClick={() => {
              changeState(product);
            }}
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}
