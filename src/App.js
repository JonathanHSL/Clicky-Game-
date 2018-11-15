import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Container from "./components/container";
import Card from "./components/card";

import Images from "./data.json";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    cards: Images
  }

  handleClick = (id) => {
    const clickcard = this.state.cards.find(image => image.id === id);

    if (clickcard.clicked) {
      if (this.state.score > this.state.topScore) {
        this.setState({ topScore: this.state.score})
      }
      this.setState({score: 0,  cards: this.ranShuffle(this.resetCards(this.state.cards))});
    } else {
      clickcard.clicked = true;
      let shuffled = this.ranShuffle(this.state.cards);
      this.setState({ score: this.state.score + 1}, () => {
        if (this.state.score === 10) {
          this.setState({ score: 0, topScore: 0, cards: this.resetCards(this.state.cards) });
        } else {
          this.setState({cards: shuffled });
        }
      })
      
    }
  }

  ranShuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  ranCard = () => {
    let array = this.state.cards.map((b) => (<Card id={b.id} key={b.id} data={b.image} handleClick={this.handleClick} bool={b.clicked} />))
    return array
  }

  resetCards = array => {
    array.forEach(b => {  b.clicked = false});
    return array;
  }

  render() {
    return (
      <div>
        
        <Navbar score={this.state.score} topScore={this.state.topScore} msg={this.state.message}/>
        <Container clickFunc={this.handleClick} top={this.changeTopScore}>
          {this.ranShuffle(this.ranCard())}
        </Container>
      </div>
    )
  }
}

export default App;

