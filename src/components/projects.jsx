import React, { useEffect, useRef, useState } from "react";

export default function ProjectSection() {
  const projectSectionRef = useRef(null);
  const [initialTranslateX, setInitialTranslateX] = useState({});

  useEffect(() => {
    const projectSectionElement = projectSectionRef.current;

    if (projectSectionElement) {
      const projectLinks = projectSectionElement.querySelectorAll(
        ".homeProjectsLinkTitle"
      );

      projectLinks.forEach((link) => {
        const originalTranslateX = parseFloat(
          link.style.transform.match(/-?\d*\.?\d+/)[0]
        );
        setInitialTranslateX((prevTranslateX) => ({
          ...prevTranslateX,
          [link.dataset.id]: originalTranslateX,
        }));
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const projectSectionElement = projectSectionRef.current;

      if (projectSectionElement) {
        const projectLinks = projectSectionElement.querySelectorAll(
          ".homeProjectsLinkTitle"
        );

        projectLinks.forEach((link) => {
          const originalTranslateX = initialTranslateX[link.dataset.id];
          const linkRect = link.getBoundingClientRect();
          const linkTop = linkRect.top + window.pageYOffset;
          const linkHeight = linkRect.height;

          // Calculate the percentage scrolled within the link's section
          const scrollPercentage = (scrollPos - linkTop) / linkHeight;

          // Calculate the translation values based on direction
          let translateX = originalTranslateX;

          if (link.classList.contains("left")) {
            translateX -= 50 * scrollPercentage;
          } else if (link.classList.contains("right")) {
            translateX += 50 * scrollPercentage;
          }

          // Apply inline styles for sliding effects
          link.style.transform = `translateX(${translateX}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialTranslateX]);

  return (
    <div className="projectSection" ref={projectSectionRef}>
      <div className="straightLine"></div>

      <div className="homeProjects">
        <div className="projectLabel">
          <div>
            <p>FLEXPORT</p>
            <p>
              ART DIRECTION /<br />
              WEB DEVELOPMENT
            </p>
          </div>
        </div>
        <a
          href="http://flexport.org/"
          target="_blank"
          className="homeProjectsLink"
        >
          <h1
            className="homeProjectsLinkTitle right"
            data-id="1"
            style={{
              transform: "translateX(-411.375px)",
            }}
          >
            <span className="homeProjectsTitleText">
              FLEXPORT - HUMANITARIAN RELIEF LOGISTICS
            </span>
          </h1>
        </a>
      </div>
      <div className="straightLine"></div>
      {/* /// */}
      <div className="homeProjects">
        <div className="projectLabel">
          <div>
            <p>PERMISO.IO</p>
            <p>
              ART DIRECTION /<br />
              WEB DEVELOPMENT
            </p>
          </div>
        </div>
        <a
          href="http://permiso.io/"
          target="_blank"
          className="homeProjectsLink"
        >
          <h1
            className="homeProjectsLinkTitle left"
            data-id="4"
            style={{
              transform: "translateX(80.951px)",
            }}
          >
            <span className="homeProjectsTitleText">
              PERMISO - IDENTITY THREAT DETECTION AND RESPONSE
            </span>
          </h1>
        </a>
      </div>
      {/* //// */}

      <div className="straightLine"></div>
      <div className="homeProjects">
        <div className="projectLabel">
          <div>
            <p>Vyshun</p>
            <p>
              ART DIRECTION /<br />
              WEB DEVELOPMENT
            </p>
          </div>
        </div>
        <a
          target="_blank"
          href="https://www.cleanui.dev/"
          className="homeProjectsLink"
        >
          <h1
            className="homeProjectsLinkTitle right"
            data-id="3"
            style={{
              transform: "translateX(-530.368px)",
            }}
          >
            <span className="homeProjectsTitleText">
              Clean UI - SOFTWARE DEVELOPMENT COMPANY
            </span>
          </h1>
        </a>
      </div>
      <div className="straightLine"></div>
      <div className="homeProjects">
        <div className="projectLabel">
          <div>
            <p>MAJTAX ERP SYSTEM</p>
            <p>
              NDA PROTECTED /<br />
              CONTACT FOR DESIGNS
            </p>
          </div>
        </div>
        <a href="" className="homeProjectsLink">
          <h1
            className="homeProjectsLinkTitle left"
            data-id="2"
            style={{
              transform: "translateX(122.573px)",
            }}
          >
            <span className="homeProjectsTitleText">
              MAJTAX - INTERNAL ERP ORGANISATION SYSTEM
            </span>
          </h1>
        </a>
      </div>
      <div className="straightLine"></div>
      <div className="breakSection">
        <h2>COMMUNITY CONTRIBUTIONS/OPEN SOURCE</h2>
        <p>
          I have worked on some resources and tools; contributed to open source
          projects, you should check them out
        </p>
      </div>
      <div className="straightLine"></div>
      <div className="homeProjects">
        <div className="projectLabel">
          <div>
            <p>PETME</p>
            <p>
              ART DIRECTION /<br />
              WEB DEVELOPMENT
            </p>
          </div>
        </div>
        <a
          href="https://github.com/akshitagupta15june/PetMe"
          target="_blank"
          className="homeProjectsLink"
        >
          <h1
            className="homeProjectsLinkTitle right"
            data-id="5"
            style={{
              transform: "translateX(-516.181px)",
            }}
          >
            <span className="homeProjectsTitleText">
              PET ME - PET CARE AND ADOPTION WEBSITE
            </span>
          </h1>
        </a>
      </div>
      <div className="straightLine"></div>
      <div className="homeProjects">
        <div className="projectLabel">
          <div>
            <p>COLORCATCH</p>
            <p>
              ART DIRECTION /<br />
              WEB DEVELOPMENT
            </p>
          </div>
        </div>
        <a
          href="https://github.com/Othniel01/ColorCatch-Extension"
          target="_blank"
          className="homeProjectsLink"
        >
          <h1
            className="homeProjectsLinkTitle left"
            data-id="6"
            style={{
              transform: "translateX(91.138px)",
            }}
          >
            <span className="homeProjectsTitleText">
              COLOR CATCH - BROWSER WEB EXTENSION FOR DESIGNERS
            </span>
          </h1>
        </a>
      </div>
      <div className="straightLine"></div>
    </div>
  );
}
