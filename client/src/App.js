import React, { Component } from 'react'
import Background from './Background'
import Golfer from './img/golfer.webp'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Background img={Golfer}></Background>
        </div>
      </div>
    );
  }
}

export default App
