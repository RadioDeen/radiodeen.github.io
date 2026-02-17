
export const toBnDigit = (num: number | string) => {
  return num.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
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
  let bnMonthIndex = 0;
  for (let i = 0; i < 12; i++) {
    if (tempDays <= durations[i]) {
      return `${toBnDigit(tempDays)} ${bnMonths[i]}, ${toBnDigit(bnYear)}`;
    }
    tempDays -= durations[i];
  }
  return '';
};

export const getTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'পিএম' : 'এএম';
  hours = hours % 12 || 12;
  
  return `${toBnDigit(hours)}:${toBnDigit(minutes.toString().padStart(2, '0'))}:${toBnDigit(seconds.toString().padStart(2, '0'))} ${ampm}`;
};

// এই ফাংশনটি শিডিউল ম্যাচ করার জন্য (সেকেন্ড ছাড়া)
export const getLogicTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'পিএম' : 'এএম';
  hours = hours % 12 || 12;
  return `${toBnDigit(hours)}:${toBnDigit(minutes.toString().padStart(2, '0'))} ${ampm}`;
};
