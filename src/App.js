import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';

import './App.css';

import {getLineStatus, getAllLinesStatus} from './actions/api';
import lineColours from './lineColours';

import LineSummary from './components/LineSummary';

const AnimateGroup = posed.div({
  open: {
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: {
    delayChildren: 200,
    staggerChildren: 50
  }
})

class App extends Component {

  constructor() {
    super();
    this.state = {
      lines: [],
      isLoaded: false,
    }

    this.linesStatus = this.linesStatus.bind(this);
    this.lineColour = this.lineColour.bind(this);
    this.lineStatusParser = this.lineStatusParser.bind(this);
  }

  async componentDidMount() {
    const lines = await getAllLinesStatus();
    this.setState({lines});
    this.setState({isLoaded: true});
  }

  linesStatus() {
    return this.state.lines.map((line, i) =><LineSummary key={i} name={line.name} lineId={line.id} status={line.lineStatuses[0].statusSeverityDescription} lineColour={this.lineColour} lineStatusParser={this.lineStatusParser} />);
  }

  lineColour(lineName) {
    if(lineName.includes('-')) {
      const splitLine = lineName.split('-');
      lineName = splitLine[0];
    }
    return `${lineName}`;
  }

  lineStatusParser(status) {
    if (status === "Good Service") {
      return 'rgb(2, 224, 0)';
    } else if (status === "Minor Delays") {
      return '#f4a442';
    } else if(status === "Severe Delays") {
      return '#f44141'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="line-wrapper">
              <AnimateGroup pose={this.state.isLoaded ? 'open' : 'closed'}>
                {this.linesStatus()}
              </AnimateGroup>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
