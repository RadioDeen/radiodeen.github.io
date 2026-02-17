
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Gojol, PlayerState, PrayerTimes, ScheduledProgram } from './types';
import { GOJOL_LIST, AZAN_URLS, QURAN_SCHEDULE, DISCUSSION_SCHEDULE, MORNING_QURAN_LIST, NIGHT_QURAN_LIST } from './constants';
import { calculatePrayerTimes, isItTimeForAzan } from './services/prayerService';
import { getTime, getLogicTime, getEnglishDate, getBengaliDate } from './services/dateService';
import { getDailyHadith, Hadith } from './services/hadithService';
import { Visualizer } from './components/Visualizer';
import { Logo } from './components/Logo';
import { Play, Pause, SkipForward, Radio, Clock, Volume2, ShieldCheck, Hourglass, Calendar, BookOpen, MapPin, AudioLines, List, X } from 'lucide-react';

const PRAYER_LABELS: Record<string, string> = {
  fajr: 'ফজর', sunrise: 'সূর্যোদয়', dhuhr: 'যোহর', asr: 'আসর', maghrib: 'মাগরিব', isha: 'এশা'
};

const App: React.FC = () => {
  const [currentGojol, setCurrentGojol] = useState<Gojol>(() => GOJOL_LIST[Math.floor(Math.random() * GOJOL_LIST.length)]);
  const [playerState, setPlayerState] = useState<PlayerState>(PlayerState.PAUSED);
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [currentPrayer, setCurrentPrayer] = useState<string | null>(null);
  const [currentSchedule, setCurrentSchedule] = useState<ScheduledProgram | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentTime, setCurrentTime] = useState(getTime());
  const [dailyHadith, setDailyHadith] = useState<Hadith | null>(null);
  const [locationName, setLocationName] = useState('ঢাকা');
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const transitionTimeoutRef = useRef<any>(null);
  const lastTriggeredTimeRef = useRef<string>('');

  const dailySeed = useMemo(() => {
    const now = new Date();
    return now.getFullYear() + now.getMonth() + now.getDate();
  }, [currentTime.split(' ')[2]]);

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

  useEffect(() => {
    const updateTimes = (lat: number = 23.8103, lng: number = 90.4125) => {
      setPrayerTimes(calculatePrayerTimes(lat, lng));
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => { updateTimes(pos.coords.latitude, pos.coords.longitude); setLocationName('আপনার অবস্থান'); },
        () => updateTimes()
      );
    } else { updateTimes(); }
  }, []);

  const safePlay = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
    } catch (err) {
      console.log("Autoplay blocked, waiting for interaction.");
    }
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playerState !== PlayerState.PAUSED && !isTransitioning) {
      safePlay();
    } else {
      audioRef.current.pause();
    }
  }, [playerState, isTransitioning, currentSrc, safePlay]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (playerState !== PlayerState.PAUSED && !isTransitioning) safePlay();
    }
  }, [currentSrc]);

  const getActivePriority = useCallback(() => {
    if (!prayerTimes) return null;

    const formattedTime = getLogicTime();
    const now = new Date();
    const currentISODate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    // ১. আজান
    const azanName = isItTimeForAzan(prayerTimes);
    if (azanName) return { type: PlayerState.AZAN, name: azanName, data: null, time: formattedTime };

    // ২. বিশেষ আলোচনা
    const discussion = DISCUSSION_SCHEDULE.find(d => d.date === currentISODate && d.time === formattedTime);
    if (discussion) return { type: PlayerState.SCHEDULED_PROGRAM, name: null, data: discussion, time: formattedTime };

    // ৩. কুরআন তেলাওয়াত
    const quran = QURAN_SCHEDULE.find(q => q.time === formattedTime);
    if (quran) {
      const list = quran.time.includes('এএম') ? MORNING_QURAN_LIST : NIGHT_QURAN_LIST;
      const selected = list[dailySeed % list.length];
      return { 
        type: PlayerState.SCHEDULED_PROGRAM, 
        name: null, 
        data: { ...quran, url: selected.url, title: selected.title },
        time: formattedTime
      };
    }
    return null;
  }, [prayerTimes, dailySeed]);

  // প্রতি ১ সেকেন্ড অন্তর শিডিউল চেক
  useEffect(() => {
    const interval = setInterval(() => {
      const active = getActivePriority();
      
      // যদি এখন কোনো শিডিউল টাইম হয় এবং আমরা অলরেডি এই মিনিটের জন্য এটি প্লে না করে থাকি
      if (active && lastTriggeredTimeRef.current !== active.time) {
        
        // যদি বর্তমানে প্লেয়ার পজ থাকে, তাহলে এটি সরাসরি সেট হবে যখন ইউজার প্লে দিবে
        // কিন্তু যদি প্লেয়ার অলরেডি রানিং থাকে, আমরা ট্রানজিশন করবো
        if (playerState !== PlayerState.PAUSED && !isTransitioning) {
          setIsTransitioning(true);
          lastTriggeredTimeRef.current = active.time;
          
          if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
          
          transitionTimeoutRef.current = setTimeout(() => {
            if (active.type === PlayerState.AZAN) {
              setCurrentPrayer(active.name);
              setCurrentSchedule(null);
              setPlayerState(PlayerState.AZAN);
            } else {
              setCurrentPrayer(null);
              setCurrentSchedule(active.data);
              setPlayerState(PlayerState.SCHEDULED_PROGRAM);
            }
            setIsTransitioning(false);
          }, 2000);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [getActivePriority, playerState, isTransitioning]);

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
    performShuffle();
  }, [performShuffle]);

  const handleTogglePlay = useCallback(() => {
    if (playerState === PlayerState.PAUSED) {
      const active = getActivePriority();
      if (active) {
        lastTriggeredTimeRef.current = active.time;
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

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-3 pt-1 md:pt-4 lg:pt-6 overflow-y-auto overflow-x-hidden scroll-smooth relative">
      <audio
        ref={audioRef}
        src={currentSrc}
        onEnded={() => {
          setIsTransitioning(true);
          setTimeout(performShuffle, 1500);
        }}
        onError={() => setTimeout(handleShuffle, 2000)}
        muted={isMuted}
        playsInline
      />

      <header className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 mb-6 py-3 border-b border-emerald-500/10">
        <div className="text-center sm:text-left flex flex-col gap-1">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Radio className="text-emerald-400 w-8 h-8 md:w-12 lg:w-14 drop-shadow-md" />
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-400 via-emerald-300 to-yellow-200 bg-clip-text text-transparent py-1">রেডিও দীন</h1>
          </div>
          <p className="text-emerald-100 text-[10px] md:text-xs lg:text-sm opacity-80 font-bold tracking-[0.1em]">সুস্থ ও সুন্দর সুরের সাথে সারাক্ষণ...</p>
        </div>
        <div className="flex flex-col items-center sm:items-end">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-300 mb-1 drop-shadow-lg">{currentTime}</div>
          <div className="flex flex-col items-center sm:items-end gap-0.5 text-[9px] md:text-xs text-emerald-50 font-bold">
            <div className="flex items-center gap-1"><Calendar className="w-3 h-3 text-emerald-400" /><span>{getBengaliDate()} (বাংলা)</span></div>
            <div className="opacity-50">{getEnglishDate()} (ইংরেজি)</div>
          </div>
        </div>
      </header>

      <div className="w-full max-w-[280px] md:max-w-[360px] glass-panel rounded-[2rem] p-7 md:p-9 shadow-2xl flex flex-col items-center relative overflow-hidden mb-10 border border-white/5">
        {isTransitioning && (
          <div className="absolute inset-0 bg-emerald-950/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-4">
            <Hourglass className="w-8 h-8 text-yellow-400 animate-spin mb-3" />
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-300">লোড হচ্ছে...</p>
          </div>
        )}
        <div className="w-32 h-32 md:w-40 md:h-40 mb-5"><Logo isPlaying={playerState !== PlayerState.PAUSED && !isTransitioning} /></div>
        <div className="text-center mb-5 w-full min-h-[3.5rem] flex flex-col justify-center">
          <h2 className="text-[13px] md:text-sm font-normal italic text-white leading-tight line-clamp-2 px-1">
            {(playerState === PlayerState.AZAN || currentPrayer) ? `${currentPrayer || 'পবিত্র'} আজান` : (currentSchedule?.title || currentGojol.title)}
          </h2>
          {(playerState === PlayerState.AZAN || currentPrayer) && <p className="text-yellow-400 font-black uppercase text-[9px] mt-2 animate-pulse tracking-[0.3em]">পবিত্র আহ্বান</p>}
          {(playerState === PlayerState.SCHEDULED_PROGRAM || currentSchedule) && <p className="text-emerald-300 font-black uppercase text-[9px] mt-2 animate-pulse tracking-[0.3em]">বিশেষ আয়োজন</p>}
        </div>
        <div className="w-full mb-6 px-3"><Visualizer isPlaying={playerState !== PlayerState.PAUSED && !isTransitioning} /></div>
        <div className="flex items-center gap-6 mb-7">
          <button onClick={() => setIsMuted(!isMuted)} className="p-3.5 rounded-full bg-white/5 border border-white/5"><Volume2 className={`w-5 h-5 ${isMuted ? 'text-red-500' : 'text-white'}`} /></button>
          <button onClick={handleTogglePlay} disabled={isTransitioning} className="w-14 h-14 md:w-18 md:h-18 rounded-full flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 shadow-xl">
            {playerState !== PlayerState.PAUSED && !isTransitioning ? <Pause className="w-7 h-7 text-white" /> : <Play className="w-7 h-7 text-white translate-x-0.5" />}
          </button>
          <button onClick={handleShuffle} className="p-3.5 rounded-full bg-white/5 border border-white/5"><SkipForward className="w-5 h-5 text-white" /></button>
        </div>
        <div className="w-full grid grid-cols-2 gap-3 text-[9px] font-black text-emerald-100 uppercase tracking-widest">
          <div className="flex items-center justify-center gap-2 bg-black/30 py-3.5 rounded-xl">
            <Clock className="w-3.5 h-3.5 text-emerald-400" /><span>লাইভ ২৪/৭</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-black/30 py-3.5 rounded-xl">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /><span>সুরক্ষিত</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl px-3 mb-10">
        <h3 className="text-lg md:text-xl font-black mb-5 flex items-center justify-center gap-3 text-emerald-400"><MapPin className="w-5 h-5" />আজকের নামাজের ওয়াক্ত ({locationName})</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {prayerTimes && Object.entries(prayerTimes).map(([key, time]) => {
            const isCurrent = currentPrayer?.toLowerCase() === PRAYER_LABELS[key]?.toLowerCase();
            return (
              <div key={key} className={`glass-panel p-3.5 md:p-5 rounded-2xl text-center transition-all ${isCurrent ? 'bg-emerald-500/70 scale-105 shadow-lg' : ''}`}>
                <p className="text-[9px] uppercase opacity-70 mb-1.5 font-black tracking-widest text-emerald-50">{PRAYER_LABELS[key] || key}</p>
                <p className={`text-sm md:text-base font-bold ${isCurrent ? 'text-yellow-300' : 'text-white'}`}>{time}</p>
              </div>
            );
          })}
        </div>
      </div>

      {dailyHadith && (
        <div className="w-full max-w-3xl px-4 mb-20">
          <div className="glass-panel rounded-[1.5rem] p-6 md:p-9 border-yellow-500/20 relative group overflow-hidden">
            <div className="absolute -top-3 -right-3 opacity-5 rotate-12"><BookOpen className="w-16 h-16 text-white" /></div>
            <div className="flex items-center gap-2 text-yellow-400 mb-4 font-black text-[10px] uppercase tracking-[0.2em]"><div className="w-8 h-[2px] bg-yellow-400"></div>আজকের হাদীস</div>
            <p className="text-white text-sm md:text-xl font-bold leading-relaxed mb-4 text-justify">" {dailyHadith.text} "</p>
            <p className="text-emerald-300 font-black text-xs text-right">— {dailyHadith.reference}</p>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setIsScheduleOpen(!isScheduleOpen)} className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${isScheduleOpen ? 'bg-red-500 rotate-90' : 'bg-emerald-500 hover:scale-110'}`}>
          {isScheduleOpen ? <X className="w-6 h-6 text-white" /> : <List className="w-6 h-6 text-white" />}
        </button>
        {isScheduleOpen && (
          <div className="absolute bottom-20 right-0 w-[280px] md:w-[350px] glass-panel rounded-3xl p-6 shadow-2xl border-emerald-500/30 animate-in fade-in slide-in-from-bottom-5 overflow-hidden">
            <div className="max-h-[60vh] overflow-y-auto pr-1">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4 text-emerald-400 font-black text-sm uppercase tracking-wider"><AudioLines className="w-4 h-4" /><span>কুরআন তেলাওয়াত</span></div>
                <div className="space-y-2">
                  {QURAN_SCHEDULE.map((q, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border ${getLogicTime() === q.time ? 'bg-emerald-500/20 border-emerald-400' : 'bg-black/20 border-white/5'}`}>
                      <p className="text-[11px] text-white/90 font-bold mb-1">{q.time.includes('এএম') ? MORNING_QURAN_LIST[dailySeed % MORNING_QURAN_LIST.length].title : NIGHT_QURAN_LIST[dailySeed % NIGHT_QURAN_LIST.length].title}</p>
                      <p className="text-[10px] font-black text-emerald-400">{q.time}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4 text-yellow-400 font-black text-sm uppercase tracking-wider"><Calendar className="w-4 h-4" /><span>আসন্ন আলোচনা</span></div>
                <div className="space-y-2">
                  {DISCUSSION_SCHEDULE.map((d, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-black/20 border border-white/5">
                      <p className="text-[11px] text-white/90 font-bold mb-1">{d.title}</p>
                      <div className="flex justify-between text-[10px] font-black text-yellow-500"><span>{d.date}</span><span>{d.time}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer className="mt-auto mb-8 text-center text-white/20 text-[9px] font-bold tracking-wide">রেডিও দীন - আপনার প্রতিদিনের আধ্যাত্মিক সঙ্গী</footer>
    </div>
  );
};

export default App;
