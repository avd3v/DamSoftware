import { useEffect, useState } from "react";
import style from "./Example/Example.module.css";

const Generator = (props) => {
  const value = Math.random() > Math.random();

  const [num, setNum] = useState(50);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    console.log(props);
    const interval = setInterval(() => {
      if (props.isError) {
        setNum(randomNumberInRange(110, 130));
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

      <h2 className={style.titleh2}>{num}</h2>
    </div>
  );
};

export default Generator;
