import React, { Component, Fragment } from "react";

import Block from "./Block";

import "./HomeBlock.css";

import tube from "../assets/icons/subway.svg";
import train from "../assets/icons/train.svg";
import bus from "../assets/icons/bus.svg";
import taxi from "../assets/icons/taxi.svg";

const Blocks = [
  {
    name: "Tube",
    status: "No Distruption",
    img: `${tube}`
  },
  {
    name: "Overground",
    status: "Minor Distruption",
    img: `${train}`
  },
  {
    name: "Bus",
    status: "No Distruption",
    img: `${bus}`
  },
  {
    name: "Taxi",
    status: "No Distruption",
    img: `${taxi}`
  }
];

class HomeBlock extends Component {
  render() {
    return (
      <Fragment>
        <div className="title">All</div>
        <div className="block-wrapper">
          {Blocks.map((block, i) => {
            return (
              <Block
                key={`block-${i}`}
                name={block.name}
                status={block.status}
                img={block.img}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default HomeBlock;
