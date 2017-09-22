import React, { Component } from 'react';
import Background from './Background'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Background></Background>
        </div>
      </div>
    );
  }
}

export default App;
