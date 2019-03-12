import React from "react";
import posed from "react-pose";

import stations from "../assets/icons/train.svg";
import status from "../assets/icons/time.svg";
import favourite from "../assets/icons/heart.svg";

import "./LineMenu.css";

const LineMenu = props => {
  return (
    <ul className="line__menu">
      <li className="line__menu__stations">
        <img src={stations} alt="stations" />
        <p>Stations</p>
      </li>
      <li className="line__menu__status">
        <img src={status} alt="status" />
        <p>Status</p>
      </li>
      <li
        className="line__menu__favourite"
        onClick={() => props.addToFav(props.line)}
      >
        <img src={favourite} alt="favourite" />
        <p>Favourite</p>
      </li>
    </ul>
  );
};

export default LineMenu;
