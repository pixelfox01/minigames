import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/tictactoe">Tic-Tac-Toe</Link>
        </li>
        <li>
          <Link href="/chessvision">Chess Vision</Link>
        </li>
        <p>Other games coming soon...</p>
      </ul>
    </div>
  );
}
