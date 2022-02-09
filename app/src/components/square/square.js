import React from "react";
import "./square.css";

function Square({ value, makeMove, index, isGameInProgress }) {
  return (
    <div className="square" onClick={() => makeMove(index)}>
      {index === 4 && !isGameInProgress ? "🙂" : value}
    </div>
  );
}

export default Square;
