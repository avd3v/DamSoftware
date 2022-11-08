import React, { useState } from "react";
import Modal from "./Modal";
import Moment from "react-moment";
import Error from "./Error";

function Main() {
  const [modalActive, setModalActive] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onClickIndex = (index) => {
    setSelectedIndex(index);
  };
  const [user, setUser] = React.useState("Профиль №1");

  return (
    <>
      <Modal
        user={user}
        setUser={setUser}
        active={modalActive}
        setActive={setModalActive}
      />
      <Error />
      <div id="mainPage" className="panel visiblepanel">
        <div className="leftPanel">
          <div className="leftPanelInner">
            Версия ПО: 00000000.001
            <br />
            Серийный номер: XXXXX
            <br />
            <br />
            <table className="clickable">
              <tr
                onClick={() => onClickIndex(0)}
                className={selectedIndex == 0 ? "selected" : ""}
              >
                <td>Системное время</td>
                <td></td>
                <td>
                  <Moment format="HH:mm:ss" interval={1000} />
                </td>
              </tr>
              <tr
                id="modal"
                onClick={() => onClickIndex(1)}
                className={selectedIndex == 1 ? "selected" : ""}
              >
                <td>Системная дата</td>
                <td></td>
                <td>
                  <Moment format="YYYY-MM-DD" interval={1000} />
                </td>
              </tr>
              <tr
                onClick={() => onClickIndex(2)}
                className={selectedIndex == 2 ? "selected" : ""}
              >
                <td>&#9658; Профиль сотрудника</td>
                <td>:</td>

                <td onClick={() => setModalActive(true)}>[{user}]</td>
              </tr>

              <tr
                onClick={() => onClickIndex(3)}
                className={selectedIndex == 3 ? "selected" : ""}
              >
                <td>&#9658; Выбор накопителя системы</td>
                <td>:</td>
                <td className="gery">[Не обнаружено]</td>
              </tr>
              <tr
                onClick={() => onClickIndex(4)}
                className={selectedIndex == 4 ? "selected" : ""}
              >
                <td>&#9658; Диск 1</td>
                <td>:</td>
                <td>[HL-DT-ST DVDRW GH]</td>
              </tr>
              <tr
                onClick={() => onClickIndex(5)}
                className={selectedIndex == 5 ? "selected" : ""}
              >
                <td>&#9658; Диск 2</td>
                <td>:</td>
                <td>[SAMSUNG HD103SJ]</td>
              </tr>
              <tr
                onClick={() => onClickIndex(6)}
                className={selectedIndex == 6 ? "selected" : ""}
              >
                <td>&#9658; Диск 3</td>
                <td>:</td>
                <td className="gery">[Не обнаружено]</td>
              </tr>
              <tr
                onClick={() => onClickIndex(7)}
                className={selectedIndex == 7 ? "selected" : ""}
              >
                <td>&#9658; Диск 4</td>
                <td>:</td>
                <td className="gery">[Не обнаружено]</td>
              </tr>
              <tr
                onClick={() => onClickIndex(8)}
                className={selectedIndex == 8 ? "selected" : ""}
              >
                <td>&#9658; Конфигурация системы</td>
                <td></td>
                <td></td>
              </tr>
              <tr
                onClick={() => onClickIndex(9)}
                className={selectedIndex == 9 ? "selected" : ""}
              >
                <td>&#9658; Информация о системе</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="rightPanel">
          <div className="rightPanelInner">
            <div className="rightPanelHead">Выберите нужный пункт</div>
            <div className="explicationText">
              Используйте компьютерную мышь для навигации
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
