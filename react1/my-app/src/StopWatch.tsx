import React, { useState, useRef } from "react";

const StopwatchApp = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      setIsRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const lapStopwatch = () => {
    if (isRunning) {
      setLaps((prevLaps) => [...prevLaps, time]);
    }
  };

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${seconds.toString().padStart(2, "0")}.${centiseconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <div>{formatTime(time)}</div>
      <button onClick={isRunning ? stopStopwatch : startStopwatch}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={resetStopwatch}>Reset</button>
      <button onClick={lapStopwatch} disabled={!isRunning}>
        Lap
      </button>
      <div>
        <h3>Laps</h3>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>{formatTime(lap)}</li>
          ))}
        </ul>
        <p>Total Laps: {laps.length}</p>
      </div>
    </div>
  );
};

export default StopwatchApp;
