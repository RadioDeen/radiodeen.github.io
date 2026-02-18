
export interface Gojol {
  id: string;
  title: string;
  artist: string;
  url: string;
  thumbnail: string;
}

export interface PrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export enum PlayerState {
  IDLE = 'IDLE',
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  AZAN = 'AZAN',
  SCHEDULED_PROGRAM = 'SCHEDULED_PROGRAM'
}

export interface ScheduledProgram {
  time: string; // Format: "HH:MM AM/PM" (e.g., "06:00 AM")
  url: string;
  title: string;
  programTitle?: string; // তিলাওয়াত বা আলোচনার বিশেষ টাইটেল (যেমন: "দিনের বরকতময় শুরু")
  date?: string; // Format: "YYYY-MM-DD" (optional, for specific dates)
}

export interface AppState {
  currentGojol: Gojol | null;
  isPlaying: boolean;
  isAzanActive: boolean;
  location: { lat: number; lng: number } | null;
  prayerTimes: PrayerTimes | null;
}
