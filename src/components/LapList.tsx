import { memo } from 'react';
import { Lap } from '@/hooks/useStopwatch';
import { formatTime } from '@/lib/timeUtils';
import { Trophy, AlertTriangle } from 'lucide-react';

interface LapListProps {
  laps: Lap[];
  fastestLapId: number | null;
  slowestLapId: number | null;
}

const formatLapTime = (ms: number) => {
  const { minutes, seconds, milliseconds } = formatTime(ms);
  return `${minutes}:${seconds}.${milliseconds}`;
};

export const LapList = memo(({ laps, fastestLapId, slowestLapId }: LapListProps) => {
  if (laps.length === 0) {
    return (
      <div className="glass-card p-8 text-center">
        <p className="text-muted-foreground">
          Press <span className="text-primary font-semibold">Lap</span> while running to record lap times
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <h2 className="text-lg font-semibold">Lap Times</h2>
        <span className="text-sm text-muted-foreground">{laps.length} laps</span>
      </div>

      {/* Lap list */}
      <div className="lap-list max-h-64 md:max-h-80 overflow-y-auto">
        {laps.map((lap) => {
          const isFastest = lap.id === fastestLapId;
          const isSlowest = lap.id === slowestLapId;
          
          return (
            <div
              key={lap.id}
              className={`
                lap-item flex items-center justify-between px-6 py-4 border-b border-border/50 last:border-b-0
                ${isFastest ? 'lap-fastest' : ''}
                ${isSlowest ? 'lap-slowest' : ''}
              `}
            >
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground font-mono w-12">
                  Lap {lap.id}
                </span>
                {isFastest && (
                  <Trophy className="w-4 h-4 text-success" />
                )}
                {isSlowest && (
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                )}
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-xs text-muted-foreground mb-1">Split</div>
                  <div className={`font-mono font-medium ${
                    isFastest ? 'text-success' : isSlowest ? 'text-destructive' : ''
                  }`}>
                    {formatLapTime(lap.delta)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground mb-1">Total</div>
                  <div className="font-mono text-muted-foreground">
                    {formatLapTime(lap.time)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

LapList.displayName = 'LapList';
