import React, { Component } from 'react';
import FriendMatchCard from "./components/FriendMatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import logo from './logo.svg';
import './App.css';

let rightGuess = 0;
let topScore = 0;
let pressComment = "Press on a  to gain points! Click on the same one twice and you lose!";


class App extends Component {
  
  // Setting this.state.matches to the matches json array
  state = {
    matches,
    rightGuess,
    topScore,
    pressComment
};


  }


export default App;
