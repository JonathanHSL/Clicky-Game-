import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    return (
        <div className="col s6 m3 center">
            <div className="card" onClick={this.props.handleClick.bind(this, this.props.id)} >
                <div className="card">
                    <img src={this.props.data} alt="card" />
                </div>
            </div>
        </div>
    )
  }
}

export default Card;
