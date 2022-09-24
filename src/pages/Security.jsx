import React from "react";

const Security = () => {
  return (
    <div id="mainPage" class="panel visiblepanel">
      <div class="leftPanel">
        <div class="leftPanelInner">
          Порядок приоритета загрузки
          <br />
          <br />
          <table class="clickable">
            <tr class="selected">
              <td>
                <span class="gery">1: </span>
              </td>
              <td></td>
              <td>IDE0: WCD WD1600BEVT-223CHG-(PM)</td>
            </tr>
            <tr>
              <td>
                <span class="gery">2: </span>
              </td>
              <td></td>
              <td>CD/DVD: Optiarc DVD RW AD-98123-(P)</td>
            </tr>
            <tr>
              <td>
                <span class="gery">3: </span>
              </td>
              <td></td>
              <td>Network Boot: MBA v11.0.11 Slot 0200</td>
            </tr>
            <tr>
              <td>
                <span class="gery">4: </span>
              </td>
              <td></td>
              <td>USB HDD</td>
            </tr>
            <tr>
              <td>
                <span class="gery">5: </span>
              </td>
              <td></td>
              <td>USB FDD</td>
            </tr>
            <tr>
              <td>
                <span class="gery">6: </span>
              </td>
              <td></td>
              <td>USB KEY</td>
            </tr>
            <tr>
              <td>
                <span class="gery">7: </span>
              </td>
              <td></td>
              <td>USB CD/DVD ROM</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="rightPanel">
        <div class="rightPanelInner">
          <div class="rightPanelHead">Item Specific Help</div>
          <div class="explicationText">
            Use the Up and Down arrows to select an item then move it up or down
            in the list.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
