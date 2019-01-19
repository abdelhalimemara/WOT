import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './components/navbar.js';
import Body from './components/body.js'


class App extends Component {
  render() {
    return (
      <div className="App">

        <PrimarySearchAppBar />
        <div className="body"></div>

        <Body />
      </div>
    );
  }
}

export default App;
