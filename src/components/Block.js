import React, { Component } from "react";

import "./Block.css";

class Block extends Component {
  render() {
    return (
      <div className="block">
        <div className="block__img">
          <img src={this.props.img} alt={this.props.name} />
        </div>
        <div className="block__content">
          <div className="block__name">{this.props.name}</div>
          <div className="block__status">{this.props.status}</div>
        </div>
      </div>
    );
  }
}

export default Block;
