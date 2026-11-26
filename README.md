# S.bloomora — Premium Handcrafted Studio & Fairy Lamps Storefront

> **Award-Winning, Whimsical & Ultra-Responsive Boutique E-Commerce Website**  
> Faithfully crafted from the client reference designs (`reference-1.jpeg`, `reference-2.jpeg`, `reference-3.jpeg`, and `reference-4.jpeg`).  
> **Default Color Palette**: Premium Light Baby Pink (`#ff9bb2`) & Crisp White (`#ffffff`), with an interactive **Live Color Theme Studio** and centralized **CSS Variables** so you can easily customize colors anytime to your satisfaction.

---

## Live Color Themes & CSS Variables Customization

All colors throughout the website are driven by semantic **CSS Custom Properties (Variables)** declared cleanly at the top of [`styles.css`](file:///c:/Users/DEVRAJ/Desktop/client/styles.css#L1-L70).

### 1. In-Browser Live Theme Studio (Interactive)
The website comes equipped with an interactive **Theme Studio**:
- Click the floating **Theme Studio** pill in the bottom-left corner (or the palette icon in the top header).
- **One-Click Presets**:
  - **Baby Pink & White** *(Default primary client theme)*
  - **Rose & Cream** *(Deep romantic blush)*
  - **Peach Blossom** *(Warm sunset pastel)*
  - **Sweet Lilac** *(Whimsical fairytale purple)*
  - **Sage & Blush** *(Earthy botanical garden)*
- **Live Color Pickers**: Select custom hex values for:
  - *Primary Accent (Baby Pink)*
  - *Page Background (Soft White / Canvas)*
  - *Card / Container Surface (Crisp Pure White)*
  - *Main Text Ink Color (Plum Charcoal)*
- Changes update the entire website live in real time and persist automatically via `localStorage`.

### 2. Manual Customization in Code
To permanently change the colors in the stylesheet, open [`styles.css`](file:///c:/Users/DEVRAJ/Desktop/client/styles.css#L10-L40):

```css
:root {
  /* Primary Brand Accents (Light Baby Pink & White default) */
  --theme-primary: #ff9bb2;              /* Sweet baby pink */
  --theme-primary-hover: #f07d98;        /* Deeper rose pink on hover */
  --theme-primary-light: #ffeef2;        /* Ultra-soft pastel blush background */
  --theme-primary-subtle: #fff5f7;       /* Delicate feather pink */
  --theme-primary-glow: rgba(255, 155, 178, 0.38); /* Soft button glow */

  /* Page Backgrounds & Canvas (White & Baby Pink Tones) */
  --theme-bg: #fffbfb;                   /* Soft warm white canvas */
  --theme-bg-alt: #fff4f6;               /* Light blush background for alt sections */
  --theme-surface: #ffffff;              /* Crisp pure white for cards & containers */
  --theme-surface-glass: rgba(255, 255, 255, 0.92); /* Frosted glass */

  /* Text & Typography Inks */
  --theme-text: #4a3a3e;                 /* Rich velvety dark plum / charcoal */
  --theme-text-muted: #8c767c;           /* Gentle dusty rose gray */
  --theme-text-light: #ab959c;           /* Light muted label text */

  /* Decorative Borders & Outlines */
  --theme-border: #f7d6df;               /* Soft baby pink border */
  --theme-border-soft: #fde8ee;          /* Whispering border */
}
```

---

## Responsive Design Suite & Breakpoints

The website is engineered with a strict mobile-first and fluid responsive layout system:
- **Large Desktop (1200px - 1920px)**: 1240px centered container, 6 category cards, 3-column catalog grid with sticky filter sidebar.
- **Tablet Portrait & Small Laptops (768px - 1040px)**:
  - Header collapses into accessible slide-out mobile drawer with theme and sound controls.
  - Interactive **"Filter & Refine Pieces"** collapsible accordion button for smooth mobile shopping.
  - Benefits ribbon shifts to 2x2 grid, categories shift to 3x2 grid, products to 2 columns.
- **Standard Mobile Phones (375px - 480px, iPhone 12/13/14/15/16, Galaxy Ultra)**:
  - Single-row compact header with zero line-wrapping or clipping.
  - Sticker badges safely bounded inside the hero card.
  - Search bar and peeking cat mascot scaled responsively.
  - 2-column boutique products grid with clean card typography.
  - Full-screen drawers with iOS safe area notch support (`env(safe-area-inset-bottom)`).
- **Ultra-Compact Phones (320px - 360px, iPhone SE)**:
  - 1-column product cards, single-row compact header, zero horizontal overflow (`scrollWidth <= window.innerWidth`).

---

## Key Features & Artisanal Design System

### 1. Animated SVG Cat Preloader
- Bespoke vector animated cat featuring:
  - Animated twitching ears (`@keyframes catEarTwitch`)
  - Blinking eyes (`@keyframes catBlink`)
  - Head bobbing and tail wagging (`@keyframes catTailWag`)
  - Rolling pink yarn ball (`@keyframes yarnRoll`)
  - Dynamic 0% to 100% progress counter with smooth fade-out transition.

### 2. Hero Showcase (Reference 3)
- **Sunlit Atelier Background Photo**: Warm sunlit morning glow with fairy light bokeh spheres (`assets/hero-atelier-bg.jpg`) overlaid with a soft frosted baby-pink veil.
- **Botanical Watermark Canvas**: Seamless delicate cherry blossom watermark pattern (`assets/floral-watermark-pattern.svg`) across the page canvas.
- **Floating Botanical Petals**: 6 delicate semi-transparent flower petals drifting continuously across the background with organic physics.
- **Interactive 3D Parallax Tilt**: Hovering over the hero photo card tilts it smoothly in 3D perspective with sticker badge parallax.
- **Radiant Ambient Aura**: Ethereal breathing halo pulsing softly behind the featured artisan craft photograph.
- **Button Shimmer Gleam**: High-end light gleam sweeping across the primary CTA button.
- **Top Scroll Progress Bar**: Pink gradient indicator line along the header tracking real-time scroll depth.
- **Scroll-Driven Reveals**: Staggered Apple/Awwwards-style spring entrance animations (`cubic-bezier(0.16, 1, 0.3, 1)`).
- Floating curated craft pill: `Small Hands • Big Dreams`
- Elegant editorial serif typography: `S.bloomora` with `Handmade Crafts That Bring Joy`
- Dual call-to-actions: `Explore Collection →` and `Custom Order`
- Hero card visual with fluffy kitten wearing a pink bow headband beside the handmade tulip pot on a lace doily
- Floating artisanal sticker badges: `Original Studio Art`, `Handmade with Love`, and `Velvet Floral Craft`.

### 3. Value Propositions Ribbon (Reference 3)
- 4 circular scalloped badges with smooth hover rotations and card hover elevation:
  - **Handmade with Love**
  - **Safe Nationwide Delivery**
  - **Eco-Friendly Materials**
  - **One-of-a-Kind Designs**

### 4. Shop by Category (References 3 & 4)
- Scalloped circular craft cards with **dual continuous-rotating dashed rings** (clockwise outer ring, counter-clockwise inner ring) and smooth image zoom on hover:
  - **Fairy Lamps** (Lotus Fairy Lamp)
  - **Floral Pots** (Tulip Flower Pot)
  - **Artisan Dolls** (Handmade Braided Doll)
  - **Charm Keychains** (Daisy & Paw Keychains)
  - **Hair Barrettes** (Floral Hair Clips Set)
  - **Forever Bouquets** (Blush Forever Bouquet)
- Musical micro-sound harp plucks on category card hover.

### 5. Interactive Catalog & Storefront (Reference 4)
- **Animated Peeking Cat Behind Search Bar**:
  - Interactive mascot kitten hidden directly behind the search bar pill (`#searchCatContainer` / `#searchPeekingCat`).
  - **Idle hide-and-peek animation**: Ducks down and peeks over the search bar edge, with cute paws resting on the rim, twitching ears, and blinking kawaii eyes.
  - **Focus & hover alert**: When clicking or focusing the search bar, the cat pops up with an interactive speech bubble (*"Tell me what you'd love to find!"*).
  - **Live typing reactions**: Suggests lamps, pots, and dolls dynamically as you type.
- **Illustrated Mascot Banner**: Peek-over kitten artwork with message badges (`Find something special`, `Handcrafted pieces for your space`).
- **Live Search & Filter Chips Bar**: Instant live search with clear button + category filter chips.
- **Left Sidebar Filters**:
  - Category checkboxes with live product counts
  - Dual price slider (Rs 500 – Rs 6,000)
  - Color swatches (Pink, Cream, Yellow, Green, Blue, Purple)
  - Size pills (Small, Medium, Large)
  - Reset filters button
  - Mascot recommendation card
- **Sort Dropdown**: Sort by Most Popular, Highest Rated, Price: Low to High, Price: High to Low, or Newest.
- **Product Cards**: Badges (`Bestseller`, `New`, `Popular`), Wishlist heart toggle, star ratings, price in `Rs X,XXX`, Quick View button, and Add to Cart button.

### 6. Product Details Modal (Reference 1)
- Seamless modal dialog with zero horizontal overflow:
  - Interactive thumbnail switcher (3 high-resolution craft views)
  - Floating wishlist button
  - Category tag & star review count
  - Full item description & 4 highlight feature badges
  - Quantity stepper (`− 1 +`)
  - **Buy Now** button with peeking mascot illustration
  - **Add to Cart** button
  - Trust badges: *Delivery All Over Pakistan* & *Secure Payment*
  - Expandable **Product Details Accordion** (Material, Size, Color, Care Instructions)
  - 4 benefit circle pills (`Adds charm to any space`, `Great for gifting`, `Perfect for room decor`, `Made with care`)

### 7. Interactive Custom Order Builder (Reference 2)
- Step-by-step custom commission builder:
  1. Craft Type selector (Fairy Lamp, Floral Pot, Cute Doll, Keychain, Bouquet, Special Design)
  2. Desired color theme (Baby Pink & Cream, Rose & Sage Green, Sunshine & Ivory, Sky Blue & Lilac)
  3. Custom description textarea
  4. File dropzone with live photo preview & remove button
  5. Contact details (Name, WhatsApp/Mobile, Email)
  6. **Live Price Estimator**: Calculates real-time estimated crafting cost

### 8. Interactive Order Tracker (Reference 2)
- Order ID lookup (sample codes: `SB-2026-88`, `SB-2026-92`, `SB-2026-75`, or custom orders)
- Animated 5-step status timeline:
  1. *Order Placed*
  2. *Handcrafting*
  3. *Shipped with Love*
  4. *Out for Delivery*
  5. *Delivered to Doorstep*
- Order destination, timestamp updates, and mascot packaging cheer note.

### 9. Full Shopping Cart & Wishlist System (Reference 2)
- Slide-out Cart Drawer on the right:
  - Quantity controls (`−` / `+`) and item remove button
  - **Free Shipping Progress Meter** (`Add Rs X more for FREE Shipping!`)
  - Promo code field with support for code `BLOOM10` (10% discount)
  - Subtotal, delivery fee, and grand total calculation
  - Proceed to Checkout button
- Wishlist Drawer with "Move All to Cart" action and live counter badge.

### 10. Step-by-Step Checkout Modal (Reference 2)
- Complete shipping address form (Name, Phone, Email, Delivery Address, Postal Code)
- Pakistani Cities Dropdown (Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, etc.)
- Payment method radio cards:
  - **JazzCash / Easypaisa**
  - **Direct Bank Transfer** (Meezan, HBL, Alfalah)
  - **Cash on Delivery (COD)**
- Live order summary column with line items and total.
- **Confetti Celebration**: Submitting an order launches an animated confetti celebration and displays a personalized order confirmation dialog with instant order tracking ID.

### 11. Subtle Sound Effects & Custom Desktop Cursor
- **Web Audio API**: Synthesizes soft, gentle pop & chime tones on interactions (zero external audio file latency!).
- **Sound Mute/Unmute Toggle** button in the header.
- **Sparkle Cursor Follower**: Soft sparkle follower on desktop mice (automatically disabled on touch devices).

---

## Multi-Page Architecture & Sitemap

The website is structured as a complete, professional **Multi-Page Storefront** with persistent shared state (Cart, Wishlist, Theme Studio, Audio Preferences) across all pages:

| Page | Filename | Description & Highlights |
|---|---|---|
| **Home** | [`index.html`](file:///c:/Users/DEVRAJ/Desktop/client/index.html) | Hero with 3D parallax tilt & floating petals, Benefits ribbon, Category showcase linking to shop filters, Spotlight bestsellers, Custom Order teaser card, Our Story teaser, Studio Lookbook preview, Reviews slider, Track Order quick banner, and Newsletter. |
| **Shop Catalog** | [`shop.html`](file:///c:/Users/DEVRAJ/Desktop/client/shop.html) | Complete 14-product catalog, animated peeking cat search bar with typing reactivity, category filter chips, desktop sidebar filters, mobile filter drawer toggle, product quickview & modal details. Supports URL deep-linking: `shop.html?category=Lamps` or `shop.html?search=rose`. |
| **Custom Order** | [`custom-order.html`](file:///c:/Users/DEVRAJ/Desktop/client/custom-order.html) | Bespoke custom craft builder with 4-step wizard, drag-and-drop reference photo dropzone, real-time live price estimator card, "How It Works" 4-step illustrated guide, and custom commission FAQ accordion. |
| **Track Order** | [`track-order.html`](file:///c:/Users/DEVRAJ/Desktop/client/track-order.html) | Real-time order tracker with sample order ID pills (`SB-2026-88`, `SB-2026-42`, `SB-2026-15`), 5-stage animated progress timeline, delivery destination card, courier partner information (TCS, Leopards, Trax), and WhatsApp concierge support. Supports URL deep-linking: `track-order.html?id=SB-2026-88`. |
| **Our Story** | [`about.html`](file:///c:/Users/DEVRAJ/Desktop/client/about.html) | Slow craft philosophy, founder's journey, pipe-cleaner material breakdown, Fresh vs Plastic vs Velvet comparison matrix, behind-the-scenes artisan studio photos, milestones counter, and care instructions. |
| **Studio Gallery** | [`gallery.html`](file:///c:/Users/DEVRAJ/Desktop/client/gallery.html) | Curated studio lookbook, category filter chips (All, Lamps at Night, Desk Pots, Bespoke Dolls, Bouquets), 12-item high-resolution masonry grid with hover zoom, home styling guide, and Instagram tag prompt (`@S.bloomora`). |
| **Contact & Support** | [`contact.html`](file:///c:/Users/DEVRAJ/Desktop/client/contact.html) | Direct studio contact info (WhatsApp click-to-chat, email, studio hours, response promise), interactive message form with instant toast feedback, and comprehensive 8-question FAQ accordion. |

---

## File Structure

```
client/
├── index.html            # Home page (Hero, Categories, Spotlight, Teasers, Reviews)
├── shop.html             # Dedicated Shop page (Peeking Cat Search, Filters, 14 Products Grid)
├── custom-order.html     # Dedicated Bespoke Commission Builder (Dropzone, Price Estimator)
├── track-order.html      # Dedicated Live Order Tracker (5-step Stepper, Courier Tracking)
├── about.html            # Dedicated Our Story & Philosophy Page (Comparison Table, Stats)
├── gallery.html          # Dedicated Lookbook & Studio Gallery (Masonry, Styling Guide)
├── contact.html          # Dedicated Contact & FAQ Page (Message Form, Studio Info, Accordion)
├── styles.css            # Unified luxury design system, CSS theme variables & responsive rules
├── script.js             # Reactive engine: multi-page routing, state persistence, audio & filters
├── README.md             # Complete documentation and customization guide
├── assets/               # High-definition craft imagery & watermark vectors
└── Sbloomora-Handcrafted-Website.zip # Downloadable complete project archive
```

---

## How to Run Locally

You can run this website on any modern browser:

### Option A: Direct Browser Opening
Double-click [`index.html`](file:///c:/Users/DEVRAJ/Desktop/client/index.html) to open directly in Google Chrome, Microsoft Edge, Safari, or Firefox.

### Option B: Local HTTP Server (Recommended)
In PowerShell or terminal inside the `client` folder:
```powershell
python -m http.server 8085
```
Then visit **`http://localhost:8085`** in your browser.
