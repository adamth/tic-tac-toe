// Gameboard is a 3x3 grid of clickable cells that can be either an X or an O

import React, { Component } from 'react';
import Cell from './cell.jsx';

const INIT_STATE = {
    cells: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    turn: false
};

class Gameboard extends Component {
    constructor(props) {
        super(props);
        this.state = INIT_STATE;
        this.handleCellClick = this.handleCellClick.bind(this);
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
                {this.renderCells()}
            </div>
        );
    }
}

export default Gameboard;
