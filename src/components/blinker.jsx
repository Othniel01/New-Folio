import React, { useState, useEffect } from "react";

export default function TimeBlinker() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  );
  const [colorIndex, setColorIndex] = useState(0);

  // Define colors array
  const colors = ["#e0d03d", "#ffc0cb", "#0000ff", "#e01638"];

  // Function to update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to handle changing colors
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through colors
    }, 1000); // Change color interval

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [colors.length]);

  return (
    <div className="timeBlinker">
      <p>Local Time</p>
      <div
        className="blinkerbox"
        style={{ backgroundColor: colors[colorIndex] }}
      ></div>
      <p className="time-value">{time}</p>
    </div>
  );
}
