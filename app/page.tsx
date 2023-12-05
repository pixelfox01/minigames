import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Minigames</h1>
      <div>
        <Link href="/tictactoe">Tic-Tac-Toe</Link>
        <p>Other games coming soon...</p>
      </div>
    </div>
  );
}
