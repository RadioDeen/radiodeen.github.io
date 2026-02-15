
import { Gojol } from './types';

export const GOJOL_LIST: Gojol[] = [
  {
    id: '1',
    title: 'আল্লাহর রহমত',
    artist: 'মাহমুদুল হাসান',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    thumbnail: 'https://picsum.photos/seed/islam1/400/400'
  },
  {
    id: '2',
    title: 'নবীজির শানে',
    artist: 'আবু রায়হান',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    thumbnail: 'https://picsum.photos/seed/islam2/400/400'
  },
  {
    id: '3',
    title: 'রমজানের গান',
    artist: 'কলরব',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    thumbnail: 'https://picsum.photos/seed/islam3/400/400'
  },
  {
    id: '4',
    title: 'জান্নাতের সুসংবাদ',
    artist: 'সাঈদ আহমদ',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    thumbnail: 'https://picsum.photos/seed/islam4/400/400'
  },
  {
    id: '5',
    title: 'মৃত্যুর ডাক',
    artist: 'তরিকুল ইসলাম',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    thumbnail: 'https://picsum.photos/seed/islam5/400/400'
  }
];

// ৫ ওয়াক্তের জন্য আলাদা আজান (এখানে ডেমো হিসেবে আলাদা আলাদা লিঙ্ক দেওয়া হয়েছে)
export const AZAN_URLS: Record<string, string> = {
  'ফজর': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  'যোহর': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
  'আসর': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
  'মাগরিব': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
  'এশা': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3'
};
