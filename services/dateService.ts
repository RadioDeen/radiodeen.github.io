
export const getEnglishDate = () => {
  return new Intl.DateTimeFormat('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());
};

/**
 * Calculates current Bengali Date (Bangabda) based on the 2019 Bangladesh Reform.
 * Reform: Boishakh to Ashwin (first 6 months) = 31 days.
 * Kartik to Magh (next 4 months) = 30 days.
 * Falgun = 29 days (30 in leap year), Chaitra = 30 days.
 */
export const getBengaliDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth(); // 0-indexed
  const year = date.getFullYear();

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  const bnMonths = [
    "বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন", 
    "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"
  ];

  let bnDay, bnMonthIndex, bnYear;

  // Bengali Year offset
  if (month < 3 || (month === 3 && day < 14)) {
    bnYear = year - 594;
  } else {
    bnYear = year - 593;
  }

  const getDayOfYear = (d: Date) => {
    const start = new Date(d.getFullYear(), 0, 0);
    const diff = d.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const dayOfYear = getDayOfYear(date);
  const boishakhStartDay = getDayOfYear(new Date(year, 3, 14)); // April 14

  let dayInBnYear = dayOfYear - boishakhStartDay + 1;
  if (dayInBnYear <= 0) {
    const prevYearLeap = ((year - 1) % 4 === 0 && (year - 1) % 100 !== 0) || ((year - 1) % 400 === 0);
    dayInBnYear += (prevYearLeap ? 366 : 365);
  }

  // 2019 Reform Durations
  const durations = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, isLeapYear ? 30 : 29, 30];
  
  let tempDays = dayInBnYear;
  bnMonthIndex = 0;
  for (let i = 0; i < 12; i++) {
    if (tempDays <= durations[i]) {
      bnDay = tempDays;
      bnMonthIndex = i;
      break;
    }
    tempDays -= durations[i];
  }

  const toBnDigit = (num: number) => {
    return num.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
  };

  // Added a comma after the month name as requested
  return `${toBnDigit(bnDay!)} ${bnMonths[bnMonthIndex]}, ${toBnDigit(bnYear)}`;
};

export const getTime = () => {
  return new Intl.DateTimeFormat('bn-BD', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).format(new Date());
};
