import React from 'react';

import './Stations.css';

const Stations = (props) => {
  return <ul className="line__stations">
    {
      props.data.map((station, i) => <li key={i}>{station.commonName}</li>)
    }
    </ul>;
}

export default Stations;