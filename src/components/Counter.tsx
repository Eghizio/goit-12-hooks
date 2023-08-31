import { useEffect, useState } from "react";
import { Text } from "./Text";

interface Props {
  initialCount?: number;
  ratio?: number;
}

export const Counter = ({ initialCount = 0, ratio = 1 }: Props) => {
  const [counter, setCounter] = useState(initialCount);
  const [color, setColor] = useState("dodgerblue");

  useEffect(() => {
    document.title = `Current counter: ${counter}`;
  }, [counter]);

  const increment = () => setCounter((prev) => prev + ratio);

  const decerement = () => setCounter((prev) => prev - ratio);

  const reduj = () =>
    setColor((prev) => (prev === "red" ? "dodgerblue" : "red"));

  return (
    <>
      <div>
        Count is: <Text color={color}>{counter.toString()}</Text>
      </div>
      <button onClick={decerement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reduj}>Reduj</button>
    </>
  );
};
