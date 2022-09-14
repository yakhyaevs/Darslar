import React, { Component } from "react";
import "./index.css";

class Navbar extends Component {
  render() {
    console.log(this);
    return (
      <div className="box">
        <img className="img" src={this.props.title.image} alt="fruit" />
        <h2 className="text">{this.props.title.name}</h2>
      </div>
    );
  }
}

export default Navbar;
