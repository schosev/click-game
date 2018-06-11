import React, { Component } from "react";
import Waterfall from "./components/Waterfall";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Waterfalls from "./waterfall.json";
import "./App.css";

class App extends Component {
  state = {
    Waterfalls,
    gameStatus: "Not Started",
    headMessage: "Click an Image to Begin!",
    currentScore: 0,
    highScore: 0
  };

  getMessage = () => {
    //determines the game status and updates the header message accordingly.
    if (this.state.gameStatus === "Not Started") {
      this.setState({ headMessage: "Click an Image to Begin!" });
    } else if (this.state.gameStatus === "In Progress") {
      this.setState({ headMessage: "You Guessed Correctly!"});
    } else {
      this.setState({ headMessage: "You Guessed Incorrectly!"}, 
      () => {
        this.gameOver()
      });
    }
  };

  clickedImage = id => {
    //gets the id of the clicked waterfall image.
    const result = this.state.Waterfalls.find( waterfall => waterfall.id === id );
    
    //checks to see if image has been clicked already.
    if (result.isClicked === false) {
      this.state.Waterfalls.forEach((waterfall, index) => {
        if(waterfall.id === id) {
            waterfall.isClicked = true;
        }
      })
      //Will update highscore is greater than current score
      if (this.state.currentScore >= this.state.highScore) {
          this.setState({ highScore: this.state.highScore + 1 })
      };
      //updates current score & game status then updates the header message
      this.setState({ currentScore: this.state.currentScore + 1, 
        gameStatus: "In Progress"},
        () => {
          this.getMessage()
        });
      //calls function to shuffle the waterfall images.
      this.shuffleArray(this.state.Waterfalls);
    } else {
      //If image already clicked, will end the game and reset current score to 0.
      this.setState({ currentScore: 0,
        gameStatus: "Game Over"},
        () => {
          this.getMessage()
        });
    }
  };

  //shuffles the waterfalls array for each image click
  shuffleArray = (Waterfalls) => {
    for (let i = Waterfalls.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Waterfalls[i], Waterfalls[j]] = [Waterfalls[j], Waterfalls[i]]; 
    }
}

  //Resets all the waterfalls to isClicked false so you can play again.
  gameOver = () => {
    this.state.Waterfalls.forEach((waterfall, index) => {
      waterfall.isClicked = false;
    })
  }
  // Map over this.state.waterfall and render a waterfallCard component for each waterfall object
  render() {
    return (
      <div>
        <Title
          gameStatus={this.state.gameStatus}
          headMessage={this.state.headMessage}
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}>
        </Title>
      <Wrapper>
        
        {this.state.Waterfalls.map(Waterfalls => (
          <Waterfall
            clickedImage={this.clickedImage}
            id={Waterfalls.id}
            key={Waterfalls.id}
            name={Waterfalls.name}
            image={Waterfalls.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
