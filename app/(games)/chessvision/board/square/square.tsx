interface SquareProps {
  coordinate: string;
  color: "black" | "white";
  isGameStarted: boolean;
  curCoordinate: string | null;
  getNextCoordinate: () => void;
  lives: number;
  setLives: (lives: number) => void;
}

export default function Square(props: SquareProps) {
  return (
    <button
      className={`${
        props.color === "black" ? "bg-amber-900" : "bg-orange-300"
      }`}
      onClick={() => onSquareClick(props.coordinate)}
    ></button>
  );

  function onSquareClick(coordinate: string) {
    if (!props.isGameStarted) {
      return;
    }

    if (props.curCoordinate === coordinate) {
      props.getNextCoordinate();
    } else {
      props.setLives(props.lives - 1);
    }
  }
}
