import React, { useState } from "react";
import ErrorModal from "../ErrorModal";

import Generator from "../Generator";
import style from "./Dam.module.css";
import Damba from "./meramera-PhotoRoom.png";

const Dam = () => {
  const [num, setNum] = React.useState(375);
  const [isError, setIsError] = useState(false);
  const [isErrorIgnoring, setErrorIgnoring] = useState(false);

  function repairError() {
    setIsError(false);
    setNum(375);
  }

  function ignoreError() {
    setErrorIgnoring(true);
  }

  function returnModal() {
    setErrorIgnoring(false);
  }

  function ErrorHello() {
    setIsError(true);
  }

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (isError === false) {
        setNum(randomNumberInRange(350, 400));
        var rand_num = random(1, 8);

        if (rand_num === 1) {
          setIsError(true);
          clearInterval(interval);
          setNum(randomNumberInRange(470, 475));
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isError && !isErrorIgnoring && (
        <ErrorModal
          repairErrorCallBack={repairError}
          ignoreErrorCallBack={ignoreError}
        />
      )}
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
            <div>Температура турбины (предел)</div>
            <div>
              <Generator />
            </div>
          </div>
          <div className={style.item}>
            <div>Мощность напора шлюза</div>
            <div>
              <Generator />
            </div>
          </div>
        </div>
      </div>
      <div>
        {isError && (
          <button className="ignoring--btn" onClick={() => returnModal()}>
            Обнаружена ошибка
          </button>
        )}
      </div>
    </>
  );
};

export default Dam;
