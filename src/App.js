import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import waterfall from "./waterfall.json";
import "./App.css";

class App extends Component {
  // Setting this.state.waterfall to the waterfall json array
  state = {
    waterfall
  };

  removewaterfall = id => {
    // Filter this.state.waterfall for waterfall with an id not equal to the id being removed
    const waterfall = this.state.waterfall.filter(waterfall => waterfall.id !== id);
    // Set this.state.waterfall equal to the new waterfall array
    this.setState({ waterfall });
  };

  // Map over this.state.waterfall and render a waterfallCard component for each waterfall object
  render() {
    return (
      <Wrapper>
        <Title>waterfall List</Title>
        {this.state.waterfall.map(waterfall => (
          <FriendCard
            removewaterfall={this.removewaterfall}
            id={waterfall.id}
            key={waterfall.id}
            name={waterfall.name}
            image={waterfall.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
