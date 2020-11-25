import React, { Component } from "react";
import "./App.css";
import App2 from "./App2.js";
import Play from "./Play"
import * as firebase from "firebase";
import PlayHook from './PlayHook'
import PlayHookTwo from './PlayHookTwo'
import PlayHookThree from './PlayHookThree'
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 32,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent() {
    this.setState({
      data: this.state.data + 1,
    });
  }
  componentDidMount() {
    const rootRef = firebase.database().ref().child("react");
    const speedRef = rootRef.child("speed");
    speedRef.on("value", (snap) => {
      this.setState({
        data: snap.val(),
      });
    });
  }
  render() {
    return (
      <div className="outer">
        <div className="App">
          <h1>{this.state.data}</h1>
          <button onClick={this.handleEvent}>Chick here</button>
        <App2 />
        <Play />
        <PlayHook />
        <PlayHookTwo />
        <PlayHookThree />
        </div>
        <Button variant="contained" color="primary">
      Meterial
    </Button>
      </div>
    );
  }
}
export default App;
