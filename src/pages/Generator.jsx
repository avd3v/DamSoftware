import { useEffect, useState } from "react";
import style from "./Example/Example.module.css";

const Generator = (props) => {
  const value = Math.random() > Math.random();

  let part = null;
  if (value) {
    part = <p> True</p>;
  } else {
    part = <p>False</p>;
  }

  const [num, setNum] = useState(50);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    console.log(props);
    const interval = setInterval(() => {
      if (props.isError) {
        setNum(randomNumberInRange(90, 100));
      } else {
        setNum(randomNumberInRange(50, 85));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.isError]);

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.card}></div>
      </div>

      <div className="block--bottom">
        <h2>
          {num}% {part}
        </h2>
        <div className="block--sensor" style={{ height: `${num}px` }}></div>
      </div>
    </div>
  );
};

export default Generator;
