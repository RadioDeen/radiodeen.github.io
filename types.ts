
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
  AZAN = 'AZAN'
}

export interface AppState {
  currentGojol: Gojol | null;
  isPlaying: boolean;
  isAzanActive: boolean;
  location: { lat: number; lng: number } | null;
  prayerTimes: PrayerTimes | null;
}
