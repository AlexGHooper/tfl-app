import React, { Component } from "react";

import "./Block.css";

class Block extends Component {
  render() {
    return <div class="block">{this.props.name}</div>;
  }
}

export default Block;
