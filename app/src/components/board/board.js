import React from "react";
import Square from "../square/square";
import "./board.css";

function Board({ makeMove, board, isGameInProgress }) {
  return (
    <div className="game-board">
      {board.map((square, index) => (
        <Square
          key={index}
          value={square}
          makeMove={makeMove}
          index={index}
          isGameInProgress={isGameInProgress}
        />
      ))}
    </div>
  );
}

export default Board;
