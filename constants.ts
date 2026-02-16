
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

// ৫ ওয়াক্তের আজান লিংক
export const AZAN_URLS: Record<string, string> = {
  'ফজর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Fajr_Azan.mp3',
  'যোহর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Zuhr_Azan.mp3',
  'আসর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Asr_Azan.mp3',
  'মাগরিব': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Magrib_Azan.mp3',
  'এশা': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Isha_Azan.mp3'
};

// প্রতিদিনের কুরআন তেলাওয়াত শিডিউল (HH:MM AM/PM ফরম্যাটে)
export const QURAN_SCHEDULE: ScheduledProgram[] = [
  {
    time: "০৬:০০ এএম", // প্রতিদিন সকাল ৬টায়
    url: "https://server8.mp3quran.net/afs/001.mp3", // সুরা ফাতিহা (উদাহরণ)
    title: "কুরআন তেলাওয়াত - প্রতিদিনের শুরু"
  },
  {
    time: "১০:০০ পিএম", // প্রতিদিন রাত ১০টায়
    url: "https://server8.mp3quran.net/afs/067.mp3", // সুরা মুলক (উদাহরণ)
    title: "কুরআন তেলাওয়াত - রাতের প্রশান্তি"
  }
];

// নির্দিষ্ট তারিখের আলোচনা শিডিউল (YYYY-MM-DD ফরম্যাটে)
export const DISCUSSION_SCHEDULE: ScheduledProgram[] = [
  {
    date: "2024-05-20", // উদাহরণ তারিখ
    time: "০৯:০০ পিএম",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // আপনার অডিও লিংক এখানে দিন
    title: "বিশেষ আলোচনা - দ্বীনি জীবন"
  }
];
