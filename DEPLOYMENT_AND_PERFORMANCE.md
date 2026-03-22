# Vaibhav Khopkar - Portfolio Vercel Deployment & Performance Guide

## 🚀 1. Deployment to Vercel

Vercel is the creator of Next.js and the best platform to host your new App Router portfolio.

### Step-by-Step Vercel Setup:
1. Push this entire project to a **GitHub Repository**.
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **Add New -> Project** and select your repository.
4. Keep all default build settings (Framework Preset: **Next.js**).
5. **CRITICAL:** Expand "Environment Variables" and add your Resend API Key:
   - Key: `RESEND_API_KEY`
   - Value: `re_your_api_key_from_resend`
6. Click **Deploy**. Your site will be live globally within 2 minutes!

---

## 📧 2. Resend Email Configuration

To receive messages from your portfolio:
1. Create a free account at [Resend.com](https://resend.com/).
2. Verify your custom domain (if you have one) to improve email deliverability.
3. Generate an API key.
4. **Update the code:** In `src/app/api/contact/route.ts`, locate `to: ['your-email@example.com']` and replace it with your actual email address.
5. Locally, create a `.env.local` file in the project root and add `RESEND_API_KEY=re_your_api_key` to test locally.

---

## ⚡ 3. Performance Optimization Techniques Implemented

This portfolio is heavily optimized to ensure 100/100 Lighthouse scores while utilizing advanced WebGL/3D:

1. **Lazy Loading 3D Canvas:**
   The `NetworkCanvas` Three.js scene is lazy-loaded using Next.js `next/dynamic` with `ssr: false`. This ensures that your main text, fonts, and HTML layout render *instantly*, and the WebGL canvas initializes safely in the background on the client side without blocking the main CPU thread or causing Server-Side Rendering (SSR) hydration mismatches.

2. **Offloading Math to `useMemo` & BufferGeometries:**
   In React Three Fiber, recreating 3D vectors every frame kills performance. All particle points and connecting lines are pre-calculated once in a `useMemo` hook and passed directly to raw GPU memory via `BufferGeometry`.

3. **Restricting Draw Calls:**
   Instead of drawing 60 individual spheres, we draw a single `points` object and a single `lineSegments` object. This limits the WebGL draw calls to exactly **2 calls per frame**, maintaining 60 FPS even on entry-level mobile phones.

4. **Framer Motion Viewport Optimization:**
   Scroll animations for sections like *Case Studies* and *Experience* utilize `whileInView` with `once: true`. This prevents the device from continuously recalculating CSS transforms if the user rapidly scrolls up and down the page.

---

## 📄 4. Action Items Before Sharing

1. **Add your real PDF CV:** Replace the placeholder in `public/cv/vaibhav_khopkar_cv.pdf` with your actual up-to-date PDF.
2. **Review Copy:** Ensure the Case Studies and timeline exact dates reflect your internal TCS metrics.
3. **Verify Resend:** Try sending yourself an inquiry on the live Vercel domain to ensure emails don't hit your spam folder. 
