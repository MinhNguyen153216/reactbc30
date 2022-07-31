import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    id: "",
    name: "",
    price: 0,
    img: "",
    productType: "mobile",
    description: "",
  };

  handleOnInput = (e) => {
    let { id, value } = e.target;
    this.setState({ id: value }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <form className="card">
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
                onInput={this.handleOnInput}
              />
            </div>
            <div className="form-group">
              <p>Name</p>
              <input
                className="form-control"
                id="name"
                name="name"
                type="text"
                onInput={this.handleOnInput}
              />
            </div>
            <div className="form-group">
              <p>Price</p>
              <input
                className="form-control"
                id="price"
                name="price"
                type="number"
                onInput={this.handleOnInput}
              />
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
                onInput={this.handleOnInput}
              />
            </div>
            <div className="form-group">
              <p>Product type</p>
              <select
                className="form-control"
                id="productType"
                name="productType"
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
                onInput={this.handleOnInput}
              />
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
