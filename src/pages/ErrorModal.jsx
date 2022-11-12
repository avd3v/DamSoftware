import React from "react";

const ErrorModal = ({ setModalActive }) => {
  return (
    <div>
      <div
        className="modal__content__error"
        onClick={(e) => e.stopPropagation()}
      >
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
    </div>
  );
};
export default ErrorModal;
