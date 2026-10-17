# Responsive Architecture & Layout Decisions Notes
**Project:** Portofolio M. Othmar Safaraz 2026
**Base Design Source of Truth:** Figma Desktop (1440px) `https://www.figma.com/design/MuHZz5H80p8yMRNV4lLDo6/Portofolio-Othmar-2026?node-id=5-2&m=dev`

---

## 1. Stage A Fixes Log (Visible Bugs)
- **A1. Fixed Navbar Overlap:**
  - Implemented `scroll-margin-top: 90px` across all main sections (`#home, #about, #pcr-cup, #jti-expo, [id="4c"], #works, #contact`) in `src/index.css`.
  - When users navigate via the fixed navbar, smooth scroll lands with a comfortable 90px breathing room so headers ("Hello, Everyone I'm", "Thanks!", etc.) are fully visible and not blocked by the navbar.
- **A2. Polaroid Date "29 mei 2005" & Bulldog Clip Placement:**
  - Updated Bulldog Paper Clip position in `src/components/AboutSection.tsx` to `left-[36%]` with `z-10` matching Figma coordinate (1049px relative to 855px card start = 36.6%).
  - Moved the cursive date to `relative z-20 text-right pr-6` so the full text "29 mei 2005" is completely legible to the right of the clip without any part of the letter "2" being covered.
- **A3. Red Smiley Sticker Restoration:**
  - Diagnosed: Previous assets (`b3fe1bcf9c798427d0da2654580eecdf6b8af674.svg` and `0647628845e082ae6edfb073dabf2bb8aabeabbf.svg`) were vector exports of only the cream outline paths without the solid red circular background ellipse. Furthermore, `mix-blend-multiply` caused color washing.
  - Replaced smile sticker in `AboutSection.tsx` and `JtiExpoSection.tsx` with `/assets/stickers/sticker-smile-complete.svg`.
  - Replaced the second "o" in `PersonalWorksSection.tsx` with `/assets/stickers/badge-smile-complete.svg` (solid red ellipse + concentric cream smile).
  - Updated GSAP entrance animation in `HeroSection.tsx` so `stickerAlwaysRef` lands at `-9.88deg` and `stickerSmileRef` lands at `-15deg` with `opacity: 1` and `scale: 1`.
- **A4. Hero Left Blue Blob Cutoff:**
  - Replaced the bounded SVG blur image with a CSS `radial-gradient` glow in `src/App.tsx` (`left-[-450px] top-[260px] w-[1100px] h-[650px]`, `blur(35px)`). It seamlessly dissolves into the `#f4f7f4` background with zero hard edges or bounding box rectangles.
- **A5. Personal Works Photo Dimensions & Aspect Ratio:**
  - Standardized all 8 photo cards in `PersonalWorksSection.tsx` with explicit `w-[337px] h-[190px] aspect-[337/190] shrink-0` and inner `object-cover`.

---

## 2. Stage B Strategy & Responsive Breakpoint System

### Breakpoint Matrix
1. **$\ge$ 1440px (Desktop Ground Truth):**
   - Locked strictly to 1440px container, centered (`max-width: 1440px; margin-inline: auto`).
   - Blobs and grid extend full-bleed across viewport.
   - 100% identical 1:1 pixel-accurate fidelity with Figma at 1440px and 1920px (no uncontrolled ballooning).
2. **1024px – 1439px (Laptop Proportional Scaling):**
   - Proportional scale factor $scale = \min(\text{viewport}, 1440) / 1440$.
   - Scale factor managed cleanly without breaking layout or shrinking text below 13px.
3. **768px – 1023px (Tablet):**
   - Single-column flow per section, centered elements, maintaining original mockups and badges.
4. **$<$ 768px (Mobile 320px – 430px):**
   - Dedicated clean mobile design system with single-column layout, touch targets $\ge 44\times 44\text{px}$, horizontal scroll-snap carousels with peek hint, compact mobile header with hamburger menu + safe-area notch support (`env(safe-area-inset-*)`).
   - Zero horizontal overflow (`overflow-x: clip`).
   - Dynamic viewport height using `svh`/`dvh` instead of fixed `100vh`.

---

## 3. Stage C Layout Decisions Per Section (Mobile < 768px)
- **C1. Hero Section:**
  - Placed "Welcome To Othmar's" and giant "PORT/FOLIO" typography in a single `@container` wrapper with locked aspect-ratio `851/445` (1.912).
  - Used fluid `cqi` units for typography (`clamp(28px, 29.38cqi, 250px)` for PORT and `clamp(26px, 28.2cqi, 240px)` for FOLIO) and percentage coordinates for stickers (`left: 17.27%`, `left: 49.69%`, `left: 17.58%`).
  - Added lightweight mobile radial gradient blobs behind the title (`lg:hidden`, `blur-[28px]`, opacity ~40%) so the title remains sharp and never covered.
- **C2. About Section:**
  - Applied CSS `contents` on the desktop 2-column wrappers (`lg:col-span-7` and `lg:col-span-5`), allowing child blocks to be directly reordered on mobile using flex `order-1` to `order-6`:
    1. Greeting, Name & Bio (`order-1`)
    2. Polaroid Frame with paper clip, date, name tag, green kid sticker, and solid red smile sticker (`order-2`)
    3. Experience Timeline (`order-3`)
    4. Education (`order-4`)
    5. Contact CTA Card (`order-5`)
    6. Software Icons Grid (`order-6`)
  - Guaranteed zero collision between text and polaroid. Software icons are rendered in a 6-column grid with $\ge 44\times 44\text{px}$ touch targets.
- **C3. PCR Cup, JTI Expo & 4C National Competition:**
  - Mobile text-first hierarchy: Section title $\to$ Instagram link $\to$ Description $\to$ Visual Asset Mockup cluster.
  - Mockup clusters are scaled using locked aspect-ratios (`aspect-[650/600]` for PCR Cup, `aspect-[449/734]` for JTI Expo Standee, `aspect-[650/550]` for 4C dual iPhones).
  - 3D emojis (heart-eyes, laughing) are scaled down using `clamp()` and clipped cleanly at screen edges with `overflow-x: clip`.
  - Description text is left-aligned on mobile (`text-left`) for maximum reading comfort and justified only on desktop (`lg:text-justify`).
- **C4. Horizontal Scroll-Snap Carousels:**
  - The 5 match posters of PCR Cup and 5 ARVANA screens of 4C are transformed into touch-friendly horizontal snap carousels (`overflow-x-auto snap-x snap-mandatory scrollbar-none`) on mobile.
  - Next cards peek partially at the right edge as an intuitive swipe cue without causing page-level horizontal scrolling.
  - Card corner radiuses, drop shadows, and aspect ratios match Figma 1:1.
- **C5. Personal Works:**
  - Shifted dashed timeline line to the left edge (`left-[20px] sm:left-[24px]`) on mobile and tablet.
  - All 4 categories (Street Photography, Wedding Photography, Sketching & Drawing, 3D Animation Project) flow sequentially along the right side of the line with black marker dots pinned directly to the line.
  - Alternating left/right desktop layout is eliminated on mobile. Each category features 2 photos side-by-side in a 2-column grid (`grid grid-cols-2 gap-3`).
- **C6. Contact (Footer):**
  - "Thanks!" italic heading, 1.5px vertical connector line, and "Let's Work Together" (clamped with `clamp(32px, 8vw, 84px)` to prevent line-wrapping awkwardness).
  - Phone and Email buttons are stacked vertically with $\ge 48\text{px}$ touch target heights, pill backgrounds, and native `tel:` and `mailto:` protocols.

---

## 4. Stage D Navbar, BGM & Intro Screen (Mobile)
- **D1. Responsive Compact Navbar & Full-screen Drawer:**
  - Mobile viewport (< 768px): Compact header bar containing the OTHMAR logo on the left, BGM mute button and Hamburger button on the right.
  - Hamburger button has a touch area $\ge 44\times 44\text{px}$.
  - Clicking hamburger opens a full-screen drawer with background grid, atmospheric red accent glow, and large typography for all 7 sections.
  - Drawer includes: safe-area notch padding (`env(safe-area-inset-top)`), scroll lock on `document.body`, Esc key listener, tap-outside-to-close, and `aria-expanded` accessibility state.
  - Selecting an item triggers smooth section transition, closes drawer, and auto-scrolls to the section without header overlap.
- **D2. Audio / BGM Autoplay & Visibility Resilience:**
  - Audio playback starts inside the user gesture handler of the "Enter" button on the Intro Screen.
  - Added event listeners for `visibilitychange`, `pagehide`, and `pageshow` to seamlessly pause audio when user switches tabs or locks mobile screen and resume when returning.
  - BGM toggle button has area $\ge 44\times 44\text{px}$ and notch-safe spacing (`env(safe-area-inset-right)`).
- **D3. Mobile Intro Screen:**
  - Tap-to-skip enables immediate entry.
  - Fast-tracked mobile transition (320ms vs 600ms).
  - Bypasses animations when `prefers-reduced-motion` is detected.
- **D4. Section Navigation Transition:**
  - Clean gradient sweep using only hardware-accelerated `transform` and `opacity` properties to prevent stuttering or flicker on iOS Safari / Android Chrome.

---

## 5. Stage E Performance Optimizations
- **Image Optimization:**
  - All below-the-fold images across `AboutSection`, `PcrCupSection`, `JtiExpoSection`, `Competition4CSection`, and `PersonalWorksSection` are equipped with `loading="lazy"` and `decoding="async"`.
  - All images and mockup containers have explicit aspect ratios to guarantee Cumulative Layout Shift (CLS) $< 0.1$.
- **Background Blobs Optimization:**
  - Large desktop blurred SVG filters are hidden on mobile (`hidden lg:block`).
  - Mobile devices use lightweight CSS `radial-gradient` ambient glows with small blurs (`blur-[28px]`) positioned inside section wrappers with `pointer-events-none`.
- **Horizontal Overflow Prevention:**
  - `overflow-x: clip` applied to `html`, section wrappers, and root container, completely preventing page-level horizontal overflow (`document.documentElement.scrollWidth === window.innerWidth`).
  - Removed `overflow-x: hidden` from `body` to preserve `position: fixed` and `position: sticky`.

---

## 6. Stage F Verification & Breakpoint Testing Results
- **320px (iPhone SE narrowest):** Zero horizontal scrollbar, title scales gracefully via `cqi`, all touch targets $\ge 44\text{px}$.
- **360px (Standard Android):** Fluid single column, stickers scaled proportionately without overlap.
- **390px / 414px (iPhone 13/14/15 Pro & Plus):** Touch-friendly carousel swiping, comfortable typography line-heights.
- **768px (iPad Mini / Portrait Tablet):** Single column centered layout with badges and mockups preserved.
- **1024px (iPad Pro / Small Laptop):** Proportional desktop scale factor ($1024/1440 = 0.711$) activated smoothly.
- **1280px (MacBook / Standard Laptop):** Proportional desktop scale factor ($1280/1440 = 0.888$), zero layout degradation.
- **1440px (Figma Source of Truth):** 100% pixel-accurate match with Figma design (`scale = 1`).
- **1920px (Desktop Full HD Monitor):** Content container locked at 1440px centered, zero magnification/ballooning, background grid and atmospheric blobs full-bleed across the entire 1920px width.
