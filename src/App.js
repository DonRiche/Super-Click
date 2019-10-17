import React, { Component } from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/NavBar";

import heroes from "./hero.json";

class App extends Component {
  // Setting this.state.heroes to the heroes json array
  state = {
    heroes,
    score: 0,
    topScore: 0
  }

  // // handleIncrement increments this.state.count by 1
  handleIncrement = (evt) => {
    const heroId = parseInt(evt.currentTarget.id)
    const hero = this.state.heroes.find((h) => heroId === h.id)

    // // If button is click this score and top score increment but if images has been clicked already game stops and resets
    if (hero.hasBeenPushed === false) {
      // We always use the setState method to update a component's state
      return this.setState({ score: this.state.score + 1, topScore: this.state.topScore + 1 });
    }

    // // The "YOU GUESSED INCORRECTLY" component should pop up
    return console.log("YOU GUESSED INCORRECTLY");
  }

  // Map over this.state.heroes and render a HeroCard component for each hero object
  render() {
    const { score, topScore, heroes } = this.state

    return (
      <Wrapper>
        <Navbar score={score} topScore={topScore} />
        {
          heroes.map(hero => <HeroCard hero={hero} key={hero.id} handleIncrement={this.handleIncrement} />)
        }
      </Wrapper>
    );
  }
}

export default App;
