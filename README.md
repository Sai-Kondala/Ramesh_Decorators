# Ramesh Decorators — Luxury Event Decoration & Planning Website

A beautiful, premium, fully responsive static frontend website for **Ramesh Decorators — Event Decoration & Planning Services**. Designed with luxury wedding aesthetics, refined gold accents, deep navy typography, warm ambient lighting, and an interactive shimmering gold string curtain reveal.

---

## 🌟 Key Features

1. **Interactive Hanging-String Curtain Reveal (Hero Section)**:
   - Dual panels of fine, vertical shimmering metallic and beaded strands in champagne-gold and ivory tones.
   - **Desktop Interaction**: Click and drag curtain panels horizontally apart to reveal the wedding stage.
   - **Mobile / Touch Interaction**: Touch and swipe horizontally with native pointer capture. Prevents page scrolling while dragging.
   - **Accessibility & Skip**: Includes a visible **"Reveal The Stage"** button for instant 1-click reveal and keyboard users (Enter/Space).
   - **Smart Auto-Reveal**: Gently parts the curtain after a short delay if untouched, and remembers user interaction via `sessionStorage`.
   - **Replay Feature**: Visitors can click "Replay Reveal ↺" anytime to enjoy the reveal effect again.
   - **Reduced Motion**: Automatically honors `prefers-reduced-motion: reduce` by setting curtains to fully open with zero transition.

2. **Home Page Structure (Matching Brand Reference)**:
   - **Brand Crest Mark**: Ornate royal 'R' crest and serif wordmark.
   - **Hero Composition**: Eyebrow, headline *"We Make Your Special Moments Truly Memorable"*, supporting text, and dual CTAs (*"Explore Our Work"* & *"Get a Quote"*).
   - **Value Badges**: Creative Designs, Quality Setup, On-Time Service, and Memorable Experiences.
   - **Signature Services**: 4 cards for Wedding Decorations, Engagements, Birthday Events, and Corporate Events.
   - **Editorial Gallery Preview**: Showcase of moments with direct link to full portfolio.
   - **About Section**: *"Every Detail, Beautifully Designed"* with 4 pillar cards (Creative Decor Designs, Experienced Team, Quality Materials, Customer Satisfaction) and subtle botanical flourishes.
   - **Luxury Footer**: Deep navy theme with quick links, service links, direct contact actions, and social media icons.

3. **Explore Our Work (Gallery Page)**:
   - **Instant Category Filtering**: Tabs for *All Events*, *Weddings*, *Engagements*, *Birthdays*, and *Corporate Events*. Updates without page reload. Supports URL query param (e.g., `/gallery?category=weddings`).
   - **Responsive Editorial Grid**: Hover zoom effect and gold tag overlays.
   - **Interactive Modal Lightbox**:
     - Built using native `<dialog>` with backdrop blur and smooth entrance.
     - Previous & Next buttons + Keyboard navigation (Left / Right arrow keys).
     - Mobile swipe left/right gestures.
     - Escape key & outside click (light-dismiss) to close.
     - Direct *"Enquire on WhatsApp"* button pre-filled with the specific setup title.

4. **Contact & Enquiry Page**:
   - **4 Direct Contact Actions**:
     - **Call Now**: `tel:` phone dialer link.
     - **WhatsApp Enquiry**: `https://wa.me/919800000000` with pre-filled greeting.
     - **Send an Email**: `mailto:` link with pre-filled subject and body.
     - **Get Directions**: Google Maps link to the business location.
   - **Smart WhatsApp Enquiry Generator**:
     - Validates customer name, phone number, event type, date, and vision notes.
     - Prepares a formatted WhatsApp message and launches WhatsApp in a new tab.
     - Completely client-side — requires no server, database, or backend storage.

---

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/) (Static Output, zero JS overhead by default)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Interactions**: Vanilla TypeScript/CSS with pointer events & CSS transitions
- **Deployment**: Static output (`dist/`) suitable for Cloudflare Pages, Netlify, Vercel, or GitHub Pages.

---

## 📁 Project Structure

```
d:/Ramesh Decors/
├── public/
│   ├── favicon.svg                          # Luxury gold crest favicon
│   ├── robots.txt                           # Search engine indexing rules
│   └── images/
│       ├── hero/                            # Hero stage showcase images
│       └── gallery/
│           ├── weddings/                    # Wedding mandaps, stages & florals
│           ├── engagements/                 # Engagement setups & pathways
│           ├── birthdays/                   # Birthday balloon & stage setups
│           └── corporate/                   # Banquet & conference lighting
├── src/
│   ├── components/
│   │   ├── AboutSection.astro               # "Every Detail, Beautifully Designed"
│   │   ├── BrandLogo.astro                  # Royal 'R' crest brand mark
│   │   ├── Footer.astro                     # Deep navy luxury footer
│   │   ├── GalleryPreview.astro             # Home page 3-card preview
│   │   ├── Header.astro                     # Sticky navigation & mobile menu
│   │   ├── HeroCurtain.astro                # Interactive hanging-string curtain
│   │   └── ServiceCard.astro                # 4 service cards with custom icons
│   ├── data/
│   │   ├── business.ts                      # Central business contact configuration
│   │   └── gallery.ts                       # Central gallery items and categories
│   ├── layouts/
│   │   └── Layout.astro                     # Base HTML with SEO & Open Graph meta
│   ├── pages/
│   │   ├── index.astro                      # Home page
│   │   ├── gallery.astro                    # Portfolio page with filter & lightbox
│   │   └── contact.astro                    # Contact & WhatsApp enquiry page
│   └── styles/
│       └── global.css                       # Global styles, fonts, and animations
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## ⚙️ How to Configure Business Details

All business contact information, phone numbers, and addresses are managed in **one single file**:

👉 `src/data/business.ts`

```typescript
export const businessConfig = {
  name: "Ramesh Decorators",
  phone: {
    display: "+91 98XX XX XXXX",
    raw: "+919800000000",
  },
  whatsapp: {
    number: "919800000000", // Country code without + or spaces
    defaultMessage: "Hello Ramesh Decorators, I would like to enquire...",
  },
  email: {
    address: "rameshdecorators@gmail.com",
    subject: "Event Decoration Enquiry",
  },
  location: {
    display: "Your Location, City, State",
    mapsUrl: "https://maps.google.com/?q=Ramesh+Decorators",
  },
  socials: {
    instagram: "https://instagram.com/rameshdecorators",
    facebook: "https://facebook.com/rameshdecorators",
    youtube: "https://youtube.com/@rameshdecorators",
    whatsappCommunity: "https://wa.me/919800000000",
  },
};
```

---

## 📸 How to Add New Gallery Photographs

Adding a new event photograph takes two simple steps:

1. Copy your photograph into the corresponding folder:
   - Weddings: `public/images/gallery/weddings/`
   - Engagements: `public/images/gallery/engagements/`
   - Birthdays: `public/images/gallery/birthdays/`
   - Corporate Events: `public/images/gallery/corporate/`

2. Add an entry to `src/data/gallery.ts`:
   ```typescript
   {
     id: 'my-new-mandap',
     title: 'Golden Floral Mandap',
     category: 'weddings',
     categoryLabel: 'Weddings',
     image: '/images/gallery/weddings/my-new-mandap.jpg',
     description: 'Handcrafted floral arches with crystal lighting.',
     alt: 'Golden floral mandap setup for wedding ceremony',
     featured: false, // Set to true to showcase on homepage
   }
   ```

The gallery grid, category filters, counts, and lightbox modal will automatically update!

---

## 🚀 Development & Build Commands

```bash
# Start local development server (runs on http://localhost:4321/)
npm run dev

# Build production static website (outputs to /dist)
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment to Cloudflare Pages or Netlify

### Cloudflare Pages
1. Push your repository to GitHub or GitLab.
2. Log into Cloudflare Dashboard -> **Pages** -> **Create a project**.
3. Select the repository:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

### Netlify
1. Log into Netlify -> **Add new site** -> **Import an existing project**.
2. Select your repository:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.
