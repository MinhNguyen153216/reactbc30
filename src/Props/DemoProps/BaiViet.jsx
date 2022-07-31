import React, { Component } from "react";

export default class BaiViet extends Component {
  render() {
    let {baiViet1} = this.props;
    return (
      <div className="bg-secondary text-white p-5 mt-2">
        <h3>{baiViet1.tieuDe}</h3>
        <p>{baiViet1.noiDung}</p>
      </div>
    );
  }
}
