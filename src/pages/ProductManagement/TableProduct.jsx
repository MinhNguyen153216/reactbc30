import React, { Component } from "react";

export default class TableProduct extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <td>Id</td>
          <td>Image</td>
          <td>Name</td>
          <td>Price</td>
          <td>Description</td>
          <td>Type</td>
          <td></td>
        </thead>
        <tbody>
          {this.props.arrProduct.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>
                  <img src={product.img} alt="..." width={150} />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.productType}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      this.props.delProduct(product.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      this.props.editProduct(product);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
