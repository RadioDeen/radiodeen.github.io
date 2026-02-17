
export const toBnDigit = (num: number | string) => {
  return num.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
};

export const toEnDigit = (num: string) => {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num.replace(/[০-৯]/g, d => bnDigits.indexOf(d).toString());
};

export const getEnglishDate = () => {
  return new Intl.DateTimeFormat('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());
};

export const getBengaliDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const bnMonths = ["বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন", "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"];

  let bnYear = month < 3 || (month === 3 && day < 14) ? year - 594 : year - 593;

  const getDayOfYear = (d: Date) => {
    const start = new Date(d.getFullYear(), 0, 0);
    return Math.floor((d.getTime() - start.getTime()) / 86400000);
  };

  const dayOfYear = getDayOfYear(date);
  const boishakhStartDay = getDayOfYear(new Date(year, 3, 14));
  let dayInBnYear = dayOfYear - boishakhStartDay + 1;
  if (dayInBnYear <= 0) {
    const prevYearLeap = ((year - 1) % 4 === 0 && (year - 1) % 100 !== 0) || ((year - 1) % 400 === 0);
    dayInBnYear += (prevYearLeap ? 366 : 365);
  }

  const durations = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, isLeapYear ? 30 : 29, 30];
  let tempDays = dayInBnYear;
  for (let i = 0; i < 12; i++) {
    if (tempDays <= durations[i]) {
      return `${toBnDigit(tempDays)} ${bnMonths[i]}, ${toBnDigit(bnYear)}`;
    }
    tempDays -= durations[i];
  }
  return '';
};

/**
 * রিটার্ন করে "10:45 AM" ফরম্যাটে (ইন্টারনাল ম্যাচিং এর জন্য)
 */
export const getNormalizedCurrentTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
};

/**
 * রিটার্ন করে "১০:৪৫:০৫ এএম" (ডিসপ্লে এর জন্য)
 */
export const getTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'পিএম' : 'এএম';
  hours = hours % 12 || 12;
  return `${toBnDigit(hours)}:${toBnDigit(minutes.toString().padStart(2, '0'))}:${toBnDigit(seconds.toString().padStart(2, '0'))} ${ampm}`;
};

/**
 * যে কোনো সময় স্ট্রিংকে (বাংলা বা ইংরেজি) "10:45 AM" ফরম্যাটে নিয়ে যায়
 */
export const normalizeTimeInput = (timeStr: string) => {
  let normalized = toEnDigit(timeStr)
    .replace('এএম', 'AM')
    .replace('পিএম', 'PM')
    .replace(/\s+/g, ' ')
    .trim();
  return normalized;
};
