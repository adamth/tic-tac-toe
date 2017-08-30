import React, { Component } from 'react';
import Gameboard from './gameboard.jsx';
import Message from './message.jsx';
import Options from './options.jsx';
import Scores from './scores.jsx';

const COLS = 3;

const INIT_STATE = {
    cells: [],
    turn: false,
    victory: false,
    scores: {
        x: 0,
        o: 0
    }
};

// Need the message, options functions, victory state
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = INIT_STATE;
        this.handleCellClick = this.handleCellClick.bind(this);
        this.checkVictory = this.checkVictory.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    checkVictory() {
        // Check rows   
        for (let row = 0; row < COLS; row++) {
            let sum = 0;
            for (let col = 0; col < COLS; col++) {
                const currentCell = this.state.cells[(row * COLS) + col];
                if (currentCell !== undefined) {
                    if (currentCell === '🌮') {
                        sum++;
                    } else {
                        sum--;
                    }
                    if (sum === 3 || sum === -3) {
                        this.setState({
                            victory: true
                        });
                        return true;
                    }
                }            
            }
        }
        // Check cols   
        for (let col = 0; col < COLS; col++) {
            let sum = 0;
            for (let row = 0; row < COLS; row++) {
                const currentCell = this.state.cells[(row * COLS) + col];
                if (currentCell !== undefined) {
                    if (currentCell === '🌮') {
                        sum++;
                    } else {
                        sum--;
                    }
                    if (sum === 3 || sum === -3) {
                        this.setState({
                            victory: true
                        });
                        return true;
                    }
                }            
            }
        }
        // Check diagonal
        const topLeft = this.state.cells[0];
        const topRight = this.state.cells[COLS - 1];
        const middle = this.state.cells[(1 * COLS) + 1];
        const bottomLeft = this.state.cells[(2 * COLS) + 0];
        const bottomRight = this.state.cells[(2 * COLS) + 2];
        if (middle !== undefined) {
            if (topLeft !== undefined && bottomRight !== undefined) {
                let sum = 0;
                if (topLeft === '🌮') {
                    sum++;
                } else {
                    sum--;
                }
                if (middle === '🌮') {
                    sum++;
                } else {
                    sum--;
                }
                if (bottomRight === '🌮') {
                    sum++;
                } else {
                    sum--;
                }
                if (sum === 3 || sum === -3) {
                    this.setState({
                        victory: true
                    });
                    return true;
                }
            }    
            if (topRight !== undefined && bottomLeft !== undefined) {
                let sum = 0;
                if (topRight === '🌮') {
                    sum++;
                } else {
                    sum--;
                }
                if (middle === '🌮') {
                    sum++;
                } else {
                    sum--;
                }
                if (bottomLeft === '🌮') {
                    sum++;
                } else {
                    sum--;
                }
                if (sum === 3 || sum === -3) {
                    this.setState({
                        victory: true
                    });
                    return true;
                }
            }           
        }
        return false;
    }
    handleCellClick(key) {
        // Check to see if the cell has already been clicked
        if (this.state.cells[key] === undefined && !this.state.victory) {
            let updatedCells = this.state.cells;
            updatedCells[key] = this.state.turn ? '🌮' : '🍕';
            this.setState({
                cells: updatedCells
            });
            // Check for victory
            if (!this.checkVictory()) {
                this.setState({
                    turn: !this.state.turn
                });
            } else {
                let x = this.state.scores.x;
                let o = this.state.scores.o;
                if (this.state.turn) {
                    x++;
                } else {
                    o++;
                }
                this.setState({
                    scores: {
                        x,
                        o
                    }
                });
            }
        }
    }

    handleReset() {
        if (this.state.victory) {
            this.setState({
                cells: [],
                victory: false
            });
            return;
        }
        this.setState({
            cells: [],
            turn: false,
            victory: false,
            scores: {
                x: 0,
                o: 0
            }
        });
    }

    render() {
        return (
            <div className="main">
                <Scores scores={this.state.scores} />
                <Gameboard cells={this.state.cells} handleCellClick={this.handleCellClick} />
                <Message turn={this.state.turn} victory={this.state.victory} />
                <Options handleReset={this.handleReset} victory={this.state.victory} />
            </div>
            
        );
    }
}

export default Main;
