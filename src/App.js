import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";

import Stations from "./components/Stations";

import "./App.css";

import {
  getLineStatus,
  getAllLinesStatus,
  getLineStations
} from "./actions/api";
import lineColours from "./lineColours";

import LineSummary from "./components/LineSummary";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Page from "./components/Page";
import Favourites from "./components/Favourites";
import { throws } from "assert";

const AnimateGroup = posed.div({
  open: {
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: {
    delayChildren: 200,
    staggerChildren: 50
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      lines: [],
      favourites: [],
      isLoaded: false,
      currentStations: [],
      currentSelectedStation: ""
    };

    this.linesStatus = this.linesStatus.bind(this);
    this.lineColour = this.lineColour.bind(this);
    this.lineStatusParser = this.lineStatusParser.bind(this);
    this.lineStations = this.lineStations.bind(this);
    this.pageChange = this.pageChange.bind(this);
    this.addToFav = this.addToFav.bind(this);
    this.favStatus = this.favStatus.bind(this);
  }

  async componentDidMount() {
    const lines = await getAllLinesStatus();
    this.setState({ lines });
    this.setState({ isLoaded: true });
  }

  linesStatus() {
    return this.state.lines.map((line, i) => (
      <LineSummary
        key={i}
        name={line.name}
        lineId={line.id}
        status={line.lineStatuses[0].statusSeverityDescription}
        lineColour={this.lineColour}
        lineStatusParser={this.lineStatusParser}
        lineStations={this.lineStations}
        currentSelectedStation={this.currentSelectedStation}
        data={this.state.currentStations}
        addToFav={this.addToFav}
      />
    ));
  }

  favStatus() {
    if (this.state.favourites.length === 0) {
      console.log("empty favss...");
      return (
        <div>
          <em>You have no favourites...</em>
        </div>
      );
    } else {
      return this.state.favourites.map((line, i) => (
        <LineSummary
          key={i}
          name={line.name}
          lineId={line.id}
          status={line.lineStatuses[0].statusSeverityDescription}
          lineColour={this.lineColour}
          lineStatusParser={this.lineStatusParser}
          lineStations={this.lineStations}
          currentSelectedStation={this.currentSelectedStation}
          data={this.state.currentStations}
          addToFav={this.addToFav}
        />
      ));
    }
  }

  lineColour(lineName) {
    if (lineName.includes("-")) {
      const splitLine = lineName.split("-");
      lineName = splitLine[0];
    }
    return `${lineName}`;
  }

  async lineStations(id) {
    const stations = await getLineStations(id);
    this.setState({ currentStations: stations });
  }

  lineStatusParser(status) {
    // turn this into an object with properties
    if (status === "Good Service") {
      return "rgb(2, 224, 0)";
    } else if (status === "Minor Delays") {
      return "#f4a442";
    } else if (status === "Severe Delays") {
      return "#f44141";
    }
  }

  pageChange(currentPage) {
    let page = this.state.currentPage;
    page = currentPage;
    this.setState({ currentPage: page });
  }

  addToFav(lineName) {
    let favourites = this.state.favourites;
    let lines = this.state.lines;
    // Take one array object (by matching an object value) from the lines state and add it to the favourite state
    lines.forEach(line => {
      if (line.id === lineName) {
        favourites.push(line);
        this.setState({ favourites });
      }
    });
    console.log("addToFav");
  }

  render() {
    return (
      <div className="App">
        <Header page="Header" />
        <div
          className="page-wrapper"
          style={{
            transform: `translateX(${this.state.currentPage * -100}vw)`
          }}
        >
          <Page>
            <Favourites favStatus={this.favStatus} />
          </Page>
          <Page>
            <div className="line-wrapper">
              <AnimateGroup
                pose={this.state.currentPage == 1 ? "open" : "closed"}
              >
                {this.linesStatus()}
              </AnimateGroup>
            </div>
          </Page>
          <Page>
            <div>PAGE 3</div>
          </Page>
        </div>
        <MenuBar
          currentPage={this.state.currentPage}
          pageChange={this.pageChange}
        />
      </div>
    );
  }
}

export default App;
