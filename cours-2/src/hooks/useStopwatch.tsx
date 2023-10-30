import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

interface StopwatchContextProps {
  start: () => void;
  stop: () => void;
  reset: () => void;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const StopwatchContext = createContext<StopwatchContextProps | undefined>(undefined);

export const StopwatchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (isRunning) {
      interval.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      window.clearInterval(interval.current);
    }
    return () => window.clearInterval(interval.current);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const minutes = Math.floor(time / 1000 / 60);
  const seconds = Math.floor(time / 1000 - minutes * 60);
  const milliseconds = time - minutes * 60 * 1000 - seconds * 1000;

  const value = {
    start,
    stop,
    reset,
    minutes,
    seconds,
    milliseconds,
  };

  return <StopwatchContext.Provider value={value}>{children}</StopwatchContext.Provider>;
};

export const useStopwatch = () => {
  const context = useContext(StopwatchContext);
  if (context === undefined) {
    throw new Error("useStopwatch must be used within a StopwatchProvider");
  }
  return context;
};
