<div align="center">
  <img src="public/profile.png" width="120" height="auto" />
  <h1>Vaibhav Khopkar | Contact Center Architect</h1>
  <p><b>Senior Contact Center Consultant & Unified Communications Expert</b></p>
  
  [![Next.js](https://img.shields.io/badge/Built_with-Next.js_14-black?style=for-the-badge&logo=next.js)](#)
  [![React Three Fiber](https://img.shields.io/badge/3D_Engine-React_Three_Fiber-black?style=for-the-badge&logo=react)](#)
  [![Three.js](https://img.shields.io/badge/WebGL-Three.js-black?style=for-the-badge&logo=three.js)](#)
  [![Tailwind CSS](https://img.shields.io/badge/Styled_with-Tailwind_CSS-black?style=for-the-badge&logo=tailwind-css)](#)
</div>

<br/>

## 🌐 Executive Overview

This repository contains the source code for the interactive, 3D-accelerated professional portfolio of **Vaibhav Khopkar**, an enterprise architect specializing in Customer Experience (CX) and Cloud Transformations across 12+ countries.

The platform is designed to break away from traditional static document resumes by utilizing real-time WebGL rendering—specifically a massive 61MB photorealistic Earth model that responds dynamically to the user's scroll depth and operating system theme preferences (Light/Dark mode).

## ✨ Core Features

* **Cinematic 3D Parallax:** An ultra-high-definition glTF Earth model rendered via `@react-three/fiber`, mapped with continuous background rotation and deep Z-axis scroll translation.
* **Intelligent Theming:** Complete Next.js `next-themes` integration. The 3D global lighting reacts instantly to mode swaps (Sunlight vs Ambient Starlight), while the DOM seamlessly translates between Pearl White frosted glass and Deep Slate glassmorphism.
* **Asymmetrical Editorial Layout:** A premium, non-traditional typography flow designed to mimic high-end corporate brochures, utilizing CSS spatial masking and absolute positioning.
* **Component-Driven Architecture:** Modular sections (`Hero.tsx`, `About.tsx`, `Experience.tsx`, `CaseStudies.tsx`) designed for rapid updating of executive metrics.

## 🛠️ Technology Stack

1. **Framework:** Next.js (App Router) + React 18
2. **WebGL Context:** Three.js + React Three Fiber + Drei
3. **Styling:** Vanilla CSS Variables (Theming) + Tailwind CSS + Glassmorphism (`backdrop-filter`)

## 🚀 Local Development

First, install all necessary dependencies:

```bash
npm install
# or
yarn install
```

Start the Turbopack development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to witness the 3D environment in real-time.

## 📁 Repository Structure

* `/src/components/`: Contains all interactive DOM and 3D Canvas elements.
  * `RealisticEarth.tsx`: The WebGL component hosting the 61MB custom `.glb` model.
  * `CaseStudies.tsx`: Render logic for the high-contrast analytical data cards.
  * `ThemeProvider.tsx`: Next-themes injection wrapper handling hydration overrides.
* `/public/models/`: Holds the heavy 3D asset dependencies (`earth.glb`).
* `/src/app/globals.css`: Contains the deeply nested `color-mix()` CSS variables driving the seamless Light/Dark mode transitions.

---
<div align="center">
  <i>Architecting Customer Experience & Cloud Transformations.</i>
</div>
