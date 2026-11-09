# Playbook 01: UX Psychology, Vercel Interface Guidelines & Layout Safety

This playbook enforces the **4 Real-World Usability & Stability Pillars** that keep interfaces intuitive, accessible, and structurally unbreakable.

---

## 1. UX Psychology Laws (Solving the "Confusing UI" Problem)

### A. Hick's Law (Reduce Decision Paralysis)
- **Rule:** Never overwhelm the user with 4–5 equally prominent buttons in the same card or bar.
- **Hierarchy:** Every screen or step must have **at most 1 Primary Action button** (high contrast fill), **1 Secondary Action** (subtle outline/ghost), and overflow actions tucked into a menu (`...`).
- **Progressive Disclosure:** Hide advanced settings or secondary steps until the user actually needs them.

### B. Elimination of Blind Actions (State & Prerequisite Clarity)
- **Problem:** Showing a button labeled `[Hoàn thành]` (*Complete*) when the user doesn't know whether the current step requires writing code or just reading instructions.
- **Solution:**
  1. **Explicit Step Type Badge:** At the top of every step/panel, display a clear pill badge:
     - `[⚡ Bước thực hành: Cần tạo/kiểm tra Code]`
     - `[📖 Bước lý thuyết: Chỉ cần đọc hiểu]`
  2. **State-Specific Action Labels:**
     - Instead of generic `[Hoàn thành]`, label the button by its true outcome:
       - When code hasn't been generated yet: `[⚡ Tạo Code mẫu ngay]` (Primary) + `[Đã hiểu, bỏ qua bước này ->]` (Secondary).
       - When code is generated & verified: `[✅ Hoàn tất Bước 2 & Sang Bước 3 ->]` (Primary).

### C. Fitts's Law & Jakob's Law
- Keep primary action buttons in predictable, easy-to-reach zones (minimum clickable target `36px–44px` height) with `8px–12px` minimum gap between adjacent destructive/confirm buttons.

---

## 2. Vercel Web Interface Guidelines (Interaction Precision)

1. **Keyboard & Focus Ergonomics:**
   - Every modal/drawer must close on `Escape`.
   - Forms and chat inputs must submit on `Enter` (or `Cmd/Ctrl + Enter` for multi-line) and support `Tab` order with visible `:focus-visible` rings.
2. **No Layout Shift (Zero CLS):**
   - Reserve space for loading skeletons, badges, and dynamic status messages so buttons never jump while the user is about to click them.
   - Use `tabular-nums` (`font-variant-numeric: tabular-nums`) for timers, counters, token counts, and progress percentages.
3. **optimistic & Honest Feedback:**
   - Disable or show a spinner inside a clicked button immediately (`<50ms`) to prevent accidental double-clicks.

---

## 3. Anti-Overflow & Multi-Pane Layout Safety (CSS Architecture)

AI-generated chat apps and dashboards frequently break when messages or code blocks grow long. Always enforce these rules:

1. **The Flexbox/Grid Shrink Rule (`min-w-0` & `min-h-0`):**
   - Every flex/grid child that contains scrollable content or long text **MUST** have `min-h-0` (for vertical scroll containers) and `min-w-0` (to prevent code blocks or long URLs from blowing out the horizontal width).
2. **Pinned Action Bars (Sticky Header & Footer):**
   - In any step-by-step wizard, chat panel, or modal:
     - **Top Header (Title + Step Status Badge):** Fixed at top (`shrink-0`).
     - **Middle Content Body:** Scrollable (`flex-1 overflow-y-auto min-h-0`).
     - **Bottom Action Bar (Buttons):** Fixed at bottom (`shrink-0 border-t`), so the user **never** loses sight of the action buttons regardless of content length.

---

## 4. AI & Multi-Agent UI Patterns

When building interfaces that interact with AI models or background tasks:
1. **Transparent Activity Indicator:** Show clearly *what* the AI is doing (`Đang phân tích giao diện...`, `Đang tạo code...`) with an elapsed timer (`3s`).
2. **Mandatory Escape Hatch (`[⏹️ Dừng]`):** Any AI request or background task taking >2 seconds must provide a visible Cancel/Stop button that cleanly aborts the request.
3. **Clear Role Separation:** Visually distinguish User messages, System notifications, and different AI Agent personas using distinct avatars, subtle border accents, and role badges.
