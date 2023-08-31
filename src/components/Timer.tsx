import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Effect
    const interval = setInterval(() => {
      console.log("Changing time!");
      setTime(new Date());
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, []); // Dependencies

  return <div>{time.toString()}</div>;
};
