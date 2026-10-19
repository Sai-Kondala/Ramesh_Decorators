/**
 * Central Gallery Configuration
 * 
 * To add a new event photograph:
 * 1. Place the image in `public/images/gallery/<category>/`
 * 2. Add an entry to the `galleryItems` array below.
 */

export type GalleryCategory = 'weddings' | 'engagements' | 'birthdays' | 'corporate';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  description: string;
  alt: string;
  featured?: boolean; // Shown on the homepage preview
  aspect?: 'landscape' | 'portrait' | 'square';
}

export const galleryCategories: { id: 'all' | GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Events' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'engagements', label: 'Engagements' },
  { id: 'birthdays', label: 'Birthdays' },
  { id: 'corporate', label: 'Corporate Events' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'grand-floral-stage',
    title: 'Grand Floral Mandap Stage',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/gallery/weddings/grand-floral-stage.png',
    description: 'Bespoke floral canopy with crystal chandeliers, ambient warm illumination, and plush royal seating.',
    alt: 'Grand floral wedding stage decorated with lush white and pink flowers and crystal chandeliers',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 'fairy-light-pathway',
    title: 'Enchanted Light Pathway',
    category: 'engagements',
    categoryLabel: 'Engagements',
    image: '/images/gallery/engagements/fairy-light-pathway.png',
    description: 'Magical open-air pathway adorned with hanging floral vines, warm glowing lanterns, and fairy light canopies.',
    alt: 'Outdoor wedding and engagement aisle with romantic candle lanterns and hanging fairy lights',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 'royal-reception-backdrop',
    title: 'Majestic Reception Pavilion',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/gallery/weddings/royal-reception-backdrop.png',
    description: 'Opulent drape work with cascaded rose installations, ornate brass urns, and warm golden chandeliers.',
    alt: 'Luxurious wedding reception stage with warm golden chandeliers, draped fabrics, and floral accents',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 'royal-mandap-palace',
    title: 'Heritage Palace Mandap',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/gallery/weddings/royal-mandap-stage.jpg',
    description: 'Traditional royal palace mandap featuring intricate wooden pillar carvings, suspended marigold bells, and sacred urli displays.',
    alt: 'Traditional royal South Indian wedding mandap with carved wooden pillars and hanging floral bells',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'outdoor-gazebo-mandap',
    title: 'Sunset Gazebo Mandap',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/gallery/weddings/outdoor-gazebo-mandap.png',
    description: 'Circular open-sky floral gazebo with sheer flowing drapes against scenic sunset backdrops.',
    alt: 'Sunset outdoor wedding gazebo with fresh flower crown and sheer drapes',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'entrance-floral-walkway',
    title: 'Grand Floral Archway Entrance',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/gallery/weddings/entrance-floral-walkway.png',
    description: 'Tiered floral archways welcoming guests with cascading blooms and vintage lantern floor accents.',
    alt: 'Entrance floral walkway with warm glowing lanterns leading towards wedding hall',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'mr-mrs-reception-stage',
    title: 'Marquee Illuminated Stage',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/gallery/weddings/mr-mrs-reception-stage.png',
    description: 'Contemporary lighted marquee MR & MRS lettering framed by lush botanical arches and elevated steps.',
    alt: 'Illuminated MR and MRS marquee letters on wedding stage with floral framing',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'haldi-ceremony-stage',
    title: 'Auspicious Haldi Decor',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/gallery/weddings/haldi-ceremony-stage.jpg',
    description: 'Vibrant marigold and jasmine floral backdrops tailored for joy-filled Haldi and Mehendi festivities.',
    alt: 'Traditional yellow marigold and fresh flower decoration for Haldi ceremony',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'mehendi-henna-celebration',
    title: 'Festive Mehendi Garden',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/gallery/weddings/mehendi-henna-celebration.jpg',
    description: 'Bohemian and traditional Mehendi lounge with embroidered umbrellas, brass props, and comfortable floor seating.',
    alt: 'Colorful outdoor Mehendi ceremony setup with decorative umbrellas and seating',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'traditional-half-saree',
    title: 'Traditional Rites & Ceremony',
    category: 'engagements',
    categoryLabel: 'Engagements',
    image: '/images/gallery/engagements/traditional-half-saree-ceremony.jpg',
    description: 'Authentic South Indian ceremony styling with sacred temple motifs, banana leaf accents, and fresh jasmine garlands.',
    alt: 'Traditional South Indian ritual and engagement stage setup',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'family-gathering-celebration',
    title: 'Intimate Family Gathering Stage',
    category: 'engagements',
    categoryLabel: 'Engagements',
    image: '/images/gallery/engagements/family-gathering-celebration.jpg',
    description: 'Warm, cozy family gathering backdrop styled with brass diyas, traditional drapery, and natural flower torans.',
    alt: 'Elegant family gathering backdrop with warm lighting and flowers',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'artisan-floral-styling',
    title: 'Artisan Floral Chandelier Detail',
    category: 'engagements',
    categoryLabel: 'Engagements',
    image: '/images/gallery/engagements/artisan-floral-styling.jpg',
    description: 'Handcrafted floral centerpieces and suspended floral chandeliers highlighting intimate engagement setups.',
    alt: 'Close-up of artisan floral arrangements and romantic candle lanterns',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'floral-chandelier-detail',
    title: 'Luxury Floral & Candle Styling',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: '/images/gallery/weddings/floral-chandelier-detail.png',
    description: 'Exquisite close-up of premium English roses, delicate baby’s breath, and crystal chandelier reflections.',
    alt: 'Close up of soft rose floral arrangements with warm ambient lighting',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'luxury-balloon-birthday-stage',
    title: 'Celebration Birthday Gala',
    category: 'birthdays',
    categoryLabel: 'Birthdays',
    image: '/images/gallery/birthdays/luxury-balloon-birthday-stage.jpg',
    description: 'Grand pastel and metallic organic balloon arches, marquee number lights, and customized themed stage backdrops.',
    alt: 'Deluxe birthday celebration stage with custom balloon styling and glowing marquee numbers',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'evening-banquet-reception',
    title: 'Grand Corporate Gala Banquet',
    category: 'corporate',
    categoryLabel: 'Corporate Events',
    image: '/images/gallery/corporate/evening-banquet-reception.png',
    description: 'Sophisticated round table banquet decor with Chiavari gold chairs, high floral centerpieces, and ambient bistro lighting.',
    alt: 'Corporate banquet dinner reception with Chiavari gold chairs and candlelit tables',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'illuminated-event-stage',
    title: 'High-Energy Sangeet & Corporate Stage',
    category: 'corporate',
    categoryLabel: 'Corporate Events',
    image: '/images/gallery/corporate/illuminated-event-stage.jpg',
    description: 'Dazzling LED screen backdrops, intelligent beam lighting, and dynamic stage architecture for awards and corporate galas.',
    alt: 'Dynamic illuminated performance and award stage for corporate events and sangeet dances',
    featured: false,
    aspect: 'landscape',
  },
];
