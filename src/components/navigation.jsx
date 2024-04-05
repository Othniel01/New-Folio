import React from "react";

import TimeBlinker from "./blinker";

export default function NavHeader() {
  return (
    <div className="navbar">
      <p>OTHNIEL.DESIGN</p>
      <TimeBlinker></TimeBlinker>
      <div className="pageLinks">
        <a className="ResumeMeBtn" href="">
          Resume
        </a>
      </div>
    </div>
  );
}
