
import { Gojol, ScheduledProgram } from './types';

export const GOJOL_LIST: Gojol[] = [
  {
    id: '1',
    title: 'আমি চিৎকার করে কাঁদিতে চাহিয়া',
    artist: 'মাহমুদুল হাসান',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228461/Ami_chitkar_kore_kadite_chahiya_p7wq6j.mp3',
    thumbnail: 'https://picsum.photos/seed/islam1/400/400'
  },
  {
    id: '2',
    title: 'দাও খোদা দাও',
    artist: 'আবু রায়হান',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228466/Dao_Khoda_dao_amay_abar_b2scd7.mp3',
    thumbnail: 'https://picsum.photos/seed/islam2/400/400'
  },
  {
    id: '3',
    title: 'এতো ভালোবাসো কেন মালিক আমায়',
    artist: 'কলরব',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228476/Eto_valobaso_keno_Malik_drxkg2.mp3',
    thumbnail: 'https://picsum.photos/seed/islam3/400/400'
  },
  {
    id: '4',
    title: 'হারদাম আল্লাহ আল্লাহ কার',
    artist: 'সাঈদ আহমদ',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228463/Hardam_Allah_u9r3qt.mp3',
    thumbnail: 'https://picsum.photos/seed/islam4/400/400'
  },
  {
    id: '5',
    title: 'হে রাসূল বুঝিনা আমি',
    artist: 'তরিকুল ইসলাম',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228500/He_rasul_bujhina_ami_ziqe8v.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  },
  {
    id: '6',
    title: 'হৃদয় মাঝে মালা গাঁথি',
    artist: 'তরিকুল ইসলাম',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228470/Hridoy_majhe_mala_gathi_kdfhk9.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  }
];

// সকালের কুরআন তিলাওয়াত সংগ্রহ
export const MORNING_QURAN_LIST = [
  { url: "https://server8.mp3quran.net/afs/001.mp3", title: "সুরা ফাতিহা ও তিলাওয়াত (সকাল)" },
  { url: "https://server8.mp3quran.net/afs/055.mp3", title: "সুরা আর-রাহমান তিলাওয়াত (সকাল)" },
  { url: "https://server8.mp3quran.net/afs/036.mp3", title: "সুরা ইয়াসিন তিলাওয়াত (সকাল)" }
];

// রাতের কুরআন তিলাওয়াত সংগ্রহ
export const NIGHT_QURAN_LIST = [
  { url: "https://server8.mp3quran.net/afs/067.mp3", title: "সুরা মুলক তিলাওয়াত (রাত)" },
  { url: "https://server8.mp3quran.net/afs/073.mp3", title: "সুরা মুজাম্মিল তিলাওয়াত (রাত)" },
  { url: "https://server8.mp3quran.net/afs/032.mp3", title: "সুরা সাজদাহ তিলাওয়াত (রাত)" }
];

// ৫ ওয়াক্তের আজান লিংক
export const AZAN_URLS: Record<string, string> = {
  'ফজর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Fajr_Azan.mp3',
  'যোহর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Zuhr_Azan.mp3',
  'আসর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Asr_Azan.mp3',
  'মাগরিব': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Magrib_Azan.mp3',
  'এশা': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Isha_Azan.mp3'
};

/**
 * শিডিউল পরিবর্তন নির্দেশিকা:
 * time: "ঘন্টা:মিনিট এএম/পিএম" (যেমন: "০৯:৩০ পিএম") - অবশ্যই বাংলা সংখ্যা ব্যবহার করুন।
 */
export const QURAN_SCHEDULE: ScheduledProgram[] = [
  {
    time: "০৬:০০ এএম", // সকালের সময় পরিবর্তন করুন এখানে
    url: "", 
    title: "সকালের কুরআন তিলাওয়াত"
  },
  {
    time: "১০:০০ পিএম", // রাতের সময় পরিবর্তন করুন এখানে
    url: "", 
    title: "রাতের কুরআন তিলাওয়াত"
  }
];

/**
 * বিশেষ আলোচনার তারিখ পরিবর্তন:
 * date: "YYYY-MM-DD" ফরম্যাটে দিন (যেমন: "2024-05-21")
 */
export const DISCUSSION_SCHEDULE: ScheduledProgram[] = [
  {
    date: "2025-02-17", 
    time: "১০:৫৬ এএম",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "বিশেষ আলোচনা - দ্বীনি জীবন"
  }
];
