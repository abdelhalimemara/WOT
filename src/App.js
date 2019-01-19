import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './components/navbar.js';


class App extends Component {
  render() {
    return (
      <div className="App">

        <PrimarySearchAppBar />
      </div>
    );
  }
}

export default App;
