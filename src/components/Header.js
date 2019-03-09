import React from "react";

import "./Header.css";

const Header = props => {
  return (
    <div className="header">
      <div className="header__title">{props.page}</div>
    </div>
  );
};

export default Header;
