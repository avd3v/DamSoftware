import React, { useEffect, useState } from "react";

const Error = () => {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [num, setNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNum(randomNumber(1, 2));
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const [showMode, setShowMode] = useState(true);
  const handleClick = () => {
    setShowMode(!showMode);
  };

  let content = null;

  if (num == 1) {
    content = (
      <>
        <h1>ERROR {num}</h1>
        <div>message</div>
      </>
    );
  }

  return (
    <div>
      <button onClick={handleClick}>Show it</button>
      {content}
    </div>
  );
};
export default Error;
