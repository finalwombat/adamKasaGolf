import React, { Component } from 'react'
import Background from './Background'
import Golfer from './img/golfshot.jpg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background img={Golfer}></Background>
      </div>
    );
  }
}

export default App
