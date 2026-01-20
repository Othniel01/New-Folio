import React, { useEffect, useRef } from "react";
import mySvg from "../svg/scroll-svg.svg";

export default function ShowcaseSection() {
  const showcaseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const showcaseElement = showcaseRef.current;

      if (showcaseElement) {
        const showcaseRect = showcaseElement.getBoundingClientRect();
        const showcaseTop = showcaseRect.top + window.pageYOffset;
        const showcaseHeight = showcaseRect.height;

        // Calculate the percentage scrolled within the showcase section
        const scrollPercentage = (scrollPos - showcaseTop) / showcaseHeight;

        // Calculate the translation values for heroTitleFirst and heroTitleSecond
        const translateXFirst = -50 * scrollPercentage + "%";
        const translateXSecond = 50 * scrollPercentage + "%";

        // Apply inline styles for sliding effects
        if (showcaseElement.querySelector(".heroTitleFirst")) {
          showcaseElement.querySelector(".heroTitleFirst").style.transform =
            `translateX(${translateXFirst})`;
        }
        if (showcaseElement.querySelector(".heroTitleSecond")) {
          showcaseElement.querySelector(".heroTitleSecond").style.transform =
            `translateX(${translateXSecond})`;
        }

        // Calculate the scale value for hero-gap
        const scaleValue = 1 + scrollPercentage * 2;

        // Apply inline styles for stretching effect
        if (showcaseElement.querySelector(".hero-gap")) {
          showcaseElement.querySelector(".hero-gap").style.transform =
            `scale(${scaleValue})`;
        }

        // Calculate the rotation angle for rotateSphere
        const rotationAngle = 90 * scrollPercentage; // Adjust rotation speed as needed

        // Apply inline styles for rotation effect
        if (showcaseElement.querySelector(".rotateSphere")) {
          showcaseElement.querySelector(".rotateSphere").style.transform =
            `rotate(${rotationAngle}deg)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="showcase" ref={showcaseRef}>
      <h1 className="heroTextTop displayText">
        <div className="heroTopTitle">
          <span className="heroTitleFirst">
            <span className="hero__hover">F</span>
            <span className="hero__hover">R</span>
            <span className="hero__hover">O</span>
            <span className="hero__hover">N</span>
            <span className="hero__hover">T</span>
          </span>

          <span className="hero-gap"></span>

          <span className="heroTitleSecond">
            <span className="hero__hover">E</span>
            <span className="hero__hover">N</span>
            <span className="hero__hover">D</span>
          </span>
        </div>
      </h1>

      <div className="mobileHead displayMobile">
        <h1 className="heroTitleMobile">FRONT</h1>

        <h1 className="heroBottomTitleMobile">
          <span className="heroTitleGapMobile"></span>END
        </h1>
      </div>

      <span className="heroTitleBottom">
        <div className="hero_title_bottom">
          <h1 className="bottomLeftDesktop">
            <span className="hero__hover">D</span>
            <span className="hero__hover">E</span>
            <span className="hero__hover">V</span>
            <span className="hero__hover">E</span>
            <span className="hero__hover">L</span>
            <span className="hero__hover">O</span>
            <span className="hero__hover">P</span>
            <span className="hero__hover">E</span>
            <span className="hero__hover">R</span>
          </h1>
        </div>
        <div className="aboutText">
          <p>
            <span className="firstWord">ABOUT</span>
            &nbsp; I am a developer based in Abuja, Nigeria focused on creating
            interactive digital experiences on the web, working with brands and
            industry leaders such as &nbsp;
            <span>NCC,&nbsp;</span>
            <span>MAJTAX,&nbsp;</span>
            <span>VYSHUN,&nbsp;</span> and <span>UPWORK</span>
            &nbsp; amongst others to achieve.
          </p>
        </div>
      </span>

      <object
        aria-label="rotatesphere"
        className="rotateSphere"
        type="image/svg+xml"
        data={mySvg}
      ></object>
    </div>
  );
}
