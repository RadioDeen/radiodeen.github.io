
export interface Hadith {
  text: string;
  reference: string;
}

const HADITH_LIST: Hadith[] = [
  {
    text: "তোমাদের মধ্যে সেই ব্যক্তিই সর্বোত্তম, যে কুরআন শিক্ষা করে এবং অন্যকে শিক্ষা দেয়।",
    reference: "সহীহ বুখারী: ৫০২৭"
  },
  {
    text: "পবিত্রতা ঈমানের অর্ধেক।",
    reference: "সহীহ মুসলিম: ২২৩"
  },
  {
    text: "সব কাজই নিয়তের ওপর নির্ভরশীল।",
    reference: "সহীহ বুখারী: ১"
  },
  {
    text: "প্রকৃত মুসলিম সেই ব্যক্তি, যার জিহ্বা ও হাত থেকে অন্য মুসলিম নিরাপদ থাকে।",
    reference: "সহীহ বুখারী: ১০"
  },
  {
    text: "যে ব্যক্তি মানুষকে দয়া করে না, আল্লাহও তার প্রতি দয়া করেন না।",
    reference: "সহীহ মুসলিম: ২৩১৯"
  },
  {
    text: "তোমরা সহজ করো, কঠিন করো না; সুসংবাদ দাও, মানুষকে দূরে সরিয়ে দিয়ো না।",
    reference: "সহীহ বুখারী: ৬৯"
  },
  {
    text: "নিশ্চয়ই আল্লাহ সুন্দর এবং তিনি সৌন্দর্যকে পছন্দ করেন।",
    reference: "সহীহ মুসলিম: ৯১"
  },
  {
    text: "মজলুমের বদদোয়া থেকে বেঁচে থাকো, কারণ তার দোয়া ও আল্লাহর মাঝে কোনো পর্দা নেই।",
    reference: "সহীহ বুখারী: ২৪৪৮"
  },
  {
    text: "যে ব্যক্তি আমাদের ছোটদের স্নেহ করে না এবং বড়দের সম্মান দেখায় না, সে আমাদের দলভুক্ত নয়।",
    reference: "সুনানে তিরমিযী: ১৯১৯"
  },
  {
    text: "সত্য মানুষকে মুক্তি দেয়, আর মিথ্যা মানুষকে ধ্বংস করে।",
    reference: "আল-মুজামুল কাবীর: ২৬৪০"
  }
];

export const getDailyHadith = (): Hadith => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  return HADITH_LIST[dayOfYear % HADITH_LIST.length];
};
