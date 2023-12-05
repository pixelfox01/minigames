import Link from "next/link";
import Board from "./board/board";

export default function TicTacToe() {
  return (
    <div>
      <Link href="/">Back to home</Link>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}
