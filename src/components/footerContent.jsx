import React, { useEffect, useRef } from "react";
import TimeBlinker from "../components/blinker";
import anime from "animejs/lib/anime.es.js";

export default function FooterContentItem() {
  const continuousScrollRef = useRef(null);

  useEffect(() => {
    const continuousScrollElement = continuousScrollRef.current;

    if (continuousScrollElement) {
      const childElements =
        continuousScrollElement.querySelectorAll(".internalContact");

      // Calculate the width of the container and the child elements
      const containerWidth = continuousScrollElement.offsetWidth;
      let totalChildWidth = 0;
      childElements.forEach((childElement) => {
        totalChildWidth += childElement.offsetWidth;
      });

      // Define the animation
      anime({
        targets: childElements,
        translateX: "-100%",
        duration: 12000, // Adjust the duration as needed
        easing: "linear",
        loop: true,
      });
    }
  }, []);

  return (
    <div className="contactSection">
      <div className="contactLabel">
        <h2>
          Got a question, proposal, project, want to take me out on lunch or
          work together on something? Feel free to reach out.
        </h2>
      </div>
      <div className="straightLine"></div>
      <div className="continousScroll" ref={continuousScrollRef}>
        <a
          href="mailto:othnielabalaka@gmail.com"
          target="_blank"
          className="internalLinkContact"
        >
          <span className="internalContact">
            LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING
            SOMETHING?
          </span>
          <span className="internalContact">
            LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING
            SOMETHING?
          </span>
        </a>
      </div>
      <div className="straightLine"></div>
      <div className="mailContainer">
        <a href="mailto:othnielabalaka@gmail.com" target="_blank">
          othnielabalaka@gmail.com
        </a>
      </div>
      <footer>
        <TimeBlinker />

        <div className="footerLinks">
          <a
            href="https://twitter.com/AtOthnielcodes?t=8hbozszIgAAfJ3Ckcc3NGQ&s=09"
            target="_blank"
            className="footerLinkItem"
          >
            <div className="footerLinkBackdrop"></div>
            <p>TWITTER</p>
          </a>
          <a
            href="https://www.linkedin.com/in/othniel-abalaka-885b50243"
            target="_blank"
            className="footerLinkItem"
          >
            <div className="footerLinkBackdrop"></div>
            <p>LINKEDIN</p>
          </a>
          <a
            href="https://github.com/Othniel01"
            target="_blank"
            className="footerLinkItem"
          >
            <div className="footerLinkBackdrop"></div>
            <p>GITHUB</p>
          </a>
        </div>

        <p>
          <span className="colorChange">Inspired by &nbsp;</span>
          SAPA
        </p>
      </footer>
    </div>
  );
}
