import React from "react";
import "./square.css";

function Square({ value, makeMove, index }) {
  return (
    <div className="square" onClick={() => makeMove(index)}>
      {value}
    </div>
  );
}

export default Square;
