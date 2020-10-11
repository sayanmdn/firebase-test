import React, { Component } from 'react';
import './App.css'
import * as firebase from 'firebase';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 32
    }
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent() {
    // console.log(this.props);
    this.setState({
      data: this.state.data + 1
    })
  }
  componentDidMount(){
    const rootRef = firebase.database().ref().child()
    const speedRef = rootRef.child('speed')
    speedRef.on('value',snap =>{
      this.setState({
        speed:snap.val()
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={this.handleEvent}>Chick here</button>
      </div>
    );
  }
}
export default App;  