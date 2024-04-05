import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  // Add event listener for mouseover on 'a' tags
  useEffect(() => {
    const handleLinkHover = () => {
      const cursorDot = document.querySelector(".cursor-dot");
      if (cursorDot) {
        cursorDot.classList.toggle("green", true);
      }
    };

    const handleLinkLeave = () => {
      const cursorDot = document.querySelector(".cursor-dot");
      if (cursorDot) {
        cursorDot.classList.toggle("green", false);
      }
    };

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    >
      <div className="cursor-dot"></div>
    </div>
  );
};

export default CustomCursor;
