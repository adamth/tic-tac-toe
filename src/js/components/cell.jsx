// A cell is a clickable object that can be either blank or an X or an O
import React, { Component } from 'react';

class Cell extends Component {
    render() {
        const { id, value, handleClick } = this.props;
        return (
            <div className="cell" onClick={() => { handleClick(id); }}>
                {value}
            </div>
        );
    }
}

export default Cell;
