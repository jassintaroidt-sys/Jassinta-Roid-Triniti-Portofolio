
import { PortfolioItem, ExperienceLogo } from './types';

export const COLORS = {
  bg: '#FAF7F2',
  alternate: '#FFFFFF',
  primary: '#111111',
  secondary: '#444444',
  accent: '#B11226',
};

export const FEATURED_WORK: PortfolioItem[] = [
  {
    id: 'f1',
    title: 'Video Launching',
    subtitle: 'High Impact Production',
    videoUrl: '/videos/featured_landscape.mp4',
    type: 'video',
    aspectRatio: '1920/1080'
  },
  {
    id: 'f2',
    title: 'Mockup Surat Kabar',
    subtitle: 'Editorial Design',
    imageUrl: '/images/mockup_surat_kabar.png',
    type: 'image',
    aspectRatio: '800/1280'
  },
  {
    id: 'f3',
    title: 'Mockup Majalah',
    subtitle: 'Visual Identity',
    imageUrl: '/images/mockup_majalah.png',
    aspectRatio: '1980/1980'
  }
];

export const CONTENT_VIDEOS = {
  travel: [
    { id: 't1', title: 'Travel 01', videoUrl: 'public/videos/travel_2.mp4', link: 'https://www.tiktok.com/@karaminatour/video/7536500326464113926?is_from_webapp=1&sender_device=pc&web_id=7587415668760102407' },
    { id: 't2', title: 'Travel 02', videoUrl: 'public/videos/travel_1.mp4', link: 'https://www.tiktok.com/@karaminatour/video/7534158855874301240?is_from_webapp=1&sender_device=pc&web_id=7587415668760102407' },
    { id: 't3', title: 'Travel 03', videoUrl: 'public/videos/travel_3.mp4', link: 'https://www.tiktok.com/@karaminatour/video/7535417847229467960?is_from_webapp=1&sender_device=pc&web_id=7587415668760102407' }
  ],
  beauty: [
    { id: 'b1', title: 'Beauty 01', videoUrl: 'public/videos/kecantikan_1.mp4', link: 'https://www.tiktok.com/@elsthetic_official/video/7518618499728624952?is_from_webapp=1&sender_device=pc&web_id=7587415668760102407' },
    { id: 'b2', title: 'Beauty 02', videoUrl: 'public/videos/kecantikan_2.mp4', link: 'https://www.tiktok.com/@elsthetic_official/video/7525039802664750341?is_from_webapp=1&sender_device=pc&web_id=7587415668760102407' },
    { id: 'b3', title: 'Beauty 03', videoUrl: 'public/videos/kecantikan_3.mp4', link: 'https://www.tiktok.com/@elsthetic_official/video/7526465656615734534?is_from_webapp=1&sender_device=pc&web_id=7587415668760102407' }
  ],
  culinary: [
    { id: 'c1', title: 'Culinary 01', videoUrl: 'public/videos/kuliner_1.mp4', link: 'https://www.instagram.com/reel/DMUwp8qBd5J/' },
    { id: 'c2', title: 'Culinary 02', videoUrl: 'public/videos/kuliner_2.mp4', link: 'https://www.instagram.com/reel/DMkb0mKhkus/' },
    { id: 'c3', title: 'Culinary 03', videoUrl: 'public/videos/kuliner_3.mp4', link: 'https://www.instagram.com/reel/DMaBAg8B0tG/' }
  ]
};

export const GRAPHIC_DESIGN_LAYOUT = {
  flyers: [
    { id: 'f1', imageUrl: 'public/images/flyer_kecantikan_1.jpg' },
    { id: 'f2', imageUrl: 'public/images/flyer_kecantikan_2.jpg' },
    { id: 'f3', imageUrl: 'public/images/flyer_kecantikan_3.jpg' },
    { id: 'f4', imageUrl: 'public/images/flyer_kecantikan_4.jpg' },
    { id: 'f5', imageUrl: 'public/images/flyer_kecantikan_5.jpg' },
    { id: 'f6', imageUrl: 'public/images/flyer_kecantikan_6.jpg' },
  ],
  mockupHP: { id: 'm1', imageUrl: 'public/images/mockup_hp.png' },
  tier3: [
    { id: 't1', imageUrl: '/images/flyer_pelatihan_1.png', title: 'Flyer Pelatihan' },
    { id: 't2', imageUrl: '/images/flyer_pelatihan_2.png', title: 'Flyer Pelatihan' },
    { id: 'j1', imageUrl: '/images/foto_jassinta_setengah_badan.png', title: '' }, // Jassinta Half Body - No Title
  ]
};

export const TRUSTED_LOGOS: ExperienceLogo[] = [
  { id: 'l1', name: 'Brand One', logoUrl: 'public/images/logo_1.png' },
  { id: 'l2', name: 'Brand Two', logoUrl: 'public/images/logo_2.png' },
  { id: 'l3', name: 'Brand Three', logoUrl: 'public/images/logo_3.png' },
  { id: 'l4', name: 'Brand Four', logoUrl: 'public/images/logo_4.png' },
  { id: 'l5', name: 'Brand Five', logoUrl: 'public/images/logo_5.png' },
  { id: 'l6', name: 'Brand Six', logoUrl: 'public/images/logo_6.png' }
];

export const CAMPUS_ORGANIZATION_LAYOUT = {
  row1: [
    { id: 'r1_1', title: 'Mockup Surat Kabar', imageUrl: 'public/images/mockup_surat_kabar.png', aspect: '800/1280' },
    { id: 'r1_2', title: '', imageUrl: '/images/mockup_majalah.png', aspect: '1/1', isTransparentBox: true },
  ],
  row2: [
    { id: 'r2_1', title: 'Surat Kabar Project 01', imageUrl: 'public/images/surat_kabar_1.jpg' },
    { id: 'r2_2', title: 'Surat Kabar Project 02', imageUrl: 'public/images/surat_kabar_2.jpg' },
    { id: 'r2_3', title: 'Surat Kabar Project 03', imageUrl: 'public/images/surat_kabar_3.jpg' },
  ],
  row3: [
    { id: 'r3_1', title: 'COVER MAJALAH', imageUrl: 'public/images/majalah_1.jpg' },
    { id: 'r3_2', title: 'TIM PEMBUAT', imageUrl: 'public/images/majalah_2.jpg', aspect: '875/1241' },
  ]
};
