
import React from 'react';

export const Visualizer: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  return (
    <div className="flex items-end justify-center gap-1 h-12 w-full">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`w-2 bg-emerald-400 rounded-t-sm transition-all duration-300 ${
            isPlaying ? 'animate-bounce' : 'h-2'
          }`}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: isPlaying ? `${0.5 + Math.random()}s` : '0s',
            height: isPlaying ? `${20 + Math.random() * 80}%` : '8px'
          }}
        />
      ))}
    </div>
  );
};
