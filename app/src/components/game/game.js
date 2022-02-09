import React from "react";
import Board from "../board/board";
import { useState } from "react";

function Game() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [isXTurn, setIsXTurn] = useState(false);

  function makeMove(squareNumber, symbol) {
    if (board[squareNumber] === null) {
      setBoard([
        ...board.splice(0, squareNumber),
        symbol,
        ...board.splice(squareNumber + 1),
      ]);
      setIsXTurn(!isXTurn);
    }
  }

  function checkWinner() {
    const leftColumn =
      board[0] !== null && board[0] === board[3] && board[0] === board[6];
    const middleColumn =
      board[1] !== null && board[1] === board[4] && board[1] === board[7];
    const rightColumn =
      board[2] !== null && board[2] === board[5] && board[2] === board[8];
    const topRow =
      board[0] !== null && board[0] === board[1] && board[0] === board[2];
    const middleRow =
      board[3] !== null && board[3] === board[4] && board[3] === board[5];
    const bottomRow =
      board[6] !== null && board[6] === board[7] && board[6] === board[8];
    const leftDiagonal =
      board[0] !== null && board[0] === board[4] && board[0] === board[8];
    const rightDiagonal =
      board[2] !== null && board[2] === board[4] && board[2] === board[6];

    return (
      leftColumn ||
      middleColumn ||
      rightColumn ||
      topRow ||
      middleRow ||
      bottomRow ||
      leftDiagonal ||
      rightDiagonal
    );
  }

  return <div>{isXTurn ? <p>X goes</p> : <p>O goes</p>}</div>;
}

export default Game;
