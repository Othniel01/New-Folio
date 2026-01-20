import React from "react";
import myGif from "../img/ezgif.com-animated-gif-maker.gif";

export default function AboutMeSection() {
  return (
    <div className="aboutMeSection">
      <img src={myGif} alt="#" />
      <div className="aboutMeSectionText">
        <div className="aboutMeTag">
          <h2>INTERESTS</h2>
          <p>
            Art Direction, Brand Strategy, Creative Development, E-commerce,
            Webflow, Web3, Robotics, Artificial Intelligence.
            <a
              href="https://www.linkedin.com/in/othniel-abalaka-885b50243"
              rel="noreferrer"
              target="_blank"
            >
              SEE MY LINKEDIN
            </a>
          </p>
        </div>
        <div className="aboutMeTag">
          <h2>MORE GIST</h2>
          <p>
            I listen to EDM and Afro music all the time, you can see what I'm
            currently listening to. And listen to my playlists.
            <a
              href="mailto:othnielabalaka@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              GET IN TOUCH
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
