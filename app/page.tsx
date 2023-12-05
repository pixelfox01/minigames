import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/tictactoe">Tic-Tac-Toe</Link>
        <p>Other games coming soon...</p>
      </div>
    </div>
  );
}
