
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

// সকালের কুরআন তিলাওয়াত লিস্ট
export const MORNING_QURAN_LIST = [
  { url: "https://server8.mp3quran.net/afs/001.mp3", title: "সুরা ফাতিহা ও তিলাওয়াত (সকাল)" },
  { url: "https://server8.mp3quran.net/afs/055.mp3", title: "সুরা আর-রাহমান তিলাওয়াত (সকাল)" },
  { url: "https://server8.mp3quran.net/afs/036.mp3", title: "সুরা ইয়াসিন তিলাওয়াত (সকাল)" },
  { url: "https://server8.mp3quran.net/afs/056.mp3", title: "সুরা ওয়াকিয়াহ তিলাওয়াত (সকাল)" }
];

// রাতের কুরআন তিলাওয়াত লিস্ট
export const NIGHT_QURAN_LIST = [
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771245150/Abdul_Rahman_Mossad_nohprj.mp3", title: "আব্দুল রহমান মোসাদ" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771245171/Surah_Ar-Rahman_hzyix9.mp3", title: "সুরা আর-রাহমান" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771245162/Surah_Maryam_Sherif_Mostafa_qcllmi.mp3", title: "সুরা মারইয়াম" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771245149/Surah_Yaseen_Zikrullah_TV_mfqufz.mp3", title: "সুরা ইয়া-সীন" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771245125/Surah_Mulk_Abdul_Rahman_Mossad_wdv8kj.mp3", title: "সুরা মূলক" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771245097/Surah_Yunus_Abdul_Rahman_Mossad_oqwshp.mp3", title: "সুরা ইউনুছ" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771245081/Surah_Al-Muzzammil_Zikrullah_TV_r7svri.mp3", title: "সুরা আল-মুযযাম্মিল" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771245045/Surah_Maryam_Abdul_Rahman_Mossad_vgea42.mp3", title: "সুরা মারইয়াম" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771245033/Surah_Muhammad_Zikrullah_TV_vxmrqk.mp3", title: "সুরা মুহাম্মাদ" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771245025/Surah_An-Naba_Abdul_Rahman_Mossad_uicvrf.mp3", title: "সুরা আন-নাবা" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771244996/Surah_Sajdah_Abdul_Rahman_Mossad_brihjd.mp3", title: "সুরা সাজদাহ" },
  { url: "https://res.cloudinary.com/dc8vv80pc/video/upload/v1771244974/Surah_Ankabut_Abdul_Rahman_Mossad_u7wgph.mp3", title: "সুরা আনকাবূত" }
];

// ৫ ওয়াক্তের আজান লিংক
export const AZAN_URLS: Record<string, string> = {
  'ফজর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Fajr_Azan.mp3',
  'যোহর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Zuhr_Azan.mp3',
  'আসর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Asr_Azan.mp3',
  'মাগরিব': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Magrib_Azan.mp3',
  'এশা': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Isha_Azan.mp3'
};

// প্রতিদিনের কুরআন তেলাওয়াত শিডিউল (ডায়নামিক লজিক অ্যাপের ভেতর থাকবে)
export const QURAN_SCHEDULE: ScheduledProgram[] = [
  {
    time: "০৬:০০ এএম",
    url: "", // রেন্ডমলি সিলেক্ট হবে
    title: "দিনের বরকতময় শুরু"
  },
  {
    time: "১০:০০ পিএম",
    url: "", // রেন্ডমলি সিলেক্ট হবে
    title: "রাতের প্রশান্তি"
  }
];

// নির্দিষ্ট তারিখের আলোচনা শিডিউল
export const DISCUSSION_SCHEDULE: ScheduledProgram[] = [
  {
    date: "2024-05-20",
    time: "০৯:০০ পিএম",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "বিশেষ আলোচনা - দ্বীনি জীবন"
  }
];
