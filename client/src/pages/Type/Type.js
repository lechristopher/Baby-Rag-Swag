import React, { Component } from "react";
import Nav from "../../components/Nav";
import Menu from "../../components/Menu";
// import helpers from "../../utils/helpers";
// import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

class Type extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Content productId= {this.props.match.params.id} />
      </div>
    );
  }
}

export default Type;
