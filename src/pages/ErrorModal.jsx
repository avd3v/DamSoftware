import React, { useEffect } from "react";

const ErrorModal = (props) => {
  return (
    <div>
      <div
        className="modal__content__error"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text__error">
          Уровень воды в дамбе сильно превышен.Открыть шлюзы для сброса воды?
        </div>
        <div className="wrapper--btn">
          <button
            className="btn--error"
            onClick={() => props.repairErrorCallBack()}
          >
            Открыть шлюзы
          </button>
          <button
            className="btn--error"
            onClick={() => props.ignoreErrorCallBack()}
          >
            Игнорировать
          </button>
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
