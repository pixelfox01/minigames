import Square from "./square/square";
import coordinates from "./coordinates";

interface BoardProps {
  isGameStarted: boolean;
  curCoordinate: string | null;
  getNextCoordinate: () => void;
  lives: number;
  setLives: (lives: number) => void;
}

export default function Board(props: BoardProps) {
  return (
    <div className="flex justify-center">
      <div
        id="white-board"
        className="grid grid-cols-8 auto-rows-fr auto-cols-fr w-80 h-80 lg:w-[35rem] lg:h-[35rem]"
      >
        {coordinates.map((row, row_idx) =>
          row.map((coordinate, coordinate_idx) => (
            <Square
              key={`${row_idx}-${coordinate_idx}`}
              coordinate={coordinate}
              color={(row_idx + coordinate_idx) % 2 === 0 ? "white" : "black"}
              isGameStarted={props.isGameStarted}
              curCoordinate={props.curCoordinate}
              getNextCoordinate={props.getNextCoordinate}
              lives={props.lives}
              setLives={props.setLives}
            />
          ))
        )}
      </div>
    </div>
  );
}
