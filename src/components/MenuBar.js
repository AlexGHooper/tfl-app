import React, { Component } from "react";

import "./MenuBar.css";

import home from "../assets/icons/home.svg";
import map from "../assets/icons/map.svg";
import heart from "../assets/icons/heart.svg";
import pub from "../assets/icons/beer.svg";

class MenuBar extends Component {
  render() {
    return (
      <div className="menu-bar">
        <ul className="menu-bar__wrapper">
          <li onClick={() => this.props.pageChange(0)}>
            <img className="menu-bar__home" src={home} alt="" />
          </li>
          <li onClick={() => this.props.pageChange(1)}>
            <img className="menu-bar__home" src={map} alt="" />
          </li>
          <li onClick={() => this.props.pageChange(2)}>
            <img className="menu-bar__home" src={heart} alt="" />
          </li>
          <li onClick={() => this.props.pageChange(3)}>
            <img className="menu-bar__home" src={pub} alt="" />
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuBar;
