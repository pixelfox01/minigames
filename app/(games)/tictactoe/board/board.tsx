"use client";

import { useState } from "react";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

function Square(props: SquareProps) {
  return (
    <button className="text-4xl bg-slate-900" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const onSquareClick = (i: number) => {
    const newSquares = [...squares];
    newSquares[i] = "X";
    setSquares(newSquares);
    console.log(newSquares);
  };

  return (
    <div className="flex justify-center my-4">
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
    </div>
  );
}
