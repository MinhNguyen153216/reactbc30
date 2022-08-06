import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";

export default class ProductManagement extends Component {
  state = {
    arrProduct: [
      {
        id: "1",
        name: "product1",
        price: "1000",
        description: "asd",
        img: "https://picsum.photos/200/200",
        productType: "mobile",
      },
      {
        id: "2",
        name: "product2",
        price: "2000",
        description: "asd",
        img: "https://picsum.photos/200/200",
        productType: "mobile",
      },
    ],
    productEdit: {
      id: "",
      name: "",
      price: "",
      description: "",
      img: "",
      productType: "",
    },
  };

  //CRUD
  // Muốn thay đổi state nào thì phải viết hàm setState() tại vị trí
  // mà component chứa state đó
  createProduct = (newProduct) => {
    console.log(newProduct);
    let arrProductUpdate = this.state.arrProduct;
    arrProductUpdate.push(newProduct);

    this.setState({
      arrProduct: arrProductUpdate,
    });
  };

  delProduct = (productID) => {
    console.log(productID);
    let arrProductUpdate = this.state.arrProduct;

    // Tìm ra vị trí của id cần xóa
    // let indexDel = arrProductUpdate.findIndex((i) => i.id == product);
    // if (indexDel !== -1) {
    //   arrProductUpdate.splice(indexDel, 1);
    // }
    arrProductUpdate = arrProductUpdate.filter((i) => i.id !== productID);

    // Cập nhật lại state bằng setState()
    this.setState({
      arrProduct: arrProductUpdate,
    });
  };

  editProduct = (product) => {
    console.log(product);
    this.setState({ productEdit: product });
  };

  render() {
    return (
      <div className="container">
        <h3>ProductManagement</h3>
        <FormProduct
          createProduct={this.createProduct}
          productEdit={this.editProduct}
        />
        <TableProduct
          arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
          editProduct={this.editProduct}
        />
      </div>
    );
  }
}
