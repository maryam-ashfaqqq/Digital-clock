import { useState, useEffect } from "react";

function DigitalClock({ is24Hour, showSeconds }) {

  // 1. State
  const [time, setTime] = useState(new Date());

  // 2. useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 3. Get Time
  let hours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  // 4. Format Time
  let currentTime;

  if (is24Hour) {
    currentTime = showSeconds
      ? `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`
      : `${String(hours).padStart(2, "0")}:${minutes}`;
  } else {
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    currentTime = showSeconds
      ? `${hours}:${minutes}:${seconds} ${period}`
      : `${hours}:${minutes} ${period}`;
  }

  // 5. Return UI
  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
}

export default DigitalClock;