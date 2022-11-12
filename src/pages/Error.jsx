import React, { useEffect, useState } from "react";
import ErrorModal from "./ErrorModal";
import Modal from "./Modal";

const Error = () => {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [open, setOpen] = React.useState(false);
  const [modalActive, setModalActive] = React.useState(false);
  const [num, setNum] = useState(0);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    console.log(isError);
    var interval = setInterval(() => {
      setNum(randomNumber(1, 2));

      console.log(isError);
      console.log(num);
      console.log(interval);
    }, 1000);
    if (num === 1) {
      setIsError(true);
    }
    return () => {
      clearInterval(interval);
    };
  }, []);

  let content = null;

  if (isError === true) {
    content = <ErrorModal setModalActive={setModalActive} />;
  } else {
    content = <div>{isError}</div>;
  }

  return <div>{content}</div>;
};
export default Error;

{
  /* <div>
  <div className="modal__content__error" onClick={(e) => e.stopPropagation()}>
    <div className="text__error">
      Критическая ошибка. Для восстановления функций работы дамбы необходимо
      нажать ОК
    </div>
    <div className="wrapper--btn">
      <button className="btn--error" onClick={() => setModalActive(false)}>
        Устранить
      </button>
      <button className="btn--error">Игнорировать</button>
    </div>
  </div>
</div>; */
}
