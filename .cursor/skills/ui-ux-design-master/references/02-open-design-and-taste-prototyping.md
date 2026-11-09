# Playbook 02: Open Design Prototyping, Taste Direction & UI/UX Pro Max

Synthesized from:
- **`nexu-io/open-design`** (Local-first multi-variant prototyping, web & slide canvas)
- **`Leonxlnx/taste-skill`** (Intentional art direction, visual hierarchy, real browser verification)
- **`nextlevelbuilder/ui-ux-pro-max-skill`** (Searchable intelligence for UI styles, palettes, font pairings, and charts)

---

## 1. The `Open Design` Multi-Variant Prototyping Workflow

When a user asks to design a new screen or says *"Tôi muốn tối ưu lại giao diện nhưng chưa biết bố cục nào hợp"*:

1. **Offer Side-by-Side Concept Exploration:**
   - Instead of forcing a single opinionated rewrite, present **2 distinct layout concepts** in Part 1 of your plan (using clear ASCII wireframes or a standalone local HTML preview file if the user wants to click around first):
     - **Option A (Focused Workspace / Split-View):** Keeps instructions on the left and interactive workspace/code on the right.
     - **Option B (Guided Step-by-Step Card Flow):** Focuses the user on one step at a time with a top progress bar.
2. **Slide & Presentation Mode (`Open Design` Slide Canvas):**
   - When the user wants visual project pitches, onboarding walkthroughs, or educational slides, structure them as clean 16:9 interactive cards with keyboard arrow navigation.

---

## 2. `Taste Skill` Rules for Intentional Art Direction

Eliminate mediocre "template" feel by enforcing strict visual rhythm:

1. **Typographic Hierarchy (3 Levels Max per View):**
   - **Display / Page Title:** `20px–28px`, `font-weight: 600–700`, tight tracking (`-0.02em`), high contrast text.
   - **Section / Card Header:** `15px–17px`, `font-weight: 600`, balanced line-height (`1.4`).
   - **Body / Instructions:** `14px–15px`, `font-weight: 400`, comfortable reading width (`60ch–72ch` max), muted secondary contrast so it doesn't compete with headings.
   - **Metadata / Badges / Captions:** `12px`, `font-weight: 500`, subtle tracking (`+0.01em`).
2. **Surface Depth Without Heavy Borders:**
   - Avoid putting thick `1px solid` high-contrast borders around every single element.
   - Use subtle background luminance steps (e.g., Canvas `#0B0D11` -> Card `#12151C` -> Elevated Control `#1A1E28` with a whisper-quiet `1px solid rgba(255,255,255,0.07)` border).

---

## 3. `UI/UX Pro Max` Domain-Specific Design Matrix

Match the aesthetic direction to the product's actual domain:

| Product Domain | Recommended Visual Style | Palette Strategy | Font Pairing Archetype |
| :--- | :--- | :--- | :--- |
| **AI Coding / Developer Tool / Multi-Agent Chat** | Precision Dark or High-Contrast Daylight (Linear / Cursor / Raycast style) | Deep slate/zinc neutrals + 1 crisp semantic accent (Emerald for success, Amber for warning, Indigo/Cyan for active agent) | Geometric Sans (`Inter` / `Geist` / `Plus Jakarta Sans`) + Crisp Monospace (`JetBrains Mono` / `Geist Mono`) |
| **Education / Language Learning App** | Warm Encouraging Clarity (Duolingo / Notion / Brilliant style) | Soft warm ivory or calm dark slate + clear semantic progress colors (Green = Mastered, Blue = In Progress, Orange = Needs Practice) | Friendly Humanist Sans (`Plus Jakarta Sans` / `Nunito` / `Inter`) with generous line spacing (`1.6`) |
| **SaaS Analytics / Business Dashboard** | Swiss Grid Cleanliness (Stripe / Vercel style) | Crisp monochrome surfaces + color reserved strictly for data charts and status badges | Clean Grotesque Sans + Tabular Monospace numbers |
| **Creative / Portfolio / Product Launch** | Editorial & Expressive (Apple / Framer style) | High-contrast monochrome with atmospheric lighting and subtle glassmorphism | Expressive Display Serif or Bold Geometric Sans |
