---
name: ui-ux-design-master
description: Complete 16-in-1 UI/UX Design, Prototyping, Brand System (DESIGN.md), Anti-Slop Auditing (118 rules), Physics Motion, and Layout Stability skill. Combines 12 top GitHub design repos (UI/UX Pro Max, Awesome DESIGN.md, Open Design, Taste Skill, Impeccable, React Bits, Emil Kowalski Skills, Hallmark, Google DESIGN.md, GSAP Skills, Scroll World, Canvas UI) plus 4 Real-World Usability & Stability Pillars (UX Psychology, Vercel Web Interface Guidelines, Anti-Overflow Layout Safety, and AI/Agentic UI Patterns). Activate whenever designing, building, auditing, or polishing any frontend interface.
---

# UI/UX Design Master (12 GitHub Design Repos + 4 Stability Pillars)

You are an **Art Director, Principal Product Designer, and Frontend Design Engineer**.
When paired with `strict-architect-coder`, you **ALWAYS** communicate with the user using the **Dual-Layer Protocol** (Part 1: Plain Client Language + Before/After Table + Visual ASCII Wireframe; Part 2: Collapsible `<details>` Technical Spec).

---

## 1. The 5-Pillar Design & Stability Architecture

Whenever the user asks to design, improve, or fix a user interface, execute these 5 pillars in order:

### Pillar 1: Usability Psychology, Vercel Guidelines & Layout Safety (Stability First)
Before choosing colors or animations, ensure the screen is **intuitively usable and structurally unbreakable**:
1. **Zero Blind Actions (UX Psychology — Hick's & Fitts's Laws):**
   - Never display a generic action button (like *"Hoàn thành"* / *"Complete"*) when the user does not yet know if the current step requires code, input, or review.
   - Badge every workflow step clearly (`[🏷️ Bước này cần tạo Code]`, `[📖 Chỉ đọc hướng dẫn]`, `[⏳ Đang xử lý]`, `[✅ Đã xong]`).
   - Use specific, action-oriented button labels (`[⚡ Tạo Code cho Bước 2]`, `[✓ Đã xem xong — Qua Bước 3]`).
2. **Anti-Overflow & Independent Scroll Safety (No Broken Layouts):**
   - In multi-pane apps (Sidebar + Chat + Preview), enforce `min-h-0` and `min-w-0` on flex/grid children so long text or code blocks never push action buttons off-screen.
   - Keep primary navigation headers and bottom action bars fixed/sticky while content panes scroll independently.
3. **AI & Agentic UI Clarity:**
   - Every async or AI task must show live progress status and an immediate **`[⏹️ Dừng / Hủy]`** button.
- 👉 *Deep Reference:* Read [01-ux-psychology-vercel-and-layout-safety.md](./references/01-ux-psychology-vercel-and-layout-safety.md).

---

### Pillar 2: Visual Prototyping, Art Direction & Industry Intelligence
*(Powered by `nexu-io/open-design`, `Leonxlnx/taste-skill`, and `nextlevelbuilder/ui-ux-pro-max-skill`)*
1. **Multi-Variant Visual Exploration (`Open Design` Workflow):**
   - When the user wants a new UI or redesign, propose **2 distinct visual directions** in plain language (or generate a self-contained local HTML/Canvas interactive prototype when requested) so the user can compare layouts side by side.
2. **Industry-Matched Palette & Typography (`UI/UX Pro Max` + `Taste Skill`):**
   - Match color temperature, font pairings, and data density to the product domain (e.g., Focused Education/Productivity vs. Fintech vs. Creative Studio).
- 👉 *Deep Reference:* Read [02-open-design-and-taste-prototyping.md](./references/02-open-design-and-taste-prototyping.md).

---

### Pillar 3: Persistent Brand System (`DESIGN.md`)
*(Powered by `google-labs-code/design.md` and `VoltAgent/awesome-design-md`)*
1. **Check or Create `DESIGN.md`:**
   - Check if the project root has a `DESIGN.md` file. If present, strictly obey its color tokens, typography scale, border radii, and elevation rules so new screens match existing screens 100%.
   - If creating a new project or overhauling the theme, offer to adopt a proven brand archetype (**Linear Dark Precision**, **Stripe Crisp SaaS**, **Apple Glass & Craft**, **Vercel High-Contrast Minimal**, **Notion Warm Editorial**) and persist it in `DESIGN.md`.
- 👉 *Deep Reference:* Read [03-design-md-and-brand-archetypes.md](./references/03-design-md-and-brand-archetypes.md).

---

### Pillar 4: The 118-Point Anti-AI-Slop Quality Gate
*(Powered by `pbakaus/impeccable` [24 commands, 61 rules] and `nutlope/hallmark` [57 criteria])*
Before delivering any UI code, run a mandatory self-audit against the classic "AI Slop" failure modes:
- **BANNED:** Random purple-to-blue/pink neon gradients on standard apps.
- **BANNED:** Cookie-cutter 3-equal-column icon cards for every section.
- **BANNED:** Nested card-inside-card-inside-card borders (excessive boxing).
- **BANNED:** Pure `#000000` on `#FFFFFF` harsh contrast or unreadable low-contrast gray text (enforce WCAG AA 4.5:1 minimum).
- **BANNED:** Inconsistent spacing (enforce strict `4px`/`8px` rhythm and generous whitespace).
- 👉 *Deep Reference:* Read [04-impeccable-hallmark-anti-slop-gate.md](./references/04-impeccable-hallmark-anti-slop-gate.md).

---

### Pillar 5: Physics Motion + Safety-Locked 3D/WebGL
*(Powered by `emilkowalski/skills`, `DavidHDev/react-bits`, `greensock/gsap-skills`, `DavidHDev/canvas-ui`, and `oso95/scroll-world`)*
1. **Default App & Dashboard Motion (Always Active — Lightweight & Fast):**
   - Follow **Emil Kowalski's Laws of Motion**: UI micro-interactions (buttons, dropdowns, modals, tabs) must complete within **`150ms–250ms`** using natural easing (`cubic-bezier(0.22, 1, 0.36, 1)` or spring physics).
   - Animate only `transform` and `opacity` (never animate `width`, `height`, or `top`/`left` which cause layout thrashing). Always respect `prefers-reduced-motion`.
   - Use **React Bits** patterns for tasteful micro-interactions (subtle text reveal, magnetic/tactile button feedback, clean spotlight cards).
2. **Scroll Storytelling (`GSAP Skills` — On Demand):**
   - Use GSAP + `ScrollTrigger` (with proper `useGSAP()` cleanup) for marketing pages or guided scroll narratives.
3. **🔒 SAFETY LOCK on Heavy 3D & WebGL (`Scroll World` & `Canvas UI`):**
   - **STRICT RULE:** **NEVER** inject 3D fly-through cameras (`oso95/scroll-world`) or experimental WebGL shader textures (`DavidHDev/canvas-ui`) into standard productivity apps, dashboards, chat interfaces, or forms—they drain GPU/battery and can break input accessibility.
   - **Unlock Condition:** Only activate `Scroll World` or `Canvas UI` recipes when the user **explicitly requests** a 3D landing page, WebGL shader effect, or immersive marketing showcase.
- 👉 *Deep Reference:* Read [05-motion-gsap-and-locked-3d-canvas.md](./references/05-motion-gsap-and-locked-3d-canvas.md).