import { useState, useEffect } from "react";
import DigitalClock from "./DigitalClock";
import Greeting from "./components/Greeting";
import "./App.css";

function App() {

  // 1. Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("theme")) ?? true;
  });

  // 2. Save Theme
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  // 3. 12/24 Hour State
  const [is24Hour, setIs24Hour] = useState(false);

  // 4. Show/Hide Seconds State
  const [showSeconds, setShowSeconds] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>

      <Greeting />

      <DigitalClock
        is24Hour={is24Hour}
        showSeconds={showSeconds}
      />

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <button onClick={() => setIs24Hour(!is24Hour)}>
        {is24Hour ? "12 Hour" : "24 Hour"}
      </button>

      <button onClick={() => setShowSeconds(!showSeconds)}>
        {showSeconds ? "Hide Seconds" : "Show Seconds"}
      </button>

    </div>
  );
}

export default App;