"use client";
import { Children, useCallback, useEffect, useRef, useState } from "react";

const LinkRandomizer: React.FC<{
  children: React.ReactNode;
  layoutClass: string;
}> = ({ children, layoutClass }) => {
  const initialRenderRef = useRef(true);
  const [rerender, setRerender] = useState<number>(0);
  const randomize = useCallback(() => {
    setRerender(rerender + 1);
  }, [rerender]);

  useEffect(() => {
    if (initialRenderRef.current) {
      randomize();
      initialRenderRef.current = false;
    }
  }, [initialRenderRef, randomize]);

  return (
    <>
      <button onClick={randomize}>ランダム化</button>
      <div className={layoutClass}>
        {rerender ? (
          Children.toArray(children).sort((i, j) => 0.5 - Math.random())
        ) : (
          <>loading</>
        )}
      </div>
    </>
  );
};
export default LinkRandomizer;
