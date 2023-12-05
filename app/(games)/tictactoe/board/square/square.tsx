interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export default function Square(props: SquareProps) {
  return (
    <button className="text-4xl bg-slate-900" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}
