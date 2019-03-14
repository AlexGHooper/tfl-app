import React from "react";

const Favourites = props => {
  return (
    <div className="favourites">
      <div className="title">Favourites</div>
      {props.favStatus()}
    </div>
  );
};

export default Favourites;
