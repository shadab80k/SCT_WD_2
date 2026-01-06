import { useStopwatch } from '@/hooks/useStopwatch';
import { TimeDisplay } from './TimeDisplay';
import { StopwatchButton } from './StopwatchButton';
import { LapList } from './LapList';
import { Timer } from 'lucide-react';

export const Stopwatch = () => {
  const {
    time,
    isRunning,
    laps,
    fastestLapId,
    slowestLapId,
    toggleStartPause,
    reset,
    lap,
    hasStarted,
  } = useStopwatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Timer className="w-8 h-8 text-primary" />
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Stopwatch</h1>
      </div>

      {/* Main stopwatch container */}
      <div className="w-full max-w-lg">
        {/* Time display */}
        <TimeDisplay time={time} isRunning={isRunning} />

        {/* Control buttons */}
        <div className="flex items-center justify-center gap-6 md:gap-10 my-8">
          {/* Left button: Lap or Reset */}
          <StopwatchButton
            onClick={isRunning ? lap : reset}
            disabled={!hasStarted}
            variant={isRunning ? 'secondary' : 'destructive'}
          >
            {isRunning ? 'Lap' : 'Reset'}
          </StopwatchButton>

          {/* Right button: Start or Pause */}
          <StopwatchButton
            onClick={toggleStartPause}
            variant={isRunning ? 'destructive' : 'primary'}
            size="lg"
          >
            {isRunning ? 'Pause' : hasStarted ? 'Resume' : 'Start'}
          </StopwatchButton>
        </div>

        {/* Lap list */}
        <div className="mt-8">
          <LapList 
            laps={laps} 
            fastestLapId={fastestLapId} 
            slowestLapId={slowestLapId} 
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-8 text-center text-sm text-muted-foreground">
        <p>Built with precision • Uses requestAnimationFrame for accuracy</p>
      </footer>
    </div>
  );
};
