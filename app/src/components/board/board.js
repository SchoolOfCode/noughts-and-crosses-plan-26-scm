import React from "react";
import Square from "../square/square";

function Board({ makeMove, board }) {
  return (
    <div className="game-board">
      {board.map((square, index) => (
        <Square key={index} value={square} makeMove={makeMove} />
      ))}
    </div>
  );
}

export default Board;
