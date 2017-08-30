// Options should allow the game to be reset or replayed if the game is over
import React, { Component } from 'react';

class Scores extends Component {
    render() {
        const { scores } = this.props;
        return (
            <div className="scores">
                {`🌮 wins: ${scores.x} 🍕 wins: ${scores.o}`}
            </div>
        );
    }
}

export default Scores;
