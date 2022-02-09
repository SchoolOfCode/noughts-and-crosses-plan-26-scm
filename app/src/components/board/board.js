import React from "react";
import Square from "../square/square";
import "./board.css";

function Board({ makeMove, board }) {
  return (
    <div className="game-board">
      {board.map((square, index) => (
        <Square key={index} value={square} makeMove={makeMove} index={index} />
      ))}
    </div>
  );
}

export default Board;
