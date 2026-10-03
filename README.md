# Tulas International School (TIS) - Homepage Redesign

A modern, animated, and fully responsive redesign of the [Tulas International School](https://tis.edu.in/) homepage. The brand identity and all official copy come from the original site; the layout, typography, motion, and interactions are completely reimagined for a premium, modern experience.

---

## 🚀 Live Demo & Links
- **Live URL:** [Deploying to Vercel...]
- **GitHub Repository:** [https://github.com/KajalDalai-309/TIS-HOME-PAGE-REDESIGN](https://github.com/KajalDalai-309/TIS-HOME-PAGE-REDESIGN)
- **Original Website:** [tis.edu.in](https://tis.edu.in/)

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite (fast HMR and optimized production bundles)
- **Styling:** Tailwind CSS (brand colours, responsive utilities, and light/dark theme variables)
- **Animations:** Framer Motion (orchestrated entry reveals, sticky scroll, spring physics)
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## ✨ Standout Features Implemented

All standout features from the redesign assignment have been fully implemented with high polish:

1. **Custom Cursor (`src/components/animation/CustomCursor.jsx`)**
   - Spring-driven ring following mouse movement using Framer Motion motion values (avoids React re-renders on pointer move).
   - Dynamically scales and displays contextual action labels (`Apply`, `Explore`, `Drag`, `Play`) via `data-cursor` attributes.
   - Automatically disabled on touch devices using media queries (`hover: hover` and `pointer: fine`).

2. **Scroll-Triggered Reveals & Live Count-Up (`RevealWrapper`, `MaskText`, `useCountUp`)**
   - Masked headline reveals, staggered card entrances, and smooth fade-up animations (0.3s–0.6s) that trigger once when scrolled into view.
   - Live number count-up for campus stats (22+ acres, 100% CBSE, 1:8 ratio) and school rankings (#1 boarding school in Dehradun).

3. **Animated Dark / Light Theme Switcher (`ThemeToggle.jsx`, `hooks/useTheme.js`)**
   - Smooth circular transition expanding from the toggle button using the View Transitions API (with CSS fallback).
   - Preference saved in `localStorage` and applied via an inline `<script>` before first paint to prevent theme flashing.

4. **Scroll Progress Bar (`ScrollProgress.jsx`)**
   - Ultra-smooth reading progress bar fixed at the top of the viewport, powered by `useScroll` and `useSpring` (animates `scaleX` for GPU acceleration).

5. **Interactive Hero Section with Dual-Side Sticky Scroll**
   - Central typography anchored while 4 curated pairs of activity and academic orbs scroll smoothly alongside it, showcasing TIS's "Modern Gurukul" ethos (*Mind, Body, Soul*).

6. **Interactive Sports Showcase & Detail Modal (`SportsSection.jsx`, `SportModal.jsx`)**
   - Interactive preview of 16+ sports facilities with image hover transitions.
   - Full keyboard-accessible dialog (Esc to close, focus trapped) with dedicated descriptions and facility details.

7. **Validated Enquiry & Admission Form (`EnquirySection.jsx`)**
   - Embedded TIS official crest, real contact channels (helpline, email, address), and inline form validation (10-digit mobile, class selection, state) with instant user feedback.

8. **Parent Testimonials & Reels (`ParentsSection.jsx`)**
   - Mobile-optimized horizontal reel slider with video play states and parent feedback cards.

---

## 🎨 Brand Identity Retained

- **Color Palette:** Preserved TIS's signature Crimson (`#b90124`), Deep Teal (`#008080`), and warm background tones.
- **Official Copy & Data:** Preserved all official headings, statistics, Outlook & Education Today ranking recognitions, leadership profiles, and verified parent reviews.
- **Assets:** Official school crest, campus photographs, and promotional video clips directly from [tis.edu.in](https://tis.edu.in/).

---

## 🔄 What Changed From the Original

| Original TIS Homepage | Redesigned Experience |
|---|---|
| Cluttered multi-level navigation with 9+ items | Streamlined, focused 6-item navigation with responsive drawer |
| Disruptive auto-opening popups and OTP barriers | Inline validation enquiry card with instant confirmation |
| Very small, low-contrast text for reviews & leadership | Bold, legible editorial typography with italic serif accents |
| Heavy background scripts and overlapping chat bubbles | Zero clutter; distraction-free reading experience |
| Unoptimized media causing layout shifts | Next-gen WebP images with aspect ratios and on-demand video loading |

---

## 📦 Getting Started Locally

### Prerequisites
- Node.js 18.0 or newer
- npm 9.0 or newer

### Setup Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/KajalDalai-309/TIS-HOME-PAGE-REDESIGN.git
   cd tis-homepage-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Create a production build:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🌐 Deployment (Vercel)

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your `tis-homepage-redesign` repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Set:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Your site will be live with an SSL certificate!

---

## 🧱 Component Architecture Overview

```text
src/
├── components/
│   ├── ui/          # Button, SectionHeading, DragCarousel, SportModal
│   ├── layout/      # TopBar, Navbar, MobileNav, Footer
│   ├── sections/    # Hero, About, Sports, Secret, Stats, Rankings,
│   │                # Personalities, Awards, WhyTis, Parents, Reviews,
│   │                # Collaborations, Enquiry
│   └── animation/   # CustomCursor, ScrollProgress, RevealWrapper,
│                    # MaskText, WordReveal, Magnetic, Marquee, Preloader
├── hooks/           # useTheme, useFinePointer, useCountUp
├── data/            # tisData.js (central source of truth for all copy & assets)
├── styles/          # index.css (Tailwind layers & design tokens)
├── App.jsx          # Root page assembly & scroll progress
└── main.jsx         # Application entry point
```

- **Separation of Data & UI:** All text, rankings, and image URLs reside in `src/data/tisData.js`, making copy updates instantaneous without touching component code.
- **Custom Hooks:** Business logic (theme switching, count-up intervals, pointer capability) is cleanly extracted from the UI layer.

---

## ♿ Accessibility & Performance

- **Semantic Landmarks:** `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` with descriptive ARIA attributes and unique `id`s.
- **Single `<h1>`:** Strict heading hierarchy maintained across all sections.
- **Accessible Interactions:** 44px+ touch targets on all interactive elements, keyboard accessibility on modals and menus (`Esc` to close), visible focus rings (`focus-visible`).
- **Motion Accessibility:** Automatically respects `prefers-reduced-motion` settings via Framer Motion's `<MotionConfig reducedMotion="user">`.
- **Responsive Testing:** Fully verified across Mobile (360px–480px), Tablet (768px–1024px), and Desktop (1280px+).

---

## 📝 Notes & Disclaimers

- The enquiry form is client-side validated for demonstration purposes and directs inquiries to the official admissions helpline and application portal.
- All brand trademarks, logos, and imagery belong to **Tulas International School**. This project is a front-end design and engineering submission.
- Developed with modern web best practices, clean modular architecture, and assistive coding tools as permitted by the assignment brief.
