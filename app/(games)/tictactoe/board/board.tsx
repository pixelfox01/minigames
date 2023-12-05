"use client";

import Square from "./square/square";
import { useState } from "react";

function calculateWinner(squares: (string | null)[]) {
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
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log({ winner: squares[a], winningLine: [a, b, c] });
      return { winner: squares[a], winningLine: [a, b, c] };
    }
  }
}

export default function Board() {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState(true);

  const onSquareClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = "Winner: " + winner.winner;
  } else {
    status = "Next: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="flex flex-col items-center my-4">
      <div className="text-3xl my-6">{status}</div>
      <div className="border-[0.35rem] rounded-md border-purple-800 bg-purple-800 shadow-xl shadow-purple-950 grid grid-cols-3 gap-1 auto-rows-fr auto-cols-fr w-72 h-72 lg:w-96 lg:h-96">
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
      </div>
      <button
        className="text-xl rounded-md px-3 py-2 mt-10 bg-red-900 hover:bg-red-950"
        onClick={() => {
          setSquares(Array(9).fill(null));
          setXIsNext(true);
        }}
      >
        Reset
      </button>
    </div>
  );
}
