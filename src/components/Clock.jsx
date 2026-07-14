import { useState, useEffect } from "react";

function Clock({ is24Hour }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    if (is24Hour) {
      return `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
    }

    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${period}`;
  };

  return <h1>{formatTime()}</h1>;
}

export default Clock;