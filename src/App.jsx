import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import NavHeader from "./components/navigation.jsx";
import ShowcaseSection from "./components/showcase.jsx";
import ProjectSection from "./components/projects.jsx";
import AboutMeSection from "./components/aboutMe.jsx";
import FooterContentItem from "./components/footerContent.jsx";
import CustomCursor from "./components/cursor.jsx";

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    console.log("Initializing locomotive-scroll...");
    const locomotiveScroll = new LocomotiveScroll({
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
      <CustomCursor />
      <NavHeader />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ShowcaseSection />
        <ProjectSection />
        <AboutMeSection />
        <FooterContentItem />
      </motion.div>
    </div>
  );
}

export default App;
