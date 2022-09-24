import React from "react";

const Graph = () => {
  return (
    <div id="mainPage" class="panel visiblepanel">
      <div class="leftPanel">
        <div class="leftPanelInner">
          Предупреждение!
          <br />
          Установка неправильных значений для пунктов этого меню может привести
          к выходу из строя вашей системы.
          <table>
            <tr>
              <td>Процессор</td>
              <td>Intel (R) Core(TM)2 Quad CPU</td>
            </tr>
            <tr>
              <td></td>
              <td>Q66 @ 2.40GHz</td>
            </tr>
            <tr>
              <td>Частота процессора</td>
              <td>2.40GHz/1066MHz</td>
            </tr>
            <tr>
              <td>Кэш памяти</td>
              <td>8192KB</td>
            </tr>
          </table>
          <br />
          <table class="clickable">
            <tr class="selected">
              <td>Основной видеоадептер</td>
              <td></td>
              <td>[PCI]</td>
            </tr>
            <tr>
              <td>PS/2 Мышь</td>
              <td></td>
              <td>[Автоматическое обнаружение]</td>
            </tr>
            <tr>
              <td>PATA Контроллер</td>
              <td></td>
              <td>[Включено]</td>
            </tr>
            <tr>
              <td>SATA Контроллер</td>
              <td></td>
              <td>[Включено]</td>
            </tr>
            <tr>
              <td>Бортовая локальная сеть</td>
              <td></td>
              <td>[Включено]</td>
            </tr>
            <tr>
              <td>Загрузочное ПЗУ встроенной локальной сети</td>
              <td></td>
              <td>[Выключено]</td>
            </tr>

            <tr>
              <td>Режим администратора</td>
              <td></td>
              <td>
                <span class="gery">Выключено</span>
              </td>
            </tr>
            <tr>
              <td>Пароль пользователя</td>
              <td></td>
              <td>
                <span class="gery">Выключено</span>
              </td>
            </tr>
            <tr>
              <td>Бортовое аудио</td>
              <td></td>
              <td>[Авто]</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="rightPanel">
        <div class="rightPanelInner">
          <div class="rightPanelHead">Справка по разделу</div>
          <div class="explicationText">
            Уровень меню
            <br />
            <br />
            [Выключено] отключает функцию основного видеоадаптера и освобождает
            <br />
            [Включено] включает и поддерживает функцию.
            <br />
            [Автоматическое обнаружение] включает функцию видеоадаптера, если
            она обнаружена.
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
