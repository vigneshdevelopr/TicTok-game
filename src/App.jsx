import React, { useState } from 'react'
import Confetti from "react-confetti";
import GameBox from './components/GameBox'
import './App.css'

const App = () => {
    const [isXturn, setIsXturn] = useState(true);
    const [board, setBoard] = useState([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]);
    const winnerLogic = (board) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        // logics
        const [a, b, c] = lines[i]; //[3, 4, 5]
  
        if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
          console.log("winner :", board[a]);
          return board[a];
        }
      }
      return null;
    };
    const winner = winnerLogic(board);
  
    const handleClick = (idx) => {
      if (!board[idx]) {
        const boadCopy = [...board];
        boadCopy[idx] = isXturn ? "X" : "O";
        setBoard(boadCopy);
        setIsXturn(!isXturn);
      }
    };
    return (
        <div className="App">
        {winner ? <Confetti /> : ""}
        {board.map((val, index) => (
          <GameBox
            key={index}
            val={val}
            onPlayerClick={() => handleClick(index)}
          />
        ))}
        <div>
          {winner ? <h2>winner is {winner}</h2> : ""}
          <button
            onClick={() => (
              setBoard([null, null, null, null, null, null, null, null, null]),
              setIsXturn(true)
            )}
          >
            Restart
          </button>
        </div>
      </div>
  )
}

export default App



