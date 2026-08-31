import poster1 from '../assets/Poster/poster 1.webp'
import poster2 from '../assets/Poster/poster 2.webp'
import poster3 from '../assets/Poster/poster 3.webp'
import poster4 from '../assets/Poster/poster 4.webp'
import poster5 from '../assets/Poster/poster 5.webp'
import poster6 from '../assets/Poster/poster 6.webp'

import graficoyBranding from '../assets/branding/Graficoy branding.png'
import royalGryphonBranding from '../assets/branding/Royal gryphon logo branding.png'
import revoroBranding from '../assets/branding/revoro Branding.png'

import kfcLogo from '../assets/Logo/KFC logo branding.png'
import blueFlameLogo from '../assets/Logo/b;ue flame logo branding.png'
import revoroLogo from '../assets/Logo/revoro logo.png'
import brand3 from '../assets/Logo/brand 3.webp'
import logo1 from '../assets/Logo/logo 1.webp'
import blueFlameMotion from '../assets/motion/Blue Flame logomotion-hd.mp4'
import royalGryphonMotion from '../assets/motion/Ryphon logomotion-hd.mp4'

export const brandSystems = [
  {
    id: 'revoro-mods',
    title: 'REVORO MODS',
    category: 'BRAND SYSTEM',
    tier: 'TIER_A',
    year: '2024',
    role: 'Visual Identity & Art Direction',
    description:
      'Modular automotive performance branding system built on high-contrast typographic grids.',
    image: revoroBranding,
    logo: revoroLogo,
    status: 'COMPLETED',
  },
  {
    id: 'royal-gryphon',
    title: 'ROYAL GRYPHON',
    category: 'LUXURY BRAND & MOTION',
    tier: 'TIER_A',
    year: '2024',
    role: 'Identity & Motion Design',
    description: 'Heritage heraldic logo mark paired with high-precision motion animation.',
    image: royalGryphonBranding,
    logo: royalGryphonBranding,
    videoDuration: '5.4s',
    hasMotion: true,
    status: 'COMPLETED',
  },
  {
    id: 'blue-flame',
    title: 'BLUE FLAME',
    category: 'BRAND & LOGO MOTION',
    tier: 'TIER_B',
    year: '2024',
    role: 'Logo & Kinetic Animation',
    description: 'Dynamic flame logo system paired with 5.4-second fluid kinetic reveal.',
    image: blueFlameLogo,
    logo: blueFlameLogo,
    videoDuration: '5.4s',
    hasMotion: true,
    status: 'COMPLETED',
  },
  {
    id: 'graficoy',
    title: 'GRÁFICOY',
    category: 'GRAPHIC STUDIO IDENTITY',
    tier: 'TIER_B',
    year: '2023',
    role: 'Studio Branding',
    description: 'Editorial graphic design studio identity and collateral design system.',
    image: graficoyBranding,
    logo: logo1,
    status: 'COMPLETED',
  },
  {
    id: 'kfc-kodinhi',
    title: 'KFC KODINHI',
    category: 'CONCEPT BRANDING',
    tier: 'TIER_B',
    year: '2023',
    role: 'Self-Initiated Concept',
    description: 'Localized promotional brand collateral exploration.',
    image: kfcLogo,
    logo: kfcLogo,
    status: 'SELF_INITIATED',
  },
]

export const posterCollection = [
  {
    id: 'kuwait-travel',
    title: 'Kuwait Travel Diaries',
    category: 'EDITORIAL POSTER',
    year: '2024',
    image: poster1,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'soul-poster',
    title: 'SOUL',
    category: 'CREATIVE DIRECTION',
    year: '2024',
    image: poster2,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'graficoy-exhibition',
    title: 'Gráficoy Poster',
    category: 'EXHIBITION POSTER',
    year: '2023',
    image: poster3,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'arcane-fanart',
    title: 'Arcane',
    category: 'UNOFFICIAL FAN ART',
    year: '2024',
    image: poster4,
    aspectRatio: 'aspect-[3/4]',
    label: 'UNOFFICIAL FAN ART',
  },
  {
    id: 'endless-typo',
    title: 'Endless Typo',
    category: 'EXPERIMENTAL POSTER',
    year: '2024',
    image: poster5,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'aesthetic-form',
    title: 'Aesthetic Form',
    category: 'VISUAL COMPOSITION',
    year: '2024',
    image: poster6,
    aspectRatio: 'aspect-[3/4]',
  },
]

export const motionWorks = [
  {
    id: 'blue-flame-motion',
    title: 'BLUE FLAME LOGO MOTION',
    category: 'LOGO ANIMATION',
    duration: '5.4s',
    year: '2024',
    poster: blueFlameLogo,
    videoSrc: blueFlameMotion,
    description: 'Fluid kinetic logo reveal with precision easing.',
    isFeatured: false,
  },
  {
    id: 'royal-gryphon-motion',
    title: 'ROYAL GRYPHON LOGO MOTION',
    category: 'LOGO ANIMATION',
    duration: '5.4s',
    year: '2024',
    poster: royalGryphonBranding,
    videoSrc: royalGryphonMotion,
    description: 'Heraldic emblem motion sequence.',
    isFeatured: false,
  },
  {
    id: 'endless-tools-motion',
    title: 'ENDLESS TOOLS',
    category: 'TYPOGRAPHIC / IDENTITY MOTION',
    duration: '30s',
    year: '2024',
    poster: brand3,
    description:
      'Featured 30-second editorial motion composition exploring tool mechanics and visual rhythm.',
    isFeatured: true,
    hasModalWatch: true,
  },
]

export const designDrawers = [
  { id: 'brand-systems', number: '01', title: 'BRAND SYSTEMS', count: brandSystems.length },
  { id: 'posters', number: '02', title: 'POSTERS', count: posterCollection.length },
  { id: 'motion', number: '03', title: 'MOTION', count: motionWorks.length },
]
