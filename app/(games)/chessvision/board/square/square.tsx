"use client";

import { useContext } from "react";
import { ChessVisionContext } from "../../page";

interface SquareProps {
  coordinate: string;
  color: "black" | "white";
  //   onClick: () => void;
}

export default function Square(props: SquareProps) {
  const { curCoordinate, getNextCoordinate, isGameStarted } =
    useContext(ChessVisionContext);

  return (
    <button
      className={`${
        props.color === "black" ? "bg-amber-900" : "bg-orange-300"
      }`}
      onClick={() => onSquareClick(props.coordinate)}
    >
      {props.coordinate}
    </button>
  );

  function onSquareClick(coordinate: string) {
    if (!isGameStarted) {
      return;
    }

    if (curCoordinate === coordinate) {
      getNextCoordinate();
    }
  }
}
