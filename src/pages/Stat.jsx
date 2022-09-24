import React from "react";

const Stat = () => {
  return (
    <div id="mainPage" class="panel visiblepanel">
      <div class="leftPanel">
        <div class="leftPanelInner">
          You are about to leave the Bios Setup Utility. <br />
          <br />
          <table class="clickable">
            <tr class="selected">
              <td>
                <span class="gery">1: </span>
              </td>
              <td></td>
              <td>Save Changes and Exit</td>
            </tr>
            <tr>
              <td>
                <span class="gery">2: </span>
              </td>
              <td></td>
              <td>Exit Without Saving</td>
            </tr>
            <tr>
              <td>
                <span class="gery">3: </span>
              </td>
              <td></td>
              <td>Load Defaults and Exit</td>
            </tr>
          </table>
          <br />
          Your computer will reboot.
        </div>
      </div>
      <div class="rightPanel">
        <div class="rightPanelInner">
          <div class="rightPanelHead">Exit</div>
          <div class="explicationText">
            Leaving the Bios Setup Utility will optionally save the CMOS
            settings and reboot the computer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
