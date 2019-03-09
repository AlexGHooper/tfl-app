import React from "react";

import "./LineMenu.css";

const LineMenu = props => {
  return (
    <ul className="line__menu">
      <li>stations</li>
      <li>Nearest</li>
      <li onClick={() => props.addToFav(props.line)}>Favourite</li>
    </ul>
  );
};

export default LineMenu;
