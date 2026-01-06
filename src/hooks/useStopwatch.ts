import { useState, useRef, useCallback } from 'react';

export interface Lap {
  id: number;
  time: number;
  delta: number;
}

export const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<Lap[]>([]);
  
  const startTimeRef = useRef<number>(0);
  const accumulatedTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number>();
  const lapStartTimeRef = useRef<number>(0);

  const updateTime = useCallback(() => {
    const now = performance.now();
    const elapsed = now - startTimeRef.current + accumulatedTimeRef.current;
    setTime(elapsed);
    animationFrameRef.current = requestAnimationFrame(updateTime);
  }, []);

  const start = useCallback(() => {
    if (!isRunning) {
      startTimeRef.current = performance.now();
      if (time === 0) {
        lapStartTimeRef.current = 0;
      }
      setIsRunning(true);
      animationFrameRef.current = requestAnimationFrame(updateTime);
    }
  }, [isRunning, time, updateTime]);

  const pause = useCallback(() => {
    if (isRunning) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      accumulatedTimeRef.current += performance.now() - startTimeRef.current;
      setIsRunning(false);
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setTime(0);
    setIsRunning(false);
    setLaps([]);
    startTimeRef.current = 0;
    accumulatedTimeRef.current = 0;
    lapStartTimeRef.current = 0;
  }, []);

  const lap = useCallback(() => {
    if (isRunning) {
      const currentTime = time;
      const delta = currentTime - lapStartTimeRef.current;
      lapStartTimeRef.current = currentTime;
      
      setLaps(prevLaps => [
        { id: prevLaps.length + 1, time: currentTime, delta },
        ...prevLaps
      ]);
    }
  }, [isRunning, time]);

  const toggleStartPause = useCallback(() => {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  }, [isRunning, start, pause]);

  // Find fastest and slowest lap
  const fastestLapId = laps.length >= 2 
    ? laps.reduce((min, lap) => lap.delta < min.delta ? lap : min).id 
    : null;
  
  const slowestLapId = laps.length >= 2 
    ? laps.reduce((max, lap) => lap.delta > max.delta ? lap : max).id 
    : null;

  return {
    time,
    isRunning,
    laps,
    fastestLapId,
    slowestLapId,
    start,
    pause,
    reset,
    lap,
    toggleStartPause,
    hasStarted: time > 0 || isRunning,
  };
};
