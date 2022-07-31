import React, { Component } from "react";
import ExModal from "./ExModal";
import ExProductList from "./ExProductList";

export default class ExcerciseCarStore extends Component {
  state = {
    modalState: {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
  };

  //State thay đổi ở đâu thì hàm làm thay đổi State sẽ đặt tại đó
  changeState = (newState) => {
    console.log(newState);
    this.setState({
      modalState: newState,
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Excercise Car Store</h3>
        <ExModal modalState={this.state.modalState} />
        <ExProductList changeState={this.changeState}></ExProductList>
      </div>
    );
  }
}
