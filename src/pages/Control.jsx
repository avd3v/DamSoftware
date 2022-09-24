import React from "react";

const Control = () => {
  return (
    <div id="mainPage" class="panel visiblepanel">
      <div class="leftPanel">
        <div class="leftPanelInner">
          Password Description
          <br />
          If ONLY the Administrator's password is set, this only access to Setup
          and is only asked for when entering Setup.
          <br />
          If ONLY the User's password is set, this is a power on password and
          must be entered to boot to enter Setup.
          <br />
          In Setup the User will have Administrator rights.
          <br />
          <br />
          <table class="clickable">
            <tr class="selected">
              <td>Administrator Password Status</td>
              <td>
                <span class="gery">:</span>
              </td>
              <td>
                <span class="gery">INSTALLED</span>
              </td>
            </tr>
            <tr>
              <td>User Password Status</td>
              <td>
                <span class="gery">:</span>
              </td>
              <td>
                <span class="gery">INSTALLED</span>
              </td>
            </tr>
            <tr>
              <td>Administrator Password</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>User Password</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>HDD Password Status</td>
              <td>
                <span class="gery">:</span>
              </td>
              <td>
                <span class="gery">NOT INSTALLED</span>
              </td>
            </tr>
            <tr>
              <td>Set Master Password</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Set User Password</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>&#9658; I/O Interface Security</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>&#9658; Secure Boot Menu</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="rightPanel">
        <div class="rightPanelInner">
          <div class="rightPanelHead">Set Administrator Password</div>
          <div class="explicationText">
            The password length must be in the following range:
            <br />
            Minimum length: 3<br />
            Maximum length: 20
            <br />
            Must type with character:
            <br />
            a-z, 0-9
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
