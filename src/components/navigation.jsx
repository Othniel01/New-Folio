import React from "react";
import ghost from "../img/ghosticon.png";

import TimeBlinker from "./blinker";

export default function NavHeader() {
  return (
    <div className="navbar">
      <p>
        <img src={ghost} alt="" /> OTHNIEL.DESIGN
      </p>
      <TimeBlinker></TimeBlinker>
      <div className="pageLinks">
        <a className="ResumeMeBtn" href="">
          Resume
        </a>
      </div>
    </div>
  );
}
