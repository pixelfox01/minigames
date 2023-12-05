import Square from "./square/square";

export default function Board() {
  return (
    <div className="flex justify-center">
      <div
        id="white-board"
        className="grid grid-cols-8 auto-rows-fr auto-cols-fr w-72 h-72 lg:w-[35rem] lg:h-[35rem]"
      >
        <Square coordinate="a8" color="white" />
        <Square coordinate="b8" color="black" />
        <Square coordinate="c8" color="white" />
        <Square coordinate="d8" color="black" />
        <Square coordinate="e8" color="white" />
        <Square coordinate="f8" color="black" />
        <Square coordinate="g8" color="white" />
        <Square coordinate="h8" color="black" />

        <Square coordinate="a7" color="black" />
        <Square coordinate="b7" color="white" />
        <Square coordinate="c7" color="black" />
        <Square coordinate="d7" color="white" />
        <Square coordinate="e7" color="black" />
        <Square coordinate="f7" color="white" />
        <Square coordinate="g7" color="black" />
        <Square coordinate="h7" color="white" />

        <Square coordinate="a6" color="white" />
        <Square coordinate="b6" color="black" />
        <Square coordinate="c6" color="white" />
        <Square coordinate="d6" color="black" />
        <Square coordinate="e6" color="white" />
        <Square coordinate="f6" color="black" />
        <Square coordinate="g6" color="white" />
        <Square coordinate="h6" color="black" />

        <Square coordinate="a5" color="black" />
        <Square coordinate="b5" color="white" />
        <Square coordinate="c5" color="black" />
        <Square coordinate="d5" color="white" />
        <Square coordinate="e5" color="black" />
        <Square coordinate="f5" color="white" />
        <Square coordinate="g5" color="black" />
        <Square coordinate="h5" color="white" />

        <Square coordinate="a4" color="white" />
        <Square coordinate="b4" color="black" />
        <Square coordinate="c4" color="white" />
        <Square coordinate="d4" color="black" />
        <Square coordinate="e4" color="white" />
        <Square coordinate="f4" color="black" />
        <Square coordinate="g4" color="white" />
        <Square coordinate="h4" color="black" />

        <Square coordinate="a3" color="black" />
        <Square coordinate="b3" color="white" />
        <Square coordinate="c3" color="black" />
        <Square coordinate="d3" color="white" />
        <Square coordinate="e3" color="black" />
        <Square coordinate="f3" color="white" />
        <Square coordinate="g3" color="black" />
        <Square coordinate="h3" color="white" />

        <Square coordinate="a2" color="white" />
        <Square coordinate="b2" color="black" />
        <Square coordinate="c2" color="white" />
        <Square coordinate="d2" color="black" />
        <Square coordinate="e2" color="white" />
        <Square coordinate="f2" color="black" />
        <Square coordinate="g2" color="white" />
        <Square coordinate="h2" color="black" />

        <Square coordinate="a1" color="black" />
        <Square coordinate="b1" color="white" />
        <Square coordinate="c1" color="black" />
        <Square coordinate="d1" color="white" />
        <Square coordinate="e1" color="black" />
        <Square coordinate="f1" color="white" />
        <Square coordinate="g1" color="black" />
        <Square coordinate="h1" color="white" />
      </div>
    </div>
  );
}
