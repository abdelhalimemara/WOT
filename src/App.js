import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './components/navbar.js';
import Body from './components/body.js'
import BestenListee from './components/Bestenliste.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <PrimarySearchAppBar />
        <div className="body">
        <div className="TitleHeader">
        <h1>Welcome to your WOTS</h1>
        <h3>Here are the daily WODs</h3>
        </ div>
        <Body />
        <BestenListee />
        </div>
      </div>
    );
  }
}

export default App;
