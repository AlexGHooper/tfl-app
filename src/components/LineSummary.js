import React, { useState, Fragment } from "react";
import posed from "react-pose";

import LineMenu from "./LineMenu";
import Status from "./Status";

import "./LineSummary.css";

const LineSummary = React.forwardRef((props, ref) => {
  const [clicked, setClicked] = useState(0);

  return (
    <div
      ref={ref}
      onClick={() => (clicked ? setClicked(0) : setClicked(1))}
      className={`line ${props.lineColour(props.lineId)}`}
    >
      <div className="line__container">
        <div className="line__name">{props.name}</div>
        <div className="line__status__container">
          <div className="line__status__text">{props.status}</div>
          <div
            className="line__status__indicator"
            style={{ backgroundColor: props.lineStatusParser(props.status) }}
          />
        </div>
      </div>
      {clicked ? (
        <Fragment>
          <LineMenu line={props.lineId} addToFav={props.addToFav} />
        </Fragment>
      ) : (
        false
      )}
    </div>
  );
});

const PosedComponent = posed(LineSummary)({
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 20,
    opacity: 0
  }
});

export default PosedComponent;
