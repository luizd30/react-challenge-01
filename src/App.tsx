import "./App.css";
import { useState } from "react";
import useSize from "./hooks/use-size";
import { Pointers } from "./components/Pointers";
import { PointersType, SizeType } from "./types";
import { pixel } from "./utils/pixel";

function App() {
  const [pointers, setPointers] = useState<PointersType>([]);
  const [undid, setUndid] = useState<PointersType>([]);
  const [size, setSize] = useState<SizeType>({ width: 0, height: 0 });
  const { ref } = useSize(setSize);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const mouse = { x: e.clientX, y: e.clientY };
    const x = pixel(size.width, mouse.x);
    const y = pixel(size.height, mouse.y);
    setUndid([]);
    setPointers((state) => {
      return [...state, { id: crypto.randomUUID(), positions: { x: x, y: y } }];
    });
  };

  const handleUndo = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const last = pointers[pointers.length - 1];
    setUndid((state) => [...state, last]);
    setPointers((state) => state.slice(0, -1));
  };

  const handleRedo = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setUndid((state) => state.slice(0, -1));
    setPointers((state) => [...state, undid[undid.length - 1]]);
  };

  return (
    <div className="container" ref={ref} onClick={(e) => handleClick(e)}>
      <div className="options">
        <button
          onClick={handleUndo}
          className="button"
          disabled={pointers.length <= 0}
        >
          {"<"}
        </button>
        <button
          onClick={handleRedo}
          className="button"
          disabled={undid.length <= 0}
        >
          {">"}
        </button>
      </div>
      {pointers.length ? (
        <Pointers pointers={pointers} containerSize={size} />
      ) : (
        <div className="menu">
          <p>Clique na tela para interagir!</p>
          <p>Click on the screen to interact!</p>
        </div>
      )}
    </div>
  );
}

export default App;
