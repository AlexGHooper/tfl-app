import React, { Component } from 'react';

import './MenuBar.css'


class MenuBar extends Component {

  render() {
    return (
     <div className="menu-bar">
      <ul className="menu-bar__wrapper">
        <li>Nearest Station</li>
        <li>Tube Lines</li>
        <li>Meetup</li>
      </ul>
     </div>
    );
  }
}

export default MenuBar;
