
import { Gojol } from './types';

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
  },
  {
    id: '7',
    title: 'যদি নাত লিখতে লিখতে',
    artist: 'তরিকুল ইসলাম',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228498/Jodi_naat_likhte_likhte_ktnbcv.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  },
  {
    id: '8',
    title: 'কত দূর ঐ মদীনার পথ',
    artist: 'তরিকুল ইসলাম',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228508/Koto_dur_oi_madinar_poth_yqey6f.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  },
  {
    id: '9',
    title: 'লুকোনো ফুল',
    artist: 'তরিকুল ইসলাম',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228521/Lukono_ful_cfwyg9.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  },
  {
    id: '10',
    title: 'মে বান্দায়ে আছি হুঁ',
    artist: 'তরিকুল ইসলাম',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228528/Main_banda_e_aasi_hoon_yggyox.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  },
  {
    id: '11',
    title: 'মুজে কুফা ওয়ালো',
    artist: 'তরিকুল ইসলাম',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228502/Mujhe_kufawalo_bwhdws.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  },
  {
    id: '12',
    title: 'নাতে সারকার',
    artist: 'তরিকুল ইসলাম',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228519/Naate_sarkar_ki_parhta_hoon_n032mq.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  },
  {
    id: '13',
    title: 'ওগো রব',
    artist: 'তরিকুল ইসলাম',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228534/Ogo_Rab_rzamrv.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  },
  {
    id: '14',
    title: 'হে মেরা নাবী হে',
    artist: 'তরিকুল ইসলাম',
    url: 'https://res.cloudinary.com/dc8vv80pc/video/upload/v1771228537/Woh_mera_nabi_hai_x5otd7.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  }
];

// ৫ ওয়াক্তের জন্য নির্ধারিত আজান লিঙ্ক
export const AZAN_URLS: Record<string, string> = {
  'ফজর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Fajr_Azan.mp3',
  'যোহর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Zuhr_Azan.mp3',
  'আসর': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Asr_Azan.mp3',
  'মাগরিব': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Magrib_Azan.mp3',
  'এশা': 'https://rawcdn.githack.com/RadioDeen/radiodeen.github.io/06aa1baffbb71d75c3048d75506bb59c6440f386/Azan/Isha_Azan.mp3'
};
