import React from "react";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__items">Профиль №1</div>
        <div className="modal__items">Профиль №2</div>
        <div className="modal__items">Профиль №3</div>
      </div>
    </div>
  );
};
export default Modal;
