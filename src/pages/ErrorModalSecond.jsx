import React, { useEffect } from "react";

const ErrorModalSecond = (props) => {
  return (
    <div>
      <div
        className="modal__content__error"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text__error">
          Критическая ошибка. Избыточное давление достигло предельных
          показателей.
        </div>
        <div className="wrapper--btn">
          <button
            className="btn--error"
            onClick={() => props.repairErrorCallBack()}
          >
            Устранить
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
export default ErrorModalSecond;
