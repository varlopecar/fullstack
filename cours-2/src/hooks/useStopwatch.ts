import { useEffect, useRef, useState, createContext, useContext } from "react";

const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }), [isRunning];

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
  const miliseconds = time - minutes * 60 * 1000 - seconds * 1000;

  return { start, stop, reset, minutes, seconds, miliseconds };
};

export default useStopwatch;
