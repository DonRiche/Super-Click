import React, { Component } from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import heroes from "./hero.json";
import Navbar from "./components/NavBar"

class App extends Component {
  // Setting this.state.heroes to the heroes json array
  state = {
    heroes,
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  removeHero = id => {
    // Filter this.state.heroes for heroes with an id not equal to the id being removed
    const heroes = this.state.heroes.filter(hero => hero.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ heroes });
  };

  // Map over this.state.heroes and render a HeroCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        {this.state.heroes.map(hero => (
          <HeroCard
            handleIncrement={this.handleIncrement}
            // removeHero={this.removeHero}
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
