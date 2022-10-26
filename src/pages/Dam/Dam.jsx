import React from "react";

import Generator from "../Generator";
import style from "./Dam.module.css";
import Damba from "./meramera-PhotoRoom.png";

const Dam = () => {
  const [num, setNum] = React.useState(430);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setNum(randomNumberInRange(395, 430));
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={style.wrapper}>
      <div>
        <div>
          <div className={style.field}></div>
        </div>

        <div>
          <div className={style.dam}>
            <img className={style.img} src={Damba} alt="" />
          </div>
        </div>
        <div>
          <div
            style={{ height: `${num}px` }}
            className={style.background}
          ></div>
        </div>
      </div>
      <div className={style.sensor}>
        <div className={style.item}>
          <div>Скорость течения</div>
          <div>
            <Generator />
          </div>
        </div>
        <div className={style.item}>
          <div>Уровень воды</div>
          <div>
            <Generator />
          </div>
        </div>
        <div className={style.item}>
          <div>Температура воды</div>
          <div>
            <Generator />
          </div>
        </div>
        <div className={style.item}>
          <div>Мощность чего-то</div>
          <div>
            <Generator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dam;
