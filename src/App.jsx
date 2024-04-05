import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import NavHeader from "./components/navigation.jsx";
import ShowcaseSection from "./components/showcase.jsx";
import ProjectSection from "./components/projects.jsx";
import AboutMeSection from "./components/aboutMe.jsx";
import FooterContentItem from "./components/footerContent.jsx";

function App() {
  const scrollContainerRef = useRef(null);
  let locomotiveScroll = null;

  useEffect(() => {
    console.log("Initializing locomotive-scroll...");
    locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      smoothMobile: true,
      getSpeed: true,
    });

    console.log("Locomotive-scroll initialized.");

    return () => {
      console.log("Destroying locomotive-scroll...");
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
        console.log("Locomotive-scroll destroyed.");
      }
    };
  }, []);

  return (
    <div className="body-contain" ref={scrollContainerRef}>
      <NavHeader />
      <ShowcaseSection />
      <ProjectSection />
      <AboutMeSection />
      <FooterContentItem />
    </div>
  );
}

export default App;
