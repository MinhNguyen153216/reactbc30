import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello cybersoft 2");
  };

  showMessage = (name) => {
    alert(name);
  };

  render() {
    return (
      <div className="container">
        <span>HandleEvent</span>
        <button
          className="btn btn-primary ms-2"
          onClick={() => {
            alert("hello cybersoft 1");
          }}
        >
          Click1
        </button>

        {/* Để các hàm xử lí sự kiện thành callback
            tức là khi render() chạy thì các hàm event đó không chạy luôn */}
        <button className="btn btn-danger ms-2" onClick={this.handleClick}>
          Click2
        </button>

        {/* Đối với các hàm có truyền tham số thì tạo hàm đó bên ngoài
            và khi event được gọi thì nó sẽ gọi hàm truyền tham số đó chạy */}
        <button
          className="btn btn-success ms-2"
          onClick={(e) => {
            // gọi hàm khác
            this.showMessage("ASD");
          }}
        >
          Click3
        </button>

        <h3>Handle event change</h3>
        <input
          className="form-control w-25"
          onChange={(e) => {
            //e.target chính là DOM đến cái thẻ diễn ra sự kiện này
            let tagInput = e.target;
            console.log(tagInput);
          }}
        ></input>
      </div>
    );
  }
}
