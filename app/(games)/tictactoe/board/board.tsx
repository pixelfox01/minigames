"use client";

import { useState } from "react";

interface SquareProps {
  value: string;
}

function Square(props: SquareProps) {
  const [value, setValue] = useState(props.value);

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="text-2xl bg-black rounded-lg" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className="flex justify-center">
      <div className="border-[0.25rem] rounded-md border-purple-800 bg-purple-800 shadow-xl shadow-purple-950 grid grid-cols-3 gap-1 auto-rows-fr auto-cols-fr w-72 h-72 lg:w-96 lg:h-96">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </div>
  );
}
