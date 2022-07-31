import React, { Component } from "react";

const data = [
  { id: 1, name: "product 1", price: 10000, img: "https://i.pravatar.cc?u=1" },
  { id: 2, name: "product 2", price: 20000, img: "https://i.pravatar.cc?u=2" },
  { id: 3, name: "product 3", price: 30000, img: "https://i.pravatar.cc?u=3" },
];
//method render nhận một mảng gồm các jsx để render đồng cấp với nhau,
//  trong đó: mỗi jsx phải có giá trị key={}
export default class RenderWithMap extends Component {
  renderProduct = () => {
    // let jsxArr = [];

    //cách 1: dùng vòng lặp
    // data.forEach((product, index) => {
    //   let tr = (
    //     <tr key={product.id}>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>{product.price}</td>
    //       <td>
    //         <img src={product.img} alt="..." width={50} />
    //       </td>
    //     </tr>
    //   );

    //   jsxArr.push(tr);
    // });

    //cách 2: dùng .map()
    // let jsxArr =
    return data.map((product, index) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} alt="..." width={50} />
          </td>
        </tr>
      );
    });
    // return jsxArr;
  };

  renderCardProduct = () => {
    return data.map((product, index) => {
      return (
        <div className="col-4" key={product.id}>
          <div className="card">
            <img src={product.img} alt="..." />
            <div className="card-body">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Table product</h3>
        <table className="table container">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
        <hr />
        <h3>Product list</h3>
        <div className="row">{this.renderCardProduct()}</div>
      </div>
    );
  }
}
