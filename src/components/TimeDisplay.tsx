import { memo } from 'react';
import { formatTime } from '@/lib/timeUtils';

interface TimeDisplayProps {
  time: number;
  isRunning: boolean;
}

export const TimeDisplay = memo(({ time, isRunning }: TimeDisplayProps) => {
  const { minutes, seconds, milliseconds } = formatTime(time);

  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-12">
      {/* Running indicator */}
      <div className="h-6 mb-4">
        {isRunning && (
          <div className="flex items-center gap-2 text-primary running-indicator">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium uppercase tracking-wider">Running</span>
          </div>
        )}
      </div>

      {/* Main time display */}
      <div 
        className={`time-display text-7xl md:text-8xl lg:text-9xl font-bold ${
          isRunning ? 'time-display-running' : ''
        }`}
      >
        <span>{minutes}</span>
        <span className="text-muted-foreground mx-1">:</span>
        <span>{seconds}</span>
        <span className="text-muted-foreground mx-1">.</span>
        <span className="text-primary">{milliseconds}</span>
      </div>

      {/* Labels */}
      <div className="flex gap-12 md:gap-20 mt-4 text-muted-foreground text-sm uppercase tracking-widest">
        <span>Min</span>
        <span>Sec</span>
        <span>Ms</span>
      </div>
    </div>
  );
});

TimeDisplay.displayName = 'TimeDisplay';
