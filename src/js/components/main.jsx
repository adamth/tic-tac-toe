import React, { Component } from 'react';
import Gameboard from './gameboard.jsx';
import Message from './message.jsx';
import Options from './options.jsx';

class Main extends Component {
    render() {
        return (
            <div>
                <Gameboard />
                <Message />
                <Options />
            </div>
            
        );
    }
}

export default Main;
