---
name: anime-frontend-motion
description: Specialized frontend engineering skill for crafting anime and manga-style visual effects, cut-in action banners, speed/focus lines, sprite sheet animations, Live2D/PixiJS character rigging, and Three.js cel-shaded (Toon) 3D graphics for modern web interfaces.
---

# Anime Frontend Motion & Stylized Graphics Skill

## Overview
**Anime Frontend Motion** equips AI coding agents (Codex, Copilot, Claude, Antigravity) with techniques to design high-impact anime and manga-inspired web experiences. It covers dramatic UI cut-ins (Persona/Genshin style), radial action speed lines, 2D sprite/Live2D mascot interactions, and 3D cel-shading (Toon shaders) without compromising 60fps web performance.

---

## 1. Iconic Anime Visual Effects (Pure CSS & Canvas)

### A. Radial Speed Lines / Focus Burst (Manga Action FX)
Used for dramatic reveals, gacha spins, or critical hits:
- **Canvas Technique**: Draw 40-80 random radial triangular spikes originating from screen edges pointing towards screen center `(cx, cy)`.
- **Performance**: Render onto a transparent `<canvas>` layer and animate triangle opacity/lengths randomly on every 2-3 frames (`requestAnimationFrame`) to achieve classic hand-drawn anime jitter (12-24fps cadence over 60fps display).

### B. Dramatic Character Cut-In (Persona / Gacha Ultimate Style)
When a user triggers a major action (e.g., spinning a rare item, clicking a special button):
1. **Blackout / Dim Backdrop**: Instant 100ms fade to `rgba(10, 10, 18, 0.8)`.
2. **Diagonal Slash Banner**: A full-width angled banner (`transform: skewX(-15deg) translate3d(-100%, 0, 0)`) sliding violently across the screen in `180ms` with `cubic-bezier(0.05, 0.9, 0.1, 1)`.
3. **Character Eye / Pose Close-Up**: The character graphic slides in the opposite direction (`skewX(-15deg) translate3d(50px, 0, 0)`), pauses for 600ms, then violently dissolves with an explosive impact star.
4. **Impact Flash (Koma-wari)**: A single white frame flash (duration `40ms`) upon hit.

### C. Manga Halftone & Cel-Shaded Gradients
- Implement halftone dots via CSS SVG data-URI background patterns:
  ```css
  .manga-halftone {
    background-image: radial-gradient(#222 20%, transparent 20%);
    background-size: 8px 8px;
    opacity: 0.15;
  }
  ```
- **Crisp Stepped Shadows (Cel-Shade Look)**:
  Instead of smooth blur shadows (`box-shadow: 0 10px 20px rgba(0,0,0,0.2)`), use zero-blur hard offset shadows:
  ```css
  .anime-card {
    border: 3px solid #1a1a2e;
    box-shadow: 6px 6px 0px #1a1a2e, 12px 12px 0px rgba(255, 75, 130, 0.4);
  }
  ```

---

## 2. 2D Interactive Mascots & Sprite Animations

### A. Lightweight Canvas 2D Sprite Sheets (Zero External Libs)
For idle, blinking, running, and victory chibi mascots:
- Organize sprite states in a single grid texture (`mascot-sheet.png`).
- Track `frameIndex`, `frameCount`, and `frameTimer` inside a tick loop:
  ```javascript
  function drawSprite(ctx, image, frameX, frameY, frameW, frameH, targetX, targetY, scale) {
    ctx.drawImage(
      image,
      frameX * frameW, frameY * frameH, frameW, frameH,
      targetX, targetY, frameW * scale, frameH * scale
    );
  }
  ```
- Trigger emotional reactions (exclamation bubbles `❗`, sweat drops `💧`, celebration hearts `💖`) based on user clicks or hover coordinates.

### B. Live2D & PixiJS Character Rigging (Web-Ready)
When true vector-mesh skeletal characters with cloth/hair physics are required:
- Use `@pixi/core` combined with `pixi-live2d-display`:
  - Hook character gaze tracking to `window.addEventListener('pointermove', e => model.focus(e.clientX, e.clientY))`.
  - Listen for touch/click hits on predefined hot-zones (Head, Face, Body) to trigger custom voice lines and expressions.
  - Automatically throttle physics calculations when the tab is inactive (`document.hidden`).

---

## 3. 3D Anime Cel-Shading & Toon Shading (Three.js & WebGL)

### A. Three.js Cel-Shading (Toon Material)
Convert standard 3D meshes into anime aesthetics:
```javascript
// Step 1: Create a 3-step tone gradient map
const canvas = document.createElement('canvas');
canvas.width = 4;
canvas.height = 1;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#444455'; ctx.fillRect(0, 0, 1, 1); // Dark shadow
ctx.fillStyle = '#8888aa'; ctx.fillRect(1, 0, 1, 1); // Midtone
ctx.fillStyle = '#ffffff'; ctx.fillRect(2, 0, 2, 1); // Highlight
const gradientMap = new THREE.CanvasTexture(canvas);
gradientMap.magFilter = THREE.NearestFilter;
gradientMap.minFilter = THREE.NearestFilter;

// Step 2: Apply MeshToonMaterial with sharp gradient
const toonMaterial = new THREE.MeshToonMaterial({
  color: 0xffe0bd, // Skin tone
  gradientMap: gradientMap
});
```

### B. Crisp Anime Inverted-Hull Outlines
Generate classic hand-drawn black outlines for 3D meshes:
```javascript
const outlineMaterial = new THREE.MeshBasicMaterial({
  color: 0x111122,
  side: THREE.BackSide // Render only backfaces
});
const outlineMesh = new THREE.Mesh(geometry, outlineMaterial);
outlineMesh.scale.multiplyScalar(1.03); // Slightly dilate
mesh.add(outlineMesh);
```

---

## 4. Anime Sound & Visual Synchronization

- **Impact Sync (Hissatsu Timing)**:
  - Play swoosh audio at $t = 0\text{ms}$.
  - Trigger screen shake (`transform: translate3d(random, random, 0)` for $120\text{ms}$) exactly at the moment of impact ($t = 180\text{ms}$).
  - Spawn 15-30 glowing anime star particles with velocity radial vectors.

---

## 5. Verification Checklist

Before finalizing any anime UI effect:
- [ ] Visual styling uses crisp, stepped borders and comic/cel-shaded shadows rather than generic blurry drop shadows.
- [ ] Speed lines and particle bursts run strictly on `requestAnimationFrame` with zero memory allocation inside the frame loop.
- [ ] Interactive mascots pause animation loops when tab is hidden or element is scrolled off-screen.
- [ ] Animation respects `@media (prefers-reduced-motion: reduce)` by disabling dramatic flashes and camera shakes.