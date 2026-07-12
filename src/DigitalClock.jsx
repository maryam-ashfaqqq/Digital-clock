import { useState, useEffect } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${period}`;
  };

  const day = time.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const date = time.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="clock-container">
      <div className="clock-card">
        <h1>{formatTime()}</h1>
        <h3>{day}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default DigitalClock;