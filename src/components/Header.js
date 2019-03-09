import React from 'react';

import './Header.css';

const Header = (props) => {
  return(
    <div className="header">
      <div classname="header__title">
      {props.page}
      </div>
    </div>
    );
}

export default Header;