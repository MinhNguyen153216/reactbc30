import React, { Component } from "react";
import Content from "./Content";
import Navigation from "./Navigation";

export default class Body extends Component {
  render() {
    return (
      <section className="d-flex">
        <div className="w-25">
          <Navigation />
        </div>
        <div className="w-75">
          <Content />
        </div>
      </section>
    );
  }
}
