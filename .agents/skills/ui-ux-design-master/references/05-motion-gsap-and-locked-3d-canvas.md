# Playbook 05: Physics Motion, GSAP & Safety-Locked 3D/WebGL

Synthesized from:
- **`emilkowalski/skills`** (Sub-250ms UI transitions, natural easing, transform origins, feel & polish)
- **`DavidHDev/react-bits`** (200+ animated React micro-interactions and tactile UI components)
- **`greensock/gsap-skills`** (Production-safe GSAP timelines, `useGSAP()`, and `ScrollTrigger`)
- **`DavidHDev/canvas-ui`** (🔒 Safety-Locked: Interactive HTML-in-Canvas WebGL shaders)
- **`oso95/scroll-world`** (🔒 Safety-Locked: 3D camera fly-through landing pages)

---

## 1. Tier A: Everyday App & Workspace Motion (Always Active)
*(From `emilkowalski/skills` & `DavidHDev/react-bits`)*

1. **The Timing Budget Rule:**
   - **Button Press / Hover:** `100ms–150ms` (`active:scale-[0.98]` for tactile press feel).
   - **Dropdown / Popover / Tooltip:** `150ms–200ms` with `transform-origin` anchored to the trigger button (never scale from center if triggered from top-right).
   - **Modal / Drawer / Tab Switch:** `200ms–250ms` using ease-out curve `cubic-bezier(0.22, 1, 0.36, 1)`.
   - **Never exceed `300ms`** for frequently used workspace interactions—slow animations make an app feel laggy!
2. **GPU-Safe Properties Only:**
   - Animate **only** `transform` (`translate3d`, `scale`) and `opacity`.
   - Never animate `height`, `width`, `margin`, or `top/left` directly on heavy DOM trees.
3. **Accessibility Guardrail:**
   - Always include `@media (prefers-reduced-motion: reduce)` fallbacks that disable motion for sensitive users.

---

## 2. Tier B: Guided Scroll & Storytelling (`greensock/gsap-skills`)

Use GSAP only when building landing pages, onboarding tours, or scroll-driven storytelling:
1. **Proper Lifecycle Cleanup:**
   - In React, always use `@gsap/react`'s `useGSAP()` hook (or `gsap.context()` cleanup in `useEffect` return) so `ScrollTrigger` instances never leak memory or duplicate on hot-reload.
2. **Register Plugins Explicitly:**
   - Always call `gsap.registerPlugin(ScrollTrigger)` before creating scroll timelines.

---

## 3. 🔒 Tier C: SAFETY-LOCKED 3D & WebGL (`canvas-ui` & `scroll-world`)

> **⚠️ MANDATORY STABILITY LOCK:**
> Both `DavidHDev/canvas-ui` (WebGL HTML shaders) and `oso95/scroll-world` (3D camera scroll) are **high-GPU creative showcase technologies**.
> - **DO NOT** use them in standard chat apps, educational dashboards, forms, or admin panels.
> - **ONLY** unlock them when the user explicitly asks for a **3D Landing Page**, **WebGL Shader Effect**, or **Hero Showcase**.

When explicitly unlocked by the user:
- **`Canvas UI` Pattern:** Keep underlying HTML text selectable and buttons clickable (`pointer-events` passthrough) while rendering WebGL glass/fluid/lighting effects on a synced overlay canvas, and pause the `requestAnimationFrame` loop when the component is off-screen (`IntersectionObserver`).
- **`Scroll World` Pattern:** Drive a Three.js / WebGL camera along a 3D spline path scrubbed by scroll progress, with progressive asset loading and a clean 2D fallback for mobile/low-power devices.
