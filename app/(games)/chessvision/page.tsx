"use client";

import { useState, useEffect } from "react";
import Board from "./board/board";

export default function ChessVission() {
  const [curCoordinate, setCurCoordinate] = useState<string | null>(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [lives, setLives] = useState(3);

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
    setLives(3);
    getNextCoordinate();
  }

  function gameOver() {
    setIsGameOver(true);
    setIsGameStarted(false);
    setCurCoordinate(null);
    alert("Game Over!");
  }

  useEffect(() => {
    if (lives <= 0) {
      gameOver();
    }
  }, [lives]);

  return (
    <div className="flex justify-center gap-5 py-10">
      <Board
        isGameStarted={isGameStarted}
        curCoordinate={curCoordinate}
        getNextCoordinate={getNextCoordinate}
        lives={lives}
        setLives={setLives}
      />
      <div className="border-2 border-purple-700 rounded-lg p-4 w-64 flex flex-col items-center justify-between">
        {isGameStarted && <div className="h-16 text-2xl">Lives: {lives}</div>}

        {curCoordinate && (
          <div className="h-16 text-2xl">Click on: curCoordinate</div>
        )}

        {!isGameStarted && (
          <div className="h-full text-2xl">
            <div>
              <p>Welcome to ChessVision!</p>
              <p className="py-5">
                Click on the squares that matches the coordinates that are shown
                here.
              </p>
              <p>Click on the button below to start!</p>
            </div>
          </div>
        )}

        <button
          onClick={startGame}
          className="bg-purple-800 rounded-md py-2 px-4 w-3/4 disabled:bg-gray-400"
          disabled={isGameStarted}
        >
          Start
        </button>
      </div>
    </div>
  );
}
