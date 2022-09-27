import React, { useState } from "react";

const Modal = ({ active, setActive, setUser }) => {
  const [open, setOpen] = React.useState(false);
  const list = ["Профиль №1", "Профиль №2", "Профиль №3"];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const SortName = list[activeIndex];

  const onClickListItem = (i) => {
    setActiveIndex(i);
    setOpen(false);
    setUser(list[i]);
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {list.map((value, i) => (
          <div
            key={i}
            onClick={() => onClickListItem(i)}
            className={
              activeIndex == i ? "active modal__items" : "modal__items"
            }
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Modal;
