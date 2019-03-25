import React, { Component } from 'react';
import FriendMatchCard from "./components/FriendMatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import logo from './logo.svg';
import './App.css';

let rightGuesses = 0;
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

        } else if (rightGuesses < 11) {

          // Set its value to true
          clickedMatch[0].clicked = true;
        
          rightGuesses++;
            
          pressComment = "Nice! This is the first click on that one!";

          if (rightGuesses > topScore){
            topScore = rightGuesses;
            this.setState({ topScore });
        }

         // Shuffle the array to be rendered in a random order
         matches.sort(function(a, b){return 0.5 - Math.random()});

         // Set this.state.matches equal to the new matches array
         this.setState({ matches });
         this.setState({rightGuesses});
         this.setState({pressComment});
     } else {

      // Set its value to true
      clickedMatch[0].clicked = true;

      // restart the guess counter
      rightGuesses = 0;

      // Egg on the user to play again
      pressComment = "You catched them all!!!";
      topScore = 12;
      this.setState({ topScore });
      
      for (let i = 0 ; i < matches.length ; i++){
          matches[i].clicked = false;
      }

      // The array is shuffled in a random order
      matches.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({ matches });
      this.setState({rightGuesses});
      this.setState({pressComment});

    }
};


     render() { return (
      
      <Wrapper>
      <Title> The Clicky Game</Title>

      <h3 className="scoreSummary">
          {this.state.pressComment}
      </h3>
      
      <h3 className="scoreSummary card-header">
          Right Guesses: {this.state.rightGuesses} 
          <br />
          Top Score: {this.state.topScore} 
      </h3>
      <div className="container">
      <div className="row">
      {this.state.matches.map(match => (
          <MatchCard
              setClicked={this.setClicked}
              id={match.id}
              key={match.id}
              image={match.image}
          />
      ))}
      </div>
      </div>

  </Wrapper>

    );
  }
}

export default App;
