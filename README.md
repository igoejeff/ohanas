# Ohana's Island Bistro & Live Music — Website

## Project Overview
A premium, high-end static website for **Ohana's Island Bistro & Live Music**, located in Kihei, Maui, Hawaii. The design uses the brand's signature **navy blue (#0D1F3C)** and **gold (#C9A84C)** color palette with Playfair Display serif typography, inspired by an Apple-level aesthetic.

---

## ✅ Completed Features

- **Artist Spotlight / "Who Plays at Ohana's"** — premium full-width dark section (`#artists`) featuring:
  - **Kris Bradley** (Resident Artist, Mon & Thu): two-column bio layout, photo panel with floating badge, genre tags, pull-quote, featured YouTube video embed (*Funhouse*), 3-video mini-thumbnail grid, platform links (Website, Instagram, YouTube, SoundCloud)
  - **Tripp Wilson** (Owner & Artist, Nightly): mirrored reverse layout, bio panel, *Way Back Home* featured embed, 3-video mini-grid (Stole My Heart, I Can't Wait, I Love My Truck), platform links (YouTube, Instagram, Spotify, Apple Music)
  - "More Artists Coming Soon" teaser banner
  - Ambient gold/navy background orbs, gold rule divider, responsive at 1024/768/480px
- **Sticky navigation bar** — transparent on load, solid navy on scroll, with mobile hamburger menu
- **Hero section** — full-screen venue photo with overlaid messaging that prominently communicates *nightly live music, 7 days a week*
- **Live Music banner** — dedicated section with 4 feature cards reinforcing the music-every-night value proposition
- **Atmosphere split section** — side-by-side image and copy about the outdoor patio experience
- **Full Menu section** — all items from the menu image, organized into:
  - Entrées (6 items, GF-labeled)
  - Burgers & Sandwiches (7 items)
  - Island Favorites: Fish & Chips, Tacos
  - Sides
  - Health/allergy disclaimer
- **Food photo gallery** — 6-card grid using all provided food images, with lightbox on click
- **Venue gallery** — 5-photo grid of atmosphere and musician photos with lightbox
- **About section** — brand story with 3 pillar cards (Fresh & Local, Nightly Music, True Aloha)
- **Contact/Visit section** — 4 info cards (Location, Hours, Music, Social)
- **Footer** — logo, tagline, copyright
- **Scroll animations** — fade-up entrance animations for all major elements
- **Image lightbox** — click any gallery or food photo to expand it

---

## 📁 File Structure

```
index.html          — Main single-page website
css/
  style.css         — Full CSS (variables, nav, hero, menu, gallery, responsive)
js/
  main.js           — Scroll effects, mobile nav, animations, lightbox
README.md           — This file
```

---

## 🔗 Functional Entry Points

| Path | Description |
|------|-------------|
| `index.html` | Main page |
| `index.html#home` | Hero / top |
| `index.html#music` | Live Music section |
| `index.html#menu` | Full menu |
| `index.html#gallery` | Gallery |
| `index.html#about` | About section |
| `index.html#contact` | Visit Us / Contact |

---

## 📸 Image Assets Used (from provided URLs)

| URL | Used For |
|-----|----------|
| `ofdLxmQz` | Logo (nav + footer) |
| `mfUVb2IC` | Hero background + gallery |
| `LWqBpGKL` | Atmosphere split + gallery |
| `gj1lZ9sp` | Gallery (musician 1) |
| `5nkmQNdB` | Gallery (musician 2) |
| `HY9t0Fuu` | Gallery (toasting with musician) |
| `lVGeLkIO` | About section (venue sign) |
| `Nxgc1Zwx` | Food card (burger) |
| `rDrGnIoP` | Food card (loaded fries) |
| `VFX9Bf0k` | Food card (sushi/fresh catch) |
| `PGhwVbuL` | Food card (wings) |
| `z5jOTfpC` | Food card (tacos) |
| `UdrfIuTf` | Food card (whole fish) |
| `HUtWtatU` | Menu reference (not directly embedded) |

---

## 🚧 Not Yet Implemented / Suggested Next Steps

- **Online reservations** — integration with OpenTable or Resy
- **Events calendar** — weekly live music schedule with performer names/photos
- **Social media feed** — live Instagram/Facebook embed
- **Email newsletter signup** — footer opt-in form
- **Merch/gift cards** — e-commerce integration
- **Google Maps embed** — interactive map in contact section
- **Phone number & address** — to be filled in by client
- **Performer booking page** — for bands/musicians to inquire

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--navy` | `#0D1F3C` |
| `--gold` | `#C9A84C` |
| `--cream` | `#F7F3ED` |
| Primary font | Playfair Display (serif) |
| Body font | Inter (sans-serif) |
