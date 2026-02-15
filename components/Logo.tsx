
import React from 'react';

export const Logo: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Pulse Rings */}
      {isPlaying && (
        <>
          <div className="absolute inset-0 rounded-full bg-emerald-500/15 animate-ping" />
          <div className="absolute inset-4 rounded-full bg-emerald-400/15 animate-ping [animation-delay:0.5s]" />
        </>
      )}
      
      {/* Central Logo Disk - Reduced Size */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-950 border-4 border-emerald-400/40 shadow-xl flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">
          {/* Mosque Silhouette */}
          <path d="M50 22 L62 45 L38 45 Z" fill="currentColor" opacity="0.4" />
          <rect x="40" y="45" width="20" height="22" rx="2" fill="currentColor" />
          <path d="M40 45 Q50 32 60 45" fill="currentColor" />
          
          {/* Crescent Moon */}
          <path d="M58 26 Q70 38 58 50 Q62 38 58 26" fill="none" stroke="gold" strokeWidth="2" strokeLinecap="round" />
          
          {/* Radio Waves */}
          <circle cx="50" cy="54" r="2.5" fill="gold" />
          <path d="M42 50 Q34 54 42 58" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={isPlaying ? 'animate-pulse' : ''} />
          <path d="M58 50 Q66 54 58 58" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={isPlaying ? 'animate-pulse' : ''} />
        </svg>
      </div>
    </div>
  );
};
