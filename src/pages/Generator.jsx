import { useEffect, useState } from "react";

const Generator = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // 👇️ generate random number between 1 and 10
      setNum(randomNumberInRange(1, 10));
    }, 1500); // 👈️ runs every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>{num}</h2>
    </div>
  );
};

export default Generator;
