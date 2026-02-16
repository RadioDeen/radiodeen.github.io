
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Gojol, PlayerState, PrayerTimes, ScheduledProgram } from './types';
import { GOJOL_LIST, AZAN_URLS, QURAN_SCHEDULE, DISCUSSION_SCHEDULE } from './constants';
import { calculatePrayerTimes, isItTimeForAzan } from './services/prayerService';
import { getTime, getEnglishDate, getBengaliDate } from './services/dateService';
import { getDailyHadith, Hadith } from './services/hadithService';
import { Visualizer } from './components/Visualizer';
import { Logo } from './components/Logo';
import { Play, Pause, SkipForward, Radio, Clock, Volume2, ShieldCheck, Hourglass, Calendar, BookOpen, MapPin, AudioLines } from 'lucide-react';

const PRAYER_LABELS: Record<string, string> = {
  fajr: 'ফজর',
  sunrise: 'সূর্যোদয়',
  dhuhr: 'যোহর',
  asr: 'আসর',
  maghrib: 'মাগরিব',
  isha: 'এশা'
};

const App: React.FC = () => {
  const [currentGojol, setCurrentGojol] = useState<Gojol>(() => {
    const randomIndex = Math.floor(Math.random() * GOJOL_LIST.length);
    return GOJOL_LIST[randomIndex];
  });
  
  const [playerState, setPlayerState] = useState<PlayerState>(PlayerState.PAUSED);
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [currentPrayer, setCurrentPrayer] = useState<string | null>(null);
  const [currentSchedule, setCurrentSchedule] = useState<ScheduledProgram | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentTime, setCurrentTime] = useState(getTime());
  const [dailyHadith, setDailyHadith] = useState<Hadith | null>(null);
  const [locationName, setLocationName] = useState('ঢাকা');
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);

  // নির্ধারিত অডিও সোর্স নির্ধারণ
  const currentSrc = (playerState === PlayerState.AZAN && currentPrayer) 
    ? (AZAN_URLS[currentPrayer] || Object.values(AZAN_URLS)[0]) 
    : (playerState === PlayerState.SCHEDULED_PROGRAM && currentSchedule)
    ? currentSchedule.url
    : currentGojol.url;

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(getTime()), 1000);
    setDailyHadith(getDailyHadith());
    return () => clearInterval(timer);
  }, []);

  // নামাজের ওয়াক্ত লোড করা
  useEffect(() => {
    const updateTimes = (lat: number = 23.8103, lng: number = 90.4125) => {
      const times = calculatePrayerTimes(lat, lng);
      setPrayerTimes(times);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          updateTimes(pos.coords.latitude, pos.coords.longitude);
          setLocationName('আপনার অবস্থান');
        },
        () => updateTimes()
      );
    } else {
      updateTimes();
    }
  }, []);

  const safePlay = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
    } catch (err: any) {
      console.warn("Playback failed:", err);
    }
  }, []);

  // প্লেব্যাক কন্ট্রোল
  useEffect(() => {
    if (!audioRef.current) return;
    if ((playerState !== PlayerState.PAUSED) && !isTransitioning) {
      safePlay();
    } else {
      audioRef.current.pause();
    }
  }, [playerState, isTransitioning, currentSrc, safePlay]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (playerState !== PlayerState.PAUSED && !isTransitioning) {
        safePlay();
      }
    }
  }, [currentSrc, safePlay]);

  // বর্তমান সময় অনুযায়ী শিডিউল চেক করা (Priority Logic)
  const getActivePriority = useCallback(() => {
    if (!prayerTimes) return null;

    const now = new Date();
    const currentFormattedTime = getTime().split(':')[0] + ':' + getTime().split(':')[1] + ' ' + getTime().split(' ')[1];
    const currentISODate = now.toISOString().split('T')[0];

    // ১. আজান প্রায়োরিটি
    const azanName = isItTimeForAzan(prayerTimes);
    if (azanName) return { type: PlayerState.AZAN, name: azanName, data: null };

    // ২. বিশেষ আলোচনা প্রায়োরিটি
    const specialDiscussion = DISCUSSION_SCHEDULE.find(d => d.date === currentISODate && d.time === currentFormattedTime);
    if (specialDiscussion) return { type: PlayerState.SCHEDULED_PROGRAM, name: null, data: specialDiscussion };

    // ৩. কুরআন তেলাওয়াত প্রায়োরিটি
    const quranRecitation = QURAN_SCHEDULE.find(q => q.time === currentFormattedTime);
    if (quranRecitation) return { type: PlayerState.SCHEDULED_PROGRAM, name: null, data: quranRecitation };

    return null;
  }, [prayerTimes]);

  // প্রতি ১ সেকেন্ড অন্তর শিডিউল চেক করে স্টেট আপডেট
  useEffect(() => {
    const interval = setInterval(() => {
      const active = getActivePriority();
      if (!active) {
        // যদি শিডিউল শেষ হয়ে যায় এবং বর্তমানে আজান/প্রোগ্রাম মোডে থাকে, তবে গজলে ফিরে যাবে
        if (playerState === PlayerState.AZAN || playerState === PlayerState.SCHEDULED_PROGRAM) {
          if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentPrayer(null);
              setCurrentSchedule(null);
              // Fix: Use functional state update to avoid TypeScript narrowing issues with closures
              // and ensure we're checking the actual current state.
              setPlayerState(prev => prev === PlayerState.PAUSED ? PlayerState.PAUSED : PlayerState.PLAYING);
              setIsTransitioning(false);
            }, 2000);
          }
        }
        return;
      }

      // যদি নতুন কোনো প্রায়োরিটি ম্যাচ করে যা বর্তমানে বাজছে না
      if (active.type === PlayerState.AZAN && currentPrayer !== active.name) {
        setCurrentPrayer(active.name);
        setCurrentSchedule(null);
        setPlayerState(PlayerState.AZAN);
      } else if (active.type === PlayerState.SCHEDULED_PROGRAM && currentSchedule?.title !== active.data?.title) {
        setCurrentPrayer(null);
        setCurrentSchedule(active.data);
        setPlayerState(PlayerState.SCHEDULED_PROGRAM);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [getActivePriority, playerState, currentPrayer, currentSchedule, isTransitioning]);

  const performShuffle = useCallback(() => {
    const nextGojol = GOJOL_LIST[Math.floor(Math.random() * GOJOL_LIST.length)];
    setCurrentGojol(nextGojol);
    setCurrentSchedule(null);
    setCurrentPrayer(null);
    setPlayerState(PlayerState.PLAYING);
    setIsTransitioning(false);
  }, []);

  const handleShuffle = useCallback(() => {
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    setIsTransitioning(false);
    performShuffle();
  }, [performShuffle]);

  const handleTogglePlay = useCallback(() => {
    if (playerState === PlayerState.PAUSED) {
      // প্লে করার সময় প্রথমে চেক করবে কোনো শিডিউল আছে কিনা
      const active = getActivePriority();
      if (active) {
        if (active.type === PlayerState.AZAN) {
          setCurrentPrayer(active.name);
          setPlayerState(PlayerState.AZAN);
        } else {
          setCurrentSchedule(active.data);
          setPlayerState(PlayerState.SCHEDULED_PROGRAM);
        }
      } else {
        setPlayerState(PlayerState.PLAYING);
      }
    } else {
      setPlayerState(PlayerState.PAUSED);
    }
  }, [playerState, getActivePriority]);

  const handleAudioEnded = () => {
    setIsTransitioning(true);
    // যদি আজান বা শিডিউল শেষ হয়, তবে গজলে ফিরে যাবে
    transitionTimeoutRef.current = window.setTimeout(() => performShuffle(), 2000);
  };

  const getDisplayTitle = () => {
    if (playerState === PlayerState.AZAN || currentPrayer) return `${currentPrayer || 'পবিত্র'} আজান`;
    if (playerState === PlayerState.SCHEDULED_PROGRAM || currentSchedule) return currentSchedule?.title;
    return currentGojol.title;
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-3 pt-1 md:pt-4 lg:pt-6 overflow-y-auto overflow-x-hidden scroll-smooth">
      <audio
        ref={audioRef}
        src={currentSrc}
        onEnded={handleAudioEnded}
        onError={() => {
          setTimeout(handleShuffle, 2000);
        }}
        muted={isMuted}
        playsInline
      />

      {/* Header */}
      <header className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 mb-6 py-3 border-b border-emerald-500/10">
        <div className="text-center sm:text-left flex flex-col gap-1">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Radio className="text-emerald-400 w-8 h-8 md:w-12 lg:w-14 drop-shadow-md" />
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-400 via-emerald-300 to-yellow-200 bg-clip-text text-transparent leading-none py-1 block">
              রেডিও দীন
            </h1>
          </div>
          <p className="text-emerald-100 text-[10px] md:text-xs lg:text-sm opacity-80 font-bold tracking-[0.1em] mt-0.5">সুস্থ ও সুন্দর সুরের সাথে সারাক্ষণ...</p>
        </div>

        <div className="flex flex-col items-center sm:items-end text-emerald-500 font-medium">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-300 mb-1 drop-shadow-lg">
            {currentTime}
          </div>
          <div className="flex flex-col items-center sm:items-end gap-0.5 text-[9px] md:text-xs opacity-90 text-emerald-50 font-bold">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-emerald-400" />
              <span>{getBengaliDate()} (বাংলা)</span>
            </div>
            <div className="tracking-wide opacity-50 font-medium">{getEnglishDate()} (ইংরেজি)</div>
          </div>
        </div>
      </header>

      {/* Main Player Card */}
      <div className="w-full max-w-[280px] md:max-w-[360px] glass-panel rounded-[2rem] p-7 md:p-9 shadow-2xl flex flex-col items-center relative overflow-hidden mb-10 border border-white/5">
        {isTransitioning && (
          <div className="absolute inset-0 bg-emerald-950/95 backdrop-blur-md z-20 flex flex-col items-center justify-center">
            <Hourglass className="w-8 h-8 text-yellow-400 animate-spin" />
          </div>
        )}

        <div className="w-32 h-32 md:w-40 md:h-40 mb-5">
          <Logo isPlaying={(playerState !== PlayerState.PAUSED) && !isTransitioning} />
        </div>

        <div className="text-center mb-5 w-full min-h-[3.5rem] flex flex-col justify-center">
          <h2 className="text-[13px] md:text-sm font-normal italic text-white drop-shadow-sm leading-tight line-clamp-2 px-1">
            {getDisplayTitle()}
          </h2>
          {(playerState === PlayerState.AZAN || currentPrayer) && (
            <p className="text-yellow-400 font-black uppercase text-[9px] md:text-[10px] mt-2 animate-pulse tracking-[0.3em]">পবিত্র আহ্বান</p>
          )}
          {(playerState === PlayerState.SCHEDULED_PROGRAM || currentSchedule) && (
            <p className="text-emerald-300 font-black uppercase text-[9px] md:text-[10px] mt-2 animate-pulse tracking-[0.3em]">বিশেষ আয়োজন</p>
          )}
        </div>

        <div className="w-full mb-6 px-3">
          <Visualizer isPlaying={(playerState !== PlayerState.PAUSED) && !isTransitioning} />
        </div>

        <div className="flex items-center gap-6 mb-7">
          <button onClick={() => setIsMuted(!isMuted)} className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 transition-all active:scale-90 border border-white/5">
            <Volume2 className={`w-5 h-5 ${isMuted ? 'text-red-500' : 'text-white'}`} />
          </button>
          <button onClick={handleTogglePlay} disabled={isTransitioning} className={`w-14 h-14 md:w-18 md:h-18 rounded-full flex items-center justify-center shadow-xl transition-all transform active:scale-95 ${isTransitioning ? 'bg-gray-600 opacity-50' : 'bg-emerald-500 hover:bg-emerald-400 border-2 border-white/10'}`}>
            {(playerState !== PlayerState.PAUSED) && !isTransitioning ? (
              <Pause className="w-7 h-7 md:w-9 md:h-9 text-white" />
            ) : (
              <Play className="w-7 h-7 md:w-9 md:h-9 text-white translate-x-0.5" />
            )}
          </button>
          <button onClick={handleShuffle} className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 transition-all active:scale-90 border border-white/5">
            <SkipForward className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="w-full grid grid-cols-2 gap-3 text-[9px] font-black text-emerald-100 uppercase tracking-widest">
          <div className="flex items-center justify-center gap-2 bg-black/30 py-3.5 rounded-xl border border-white/5 shadow-inner">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>লাইভ ২৪/৭</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-black/30 py-3.5 rounded-xl border border-white/5 shadow-inner">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>সুরক্ষিত</span>
          </div>
        </div>
      </div>

      {/* Today's Events - Visual Notification */}
      <div className="w-full max-w-5xl px-3 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-panel p-5 rounded-3xl border-emerald-500/20">
            <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold">
              <AudioLines className="w-5 h-5" />
              <span>প্রতিদিনের কুরআন তেলাওয়াত</span>
            </div>
            <div className="space-y-2">
              {QURAN_SCHEDULE.map((q, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs opacity-80 py-2 border-b border-white/5 last:border-0">
                  <span className={currentTime.includes(q.time) ? 'text-emerald-300 font-bold' : ''}>{q.title}</span>
                  <span className={`font-bold ${currentTime.includes(q.time) ? 'text-emerald-400 animate-pulse' : 'text-yellow-400'}`}>{q.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-5 rounded-3xl border-yellow-500/20">
            <div className="flex items-center gap-2 mb-3 text-yellow-400 font-bold">
              <Calendar className="w-5 h-5" />
              <span>আসন্ন বিশেষ আলোচনা</span>
            </div>
            <div className="space-y-2">
              {DISCUSSION_SCHEDULE.map((d, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs opacity-80 py-2 border-b border-white/5 last:border-0">
                  <span>{d.title}</span>
                  <span className="font-bold text-emerald-400">{d.date} | {d.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Prayer Times Section */}
      <div className="w-full max-w-5xl px-3 mb-10">
        <h3 className="text-lg md:text-xl font-black mb-5 flex items-center justify-center gap-3 text-emerald-400">
          <MapPin className="w-5 h-5" />
          আজকের নামাজের ওয়াক্ত ({locationName})
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {prayerTimes ? Object.entries(prayerTimes).map(([key, time]) => {
            const isCurrent = currentPrayer?.toLowerCase() === PRAYER_LABELS[key]?.toLowerCase() || currentTime.includes(time);
            return (
              <div key={key} className={`glass-panel p-3.5 md:p-5 rounded-2xl text-center border-emerald-500/10 transition-all duration-300 ${isCurrent ? 'bg-emerald-500/70 border-emerald-200 scale-105 shadow-lg z-10' : ''}`}>
                <p className="text-[9px] md:text-[10px] uppercase opacity-70 mb-1.5 font-black tracking-widest text-emerald-50">
                  {PRAYER_LABELS[key] || key}
                </p>
                <p className={`text-sm md:text-base font-bold whitespace-nowrap ${isCurrent ? 'text-yellow-300' : 'text-white'}`}>{time}</p>
              </div>
            );
          }) : (
            <div className="col-span-full h-20"></div>
          )}
        </div>
      </div>

      {/* Daily Hadith Section */}
      {dailyHadith && (
        <div className="w-full max-w-3xl px-4 mb-12">
          <div className="glass-panel rounded-[1.5rem] p-6 md:p-9 border-yellow-500/20 relative overflow-hidden group hover:border-emerald-500/40 transition-all shadow-lg">
            <div className="absolute -top-3 -right-3 p-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
              <BookOpen className="w-16 h-16 text-white" />
            </div>
            <div className="flex items-center gap-2 text-yellow-400 mb-4 font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">
              <div className="w-8 h-[2px] bg-yellow-400 rounded-full"></div>
              আজকের হাদীস
            </div>
            <p className="text-white text-sm md:text-xl font-bold leading-relaxed mb-4 text-justify">
              " {dailyHadith.text} "
            </p>
            <p className="text-emerald-300 font-black text-xs md:text-sm text-right opacity-80">
              — {dailyHadith.reference}
            </p>
          </div>
        </div>
      )}

      <footer className="mt-auto mb-8 text-center max-w-xs text-white/20 text-[9px] md:text-[10px] leading-relaxed pt-6 border-t border-white/5 w-full font-bold tracking-wide">
        রেডিও দীন - আপনার প্রতিদিনের আধ্যাত্মিক সঙ্গী
      </footer>
    </div>
  );
};

export default App;
