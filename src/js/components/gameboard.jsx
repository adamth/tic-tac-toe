// Gameboard is a 3x3 grid of clickable cells that can be either an X or an O

import React, { Component } from 'react';
import Cell from './cell.jsx';

const COLS = 3;

const INIT_STATE = {
    cells: [],
    turn: false,
    victory: false
};

class Gameboard extends Component {
    constructor(props) {
        super(props);
        this.state = INIT_STATE;
        this.handleCellClick = this.handleCellClick.bind(this);
        this.checkVictory = this.checkVictory.bind(this);
    }

    componentDidUpdate() {
        // Check to see if game is over
        if (!this.state.victory) {
            this.checkVictory();
        }    
    }

    checkVictory() {
        // Check rows   
        for (let row = 0; row < COLS; row++) {
            let sum = 0;
            for (let col = 0; col < COLS; col++) {
                const currentCell = this.state.cells[(row * COLS) + col];
                if (currentCell !== undefined) {
                    if (currentCell === 'X') {
                        sum++;
                    } else {
                        sum--;
                    }
                    if (sum === 3) {
                        this.setState({
                            victory: 'X'
                        });
                        console.log('X is the winner!');
                    } else if (sum === -3) {
                        this.setState({
                            victory: 'O'
                        });
                        console.log('O is the winner!');
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
                    if (currentCell === 'X') {
                        sum++;
                    } else {
                        sum--;
                    }
                    if (sum === 3) {
                        this.setState({
                            victory: 'X'
                        });
                        console.log('X is the winner!');
                    } else if (sum === -3) {
                        this.setState({
                            victory: 'O'
                        });
                        console.log('O is the winner!');
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
                if (topLeft === 'X') {
                    sum++;
                } else {
                    sum--;
                }
                if (middle === 'X') {
                    sum++;
                } else {
                    sum--;
                }
                if (bottomRight === 'X') {
                    sum++;
                } else {
                    sum--;
                }
                if (sum === 3) {
                    this.setState({
                            victory: 'X'
                        });
                    console.log('X is the winner!');
                } else if (sum === -3) {
                    this.setState({
                            victory: 'O'
                        });
                    console.log('O is the winner!');
                }
            }    
            if (topRight !== undefined && bottomLeft !== undefined) {
                let sum = 0;
                if (topRight === 'X') {
                    sum++;
                } else {
                    sum--;
                }
                if (middle === 'X') {
                    sum++;
                } else {
                    sum--;
                }
                if (bottomLeft === 'X') {
                    sum++;
                } else {
                    sum--;
                }
                if (sum === 3) {
                    console.log('X is the winner!');
                } else if (sum === -3) {
                    console.log('O is the winner!');
                }
            }           
        }
    }

    handleCellClick(key) {
        // Check to see if the cell has already been clicked
        if (this.state.cells[key] === undefined) {
            let updatedCells = this.state.cells;
            updatedCells[key] = this.state.turn ? 'X' : 'O';
            this.setState({
                cells: updatedCells,
                turn: !this.state.turn
            });
        }
    }

    renderCells() {
        let cells = [];
        for (let i = 0; i < 9; i++) {
            cells.push(<Cell key={i} value={this.state.cells[i]} handleClick={this.handleCellClick} id={i} />);
        }
        return cells;
    }

    render() {
        return (
            <div className="gameboard">
                {this.state.victory ? `The winner is ${this.state.victory}` : this.renderCells()}       
            </div>
        );
    }
}

export default Gameboard;
