import React, { Component } from "react";

import "./MenuBar.css";

class MenuBar extends Component {
  render() {
    return (
      <div className="menu-bar">
        <ul className="menu-bar__wrapper">
          <li onClick={() => this.props.pageChange(0)}>Home</li>
          <li onClick={() => this.props.pageChange(1)}>Tube Lines</li>
          <li onClick={() => this.props.pageChange(2)}>Meetup</li>
        </ul>
      </div>
    );
  }
}

export default MenuBar;
