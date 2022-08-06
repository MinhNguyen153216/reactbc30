import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: 0,
      img: "",
      productType: "mobile",
      description: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      description: "",
    },
  };

  handleOnInput = (e) => {
    let { id, value } = e.target;
    console.log(e);

    // Lấy định dạng của trường input đó
    let dataType = e.target.getAttribute("data-type");

    // Xử lí product info
    let newValue = { ...this.state.productInfo };
    newValue[id] = value;

    // Xử lí lỗi
    let newErrors = { ...this.state.errors };
    let errorMess;
    //-check input rỗng
    if (value.trim() === "") {
      errorMess = id + "không được bỏ trống";
    } else {
      //lỗi định dạng
      if (dataType === "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          errorMess = id + "phải là số";
        }
      }
    }
    newErrors[id] = errorMess;

    // setState()
    this.setState(
      {
        productInfo: newValue,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (e) => {
    //chặn việc load lại trang làm mất dữ liệu
    e.preventDefault();

    //check trước khi submit dữ liệu
    let valid = true;
    let { errors, productInfo } = this.state;

    //check error (tất cả thuộc tính trong thằng error phải rỗng)
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        break;
      }
    }

    //check giá trị nhập vào trong productInfo (tất cả các thuộc tính phải khác rỗng)
    for (let key in productInfo) {
      if (productInfo[key] === "") {
        valid = false;
        break;
      }
    }

    //không hợp lệ
    if (!valid) {
      alert("Dữ liệu không hợp lệ");
      return;
    }
    //hợp lệ
    alert("submitted");
    this.props.createProduct(productInfo);
  };

  render() {
    console.log(this.props.productEdit);
    let { id, name, price, img, description, productType } =
      this.props.productEdit;

    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div
          className="card-header bg-dark text-warning"
          style={{ fontSize: 22 }}
        >
          Product info
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>Id</p>
              <input
                className="form-control"
                id="id"
                name="id"
                type="text"
                value={id}
                onInput={this.handleOnInput}
              />
              <p className="text-danger">{this.state.errors["id"]}</p>
            </div>
            <div className="form-group">
              <p>Name</p>
              <input
                className="form-control"
                id="name"
                name="name"
                type="text"
                value={name}
                onInput={this.handleOnInput}
              />
              <p className="text-danger">{this.state.errors["name"]}</p>
            </div>
            <div className="form-group">
              <p>Price</p>
              <input
                className="form-control"
                id="price"
                name="price"
                type="text"
                value={price}
                // Các giá trị có sẵn gọi là property
                // Các giá trị tự coder tạo ra gọi là attribute
                // (các attribute phải có chữ "data-" trước nó)
                data-type="number"
                onInput={this.handleOnInput}
              />
              <p className="text-danger">{this.state.errors["price"]}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Img Link</p>
              <input
                className="form-control"
                id="img"
                name="img"
                type="text"
                value={img}
                onInput={this.handleOnInput}
              />
              <p className="text-danger">{this.state.errors["img"]}</p>
            </div>
            <div className="form-group">
              <p>Product type</p>
              <select
                className="form-control"
                id="productType"
                name="productType"
                value={productType}
                onInput={this.handleOnInput}
              >
                <option value="mobile">mobile</option>
                <option value="tablet">tablet</option>
                <option value="laptop">laptop</option>
              </select>
            </div>
            <div className="form-group">
              <p>Product description</p>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows={3}
                value={description}
                onInput={this.handleOnInput}
              />
              <p className="text-danger">{this.state.errors["description"]}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2">Create</button>
          <button className="btn btn-primary mx-2">Update</button>
        </div>
      </form>
    );
  }
}
