
import { PrayerTimes } from '../types';

/**
 * Calculates prayer times based on coordinates and date.
 * Uses University of Islamic Sciences, Karachi method (Fajr/Isha 18°)
 * and Hanafi madhab for Asr.
 */
export const calculatePrayerTimes = (lat: number, lng: number): PrayerTimes => {
  const date = new Date();
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  
  const gamma = 2 * Math.PI / 365 * (dayOfYear - 1 + (date.getHours() - 12) / 24);
  const eqtime = 229.18 * (0.000075 + 0.001868 * Math.cos(gamma) - 0.032077 * Math.sin(gamma) - 0.014615 * Math.cos(2 * gamma) - 0.040849 * Math.sin(2 * gamma));
  const decl = 0.006918 - 0.399912 * Math.cos(gamma) + 0.070257 * Math.sin(gamma) - 0.006758 * Math.cos(2 * gamma) + 0.000907 * Math.sin(2 * gamma) - 0.002697 * Math.cos(3 * gamma) + 0.00148 * Math.sin(3 * gamma);

  const timeToDecimal = (hours: number) => {
    let h = Math.floor(hours);
    let m = Math.floor((hours - h) * 60);
    return { h, m };
  };

  const toBnDigit = (num: number) => {
    return num.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
  };

  const format12hBn = (hours: number) => {
    let { h, m } = timeToDecimal(hours);
    const suffix = h >= 12 ? 'পিএম' : 'এএম';
    h = h % 12 || 12;
    return `${toBnDigit(h)}:${String(toBnDigit(m)).padStart(2, '০')} ${suffix}`;
  };

  const timezone = 6; // Bangladesh is GMT+6
  const noon = 12 + (timezone - lng / 15) - eqtime / 60;

  const getSunTime = (angle: number, direction: 'morning' | 'evening') => {
    const latRad = lat * Math.PI / 180;
    const angleRad = angle * Math.PI / 180;
    const hourAngle = Math.acos((Math.cos(angleRad) - Math.sin(latRad) * Math.sin(decl)) / (Math.cos(latRad) * Math.cos(decl))) * 180 / Math.PI;
    return direction === 'morning' ? noon - hourAngle / 15 : noon + hourAngle / 15;
  };

  const getAsrTime = () => {
    const latRad = lat * Math.PI / 180;
    const zen = Math.abs(latRad - decl);
    const angleRad = Math.atan(2 + Math.tan(zen));
    const hourAngle = Math.acos((Math.sin(Math.PI/2 - angleRad) - Math.sin(latRad) * Math.sin(decl)) / (Math.cos(latRad) * Math.cos(decl))) * 180 / Math.PI;
    return noon + hourAngle / 15;
  };

  // Calculations
  const fajr = getSunTime(90 + 18, 'morning');
  const sunrise = getSunTime(90 + 0.833, 'morning');
  const dhuhr = noon;
  const asr = getAsrTime();
  const maghrib = getSunTime(90 + 0.833, 'evening');
  const isha = getSunTime(90 + 18, 'evening');

  return {
    fajr: format12hBn(fajr),
    sunrise: format12hBn(sunrise),
    dhuhr: format12hBn(dhuhr),
    asr: format12hBn(asr),
    maghrib: format12hBn(maghrib),
    isha: format12hBn(isha)
  };
};

export const isItTimeForAzan = (times: PrayerTimes): string | null => {
  const now = new Date();
  let hours = now.getHours();
  const mins = now.getMinutes();
  const suffix = hours >= 12 ? 'পিএম' : 'এএম';
  const h12 = hours % 12 || 12;
  
  const toBnDigit = (num: number) => {
    return num.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
  };

  const currentHM = `${toBnDigit(h12)}:${String(toBnDigit(mins)).padStart(2, '০')} ${suffix}`;
  
  if (currentHM === times.fajr) return 'ফজর';
  if (currentHM === times.dhuhr) return 'যোহর';
  if (currentHM === times.asr) return 'আসর';
  if (currentHM === times.maghrib) return 'মাগরিব';
  if (currentHM === times.isha) return 'এশা';
  
  return null;
};
