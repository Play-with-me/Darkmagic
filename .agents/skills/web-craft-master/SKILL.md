---
name: web-craft-master
description: All-in-one web engineering, strict plan-before-code protocol, 60fps physics motion, GSAP timelines, zero-dependency CSS 3D transforms, Canvas particle physics, and Three.js WebGL. Use when designing, planning, building, animating, or adding 3D effects to web projects.
---

# Web Craft Master (Plan, Performance, Physics Motion & 3D)

## Overview

**Web Craft Master** is a unified, production-grade skill designed for AI coding agents (Codex, Copilot, Claude, Antigravity). It enforces a strict **Plan-Before-Code** engineering workflow, guarantees rock-solid web architecture, and crafts high-end **60fps physics animations** and **immersive 3D effects** without degrading performance or breaking existing code.

---

## 1. Plan-Before-Code Protocol (Bắt Buộc Lập Kế Hoạch)

Never write code or modify files immediately upon receiving a prompt. Always follow this 3-step lifecycle:

### Step 1: Read-Only Scan & Architecture Audit
- Inspect the codebase to understand the existing stack (Vanilla Web vs. React/Next.js).
- Never introduce foreign frameworks or bundlers (e.g., adding React/Tailwind into a pure HTML/JS project).
- Check data schemas, file dependencies, and critical DOM IDs.

### Step 2: Implementation Blueprint
Present a clear, structured plan with:
1. **Target Objective**: Precise summary of the feature or bug fix.
2. **File Whitelist**: Exact list of files to be modified or created.
3. **Risk & Regression Assessment**: Impact on 60fps performance, mobile touch gestures, audio autoplay policy, or offline cache (PWA `sw.js`).
4. **Vertical Slices (Atomic Tasks)**: Break down implementation into self-contained, testable steps (Data -> Logic -> UI -> Verification).

### Step 3: Approval Gate
- Conclude the plan by asking: *"Kế hoạch đã sẵn sàng, bạn có đồng ý để tôi tiến hành sửa code theo các bước trên không?"*
- **Only** touch code after explicit user confirmation.

---

## 2. 60fps Physics Motion & Animation Engine

### The GPU Acceleration Rule
- **Allowed for Animation**: ONLY GPU-composited properties: `transform` (`translate3d`, `scale`, `rotate`) and `opacity`.
- **Strictly Banned for Animation**: Animating layout/reflow triggers such as `width`, `height`, `margin`, `padding`, `top`, `left`, `bottom`, `right`.

### Timing & Natural Easing Curves
- **Micro-interactions (Button click, toggle, hover)**: `100ms - 150ms`.
- **Dropdowns, popovers, tooltips**: `150ms - 200ms`.
- **Modals, full drawer reveals, tab switching**: `200ms - 250ms`.
- **Natural Physics Curve**: Use `cubic-bezier(0.22, 1, 0.36, 1)` or spring physics. Never use flat linear transitions for UI elements.
- **Never exceed 300ms** for frequently accessed UI interactions.

### GSAP (GreenSock) Best Practices
- **Explicit Plugin Registration**: Always call `gsap.registerPlugin(ScrollTrigger)` before building scroll timelines.
- **Lifecycle Cleanup**: In frameworks, always clean up timelines (`ctx.revert()` or `useGSAP()`) to prevent ghost listeners and memory leaks.
- **Smooth Scrubbing**: Use `scrub: 1` or `scrub: 1.5` on ScrollTrigger for smooth inertial follow.

---

## 3. High-End 3D Visuals & Spatial Effects

### Mode A: Lightweight Zero-Dependency CSS 3D (Vanilla-Friendly)
For web projects without heavy WebGL engines, achieve realistic 3D depth using pure CSS:
- **Perspective Container**: Always apply `perspective: 1000px;` (or `800px` for stronger depth) on the parent wrapper.
- **3D Card / Element**:
  ```css
  .card-3d-wrapper {
    perspective: 1000px;
  }
  .card-3d-inner {
    transform-style: preserve-3d;
    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    backface-visibility: hidden;
  }
  ```
- **Interactive Mouse Tilt**: Calculate cursor offset from center (`dx = (x - centerX) / (width / 2)`) and map to `rotateY(dx * 15deg) rotateX(-dy * 15deg) translate3d(0, 0, 20px)`.
- **Specular Glare**: Overlay a radial gradient with `mix-blend-mode: overlay` moving dynamically with cursor coordinates.

### Mode B: Canvas 2D/3D Particle Physics
- Use Canvas for celebratory confetti, sparks, and fireworks:
  - Run exclusively via `requestAnimationFrame`.
  - Recycle dead particle objects to avoid garbage collection stutter.
  - Scale canvas buffer to `devicePixelRatio` to maintain razor-sharp graphics on Retina/High-DPI screens.

### Mode C: Three.js & WebGL (Full Spatial 3D)
When true 3D models (GLTF/GLB) or 3D camera fly-throughs are required:
- **Optimization**:
  - Limit shadow maps and use Directional Light + Ambient Light for consistent 60fps.
  - Wrap the render loop with an `IntersectionObserver`: pause `requestAnimationFrame` whenever the 3D canvas scrolls out of viewport.
- **Resource Disposal (Anti-Memory Leak)**:
  - On cleanup/unmount, recursively traverse scene objects and invoke `.dispose()` on geometries, materials, and textures.

---

## 4. Mobile Ergonomics & Accessibility (A11y)

1. **Touch-First Handling**:
   - Provide touch feedback immediately (`active:scale-[0.98]` or `pointerdown` response).
   - Ensure touch tap targets are at least `44x44px`.
2. **Safe Area & Notch Support**:
   - Include `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">`.
   - Apply `padding-top: env(safe-area-inset-top)` and `padding-bottom: env(safe-area-inset-bottom)` for iPhone Dynamic Island and bottom navigation bars.
3. **Motion Sensitivity**:
   - Always honor user preferences:
     ```css
     @media (prefers-reduced-motion: reduce) {
       *, ::before, ::after {
         animation-duration: 0.01ms !important;
         transition-duration: 0.01ms !important;
       }
     }
     ```

---

## 5. Verification Checklist

Before reporting a task as complete, verify:
- [ ] No regression: existing functionality, DOM IDs, and data schemas remain intact.
- [ ] Animation maintains a consistent 60fps on mobile without dropped frames.
- [ ] No layout reflows during animation (verified via DevTools Performance panel).
- [ ] Touch gestures and mouse events function correctly across all viewports.
- [ ] In PWA projects, `sw.js` cache version has been incremented to bust stale client caches.