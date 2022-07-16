//rcc: React class component

import React, { Component } from "react";

//react class component
export default class DemoClass extends Component {
  //nội dung giao diện của component nằm sẵn trong phương thức render
  render() {
    return (
        <div className="mt-2 bg-dark text-white">
            DemoClass
        </div>
    )
  }
}
