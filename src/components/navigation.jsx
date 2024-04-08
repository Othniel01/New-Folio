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
        <a
          className="ResumeMeBtn"
          href="https://drive.google.com/file/d/12YaWxWAXeVJOE8JzPSr_eAC05_e9auvm/view?usp=sharing"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
