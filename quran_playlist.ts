
export interface QuranRecitation {
  id: string;
  title: string;
  url: string;
}

// সকাল ০৬:০০টার জন্য তিলাওয়াত তালিকা
export const MORNING_QURAN_PLAYLIST: QuranRecitation[] = [
  { id: 'm1', title: 'সুরা ফাতিহা', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312400/Surah_Fatiha_Taqrim_rlpyte.mp3' }
];

// রাত ১০:০০টা এবং সাধারণ তিলাওয়াত মোডের জন্য তালিকা
export const QURAN_PLAYLIST: QuranRecitation[] = [
  { id: 'q1', title: 'সুরা মারইয়াম', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312187/Surah_Maryam_Abdul_Rahman_Mossad_fazmhi.mp3' },
  { id: 'q2', title: 'সুরা মারইয়াম', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312323/Surah_Maryam_Sherif_Mostafa_o64dht.mp3' },
  { id: 'q3', title: 'সুরা মুলক', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312279/Surah_Mulk_Abdul_Rahman_Mossad_bnyjlb.mp3' },
  { id: 'q4', title: 'সুরা মুহাম্মাদ', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312272/Surah_Muhammad_Zikrullah_TV_xs9enb.mp3' },
  { id: 'q5', title: 'সুরা সাজদাহ', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312268/Surah_Sajdah_Abdul_Rahman_Mossad_pxemlv.mp3' },
  { id: 'q6', title: 'সুরা ইউনুছ', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312254/Surah_Yunus_Abdul_Rahman_Mossad_z67t1f.mp3' },
  { id: 'q7', title: 'সুরা আনকাবূত', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312160/Surah_Ankabut_Abdul_Rahman_Mossad_hps7yq.mp3' },
  { id: 'q8', title: 'সুরা ইয়া-সীন', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312332/Surah_Yaseen_Zikrullah_TV_zukhvo.mp3' },
  { id: 'q9', title: 'সুরা আল-মুযযাম্মিল', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312111/Surah_Al-Muzzammil_Zikrullah_TV_jnoffq.mp3' },
  { id: 'q10', title: 'আব্দুল রাহমান মোসাদ', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312248/Abdul_Rahman_Mossad_rnwdam.mp3' },
  { id: 'q11', title: 'সুরা আর-রাহমান', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312200/Surah_Ar-Rahman_asbmrn.mp3' },
  { id: 'q12', title: 'সুরা আন-নাবা', url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771312118/Surah_An-Naba_Abdul_Rahman_Mossad_yexhpe.mp3' }
];
