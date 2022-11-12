import React, { useEffect, useState } from "react";
import Generator from "./Generator";
import ErrorModal from "./ErrorModal";
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (isError === false) {
        var rand_num = randomNumber(1, 4);

        if (rand_num === 1) {
          setIsError(true);
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

      <div className="sensors--items">
        <div className="sensor--item">
          <div>ADV/MSV</div>
          <div className="block--sensor">{num}</div>
          {/* <Error /> */}

          <div>
            <Generator isError={isError} />
          </div>
        </div>

        <div className="sensor--item">
          <div>Stm Flow</div>
          <div className="block--sensor">{num}</div>
          <div>
            <Generator isError={isError} />
          </div>
        </div>
        <div className="sensor--item">
          <div>Core Flood</div>
          <div>
            <Generator isError={isError} />
          </div>
        </div>
        <div className="sensor--item">
          <div>LPI/RHR</div>
          <div>
            <Generator isError={isError} />
          </div>
        </div>
        <div className="sensor--item">
          <div>RB Fan Cooler</div>
          <div>
            <Generator isError={isError} />
          </div>
        </div>
        <div className="sensor--item">
          <div>RB Spray</div>
          <div>
            <Generator isError={isError} />
          </div>
        </div>
        <div className="sensor--item">
          <div>Power</div>
          <div>
            <Generator isError={isError} />
          </div>
        </div>
        <div className="sensor--item">
          <div>Voids</div>
          <div>
            <Generator isError={isError} />
          </div>
        </div>

        <div>
          {isError && (
            <button onClick={() => returnModal()}> Обнаружена ошибка </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Sensor;
