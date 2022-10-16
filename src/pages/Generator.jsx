import { useEffect, useState } from "react";

const Generator = () => {
  const [num, setNum] = useState(0);
  const [height, setHeight] = useState(50);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // 👇️ generate random number between 1 and 10
      setNum(randomNumberInRange(40, 85));
    }, 1000); // 👈️ runs every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="block--bottom">
      <h2>{num}%</h2>
      <div className="block--sensor" style={{ height: `${num}px` }}></div>
    </div>
  );
};

export default Generator;

// , rotate: `${num}deg`
