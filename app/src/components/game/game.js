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

  return <div>{isXTurn ? <p>X goes</p> : <p>O goes</p>}</div>;
}

export default Game;
