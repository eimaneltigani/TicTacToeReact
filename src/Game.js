import React from 'react';
import Board from './Board';

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TTODO */}</ol>
            </div>
            </div>
        );
    }
}

export default Game;