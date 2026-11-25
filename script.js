/**
 * S.BLOOMORA — PREMIUM HANDCRAFTS INTERACTIVE ENGINE
 * Features:
 * - Color Theme Engine with Live Variables Customizer & Presets
 * - Web Audio API Synthesized Cute UI Sound Effects
 * - Catalog Search, Sidebar Filtering, Swatches & Sorting
 * - Product Detail Modal with Thumbnail Switcher & Specs Accordion
 * - Cart & Wishlist State Management with Free Delivery Meter
 * - Interactive Custom Order Craft Builder with Live Estimates
 * - Live Order Tracker with Stepper Animation
 * - Smooth Checkout with Confetti Celebration
 * - Custom Sparkle Cursor & Micro-interactions
 */

// ---------------------------------------------------------------------------
// 1. PRODUCT DATABASE (Authentic Crafts & Fairy Lamps)
// ---------------------------------------------------------------------------
const PRODUCTS = [
  {
    id: 1,
    name: "Tulip Floral Pot",
    category: "Pots",
    price: 2500,
    rating: 5.0,
    reviews: 12,
    badge: "Bestseller",
    badgeType: "bestseller",
    image: "assets/tulip-pot.jpg",
    thumbs: ["assets/tulip-pot.jpg", "assets/tulip-bouquet.jpg", "assets/bouquet.jpg"],
    color: "pink",
    size: "Medium",
    desc: "A little pot full of happiness. Crafted with soft velvet pipe cleaners and lots of love. Perfect to brighten up your desk, bedside table, or to gift someone special.",
    material: "Velvet pipe cleaners, floral foam, decorative paper pot, satin bow",
    dimensions: "Approx 15 cm (height) x 10 cm (width)",
    colorsAvail: "Light Baby Pink, Rose, Mint Green (custom colors on request)"
  },
  {
    id: 2,
    name: "Lotus Fairy Lamp",
    category: "Lamps",
    price: 5000,
    rating: 5.0,
    reviews: 48,
    badge: "Bestseller",
    badgeType: "bestseller",
    image: "assets/lotus-lamp.jpg",
    thumbs: ["assets/lotus-lamp.jpg", "assets/jellyfish-lamp.jpg", "assets/mushroom-lamp.jpg"],
    color: "pink",
    size: "Medium",
    desc: "Our beloved glowing lotus bloom. Features layered translucent velvet petals with warm LED fairy lights hidden inside. Creates an ethereal, cozy ambiance in any room.",
    material: "Pipe cleaners, warm LED fairy light string, moss base, wooden display disc",
    dimensions: "Approx 16 cm (diameter) x 12 cm (height)",
    colorsAvail: "Sakura Pink, Pure White, Emerald Leaves"
  },
  {
    id: 3,
    name: "Sunflower Desk Pot",
    category: "Pots",
    price: 2500,
    rating: 5.0,
    reviews: 26,
    badge: "Popular",
    badgeType: "new",
    image: "assets/sunflower-pot.jpg",
    thumbs: ["assets/sunflower-pot.jpg", "assets/tulip-pot.jpg", "assets/lily-pot.jpg?v=2"],
    color: "yellow",
    size: "Medium",
    desc: "Bring everlasting sunshine to your room! A cheerful handmade sunflower that always stays bright and happy, no watering required.",
    material: "Velvet pipe cleaners, faux ceramic pot, decorative satin ribbon",
    dimensions: "Approx 16 cm (height) x 11 cm (width)",
    colorsAvail: "Sunflower Yellow, Earth Brown, Forest Green"
  },
  {
    id: 4,
    name: "Jellyfish Ambient Lamp",
    category: "Lamps",
    price: 4500,
    rating: 5.0,
    reviews: 32,
    badge: "New",
    badgeType: "new",
    image: "assets/jellyfish-lamp.jpg",
    thumbs: ["assets/jellyfish-lamp.jpg", "assets/mushroom-lamp.jpg", "assets/lotus-lamp.jpg"],
    color: "blue",
    size: "Large",
    desc: "Mesmerizing floating sea dream. Cascading flowing tentacles with gentle ambient micro-lights. Hangs or displays beautifully as an enchanted nightlight.",
    material: "Velvet fibers, glass dome, micro-LED string, ribbon tentacles",
    dimensions: "Approx 24 cm (height) x 12 cm (width)",
    colorsAvail: "Dreamy Ocean Blue, Pastel Lilac, Pearlescent White"
  },
  {
    id: 5,
    name: "Mushroom Cottage Lamp",
    category: "Lamps",
    price: 3800,
    rating: 5.0,
    reviews: 17,
    badge: "Bestseller",
    badgeType: "bestseller",
    image: "assets/mushroom-lamp.jpg",
    thumbs: ["assets/mushroom-lamp.jpg", "assets/lotus-lamp.jpg", "assets/jellyfish-lamp.jpg"],
    color: "pink",
    size: "Medium",
    desc: "Straight out of a fairytale cottage. Soft pink cap with delicate white polka dots, glowing gently from underneath with warm fairy lights.",
    material: "Hand-sculpted pipe cleaners, natural preserved moss, USB/Battery LED",
    dimensions: "Approx 14 cm (height) x 12 cm (diameter)",
    colorsAvail: "Baby Pink & White, Forest Red, Soft Peach"
  },
  {
    id: 6,
    name: "Lily of the Valley Pot",
    category: "Pots",
    price: 3000,
    rating: 5.0,
    reviews: 21,
    badge: "New",
    badgeType: "new",
    image: "assets/lily-pot.jpg?v=2",
    thumbs: ["assets/lily-pot.jpg?v=2", "assets/tulip-pot.jpg", "assets/bouquet.jpg"],
    color: "green",
    size: "Medium",
    desc: "Delicate drooping white and blush bell blossoms symbolizing gentle happiness and renewal. Hand-twisted with unmatched precision.",
    material: "Velvet pipe cleaners, knitted cup base, pearl bead pistils",
    dimensions: "Approx 17 cm (height) x 12 cm (width)",
    colorsAvail: "Cream White, Sage Green, Baby Blush"
  },
  {
    id: 7,
    name: "Artisan Braided Doll",
    category: "Dolls",
    price: 3200,
    rating: 5.0,
    reviews: 15,
    badge: "Limited",
    badgeType: "bestseller",
    image: "assets/doll.jpg?v=2",
    thumbs: ["assets/doll.jpg?v=2", "assets/hair-clips.jpg", "assets/keychain.jpg"],
    color: "pink",
    size: "Large",
    desc: "An adorable collectible handcrafted doll with braided yarn hair, cute pink lace dress, and stitched expressive details.",
    material: "Soft yarn, premium pipe cleaner armature, cotton lace, glass safety eyes",
    dimensions: "Approx 22 cm (height)",
    colorsAvail: "Pink & Beige Dress, Custom Hair Colors available"
  },
  {
    id: 8,
    name: "Daisy Charm Keychain",
    category: "Keychains",
    price: 800,
    rating: 5.0,
    reviews: 34,
    badge: "Popular",
    badgeType: "bestseller",
    image: "assets/keychain.jpg",
    thumbs: ["assets/keychain.jpg", "assets/hair-clips.jpg", "assets/doll.jpg?v=2"],
    color: "pink",
    size: "Small",
    desc: "Everyday pocket charm! Features a puffy cat paw with embroidered pink pads, paired with a white daisy and gold hardware.",
    material: "Velvet pipe cleaner charm, gold lobster clasp, bell accent",
    dimensions: "Approx 9 cm (total length)",
    colorsAvail: "White/Pink Paw, Sunflower Daisy, Lilac Charm"
  },
  {
    id: 9,
    name: "Blush Forever Bouquet",
    category: "Bouquets",
    price: 3500,
    rating: 5.0,
    reviews: 19,
    badge: "Bestseller",
    badgeType: "bestseller",
    image: "assets/bouquet.jpg",
    thumbs: ["assets/bouquet.jpg", "assets/tulip-bouquet.jpg", "assets/tulip-pot.jpg"],
    color: "pink",
    size: "Large",
    desc: "A rich artisan arrangement of blush roses, baby tulips, eucalyptus sprigs, and filler buds wrapped in Korean waterproof craft paper.",
    material: "24+ velvet pipe cleaner blooms, luxury wrapping paper, silk ribbon",
    dimensions: "Approx 32 cm (height) x 22 cm (spread)",
    colorsAvail: "Baby Pink, Pearl Cream, Dusty Mauve"
  },
  {
    id: 10,
    name: "Floral Hair Clips Set",
    category: "Hair Clips",
    price: 950,
    rating: 5.0,
    reviews: 11,
    badge: "Cute",
    badgeType: "new",
    image: "assets/hair-clips.jpg",
    thumbs: ["assets/hair-clips.jpg", "assets/keychain.jpg", "assets/doll.jpg?v=2"],
    color: "pink",
    size: "Small",
    desc: "A pair of darling hair barrettes adorned with mini handmade velvet blossoms. Gentle on hair and provides an instant cottagecore look.",
    material: "Velvet pipe cleaner flowers, alligator metal hair clips, pearls",
    dimensions: "Approx 6 cm (length per clip)",
    colorsAvail: "Soft Pink, Buttercup Yellow, Mint Blossom"
  },
  {
    id: 11,
    name: "Pink Tulip Forever Bouquet",
    category: "Bouquets",
    price: 2800,
    rating: 5.0,
    reviews: 23,
    badge: "Beloved",
    badgeType: "bestseller",
    image: "assets/tulip-bouquet.jpg",
    thumbs: ["assets/tulip-bouquet.jpg", "assets/bouquet.jpg", "assets/tulip-pot.jpg"],
    color: "pink",
    size: "Large",
    desc: "Five luscious velvet pink tulips bound with natural raffia and craft tissue. The ultimate long-lasting romantic gift.",
    material: "Velvet pipe cleaner tulips, craft wrapping paper, satin ribbon bow",
    dimensions: "Approx 28 cm (height) x 18 cm (width)",
    colorsAvail: "Baby Pink, Gradient Rose, Sunset Orange"
  },
  {
    id: 12,
    name: "Calico Charm Keychain",
    category: "Keychains",
    price: 800,
    rating: 5.0,
    reviews: 29,
    badge: "Trending",
    badgeType: "new",
    image: "assets/keychain.jpg",
    thumbs: ["assets/keychain.jpg", "assets/doll.jpg?v=2", "assets/hair-clips.jpg"],
    color: "pink",
    size: "Small",
    desc: "Ultra-squishy textured paw charm with cute bead attachments. Hangs perfectly on handbags, backpacks, or key sets.",
    material: "Velvet pipe cleaners, alloy key ring, decorative resin bead",
    dimensions: "Approx 8 cm (length)",
    colorsAvail: "Blush Pink, Creamy White, Calico Patch"
  },
  {
    id: 13,
    name: "Angel Wing Fairy Lamp",
    category: "Lamps",
    price: 5500,
    rating: 5.0,
    reviews: 19,
    badge: "Limited",
    badgeType: "bestseller",
    image: "assets/angel-lamp.jpg",
    thumbs: ["assets/angel-lamp.jpg", "assets/moon-lamp.jpg", "assets/lotus-lamp.jpg"],
    color: "cream",
    size: "Medium",
    desc: "Enchanted glass sphere with radiant iridescent angel wings and warm interior lighting. Resting on a soft cloud base.",
    material: "Hand-molded iridescent resin wings, blown glass orb, LED micro-core, velvet base",
    dimensions: "Approx 18 cm (height) x 16 cm (wing span)",
    colorsAvail: "Opal White, Warm Gold, Rose Iridescent"
  },
  {
    id: 14,
    name: "Crescent Moon Star Lamp",
    category: "Lamps",
    price: 4800,
    rating: 5.0,
    reviews: 37,
    badge: "Beloved",
    badgeType: "bestseller",
    image: "assets/moon-lamp.jpg",
    thumbs: ["assets/moon-lamp.jpg", "assets/angel-lamp.jpg", "assets/lotus-lamp.jpg"],
    color: "yellow",
    size: "Large",
    desc: "Dreamy crescent moon adorned with delicate lace patterns and hanging illuminated miniature stars.",
    material: "Lace-textured acrylic moon, gold hanging chains, LED stars, moss base",
    dimensions: "Approx 22 cm (height) x 14 cm (width)",
    colorsAvail: "Ivory Moon with Warm Yellow Stars"
  }
];

// ---------------------------------------------------------------------------
// 2. STATE MANAGEMENT
// ---------------------------------------------------------------------------
const State = {
  cart: JSON.parse(localStorage.getItem("sbloomora_cart") || "[]"),
  wishlist: new Set(JSON.parse(localStorage.getItem("sbloomora_wishlist") || "[]")),
  activeCategory: "All",
  activeColor: "all",
  activeSize: "all",
  maxPrice: 6000,
  searchQuery: "",
  sortBy: "popular",
  soundEnabled: localStorage.getItem("sbloomora_sound") !== "false",
  activeTheme: localStorage.getItem("sbloomora_theme") || "baby-pink",
  promoCode: "",
  discountPercent: 0
};

// Pakistani Rupee Formatter
const money = n => `Rs ${Number(n).toLocaleString("en-PK")}`;

// Save helper
function saveState() {
  localStorage.setItem("sbloomora_cart", JSON.stringify(State.cart));
  localStorage.setItem("sbloomora_wishlist", JSON.stringify([...State.wishlist]));
}

// ---------------------------------------------------------------------------
// 3. SYNTHESIZED WEB AUDIO API SOUND EFFECTS (Cute & Zero Delay)
// ---------------------------------------------------------------------------
class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playPop() {
    if (!State.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(840, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {
      // Audio context might be restricted before interaction
    }
  }

  playChime() {
    if (!State.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      [660, 880, 1100].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.2);
      });
    } catch (e) {}
  }

  playHarp(freq = 660) {
    if (!State.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.045, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {}
  }
}

const sounds = new SoundEngine();

// ---------------------------------------------------------------------------
// 4. TOAST NOTIFICATION SYSTEM
// ---------------------------------------------------------------------------
function showToast(message, icon = "✓") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  sounds.playPop();

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px) scale(0.9)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 320);
  }, 2600);
}

// ---------------------------------------------------------------------------
// 5. LIVE COLOR THEME STUDIO ENGINE (Variables Customizer for User)
// ---------------------------------------------------------------------------
const ThemeEngine = {
  init() {
    this.applyTheme(State.activeTheme);
    this.bindEvents();
    this.loadCustomColors();
  },

  applyTheme(preset) {
    document.documentElement.setAttribute("data-theme", preset);
    State.activeTheme = preset;
    localStorage.setItem("sbloomora_theme", preset);

    document.querySelectorAll(".theme-preset-card").forEach(card => {
      card.classList.toggle("active", card.dataset.preset === preset);
    });

    // Update pickers with the current theme colors
    const computed = getComputedStyle(document.documentElement);
    const pVal = computed.getPropertyValue("--theme-primary").trim();
    const bgVal = computed.getPropertyValue("--theme-bg").trim();

    const pickerPrimary = document.getElementById("pickerPrimary");
    if (pickerPrimary && pVal.startsWith("#")) {
      pickerPrimary.value = pVal;
      document.getElementById("hexPrimary").textContent = pVal;
    }
  },

  setCustomColor(variableName, hexValue, labelId) {
    document.documentElement.style.setProperty(variableName, hexValue);
    if (labelId) {
      const el = document.getElementById(labelId);
      if (el) el.textContent = hexValue;
    }
    // Save custom colors in localStorage
    const customColors = JSON.parse(localStorage.getItem("sbloomora_custom_colors") || "{}");
    customColors[variableName] = hexValue;
    localStorage.setItem("sbloomora_custom_colors", JSON.stringify(customColors));
  },

  loadCustomColors() {
    const customColors = JSON.parse(localStorage.getItem("sbloomora_custom_colors") || "{}");
    Object.entries(customColors).forEach(([varName, val]) => {
      document.documentElement.style.setProperty(varName, val);
      if (varName === "--theme-primary") {
        const picker = document.getElementById("pickerPrimary");
        if (picker) picker.value = val;
        const hex = document.getElementById("hexPrimary");
        if (hex) hex.textContent = val;
      }
      if (varName === "--theme-bg") {
        const picker = document.getElementById("pickerBg");
        if (picker) picker.value = val;
        const hex = document.getElementById("hexBg");
        if (hex) hex.textContent = val;
      }
      if (varName === "--theme-surface") {
        const picker = document.getElementById("pickerSurface");
        if (picker) picker.value = val;
        const hex = document.getElementById("hexSurface");
        if (hex) hex.textContent = val;
      }
      if (varName === "--theme-text") {
        const picker = document.getElementById("pickerText");
        if (picker) picker.value = val;
        const hex = document.getElementById("hexText");
        if (hex) hex.textContent = val;
      }
    });
  },

  resetDefaults() {
    localStorage.removeItem("sbloomora_custom_colors");
    ["--theme-primary", "--theme-bg", "--theme-surface", "--theme-text"].forEach(v => {
      document.documentElement.style.removeProperty(v);
    });
    this.applyTheme("baby-pink");
    showToast("Theme reset to Baby Pink & White", "✓");
  },

  bindEvents() {
    // Preset cards
    document.querySelectorAll(".theme-preset-card").forEach(btn => {
      btn.addEventListener("click", () => {
        sounds.playPop();
        this.applyTheme(btn.dataset.preset);
        showToast(`Color Theme switched to ${btn.querySelector("strong").textContent}`, "✓");
      });
    });

    // Custom pickers
    const pPrimary = document.getElementById("pickerPrimary");
    if (pPrimary) {
      pPrimary.addEventListener("input", e => {
        this.setCustomColor("--theme-primary", e.target.value, "hexPrimary");
        // Also update primary-hover with slightly darker shade
        this.setCustomColor("--theme-primary-hover", e.target.value);
        this.setCustomColor("--theme-primary-light", e.target.value + "22");
      });
    }

    const pBg = document.getElementById("pickerBg");
    if (pBg) {
      pBg.addEventListener("input", e => this.setCustomColor("--theme-bg", e.target.value, "hexBg"));
    }

    const pSurface = document.getElementById("pickerSurface");
    if (pSurface) {
      pSurface.addEventListener("input", e => this.setCustomColor("--theme-surface", e.target.value, "hexSurface"));
    }

    const pText = document.getElementById("pickerText");
    if (pText) {
      pText.addEventListener("input", e => this.setCustomColor("--theme-text", e.target.value, "hexText"));
    }

    // Reset button
    const resetBtn = document.getElementById("resetThemeToDefaultBtn");
    if (resetBtn) resetBtn.addEventListener("click", () => this.resetDefaults());

    // Drawer toggles
    const studioDrawer = document.getElementById("themeStudioDrawer");
    const openStudio = () => {
      sounds.playPop();
      studioDrawer.classList.add("active");
    };
    const closeStudio = () => studioDrawer.classList.remove("active");

    const headerThemeBtn = document.getElementById("themeStudioToggle");
    const floatingThemePill = document.getElementById("quickThemePill");
    const closeStudioBtn = document.getElementById("closeThemeStudio");

    if (headerThemeBtn) headerThemeBtn.addEventListener("click", openStudio);
    if (floatingThemePill) floatingThemePill.addEventListener("click", openStudio);
    if (closeStudioBtn) closeStudioBtn.addEventListener("click", closeStudio);
  }
};

// ---------------------------------------------------------------------------
// 6. PRODUCT RENDERING & FILTERING ENGINE
// ---------------------------------------------------------------------------
function renderCatalog() {
  const grid = document.getElementById("mainProductGrid");
  const spotlight = document.getElementById("newArrivalsGrid");
  const emptyState = document.getElementById("catalogEmptyState");
  const resultsCount = document.getElementById("resultsCountText");
  if (!grid) return;

  // Filter list
  let list = PRODUCTS.filter(p => {
    // Category filter
    const matchesCat = (State.activeCategory === "All") || (p.category === State.activeCategory);
    // Price filter
    const matchesPrice = p.price <= State.maxPrice;
    // Color filter
    const matchesColor = (State.activeColor === "all") || (p.color === State.activeColor);
    // Size filter
    const matchesSize = (State.activeSize === "all") || (p.size === State.activeSize);
    // Search query
    const q = State.searchQuery.toLowerCase().trim();
    const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);

    return matchesCat && matchesPrice && matchesColor && matchesSize && matchesSearch;
  });

  // Sorting
  if (State.sortBy === "price-low") list.sort((a, b) => a.price - b.price);
  else if (State.sortBy === "price-high") list.sort((a, b) => b.price - a.price);
  else if (State.sortBy === "rating") list.sort((a, b) => b.reviews - a.reviews);
  else if (State.sortBy === "newest") list.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
  else list.sort((a, b) => b.id - a.id); // default popular

  // Product Card Template Generator
  const createCardHTML = p => `
    <article class="product-card" data-product-id="${p.id}">
      <div class="product-thumb-wrap" onclick="openProductModal(${p.id})">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="card-badge ${p.badgeType}">${p.badge}</span>
        <button class="card-wish-btn ${State.wishlist.has(p.id) ? "liked" : ""}" 
          data-wish="${p.id}" 
          title="Save to Wishlist" 
          aria-label="Save ${p.name} to wishlist" 
          onclick="event.stopPropagation(); toggleWishlist(${p.id})">
          ${State.wishlist.has(p.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-card-body">
        <h3 class="product-title" onclick="openProductModal(${p.id})">${p.name}</h3>
        <div class="product-rating-row">
          <span class="product-stars">★★★★★</span>
          <span class="product-review-count">(${p.reviews} reviews)</span>
        </div>

        <div class="product-card-footer">
          <span class="product-price-tag">${money(p.price)}</span>
          <div class="card-action-btns">
            <button class="btn-card-quick" title="Quick View" onclick="openProductModal(${p.id})" aria-label="Quick View">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>
            </button>
            <button class="btn-card-cart" title="Add to Bag" onclick="addToCart(${p.id})" aria-label="Add ${p.name} to Cart">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;

  // Render main catalog
  grid.innerHTML = list.map(createCardHTML).join("");

  // Update empty state
  if (emptyState) emptyState.hidden = list.length > 0;
  if (resultsCount) {
    resultsCount.innerHTML = `Showing <strong>${list.length}</strong> handmade treasure${list.length === 1 ? "" : "s"}${State.activeCategory !== "All" ? ` in <em>${State.activeCategory}</em>` : ""}`;
  }

  const activeFiltersBadge = document.getElementById("activeFiltersBadge");
  if (activeFiltersBadge) {
    let count = 0;
    if (State.activeCategory !== "All") count++;
    if (State.activeColor !== "all") count++;
    if (State.activeSize !== "all") count++;
    if (State.maxPrice < 6000) count++;
    if (State.searchQuery) count++;
    activeFiltersBadge.textContent = count > 0 ? `${count} Active` : "All";
  }

  // Render New Arrivals spotlight (first 4 items)
  if (spotlight) {
    const spotlightItems = PRODUCTS.slice(0, 4);
    spotlight.innerHTML = spotlightItems.map(createCardHTML).join("");
  }
}

// ---------------------------------------------------------------------------
// 7. PRODUCT DETAIL MODAL (Ref 1 Fidelity)
// ---------------------------------------------------------------------------
let currentModalProductId = null;

function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  currentModalProductId = id;
  sounds.playPop();

  const backdrop = document.getElementById("productModalBackdrop");
  const mainImg = document.getElementById("modalMainImg");
  const thumbsContainer = document.getElementById("modalThumbnails");
  const title = document.getElementById("modalProductTitle");
  const cat = document.getElementById("modalProductCat");
  const price = document.getElementById("modalProductPrice");
  const reviews = document.getElementById("modalProductReviews");
  const desc = document.getElementById("modalProductDesc");
  const wishBtn = document.getElementById("modalWishlistBtn");
  const wishIcon = document.getElementById("modalWishIcon");

  // Specs
  const mat = document.getElementById("modalDetailMaterial");
  const size = document.getElementById("modalDetailSize");
  const colors = document.getElementById("modalDetailColor");

  // Populate data
  mainImg.src = product.image;
  mainImg.alt = product.name;
  title.textContent = product.name;
  cat.textContent = product.category;
  price.textContent = money(product.price);
  reviews.textContent = `(${product.reviews} reviews)`;
  desc.textContent = product.desc;

  if (mat) mat.textContent = product.material;
  if (size) size.textContent = product.dimensions;
  if (colors) colors.textContent = product.colorsAvail;

  // Quantity reset
  const qtyInput = document.getElementById("modalQtyInput");
  if (qtyInput) qtyInput.value = 1;

  // Wishlist state
  const isLiked = State.wishlist.has(product.id);
  wishBtn.classList.toggle("liked", isLiked);
  wishIcon.textContent = isLiked ? "♥" : "♡";

  // Thumbnails strip
  if (thumbsContainer) {
    thumbsContainer.innerHTML = product.thumbs.map((src, i) => `
      <div class="thumb-item ${i === 0 ? "active" : ""}" onclick="switchModalThumb('${src}', this)">
        <img src="${src}" alt="Thumb ${i+1}" />
      </div>
    `).join("");
  }

  // Show backdrop
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const backdrop = document.getElementById("productModalBackdrop");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function switchModalThumb(src, el) {
  sounds.playPop();
  const mainImg = document.getElementById("modalMainImg");
  if (mainImg) mainImg.src = src;
  document.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
  if (el) el.classList.add("active");
}

// ---------------------------------------------------------------------------
// 8. SHOPPING CART OPERATIONS (Ref 2 Fidelity)
// ---------------------------------------------------------------------------
function addToCart(id, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = State.cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    State.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: qty
    });
  }

  saveState();
  renderCart();
  showToast(`${product.name} added to your bag`, "✓");
}

function updateCartQty(id, change) {
  const item = State.cart.find(i => i.id === id);
  if (!item) return;
  sounds.playPop();

  item.qty += change;
  if (item.qty <= 0) {
    State.cart = State.cart.filter(i => i.id !== id);
  }

  saveState();
  renderCart();
}

function removeCartItem(id) {
  const item = State.cart.find(i => i.id === id);
  if (!item) return;
  sounds.playPop();
  State.cart = State.cart.filter(i => i.id !== id);
  saveState();
  renderCart();
  showToast(`${item.name} removed from cart`, "✕");
}

function renderCart() {
  const totalCount = State.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = State.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Delivery calculation: Free if subtotal >= 5000, else Rs 200 (if cart empty, 0)
  const isFreeDelivery = subtotal >= 5000;
  const delivery = subtotal > 0 ? (isFreeDelivery ? 0 : 200) : 0;
  const discount = Math.round(subtotal * State.discountPercent);
  const grandTotal = Math.max(0, subtotal - discount + delivery);

  // Update header badges
  const headerCartCount = document.getElementById("cartCount");
  if (headerCartCount) headerCartCount.textContent = totalCount;

  // Cart Drawer UI
  const listContainer = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotalVal");
  const deliveryEl = document.getElementById("cartDeliveryVal");
  const grandTotalEl = document.getElementById("cartGrandTotalVal");
  const progressBar = document.getElementById("deliveryProgressBar");
  const progressText = document.getElementById("deliveryProgressText");

  if (subtotalEl) subtotalEl.textContent = money(subtotal);
  if (deliveryEl) deliveryEl.textContent = isFreeDelivery ? "FREE" : money(delivery);
  if (grandTotalEl) grandTotalEl.textContent = money(grandTotal);

  // Delivery Progress Bar
  if (progressBar && progressText) {
    if (subtotal >= 5000) {
      progressBar.style.width = "100%";
      progressText.innerHTML = "<strong>Congratulations!</strong> You unlocked Free Shipping across Pakistan!";
    } else {
      const needed = 5000 - subtotal;
      const pct = Math.min(100, Math.round((subtotal / 5000) * 100));
      progressBar.style.width = `${pct}%`;
      progressText.innerHTML = `Add <strong>${money(needed)}</strong> more for Free Shipping`;
    }
  }

  // Promo code UI in Drawer
  const promoRow = document.getElementById("promoDiscountRow");
  const promoAmt = document.getElementById("promoDiscountAmount");
  if (promoRow && promoAmt) {
    promoRow.hidden = State.discountPercent === 0;
    promoAmt.textContent = `-${money(discount)}`;
  }

  // Items List
  if (listContainer) {
    if (State.cart.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state-card text-center" style="padding: 40px 10px;">
          <h4 style="font-family: var(--theme-font-head); font-size: 18px; color: var(--theme-text);">Your shopping bag is empty</h4>
          <p style="font-size: 13px; color: var(--theme-text-muted); margin: 6px 0 16px;">Explore our handmade lamps, floral pots, or heirloom pieces.</p>
          <a href="#shop" class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Start Exploring</a>
        </div>
      `;
    } else {
      listContainer.innerHTML = State.cart.map(item => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <div class="cart-item-price">${money(item.price)}</div>
            <div class="cart-item-stepper">
              <button onclick="updateCartQty(${item.id}, -1)">−</button>
              <span>${item.qty}</span>
              <button onclick="updateCartQty(${item.id}, 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeCartItem(${item.id})" aria-label="Remove item">✕</button>
        </div>
      `).join("");
    }
  }

  // Also sync with Checkout Modal Summary
  renderCheckoutSummary(subtotal, delivery, discount, grandTotal);
}

function openCartDrawer() {
  sounds.playPop();
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartDrawerBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("cartDrawerBackdrop").classList.remove("active");
  document.body.style.overflow = "";
}

// ---------------------------------------------------------------------------
// 9. WISHLIST OPERATIONS (Ref 2)
// ---------------------------------------------------------------------------
function toggleWishlist(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  sounds.playPop();

  if (State.wishlist.has(id)) {
    State.wishlist.delete(id);
    showToast(`Removed from your wishlist`, "✓");
  } else {
    State.wishlist.add(id);
    showToast(`Saved ${product.name} to wishlist`, "♥");
  }

  saveState();
  updateWishlistUI();
  renderCatalog();

  // If product modal is open, sync its wishlist button
  if (currentModalProductId === id) {
    const isLiked = State.wishlist.has(id);
    const wishBtn = document.getElementById("modalWishlistBtn");
    const wishIcon = document.getElementById("modalWishIcon");
    if (wishBtn) wishBtn.classList.toggle("liked", isLiked);
    if (wishIcon) wishIcon.textContent = isLiked ? "♥" : "♡";
  }
}

function updateWishlistUI() {
  const countEl = document.getElementById("wishlistCount");
  if (countEl) countEl.textContent = State.wishlist.size;
  const mobileCountEl = document.getElementById("mobileWishCount");
  if (mobileCountEl) mobileCountEl.textContent = State.wishlist.size;

  const listEl = document.getElementById("wishlistItemsList");
  if (!listEl) return;

  const saved = PRODUCTS.filter(p => State.wishlist.has(p.id));

  if (saved.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state-card text-center" style="padding: 40px 10px;">
        <h4 style="font-family: var(--theme-font-head); font-size: 18px;">Your wishlist is empty</h4>
        <p style="font-size: 13px; color: var(--theme-text-muted); margin: 6px 0 16px;">Save your favorite handcrafted creations for later.</p>
      </div>
    `;
  } else {
    listEl.innerHTML = saved.map(p => `
      <div class="cart-item-row">
        <img src="${p.image}" alt="${p.name}" class="cart-item-thumb" />
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <div class="cart-item-price">${money(p.price)}</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id}); toggleWishlist(${p.id});">Move to Cart</button>
          <button class="cart-item-remove" onclick="toggleWishlist(${p.id})">✕</button>
        </div>
      </div>
    `).join("");
  }
}

function openWishlistDrawer() {
  sounds.playPop();
  document.getElementById("wishlistDrawer").classList.add("active");
  document.getElementById("wishlistDrawerBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWishlistDrawer() {
  document.getElementById("wishlistDrawer").classList.remove("active");
  document.getElementById("wishlistDrawerBackdrop").classList.remove("active");
  document.body.style.overflow = "";
}

// ---------------------------------------------------------------------------
// 10. CHECKOUT MODAL & CONFETTI CELEBRATION (Ref 2 Fidelity)
// ---------------------------------------------------------------------------
function renderCheckoutSummary(subtotal, delivery, discount, grandTotal) {
  const container = document.getElementById("checkoutSummaryItems");
  const subEl = document.getElementById("chkSubtotal");
  const delEl = document.getElementById("chkDelivery");
  const discRow = document.getElementById("chkDiscountRow");
  const discEl = document.getElementById("chkDiscount");
  const totalEl = document.getElementById("chkTotal");

  if (subEl) subEl.textContent = money(subtotal);
  if (delEl) delEl.textContent = delivery === 0 ? "FREE" : money(delivery);
  if (totalEl) totalEl.textContent = money(grandTotal);

  if (discRow && discEl) {
    discRow.hidden = discount === 0;
    discEl.textContent = `-${money(discount)}`;
  }

  if (container) {
    if (State.cart.length === 0) {
      container.innerHTML = `<div style="font-size:12px; color:var(--theme-text-muted);">No items in cart</div>`;
    } else {
      container.innerHTML = State.cart.map(item => `
        <div class="summary-row-item">
          <span>${item.name} × ${item.qty}</span>
          <strong>${money(item.price * item.qty)}</strong>
        </div>
      `).join("");
    }
  }
}

function openCheckoutModal() {
  if (State.cart.length === 0) {
    showToast("Your shopping bag is empty. Add a piece first", "✓");
    return;
  }
  closeCartDrawer();
  sounds.playPop();
  document.getElementById("checkoutModalBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkoutModalBackdrop").classList.remove("active");
  document.body.style.overflow = "";
}

// Confetti Cannon Animation
function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const confettiCount = 80;
  const colors = ["#ff9bb2", "#f07d98", "#7d8f68", "#f8c058", "#b388eb", "#ffffff"];
  const pieces = [];

  for (let i = 0; i < confettiCount; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 3 + 2,
      speedX: Math.random() * 2 - 1,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 6 - 3
    });
  }

  let animationFrame;
  let start = performance.now();

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      ctx.restore();

      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;
    });

    if (performance.now() - start < 3500) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  render();
}

// ---------------------------------------------------------------------------
// 11. CUSTOM ORDER ESTIMATE CALCULATOR (Ref 2)
// ---------------------------------------------------------------------------
function updateCustomEstimate() {
  const checkedCraft = document.querySelector('input[name="craftType"]:checked');
  const priceDisplay = document.getElementById("customEstimatedPrice");
  if (!checkedCraft || !priceDisplay) return;

  const basePrices = {
    "Fairy Lamp": 3800,
    "Floral Pot": 2500,
    "Handmade Doll": 3200,
    "Keychain / Charm": 800,
    "Bouquet": 2800,
    "Other": 3500
  };

  const est = basePrices[checkedCraft.value] || 3500;
  priceDisplay.textContent = money(est);
}

// ---------------------------------------------------------------------------
// 12. INTERACTIVE ORDER TRACKER ENGINE (Ref 2)
// ---------------------------------------------------------------------------
const MOCK_ORDERS = {
  "SB-2026-88": {
    id: "SB-2026-88",
    items: "Lotus Fairy Lamp, Tulip Pot",
    dest: "Lahore, Punjab",
    activeStep: 3,
    dates: ["6 Nov, 10:30 AM", "7 Nov, 02:15 PM", "8 Nov, 11:00 AM", "9 Nov (Estimated)", "Pending"]
  },
  "SB-2026-92": {
    id: "SB-2026-92",
    items: "Sunflower Desk Pot, 2x Keychain",
    dest: "Karachi, Sindh",
    activeStep: 5,
    dates: ["2 Nov, 09:00 AM", "3 Nov, 12:45 PM", "4 Nov, 04:20 PM", "5 Nov, 11:15 AM", "5 Nov, 03:40 PM"]
  },
  "SB-2026-75": {
    id: "SB-2026-75",
    items: "Custom Pastel Bouquet & Doll",
    dest: "Islamabad, Capital",
    activeStep: 2,
    dates: ["8 Nov, 08:30 PM", "9 Nov, 11:00 AM", "Estimated 11 Nov", "Pending", "Pending"]
  }
};

function trackOrder(orderId) {
  const cleanId = orderId.trim().toUpperCase();
  const order = MOCK_ORDERS[cleanId] || {
    id: cleanId,
    items: "Handmade Floral Craft Collection",
    dest: "Pakistan",
    activeStep: 3,
    dates: ["Recent", "In Progress", "Dispatched", "Estimated in 2 days", "Pending"]
  };

  sounds.playChime();

  // Populate data
  document.getElementById("trackDisplayId").textContent = order.id;
  document.getElementById("trackDisplayItems").textContent = order.dest ? order.items : "Handmade Craft Item";
  document.getElementById("trackDisplayDest").textContent = order.dest;

  // Update dates
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById(`stepDate${i}`);
    if (el) el.textContent = order.dates[i - 1] || "—";
  }

  // Update Stepper classes
  const steps = document.querySelectorAll(".tracker-stepper .step-item");
  steps.forEach((step, idx) => {
    const stepNum = idx + 1;
    step.classList.remove("completed", "active");
    if (stepNum < order.activeStep) {
      step.classList.add("completed");
    } else if (stepNum === order.activeStep) {
      step.classList.add("active");
    }
  });

  showToast(`Order status updated for ${order.id}`, "✓");
}

// ---------------------------------------------------------------------------
// 13. MASTER EVENT LISTENERS INITIALIZATION
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme Studio
  ThemeEngine.init();

  // 2. Initial Products & Cart Rendering
  renderCatalog();
  renderCart();
  updateWishlistUI();

  // 3. Animated Cat Preloader Progress Engine
  const loaderProgress = document.getElementById("catLoaderProgress");
  const loaderPercent = document.getElementById("catLoaderPercent");
  let catProgress = 0;
  const catInterval = setInterval(() => {
    catProgress += Math.floor(Math.random() * 12) + 8;
    if (catProgress > 100) catProgress = 100;
    if (loaderProgress) loaderProgress.style.width = `${catProgress}%`;
    if (loaderPercent) loaderPercent.textContent = `${catProgress}%`;

    if (catProgress >= 100) {
      clearInterval(catInterval);
      setTimeout(() => {
        const loader = document.getElementById("preloader");
        if (loader) loader.classList.add("fade-out");
      }, 350);
    }
  }, 45);

  // 4. Custom Sparkle Cursor Follower (Desktop)
  const cursor = document.getElementById("customCursor");
  if (cursor) {
    window.addEventListener("mousemove", e => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }

  // 5. Sound Effects Toggle Button in Header
  const soundToggleBtn = document.getElementById("soundToggle");
  const updateSoundIcon = () => {
    if (!soundToggleBtn) return;
    soundToggleBtn.innerHTML = State.soundEnabled
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
  };

  if (soundToggleBtn) {
    updateSoundIcon();
    soundToggleBtn.addEventListener("click", () => {
      State.soundEnabled = !State.soundEnabled;
      localStorage.setItem("sbloomora_sound", State.soundEnabled);
      updateSoundIcon();
      if (State.soundEnabled) sounds.playChime();
      showToast(State.soundEnabled ? "Audio feedback enabled" : "Audio muted", "✓");
    });
  }

  // 6. Header Cart & Wishlist Triggers
  const cartToggleBtn = document.getElementById("cartToggle");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartBackdrop = document.getElementById("cartDrawerBackdrop");
  if (cartToggleBtn) cartToggleBtn.addEventListener("click", openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartDrawer);

  const wishToggleBtn = document.getElementById("wishlistToggle");
  const closeWishBtn = document.getElementById("closeWishlistBtn");
  const wishBackdrop = document.getElementById("wishlistDrawerBackdrop");
  if (wishToggleBtn) wishToggleBtn.addEventListener("click", openWishlistDrawer);
  if (closeWishBtn) closeWishBtn.addEventListener("click", closeWishlistDrawer);
  if (wishBackdrop) wishBackdrop.addEventListener("click", closeWishlistDrawer);

  const addAllWishBtn = document.getElementById("addAllWishlistToCartBtn");
  if (addAllWishBtn) {
    addAllWishBtn.addEventListener("click", () => {
      State.wishlist.forEach(id => addToCart(id));
      State.wishlist.clear();
      saveState();
      updateWishlistUI();
      renderCatalog();
      closeWishlistDrawer();
      openCartDrawer();
    });
  }

  // 7. Mobile Navigation Menu Toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileBackdrop = document.getElementById("mobileBackdrop");
  const closeMobileNav = document.getElementById("closeMobileNav");

  const toggleMobileNav = () => {
    sounds.playPop();
    const isActive = mobileDrawer.classList.toggle("active");
    mobileBackdrop.classList.toggle("active", isActive);
    document.body.style.overflow = isActive ? "hidden" : "";
  };

  if (mobileBtn) mobileBtn.addEventListener("click", toggleMobileNav);
  if (closeMobileNav) closeMobileNav.addEventListener("click", toggleMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener("click", toggleMobileNav);
  document.querySelectorAll("a.mobile-link").forEach(link => link.addEventListener("click", toggleMobileNav));

  const mobileThemeBtn = document.getElementById("mobileThemeBtn");
  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener("click", () => {
      toggleMobileNav();
      setTimeout(() => {
        const themeDrawer = document.getElementById("themeStudioDrawer");
        const themeBackdrop = document.getElementById("themeStudioBackdrop");
        if (themeDrawer) themeDrawer.classList.add("active");
        if (themeBackdrop) themeBackdrop.classList.add("active");
        document.body.style.overflow = "hidden";
      }, 250);
    });
  }

  const mobileSoundBtn = document.getElementById("mobileSoundBtn");
  const mobileSoundLabel = document.getElementById("mobileSoundLabel");
  if (mobileSoundBtn) {
    if (mobileSoundLabel) {
      mobileSoundLabel.textContent = `Sound Effects: ${State.soundEnabled ? "On" : "Muted"}`;
    }
    mobileSoundBtn.addEventListener("click", e => {
      e.stopPropagation();
      State.soundEnabled = !State.soundEnabled;
      localStorage.setItem("sbloomora_sound", State.soundEnabled);
      sounds.playPop();
      if (mobileSoundLabel) {
        mobileSoundLabel.textContent = `Sound Effects: ${State.soundEnabled ? "On" : "Muted"}`;
      }
      showToast(State.soundEnabled ? "Audio feedback enabled" : "Audio muted", "✓");
    });
  }

  const mobileWishBtn = document.getElementById("mobileWishlistBtn");
  if (mobileWishBtn) {
    mobileWishBtn.addEventListener("click", () => {
      toggleMobileNav();
      setTimeout(openWishlistDrawer, 250);
    });
  }

  // 8. Header Sticky Shadow & Back to Top
  const header = document.getElementById("siteHeader");
  const backTop = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 30);
    if (backTop) backTop.classList.toggle("visible", y > 400);
  }, { passive: true });

  if (backTop) {
    backTop.addEventListener("click", () => {
      sounds.playPop();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 9. Search Bar in Header & Mascot Search Box (Ref 4)
  const headerSearch = document.getElementById("headerSearchBtn");
  const catalogSearch = document.getElementById("catalogSearchInput");
  const searchClear = document.getElementById("searchClearBtn");
  const searchSubmit = document.getElementById("searchSubmitBtn");

  if (headerSearch) {
    headerSearch.addEventListener("click", () => {
      sounds.playPop();
      document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => catalogSearch && catalogSearch.focus(), 400);
    });
  }

  const searchCatWrap = document.getElementById("searchCatContainer");
  const searchCatBubbleText = document.getElementById("searchCatBubbleText");
  const peekingCat = document.getElementById("searchPeekingCat");

  if (searchCatWrap && catalogSearch) {
    searchCatWrap.addEventListener("click", () => {
      sounds.playChime();
      catalogSearch.focus();
      if (searchCatBubbleText) {
        searchCatBubbleText.textContent = "Meow! Looking for fairy lamps or cute pots?";
      }
      if (peekingCat) {
        peekingCat.classList.add("is-alert");
        setTimeout(() => peekingCat.classList.remove("is-alert"), 3000);
      }
    });
  }

  if (catalogSearch) {
    catalogSearch.addEventListener("focus", () => {
      if (searchCatBubbleText && !catalogSearch.value) {
        searchCatBubbleText.textContent = "Tell me what you'd love to find!";
      }
    });

    catalogSearch.addEventListener("blur", () => {
      if (searchCatBubbleText && !catalogSearch.value) {
        searchCatBubbleText.textContent = "What treasure shall we find today?";
      }
    });

    catalogSearch.addEventListener("input", e => {
      State.searchQuery = e.target.value;
      if (searchClear) searchClear.hidden = !e.target.value;
      
      if (searchCatBubbleText) {
        const val = e.target.value.trim().toLowerCase();
        if (!val) {
          searchCatBubbleText.textContent = "What treasure shall we find today?";
        } else if (val.includes("lamp")) {
          searchCatBubbleText.textContent = "Glowing fairy lamps are right below!";
        } else if (val.includes("pot") || val.includes("tulip") || val.includes("flower")) {
          searchCatBubbleText.textContent = "Handmade botanical pots bring so much joy!";
        } else if (val.includes("doll")) {
          searchCatBubbleText.textContent = "Our artisan braided dolls are adorable!";
        } else {
          searchCatBubbleText.textContent = `Searching for "${e.target.value}"...`;
        }
      }

      renderCatalog();
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      sounds.playPop();
      catalogSearch.value = "";
      State.searchQuery = "";
      searchClear.hidden = true;
      renderCatalog();
    });
  }

  if (searchSubmit) {
    searchSubmit.addEventListener("click", () => {
      sounds.playPop();
      renderCatalog();
    });
  }

  // 10. Category Chips & Hero Category Links
  document.querySelectorAll(".category-pill-card").forEach(card => {
    card.addEventListener("click", () => {
      sounds.playPop();
      const cat = card.dataset.category;
      State.activeCategory = cat;

      // Update chip buttons active states
      document.querySelectorAll(".chip-btn").forEach(chip => {
        chip.classList.toggle("active", chip.dataset.filter === cat);
      });

      renderCatalog();
      document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll(".chip-btn").forEach(chip => {
    chip.addEventListener("click", () => {
      sounds.playPop();
      document.querySelectorAll(".chip-btn").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      State.activeCategory = chip.dataset.filter;
      renderCatalog();
    });
  });

  // 11. Sidebar Filters (Category checkboxes, Price Slider, Colors, Sizes)
  document.querySelectorAll('input[name="catFilter"]').forEach(cb => {
    cb.addEventListener("change", () => {
      sounds.playPop();
      const checkedBoxes = Array.from(document.querySelectorAll('input[name="catFilter"]:checked')).map(c => c.value);
      if (checkedBoxes.length === 1) {
        State.activeCategory = checkedBoxes[0];
      } else {
        State.activeCategory = "All";
      }
      renderCatalog();
    });
  });

  const priceSlider = document.getElementById("priceRangeSlider");
  const priceDisplay = document.getElementById("priceRangeDisplay");
  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener("input", e => {
      State.maxPrice = Number(e.target.value);
      priceDisplay.textContent = `Up to ${money(State.maxPrice)}`;
      renderCatalog();
    });
  }

  document.querySelectorAll(".color-swatch-btn").forEach(swatch => {
    swatch.addEventListener("click", () => {
      sounds.playPop();
      document.querySelectorAll(".color-swatch-btn").forEach(s => s.classList.remove("active"));
      swatch.classList.add("active");
      State.activeColor = swatch.dataset.color;
      renderCatalog();
    });
  });

  document.querySelectorAll(".size-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      sounds.playPop();
      document.querySelectorAll(".size-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      State.activeSize = pill.dataset.size;
      renderCatalog();
    });
  });

  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  const clearSearchStateBtn = document.getElementById("clearSearchStateBtn");
  const resetAllFilters = () => {
    sounds.playPop();
    State.activeCategory = "All";
    State.activeColor = "all";
    State.activeSize = "all";
    State.maxPrice = 6000;
    State.searchQuery = "";

    if (catalogSearch) catalogSearch.value = "";
    if (searchClear) searchClear.hidden = true;
    if (priceSlider) priceSlider.value = 6000;
    if (priceDisplay) priceDisplay.textContent = "Up to Rs 6,000";

    document.querySelectorAll(".chip-btn").forEach(c => c.classList.toggle("active", c.dataset.filter === "All"));
    document.querySelectorAll(".color-swatch-btn").forEach(s => s.classList.toggle("active", s.dataset.color === "all"));
    document.querySelectorAll(".size-pill").forEach(p => p.classList.toggle("active", p.dataset.size === "all"));
    document.querySelectorAll('input[name="catFilter"]').forEach(cb => cb.checked = true);

    renderCatalog();
    showToast("Filters reset to show all pieces", "✓");
  };

  if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", resetAllFilters);
  if (clearSearchStateBtn) clearSearchStateBtn.addEventListener("click", resetAllFilters);

  // Mobile Filter Accordion Toggle
  const mobileFilterBtn = document.getElementById("mobileFilterToggleBtn");
  const shopSidebar = document.getElementById("shopSidebar");
  const activeFiltersBadge = document.getElementById("activeFiltersBadge");

  if (mobileFilterBtn && shopSidebar) {
    mobileFilterBtn.addEventListener("click", () => {
      sounds.playPop();
      const isOpen = shopSidebar.classList.toggle("is-open");
      mobileFilterBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  const sidebarRecommendBtn = document.getElementById("sidebarRecommendBtn");
  if (sidebarRecommendBtn) {
    sidebarRecommendBtn.addEventListener("click", () => openProductModal(2)); // Lotus Lamp
  }

  // 12. Sort Dropdown
  const sortSelect = document.getElementById("catalogSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      sounds.playPop();
      State.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // 13. Product Modal Controls (Ref 1)
  const closeProductBtn = document.getElementById("closeProductModal");
  const productModalBackdrop = document.getElementById("productModalBackdrop");
  if (closeProductBtn) closeProductBtn.addEventListener("click", closeProductModal);
  if (productModalBackdrop) {
    productModalBackdrop.addEventListener("click", e => {
      if (e.target.id === "productModalBackdrop") closeProductModal();
    });
  }

  const modalQtyMinus = document.getElementById("modalQtyMinus");
  const modalQtyPlus = document.getElementById("modalQtyPlus");
  const modalQtyInput = document.getElementById("modalQtyInput");

  if (modalQtyMinus && modalQtyInput) {
    modalQtyMinus.addEventListener("click", () => {
      sounds.playPop();
      const val = parseInt(modalQtyInput.value, 10) || 1;
      if (val > 1) modalQtyInput.value = val - 1;
    });
  }

  if (modalQtyPlus && modalQtyInput) {
    modalQtyPlus.addEventListener("click", () => {
      sounds.playPop();
      const val = parseInt(modalQtyInput.value, 10) || 1;
      modalQtyInput.value = val + 1;
    });
  }

  const modalBuyNowBtn = document.getElementById("modalBuyNowBtn");
  if (modalBuyNowBtn) {
    modalBuyNowBtn.addEventListener("click", () => {
      if (!currentModalProductId) return;
      const qty = parseInt(modalQtyInput.value, 10) || 1;
      addToCart(currentModalProductId, qty);
      closeProductModal();
      openCheckoutModal();
    });
  }

  const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");
  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener("click", () => {
      if (!currentModalProductId) return;
      const qty = parseInt(modalQtyInput.value, 10) || 1;
      addToCart(currentModalProductId, qty);
      closeProductModal();
      openCartDrawer();
    });
  }

  const modalWishlistBtn = document.getElementById("modalWishlistBtn");
  if (modalWishlistBtn) {
    modalWishlistBtn.addEventListener("click", () => {
      if (currentModalProductId) toggleWishlist(currentModalProductId);
    });
  }

  // Accordion Toggle in Product Modal
  const accordionBtn = document.getElementById("accordionToggleBtn");
  const accordionBody = document.getElementById("accordionContent");
  if (accordionBtn && accordionBody) {
    accordionBtn.addEventListener("click", () => {
      sounds.playPop();
      accordionBody.style.display = accordionBody.style.display === "none" ? "flex" : "none";
    });
  }

  // 14. Cart Drawer Promo Code & Checkout Flow
  const applyPromoBtn = document.getElementById("applyPromoBtn");
  const promoInput = document.getElementById("promoInput");
  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener("click", () => {
      sounds.playPop();
      const code = promoInput.value.trim().toUpperCase();
      if (code === "BLOOM10") {
        State.discountPercent = 0.10;
        showToast("Coupon BLOOM10 applied! 10% discount added", "✓");
        renderCart();
      } else {
        showToast("Invalid coupon code. Try using BLOOM10", "✕");
      }
    });
  }

  const proceedCheckoutBtn = document.getElementById("proceedCheckoutBtn");
  const continueShoppingBtn = document.getElementById("continueShoppingBtn");
  if (proceedCheckoutBtn) proceedCheckoutBtn.addEventListener("click", openCheckoutModal);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener("click", closeCartDrawer);

  // 15. Checkout Form Submission & Celebration (Ref 2)
  const closeCheckoutBtn = document.getElementById("closeCheckoutModal");
  const checkoutBackdrop = document.getElementById("checkoutModalBackdrop");
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener("click", closeCheckoutModal);
  if (checkoutBackdrop) {
    checkoutBackdrop.addEventListener("click", e => {
      if (e.target.id === "checkoutModalBackdrop") closeCheckoutModal();
    });
  }

  // Payment radio cards active class toggle
  document.querySelectorAll('.pay-radio-card input[name="payMethod"]').forEach(radio => {
    radio.addEventListener("change", () => {
      sounds.playPop();
      document.querySelectorAll(".pay-radio-card").forEach(c => c.classList.remove("active"));
      radio.closest(".pay-radio-card").classList.add("active");
    });
  });

  const checkoutForm = document.getElementById("checkoutMainForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("shipName").value.trim() || "Kind Friend";
      const randomOrderId = `SB-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      closeCheckoutModal();
      sounds.playChime();

      // Show Order Success Modal
      const successBackdrop = document.getElementById("successModalBackdrop");
      document.getElementById("successCustomerName").textContent = name;
      document.getElementById("successOrderId").textContent = randomOrderId;

      successBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
      triggerConfetti();

      // Clear cart
      State.cart = [];
      saveState();
      renderCart();

      // Update mock orders with this new order for the tracker
      MOCK_ORDERS[randomOrderId] = {
        id: randomOrderId,
        items: "Custom Handmade Floral Keepsakes",
        dest: document.getElementById("shipCity").value || "Pakistan",
        activeStep: 1,
        dates: ["Just Now", "Scheduled", "Pending", "Pending", "Pending"]
      };

      checkoutForm.reset();
    });
  }

  const successBackHomeBtn = document.getElementById("successBackHomeBtn");
  const trackThisOrderBtn = document.getElementById("trackThisOrderBtn");
  const successBackdrop = document.getElementById("successModalBackdrop");

  const closeSuccess = () => {
    successBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (successBackHomeBtn) successBackHomeBtn.addEventListener("click", closeSuccess);
  if (trackThisOrderBtn) {
    trackThisOrderBtn.addEventListener("click", () => {
      const orderId = document.getElementById("successOrderId").textContent;
      closeSuccess();
      const trackInput = document.getElementById("orderTrackInput");
      if (trackInput) trackInput.value = orderId;
      trackOrder(orderId);
      document.querySelector("#track-order").scrollIntoView({ behavior: "smooth" });
    });
  }

  // 16. Custom Order Craft Builder (Ref 2)
  document.querySelectorAll('.craft-radio-card input[name="craftType"]').forEach(r => {
    r.addEventListener("change", () => {
      sounds.playPop();
      document.querySelectorAll(".craft-radio-card").forEach(c => c.classList.remove("active"));
      r.closest(".craft-radio-card").classList.add("active");
      updateCustomEstimate();
    });
  });

  document.querySelectorAll('.palette-option input[name="customPalette"]').forEach(p => {
    p.addEventListener("change", () => {
      sounds.playPop();
      document.querySelectorAll(".palette-option").forEach(c => c.classList.remove("active"));
      p.closest(".palette-option").classList.add("active");
    });
  });

  // Reference file upload preview
  const customFileInput = document.getElementById("customFile");
  const dropzoneContent = document.getElementById("dropzoneContent");
  const filePreviewWrap = document.getElementById("filePreviewWrap");
  const filePreviewImg = document.getElementById("filePreviewImg");
  const removeFileBtn = document.getElementById("removeFileBtn");

  if (customFileInput) {
    customFileInput.addEventListener("change", e => {
      const file = e.target.files[0];
      if (file) {
        sounds.playPop();
        const reader = new FileReader();
        reader.onload = ev => {
          filePreviewImg.src = ev.target.result;
          dropzoneContent.hidden = true;
          filePreviewWrap.hidden = false;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (removeFileBtn) {
    removeFileBtn.addEventListener("click", e => {
      e.stopPropagation();
      customFileInput.value = "";
      dropzoneContent.hidden = false;
      filePreviewWrap.hidden = true;
    });
  }

  const customOrderForm = document.getElementById("customOrderForm");
  if (customOrderForm) {
    customOrderForm.addEventListener("submit", e => {
      e.preventDefault();
      sounds.playChime();
      const name = document.getElementById("customName").value.trim();
      showToast(`Thank you ${name}! Your custom craft request has been received.`, "✓");
      customOrderForm.reset();
      dropzoneContent.hidden = false;
      filePreviewWrap.hidden = true;
      updateCustomEstimate();
    });
  }

  // 17. Order Tracker Form (Ref 2)
  const trackerForm = document.getElementById("trackerForm");
  const trackInput = document.getElementById("orderTrackInput");

  if (trackerForm && trackInput) {
    trackerForm.addEventListener("submit", e => {
      e.preventDefault();
      trackOrder(trackInput.value);
    });
  }

  document.querySelectorAll(".btn-sample-code").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.code;
      if (trackInput) trackInput.value = code;
      trackOrder(code);
    });
  });

  // Initial tracker run with sample order
  trackOrder("SB-2026-88");

  // 18. Gallery Filter Chips (Ref 2)
  document.querySelectorAll(".g-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      sounds.playPop();
      document.querySelectorAll(".g-filter").forEach(f => f.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.gfilter;
      document.querySelectorAll(".gallery-item").forEach(item => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "block";
          item.style.animation = "scalePop 0.4s ease";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 19. Contact Form & Newsletter
  const contactForm = document.getElementById("contactMessageForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      sounds.playChime();
      const name = document.getElementById("contactName").value.trim();
      showToast(`Thank you ${name}! Your message has been received.`, "✓");
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", e => {
      e.preventDefault();
      sounds.playChime();
      showToast("Welcome to S.bloomora! Check your inbox for your 10% voucher.", "✓");
      newsletterForm.reset();
    });
  }

  // 20. View all treasures link
  const viewAllShopLink = document.getElementById("viewAllShopLink");
  if (viewAllShopLink) {
    viewAllShopLink.addEventListener("click", e => {
      e.preventDefault();
      sounds.playPop();
      State.activeCategory = "All";
      document.querySelectorAll(".chip-btn").forEach(c => c.classList.toggle("active", c.dataset.filter === "All"));
      renderCatalog();
      document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
    });
  }

  // 21. Interactive 3D Parallax Tilt for Hero Showcase
  const heroCard = document.getElementById("heroImageCard");
  if (heroCard) {
    const stickers = heroCard.querySelectorAll(".sticker-badge");

    heroCard.addEventListener("mousemove", e => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * 9;
      const rotateY = ((x - centerX) / centerX) * 9;

      heroCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      // Parallax on stickers
      stickers.forEach(sticker => {
        const speed = parseFloat(sticker.dataset.parallaxSpeed) || 1;
        const moveX = ((x - centerX) / centerX) * 8 * speed;
        const moveY = ((y - centerY) / centerY) * 8 * speed;
        sticker.style.transform = `translate(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px) scale(1.04)`;
      });
    });

    heroCard.addEventListener("mouseleave", () => {
      heroCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      stickers.forEach(sticker => {
        sticker.style.transform = "";
      });
    });
  }

  // 22. Top Scroll Depth Progress Bar
  const scrollBar = document.getElementById("scrollProgressBar");
  if (scrollBar) {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        const scrolled = (scrollTop / docHeight) * 100;
        scrollBar.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
      }
    };
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();
  }

  // 23. Luxury Scroll-Driven Reveal System (IntersectionObserver)
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("is-revealed"));
  }

  // 24. Subtle Micro-Sound Plucks on Hover
  document.querySelectorAll(".category-pill-card").forEach((card, idx) => {
    card.addEventListener("mouseenter", () => {
      const notes = [523.25, 587.33, 659.25, 698.46, 783.99, 880.00];
      sounds.playHarp(notes[idx % notes.length]);
    });
  });

  const exploreBtn = document.getElementById("heroExploreBtn");
  const customBtn = document.getElementById("heroCustomOrderBtn");
  if (exploreBtn) exploreBtn.addEventListener("mouseenter", () => sounds.playHarp(659.25));
  if (customBtn) customBtn.addEventListener("mouseenter", () => sounds.playHarp(880.00));
});

// Global functions for inline HTML calls
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.switchModalThumb = switchModalThumb;
window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;
window.updateCartQty = updateCartQty;
window.removeCartItem = removeCartItem;
window.closeCartDrawer = closeCartDrawer;
