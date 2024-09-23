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
          target="_blank"
          className="ResumeMeBtn"
          href="https://drive.google.com/file/d/13MDBeyL9wOLW6Q8BJfNaEM__GHdIECh1/view?usp=sharing"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
