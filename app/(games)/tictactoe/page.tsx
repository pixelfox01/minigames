import Link from "next/link";
import Board from "./board/board";

export default function TicTacToe() {
  return (
    <div>
      <h1 className="text-center text-4xl my-7">Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}
