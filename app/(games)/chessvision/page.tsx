"use client";

import { useState, createContext } from "react";
import Board from "./board/board";

export const ChessVisionContext = createContext({
  curCoordinate: null as null | string,
  getNextCoordinate: () => {},
  isGameStarted: false,
});

export default function ChessVission() {
  const [curCoordinate, setCurCoordinate] = useState<string | null>(null);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const coordinates = [
    "a1",
    "b1",
    "c1",
    "d1",
    "e1",
    "f1",
    "g1",
    "h1",
    "a2",
    "b2",
    "c2",
    "d2",
    "e2",
    "f2",
    "g2",
    "h2",
    "a3",
    "b3",
    "c3",
    "d3",
    "e3",
    "f3",
    "g3",
    "h3",
    "a4",
    "b4",
    "c4",
    "d4",
    "e4",
    "f4",
    "g4",
    "h4",
    "a5",
    "b5",
    "c5",
    "d5",
    "e5",
    "f5",
    "g5",
    "h5",
    "a6",
    "b6",
    "c6",
    "d6",
    "e6",
    "f6",
    "g6",
    "h6",
    "a7",
    "b7",
    "c7",
    "d7",
    "e7",
    "f7",
    "g7",
    "h7",
    "a8",
    "b8",
    "c8",
    "d8",
    "e8",
    "f8",
    "g8",
    "h8",
  ];

  function getNextCoordinate() {
    const randomCoordinate =
      coordinates[Math.floor(Math.random() * coordinates.length)];
    if (randomCoordinate === curCoordinate) {
      getNextCoordinate();
      return;
    }
    setCurCoordinate(randomCoordinate);
  }

  function startGame() {
    setIsGameStarted(true);
    getNextCoordinate();
  }

  return (
    <ChessVisionContext.Provider
      value={{ curCoordinate, getNextCoordinate, isGameStarted }}
    >
      <div className="flex flex-col items-center">
        <div className="h-16 text-2xl">{curCoordinate}</div>
        <Board />
        <button
          onClick={startGame}
          className="bg-green-700 rounded-md py-2 px-4 mt-5"
        >
          Start
        </button>
      </div>
    </ChessVisionContext.Provider>
  );
}
