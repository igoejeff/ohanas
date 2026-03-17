# Ohana's Island Bistro & Live Music — Website

Premium static website for **Ohana's Island Bistro & Live Music**, located at 1945 S Kihei Rd, Suite C&D, Kihei, Maui, HI 96753.

---

## 🎯 Project Overview

- **Brand**: Navy blue `#0D1F3C` + gold `#C9A84C` + cream `#F5ECD7`
- **Typography**: Playfair Display (headings) + Inter (body)
- **Stack**: Pure HTML5, CSS3, Vanilla JS — no build step, no dependencies
- **Pages**: `index.html` (main), `menu.html` (full menu)

---

## ✅ Completed Features

### Navigation
- Sticky navbar: transparent → solid navy on scroll
- Mobile hamburger menu
- Active section highlighting via IntersectionObserver

### Hero
- Full-screen background photo (`images/hero-patio.jpg`)
- Animated tagline + CTA buttons
- Scroll indicator

### Live Music Section (`#music`)
- Weekly schedule grid (Mon–Sun, 3 PM–9 PM slots)
- Happy Hour + Live Music time blocks
- Kris Bradley highlighted as Resident Artist (Mon & Thu)
- Featured Night highlight (Fri & Sat)
- Schedule legend

### Artist Spotlight (`#artists`)
- **Tripp Wilson** (Owner & Artist — Nightly): Crown badge, YouTube thumbnail photo, bio, genre tags (Country, Americana, Singer-Songwriter, Island Rock), pull quote
- **Kris Bradley** (Resident Artist — Mon & Thu): Local photo (`images/kris-bradley.jpg`), bio, genre tags (Acoustic, Singer-Songwriter, Country, Soul, Jazz), Los Angeles → Maui quick-fact
- "More Artists Coming Soon" teaser banner with Instagram link
- Alternating photo-left / photo-right layout
- Navy/gold/cream premium styling

### Menu Preview (`#menu-preview`)
- 8-card photo grid with badge overlays (GF, Chef's Pick, Fan Fave)
- Category quick-links (Entrées, Burgers, Island Favorites, Sides, Drinks)
- Full Menu CTA + phone CTA
- Online ordering row (Order Online + DoorDash — both "Coming Soon")

### Drinks Section (`#drinks`)
- Hero Mai Tai image + copy
- 4-card cocktail grid

### Video Section
- Photo mosaic (patio + performer + toast)
- Embedded YouTube: Tripp Wilson — Way Back Home

### Gallery (`#gallery`)
- 9-photo grid (2 wide + 7 standard) with lightbox
- All images stored locally

### Reviews (`#reviews`)
- Google + Yelp platform badges
- 5 customer review cards with star ratings

### About / Contact (`#contact`)
- 3-pillar About cards (Live Music, Food, Community)
- Contact/Visit section: hours, address, phone, parking info
- Footer with nav links + social icons

### Full Menu Page (`menu.html`)
- Sticky category navigation tabs
- Sections: Entrées, Burgers & Sandwiches, Island Favorites (Starters), Sides, Drinks
- All items with photos, descriptions, prices, dietary badges (GF, V, etc.)
- Health & allergy disclaimer

---

## 🖼️ Image Assets (All Local)

### Root `images/`
| File | Used For |
|------|----------|
| `logo.png` | Navbar logo, footer, contact section |
| `hero-patio.jpg` | Hero background, gallery, menu hero |
| `kris-bradley.jpg` | Artist spotlight (Kris Bradley) |
| `kris-bradley-2.jpg` | Alternate Kris photo (unused) |
| `atmosphere-performer.jpg` | Atmosphere section |
| `venue-performer.jpg` | Video section photo mosaic |
| `venue-toast.jpg` | Video section + gallery |
| `venue-night.jpg` | Gallery |
| `contact-sign.jpg` | Contact/About section |
| `gallery-cocktails-band.jpg` | Gallery |
| `gallery-live-duo.jpg` | Gallery |
| `gallery-keyboard.jpg` | Gallery |
| `gallery-shaka.jpg` | Gallery |
| `gallery-kihei-sign.jpg` | Gallery |

### `images/menu/`
| File | Item |
|------|------|
| `ribs.jpg` | Pauly's Saucy Ribs |
| `ribeye-steak.jpg` | 14oz Ribeye |
| `seafood-pasta.jpg` | Island Breeze Pasta |
| `huli-huli-chicken.jpg` | Huli Huli Chicken |
| `fresh-catch.jpg` | Fresh Catch of the Day |
| `burger.jpg` | Bistro Burger / House Burger |
| `nachos.jpg` | Island Nachos |
| `island-fries.jpg` | Island Fries / Waffle Fries |
| `fish-tacos.jpg` | Fish Tacos |
| `mai-tai.jpg` | Famous Mai Tai |
| `cocktails.jpg` | Cocktails |
| `island-tacos.jpg` | Island Tacos |
| `bbq-pulled-pork.jpg` | BBQ Pulled Pork Sandwich / Cheesesteak |
| `tiki-cocktails.jpg` | Tiki Bar Classics / Ohana's Mai Tai |
| `coconut-margarita.jpg` | Coconut Margarita |
| `sunset-cocktail.jpg` | Maui Sunset |
| `cocktails-patio.jpg` | Patio Pours |
| `island-burger.jpg` | Island Burger / Fish & Chips |
| `chicken-wings.jpg` | 6-Piece Chicken Wings |
| `ribeye.jpg` | Ribeye (alternate) |

---

## 🔗 Key URIs

| Section | URL |
|---------|-----|
| Home | `index.html` |
| Live Music | `index.html#music` |
| Artist Spotlight | `index.html#artists` |
| Menu Preview | `index.html#menu` |
| Drinks | `index.html#drinks` |
| Gallery | `index.html#gallery` |
| Reviews | `index.html#reviews` |
| Contact / Visit | `index.html#contact` |
| Full Menu | `menu.html` |
| Menu — Entrées | `menu.html#entrees` |
| Menu — Burgers | `menu.html#burgers` |
| Menu — Starters | `menu.html#appetizers` |
| Menu — Sides | `menu.html#sides` |
| Menu — Drinks | `menu.html#drinks-menu` |

---

## 📞 Business Info

- **Address**: 1945 S Kihei Rd, Suite C&D, Kihei, Maui, HI 96753
- **Phone**: (808) 868-3111
- **Instagram**: [@trippwilsonpresents](https://www.instagram.com/trippwilsonpresents)
- **Kris Bradley**: [@iamkrisbradley](https://www.instagram.com/iamkrisbradley/)

---

## 🚀 Deployment Notes

- **Zero** external image dependencies — all images stored locally in `images/`
- YouTube embeds (Tripp Wilson videos) require internet connection
- Font Awesome 6.4.0 loaded via jsDelivr CDN
- Google Fonts (Playfair Display + Inter) loaded via Google CDN
- No backend, no build process — deploy as-is via Publish tab

---

## 📋 Known Items / Future Enhancements

- **Online Ordering**: Currently shows "Coming Soon" — needs DoorDash/Toast integration when ready
- **Artist TBD slots**: Calendar placeholders for nights other than Kris Bradley — update when more artists booked
- **Reservation system**: Contact section shows hours/address; no live booking system (by design)
- **Menu prices**: Marked "Market" on drinks — update when pricing is finalized
- **More Artists**: "Coming Soon" banner in Artist Spotlight — add new cards when artists are booked
