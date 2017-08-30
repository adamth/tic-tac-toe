// Options should allow the game to be reset or replayed if the game is over
import React, { Component } from 'react';

class Options extends Component {
    render() {
        const { victory, handleReset } = this.props;
        return (
            <div className="options">
                <div className="reset-btn" onClick={handleReset}>{victory ? 'Replay' : 'Reset'}</div>
            </div>
        );
    }
}

export default Options;
