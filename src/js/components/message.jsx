// Message should display who's turn it is or who the winner is
import React, { Component } from 'react';

class Message extends Component {
    render() {
        const { turn, victory } = this.props;
        let message = '';
        if (victory) {
            message = turn ? '🌮 wins!' : '🍕 wins!';
        } else {
            message = turn ? '🌮 turn.' : '🍕 turn.';
        }
        return (
            <div className="message">
                {message}
            </div>
        );
    }
}

export default Message;
