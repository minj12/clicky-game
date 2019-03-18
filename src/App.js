import React, { Component } from 'react';
import FriendMatchCard from "./components/FriendMatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import logo from './logo.svg';
import './App.css';

let rightGuess = 0;
let topScore = 0;
let pressComment = "Press on a friend to gain points! Click on the same one twice and you lose!";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
