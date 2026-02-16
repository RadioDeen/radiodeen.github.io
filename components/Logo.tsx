
import React from 'react';

export const Logo: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer Smooth Glow Effect */}
      {isPlaying && (
        <div className="absolute inset-0 bg-emerald-400/25 blur-[45px] rounded-full animate-pulse" />
      )}
      
      {/* Animated Circular Rings for depth */}
      {isPlaying && (
        <>
          <div className="absolute inset-[-5px] border-2 border-emerald-400/20 rounded-[3rem] animate-[ping_3s_linear_infinite]" />
          <div className="absolute inset-[-15px] border border-emerald-400/10 rounded-[3.5rem] animate-[ping_4s_linear_infinite_1s]" />
        </>
      )}

      {/* Main Logo Container - Sharp Octagonal Shape */}
      <div className={`relative w-32 h-32 md:w-40 md:h-40 transition-transform duration-700 ${isPlaying ? 'scale-110' : 'scale-100'}`}>
        
        {/* The Octagonal Background (SVG Mask/Shape) */}
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
          <defs>
            <filter id="glow-sharp">
              <feGaussianBlur stdDeviation="1.2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Custom Octagonal Path - Sharper corners, flatter sides */}
            <path 
              id="octagon-path"
              d="M50 2 
                 L84 16 
                 L98 50 
                 L84 84 
                 L50 98 
                 L16 84 
                 L2 50 
                 L16 16 Z" 
            />
            
            <mask id="octagon-mask">
              <use href="#octagon-path" fill="white" />
            </mask>
          </defs>

          {/* Main Green Background with the new shape */}
          <path 
            d="M50 2 
               L84 16 
               L98 50 
               L84 84 
               L50 98 
               L16 84 
               L2 50 
               L16 16 Z" 
            fill="#34a873" 
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Inner White Border Frame - Matches the outer shape */}
          <path 
            d="M50 8 
               L80 20 
               L92 50 
               L80 80 
               L50 92 
               L20 80 
               L8 50 
               L20 20 Z" 
            fill="none" 
            stroke="white" 
            strokeWidth="1.8" 
            strokeOpacity="0.9"
            strokeLinejoin="round"
            filter="url(#glow-sharp)"
          />

          {/* Mosque Line Art - Centered and Clean */}
          <g className={`transition-all duration-1000 ${isPlaying ? 'opacity-100 scale-105' : 'opacity-85'}`} style={{ transformOrigin: 'center' }}>
            {/* Horizontal Ground Line */}
            <line x1="30" y1="76" x2="70" y2="76" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Building Body */}
            <path 
              d="M40 76 V55 H60 V76" 
              fill="none" 
              stroke="white" 
              strokeWidth="1.8" 
              strokeLinejoin="round" 
            />
            
            {/* Main Dome */}
            <path 
              d="M38 55 C38 32, 62 32, 62 55" 
              fill="none" 
              stroke="white" 
              strokeWidth="1.8" 
              strokeLinecap="round"
            />
            
            {/* Spire */}
            <path 
              d="M50 35 L50 40" 
              fill="none" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round"
              className={isPlaying ? 'animate-pulse' : ''}
            />

            {/* Arched Doorway */}
            <path 
              d="M46 76 V64 C46 58, 54 58, 54 64 V76" 
              fill="none" 
              stroke="white" 
              strokeWidth="1.2" 
              strokeLinecap="round"
            />
            
            {/* Small Crescent/Detailing on Dome */}
            <path 
              d="M48 64 C48 61, 52 61, 52 64" 
              fill="none" 
              stroke="white" 
              strokeWidth="1"
            />
            
            {/* Door Handle */}
            <circle cx="51.5" cy="70" r="0.8" fill="white" />
          </g>
          
          {/* Animated Shine Effect within the octagon */}
          {isPlaying && (
            <rect 
              x="0" y="0" width="100" height="100" 
              fill="url(#shineGrad)" 
              mask="url(#octagon-mask)" 
              className="animate-[shine_4s_infinite_ease-in-out]" 
            />
          )}
          
          <defs>
            <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="45%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="55%" stopColor="transparent" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Spiritual Particles */}
        {isPlaying && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full animate-float-up"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  bottom: '10%',
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          0% { transform: translate(-100%, -100%); }
          100% { transform: translate(100%, 100%); }
        }
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-60px) scale(0); opacity: 0; }
        }
      `}} />
    </div>
  );
};
