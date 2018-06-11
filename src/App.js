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
    console.log("in getMessage");
    if (this.state.gameStatus === "Not Started") {
      this.setState({ headMessage: "Click an Image to Begin!" });
    } else if (this.state.gameStatus === "In Progress") {
      this.setState({ headMessage: "You Guessed Correctly!"});
    } else {
      this.setState({ headMessage: "You Guessed Incorrectly!"}, 
      () => {
        this.gameOver()
      });
      //end game logic
    }
    console.log("third waterfalls: ", this.state.Waterfalls);
    console.log("gameStatus ", this.state.gameStatus);
    console.log("headmessage ", this.state.headMessage);
  };

  clickedImage = id => {
    console.log("in clickedImage");
    const result = this.state.Waterfalls.find( waterfall => waterfall.id === id );
    console.log(result);
    
    if (result.isClicked === false) {
      console.log("in clickedImage true path");
      this.state.Waterfalls.forEach((waterfall, index) => {
        if(waterfall.id === id) {
            waterfall.isClicked = true;
        }
      })
      console.log("this state ", this.state.highScore);
      if (this.state.currentScore >= this.state.highScore) {
          this.setState({ highScore: this.state.highScore + 1 })
      };
      this.setState({ currentScore: this.state.currentScore + 1, 
        gameStatus: "In Progress"},
        () => {
          this.getMessage()
        });
    } else {
      console.log("in clickedImage false path");
      this.setState({ currentScore: 0,
        gameStatus: "Game Over"},
        () => {
          this.getMessage()
        });
    }
  };

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
