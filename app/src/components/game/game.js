import React, { useEffect } from "react";
import Board from "../board/board";
import { useState } from "react";
import "./game.css";

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

  const [isXTurn, setIsXTurn] = useState(true);
  const [isGameInProgress, setIsGameInProgress] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    checkWinner();
    //checkDraw();
    setIsXTurn(!isXTurn);
  }, [board]);

  function makeMove(squareNumber) {
    if (isGameInProgress) {
      const symbol = isXTurn ? "X" : "O";
      if (board[squareNumber] === null) {
        setBoard((board) => {
          return [
            ...board.slice(0, squareNumber),
            symbol,
            ...board.slice(squareNumber + 1),
          ];
        });
      }
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

    if (
      leftColumn ||
      middleColumn ||
      rightColumn ||
      topRow ||
      middleRow ||
      bottomRow ||
      leftDiagonal ||
      rightDiagonal
    ) {
      setIsGameInProgress(false);
      setResult(`Game over, winner is ${isXTurn ? "X" : "O"}`);
    } else if (!board.includes(null)) {
      setIsGameInProgress(false);
      setResult("It's a draw!");
    }
  }

  /*
  function checkDraw() {
    if (!board.includes(null) && isGameInProgress) {
      setIsGameInProgress(false);
      setResult("It's a draw!");
    }
  }
  */

  function restartGame() {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXTurn(!isXTurn);
    setIsGameInProgress(true);
    setResult(null);
  }

  return (
    <div className="game-container">
      <Board makeMove={makeMove} board={board} />
      {isGameInProgress ? (
        isXTurn ? (
          <p>X goes</p>
        ) : (
          <p>O goes</p>
        )
      ) : (
        <div>
          <p>{result}</p>
          <button className="replay-btn" onClick={restartGame}>
            Play again?
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
