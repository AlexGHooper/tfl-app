import React from "react";

const Favourites = props => {
  return (
    <div>
      <div>Favourites</div>
      {props.favStatus()}
    </div>
  );
};

export default Favourites;
