import React, { Component } from 'react';
import './navbar.css';

      
      const Navbar = props => (
        <nav className="navbar">
        
              <h1>Clicky Game!</h1>
              <h4>Click on a Pokemon but becareful not to click on the same one!</h4>
       
            <NavMessage score={props.score} topScore={props.topScore} />
          
              Score: {props.score} | Top Score: {props.topScore}
            
    
        </nav>
      );

      class NavMessage extends Component {
        state = {
          message: "",
          animating: false
        };
      
        componentDidUpdate({ score, topScore }, prevState) {
          const newState = { animating: true };
      
          if (score === 0 && topScore === 0) {
            newState.message = "";
          } else if (score === 0 && topScore > 0) {
            newState.message = "incorrect";
          } else {
            newState.message = "correct";
          }
      
          if (score !== this.props.score || this.state.message !== newState.message) {
            this.setState(newState);
          }
        }
      
        renderMessage = () => {
          switch (this.state.message) {
          case "correct":
            return "You guessed correctly!";
          case "incorrect":
            return "You guessed incorrectly!";
        
          }
        };
      
        render() {
          return (
            <div
              className={this.state.animating ? this.state.message : ""}
              onAnimationEnd={() => this.setState({ animating: false })}
            >
              {this.renderMessage()}
            </div>
          );
        }
      }
      
      
      
      
export default Navbar;