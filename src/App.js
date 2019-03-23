import React, { Component } from 'react';
import FriendMatchCard from "./components/FriendMatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import logo from './logo.svg';
import './App.css';

let rightGuess = 0;
let topScore = 0;
let pressComment = "Press on a comment to gain points! Click on the same one twice and you lose!";


class App extends Component {
  
  // Setting this.state.matches to the matches json array
  state = {
    matches,
    rightGuesses,
    topScore,
    pressComment
};

setClicked = id => {
  
  const matches = this.state.matches;

  const clickedMatch = matches.filter(match => match.id === id);

  if (clickedMatch[0].clicked){

    console.log ("Right Guesses: " + rightGuesses);
    console.log ("Top Score: " + topScore);

    rightGuesses = 0;
            clickMessage = "You clicked on this one already!!"

            for (let i = 0 ; i < matches.length ; i++){
              matches[i].clicked = false;
          }
          
          this.setState({pressComment});
          this.setState({ rightGuesses });
          this.setState({matches});
}

  }


export default App;
