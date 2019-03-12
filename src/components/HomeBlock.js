import React, { Component } from "react";

import Block from "./Block";

import "./HomeBlock.css";

const Blocks = [
  {
    name: "Tube",
    status: "No Distruption",
    img: ""
  },
  {
    name: "Overground",
    status: "Minor Distruption",
    img: ""
  },
  {
    name: "Bus",
    status: "No Distruption",
    img: ""
  },
  {
    name: "Taxi",
    status: "No Distruption",
    img: ""
  }
];

class HomeBlock extends Component {
  render() {
    return (
      <div class="block-wrapper">
        {Blocks.map((block, i) => {
          return (
            <Block name={block.name} status={block.status} img={block.img} />
          );
        })}
      </div>
    );
  }
}

export default HomeBlock;
