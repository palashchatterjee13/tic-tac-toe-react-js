import React, { useState } from 'react';
import './Game.css';

const initialBoard = Array(9).fill(null);

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((value, index) => (
      <Square key={index} value={value} onClick={() => onClick(index)} />
    ))}
  </div>
);

const Game = () => {
  const [history, setHistory] = useState([initialBoard]);
  const [stepNumber, setStepNumber] = useState(0);
  const xIsNext = stepNumber % 2 === 0;
  const currentBoard = history[stepNumber];
  const winner = calculateWinner(currentBoard);

  const handleClick = (index) => {
    if (winner || currentBoard[index]) {
      return;
    }

    const newBoard = currentBoard.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';

    setHistory([...history.slice(0, stepNumber + 1), newBoard]);
    setStepNumber(stepNumber + 1);
  };

  const status = winner
    ? `Winner: ${winner}`
    : `Turn: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentBoard} onClick={handleClick} />
      </div>
      <div className="game-info">
        <br />
        <div>{status}</div>
      </div>
    </div>
  );
};

export default Game;
