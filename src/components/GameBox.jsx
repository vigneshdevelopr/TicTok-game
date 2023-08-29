import React from 'react'

function GameBox({ val, onPlayerClick }) {
    return (
      <div
        style={{ color: val === "X" ? "red" : "green" }}
        className="game-box"
        onClick={() => onPlayerClick()}
      >
        {val}
      </div>
    );
  }
  

export default GameBox