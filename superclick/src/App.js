import React, { Component } from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import heroes from "./hero.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    heroes
  };

  removeHero = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const heroes = this.state.heroes.filter(hero => hero.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ heroes });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Heroes List</Title>
        {this.state.heroes.map(hero => (
          <HeroCard
            removeHero={this.removeHero}
            id={hero.id}
            key={hero.id}
            name={hero.name}
            image={hero.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
