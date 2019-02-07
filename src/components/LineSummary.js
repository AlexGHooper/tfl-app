import React from 'react';
import posed from 'react-pose';

import './LineSummary.css';

const LineSummary = React.forwardRef((props, ref) => (

    <div ref={ref} className={`line ${props.lineColour(props.lineId)}`}>
      <div className="line__name">
      {props.name}
      </div>
      <div className="line__status">
      <div className="line__status__indicator" style={{backgroundColor: props.lineStatusParser(props.status)}}/>
      </div>
    </div>
  ));

const PosedComponent = posed(LineSummary)({
draggable: 'x',
dragBounds: { left: '-100%', right: '0' },
dragEnd: { 
  x: 0,
  y: 0,
  transition: { type: 'spring' }},
 open: {
   y: 0,
   opacity: 1
 },
 closed: {
  y: 20,
  opacity: 0,
 }
});

export default PosedComponent