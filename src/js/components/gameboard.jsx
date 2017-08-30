// Gameboard is a 3x3 grid of clickable cells that can be either an X or an O

import React, { Component } from 'react';
import Cell from './cell.jsx';

class Gameboard extends Component {
    renderCells() {
        let cells = [];
        for (let i = 0; i < 9; i++) {
            cells.push(<Cell key={i} value={this.props.cells[i]} handleClick={this.props.handleCellClick} id={i} />);
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
