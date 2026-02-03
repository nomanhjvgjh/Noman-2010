
import { HairstyleOption } from './types';

export const HAIRSTYLES: HairstyleOption[] = [
  {
    id: 'classic',
    name: 'Classic',
    icon: 'fa-user-tie',
    prompt: 'a neat, classic side-part professional haircut for a man, natural texture, clean hairline',
    description: 'Clean, professional and timeless look.'
  },
  {
    id: 'korean-wavy',
    name: 'Korean Wavy',
    icon: 'fa-star',
    prompt: 'trendy Korean-style wavy curtain bangs hairstyle, soft texture, medium length, voluminous',
    description: 'Soft, wavy and stylish K-drama look.'
  },
  {
    id: 'wolf-cut',
    name: 'Wolf Cut',
    icon: 'fa-paw',
    prompt: 'modern shaggy wolf cut with heavy layers and face-framing bangs, textured and edgy',
    description: 'Wild, layered, and incredibly trendy.'
  },
  {
    id: 'modern-mullet',
    name: 'Modern Mullet',
    icon: 'fa-dragon',
    prompt: 'contemporary tapered mullet, short textured sides, length and volume in the back, messy top',
    description: 'The iconic Gen-Z revival style.'
  },
  {
    id: 'french-crop',
    name: 'French Crop',
    icon: 'fa-align-left',
    prompt: 'sharp french crop haircut with a heavy textured fringe, skin fade on sides, clean contrast',
    description: 'Low maintenance, high style.'
  },
  {
    id: 'butterfly-cut',
    name: 'Butterfly',
    icon: 'fa-hand-dots',
    prompt: 'long butterfly haircut with voluminous layers, 90s blowout style, bouncy and glamorous',
    description: 'Maximum volume and luxury layers.'
  },
  {
    id: 'fade',
    name: 'Skin Fade',
    icon: 'fa-scissors',
    prompt: 'high skin fade with a textured quiff on top, precise surgical line, sharp grooming',
    description: 'Modern, sharp edges with a clean blend.'
  },
  {
    id: 'buzzcut',
    name: 'Buzz Cut',
    icon: 'fa-user-circle',
    prompt: 'precise military style buzz cut, uniform short length, clean geometric hairline',
    description: 'Minimalist, bold and effortless.'
  },
  {
    id: 'messy-volume',
    name: 'Messy Volume',
    icon: 'fa-wind',
    prompt: 'voluminous messy matte texture hairstyle, beachy salt-spray look, natural movement',
    description: 'Relaxed, effortless "just out of bed" style.'
  },
  {
    id: 'sleek-bob',
    name: 'Sleek Bob',
    icon: 'fa-female',
    prompt: 'ultra-sleek chin-length glass hair bob, perfectly straight, high shine, middle part',
    description: 'High-fashion, sharp and sophisticated.'
  },
  {
    id: 'pixie-edgy',
    name: 'Edgy Pixie',
    icon: 'fa-bolt',
    prompt: 'short edgy pixie cut with textured spikes and micro-fringe, platinum blonde highlights',
    description: 'Bold, short and full of personality.'
  },
  {
    id: 'top-knot',
    name: 'Top Knot',
    icon: 'fa-circle-notch',
    prompt: 'man bun top knot with undercut sides, long hair tied back, clean beard integration',
    description: 'Rugged, modern and functional.'
  },
  {
    id: 'curtain-bangs',
    name: 'Curtains',
    icon: 'fa-columns',
    prompt: 'classic 90s middle-part curtain hairstyle, soft flow, ear-length on sides',
    description: 'The nostalgic heartthrob look.'
  },
  {
    id: 'afro-taper',
    name: 'Afro Taper',
    icon: 'fa-cloud',
    prompt: 'well-defined natural afro with a clean taper fade, textured curls, rounded shape',
    description: 'Celebrating natural texture with sharp lines.'
  }
];

export const SCANNING_MESSAGES = [
  "Detecting facial landmarks...",
  "Analyzing head structure...",
  "Measuring jawline...",
  "Calculating hair density...",
  "Determining face shape..."
];
