import React, { useEffect, useState } from "react";
import Generator from "./Generator";
import ErrorModalSecond from "./ErrorModalSecond.jsx";
// import Error from "./Error";

const Sensor = ({ num }) => {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [isError, setIsError] = useState(false);
  const [isErrorIgnoring, setErrorIgnoring] = useState(false);
  const [modalActive, setModalActive] = React.useState(false);
  // const [randNum, setRandNum] = useState(0);

  function repairError() {
    setIsError(false);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (isError === false) {
        var rand_num = randomNumber(1, 8);

        if (rand_num === 1) {
          setIsError(true);
          clearInterval(interval);
          console.log(rand_num);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isError && !isErrorIgnoring && (
        <ErrorModalSecond
          repairErrorCallBack={repairError}
          ignoreErrorCallBack={ignoreError}
        />
      )}

      <div className="sensors--items">
        <div className="sensor--item">
          <div>Нагрузка турбины дамбы</div>
          <div className="block--sensor">{num}</div>

          <div>
            <Generator isError={isError} />
          </div>
        </div>

        <div className="sensor--item">
          <div>
            {" "}
            Пьезомет-
            <br />
            рический напор
          </div>
          <div className="block--sensor">{num}</div>
          <div>
            <Generator isError={isError} />
          </div>
        </div>
        <div className="sensor--item">
          <div>Давление на бьеф дамбы</div>
          <div>
            <Generator />
          </div>
        </div>
        <div className="sensor--item">
          <div>Сброс излишек воды</div>
          <div>
            <Generator />
          </div>
        </div>
        <div className="sensor--item">
          <div>Изменение уровня воды</div>
          <div>
            <Generator />
          </div>
        </div>
        <div className="sensor--item">
          <div>Поровое давление грунта</div>
          <div>
            <Generator />
          </div>
        </div>
        <div className="sensor--item">
          <div>Фильтр расход воды</div>
          <div>
            <Generator />
          </div>
        </div>
        <div className="sensor--item">
          <div>Объём воды в дамбе</div>
          <div>
            <Generator />
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

export default Sensor;
